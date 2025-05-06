const WaitlistClient = require('../../grpc/waitlist/client');
const { success, error } = require('../../utils/ResponseWrapper');
const { logger } = require('../../utils/logger');
const { stringToBase64, getRandomString } = require('../../utils/helpers');
const { setTokenInCookie } = require('../../service/TokenService');

// 60 mins configured on BE, keeping buffer for 10 mins
const CookieExpireTime = 50 * 60 * 1000;

const fetchConsent = async (_, res, next) => {
    try {
        const response = await WaitlistClient.fetchConsent();

        const data = {
            consentUrl: response.consent_url,
        };

        success(res, data);
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to fetch the consent url',
            ctrl: 'waitlist',
            fn: 'fetchConsent',
        });
    }
};

/**
 * encrypting data with base64 format & by adding 2 random strings
 * at both ends(left/right) at 5th location so that the attacker could
 * not easily decrypt the data as we have built-in functions atob, btoa
 * to decrypt these kind of data in JS
 */
const getEncryptedData = (data) => {
    const encryptedData = stringToBase64(JSON.stringify(data));

    const encryptedDataLength = encryptedData.length;
    const leftRandomString = getRandomString(3);
    const rightRandomString = getRandomString(3);

    // eslint-disable-next-line max-len
    const modifiedEncryptedData = `${encryptedData.slice(0, 4)}${leftRandomString}${encryptedData.slice(4, encryptedDataLength - 4)}${rightRandomString}${encryptedData.slice(encryptedDataLength - 4)}`;

    return modifiedEncryptedData;
};

const getFormattedWaitlistResult = (data) => {
    if (!data) return null;

    const errorClubScreens = ['ACCESS_STATUS_UNSPECIFIED'];
    const waitlistClubScreens = ['ACCESS_STATUS_WAITLIST'];
    const accessClubScreens = [
        'ACCESS_STATUS_EARLY_ACCESS',
        'ACCESS_STATUS_ONBOARDING_STARTED',
        'ACCESS_STATUS_ONBOARDED_WITH_DIFFERENT_PHONE_NUM',
        'ACCESS_STATUS_IOS_EARLY_ACCESS',
    ];

    /**
     *  data = {
     *      accepted,
     *      rank,
     *      access_status,
     *      cbo,
     *  }
     */
    const { access_status, cbo: isCBOFlow } = data;

    let screen = 0;

    if (errorClubScreens.includes(access_status)) {
        screen = 100;
    } else if (waitlistClubScreens.includes(access_status)) {
        screen = 200;
    } else if (accessClubScreens.includes(access_status)) {
        screen = 300;
    }

    return {
        screen,
        isCBOFlow,
    };
};

const getFormattedName = (data) => {
    const name = {
        firstName: '',
        middleName: '',
        lastName: '',
        honorific: '',
    };

    if (data) {
        const {
            first_name, middle_name, last_name, honorific,
        } = data;
        name.firstName = first_name;
        name.middleName = middle_name;
        name.lastName = last_name;
        name.honorific = honorific;
    }

    return name;
};

const checkReferralCode = async (req, res, next) => {
    try {
        const { prospect_id, session_id } = req.cookies;
        const { referralCode, flowName, deviceInfo } = req.body;

        // de-activate the CBO flow
        let flowNamePayload = 'FLOW_NAME_WAITLIST';

        if (flowName === 'WAITLIST_FLOW' || flowName === 'FINITE_CODE_FLOW') {
            flowNamePayload = 'FLOW_NAME_WAITLIST';
        }
        /*
        else if (flowName === 'CBO_FLOW') {
            flowNamePayload = 'FLOW_NAME_CBO';
        }
        */

        const requestPayload = {
            referral_code: referralCode,
            prospect_id,
            session_id,
            flow_name: flowNamePayload,
            device_info: deviceInfo,
        };

        const response = await WaitlistClient.checkReferralCode(requestPayload);

        const payload = {
            valid: response.valid,
            token: response.token,
            accessToken: response.access_token,
            name: response.name,
            employmentCheckRequired: response.employment_check,
            waitlistResult: getFormattedWaitlistResult(
                response.waitlist_result,
            ),
        };

        success(res, payload);
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to check the referral code',
            ctrl: 'waitlist',
            fn: 'checkReferralCode',
        });
    }
};

const generateOTP = async (req, res, next) => {
    // TODO: need to remove this code
    const blockedPhoneNumbers = [];
    const blockedPhoneNumberErr = 'blocked phone number';

    try {
        const {
            countryCode,
            phoneNumber,
            referralToken,
            token,
            sendEpifiOtp,
            whatsappPreference,
            firstName = '',
            middleName = '',
            lastName = '',
            honorific = '',
        } = req.body;
        const { session_id } = req.cookies;

        // TODO: need to remove this code
        if (blockedPhoneNumbers.includes(phoneNumber)) {
            throw new Error(blockedPhoneNumberErr);
        }

        if (!!phoneNumber && !!countryCode) {
            const requestPayload = {
                name: {
                    first_name: firstName,
                    middle_name: middleName,
                    last_name: lastName,
                    honorific,
                },
                phone_number: {
                    country_code: countryCode,
                    national_number: phoneNumber,
                },
                referral_token: referralToken,
                session_id,
            };

            if (token) {
                requestPayload.token = token;
            }

            if (sendEpifiOtp) {
                requestPayload.send_epifi_otp = sendEpifiOtp;
            }

            if (whatsappPreference) {
                requestPayload.whatsapp_preference = 'ON';
            } else {
                requestPayload.whatsapp_preference = 'OFF';
            }

            const response = await WaitlistClient.generateOTP(requestPayload);

            const data = {
                otpSource: response.otp_source,
                token: response.token,
                retryTimerSeconds: response.retry_timer_seconds,
                prospectId: response.prospect_id,
                isCBOUser: response.cbo,
            };

            success(res, data);
        } else {
            error(res, null, 401, 'invalid countryCode or phoneNumber');
        }
    } catch (err) {
        let description = err.message;
        const extraParams = {};

        if (err.code === 6) {
            description = 'You are already registered user. Please login.';
            extraParams.alreadyRegister = true;
        }

        if (err.code === 100 || err.code === 101 || err.code === 102) {
            extraParams.resetOtpToken = true;
        }

        // TODO: need to remove this code
        if (err.message === blockedPhoneNumberErr) {
            description = 'This number is currently blocked. Please try after sometime.';
            extraParams.isBlocked = true;
        }

        extraParams.isCBOUser = err.extraParams && err.extraParams.cbo;

        next({
            description,
            message: 'Failed to generate the otp',
            ctrl: 'waitlist',
            fn: 'generateOTP',
            extraParams,
        });
    }
};

const getFiniteCode = async (accessToken) => {
    let finiteCode = '';

    try {
        const requestPayload = {
            access_token: accessToken,
        };

        const response = await WaitlistClient.getFiniteCode(requestPayload);

        finiteCode = response.finite_code;
    } catch (err) {
        let description = err;

        if (err instanceof Error) {
            description = err.message;
        }

        logger.log('error', 'error in waitlist controller', {
            method: 'getFiniteCode',
            error: description,
        });
    }

    return finiteCode;
};

const verifyOTP = async (req, res, next) => {
    try {
        const {
            otp,
            token,
            isEmailCheckRequired,
            isLoginFlow,
            deviceInfo,
        } = req.body;
        const { session_id } = req.cookies;

        if (!!otp && !!token && otp.length === 6) {
            const requestPayload = {
                otp,
                token,
                session_id,
            };

            if (isLoginFlow) {
                requestPayload.device_info = deviceInfo;
            }

            const response = await WaitlistClient.verifyOTP(requestPayload);

            const { access_token } = response;

            /**
             * set access_token in cookie
             * added Lax here as we want this cookie to be there
             * when user gets redirected back to origin site from google oauth for insights flow
             */
            setTokenInCookie(
                res,
                'access_token',
                access_token,
                CookieExpireTime,
                'Lax',
            );

            const data = {
                accessToken: access_token,
                waitlistResult: getFormattedWaitlistResult(
                    response.waitlist_result,
                ),
            };

            // get finite code for all flows
            data.fc = await getFiniteCode(access_token);

            /**
             * get user name in case of login flow
             */
            if (isLoginFlow) {
                try {
                    const userNameRequestPayload = {
                        access_token,
                    };

                    const userNameResponse = await WaitlistClient.getUserName(userNameRequestPayload);

                    data.name = getFormattedName(userNameResponse.name);
                } catch (err) {
                    let description = err;
                    if (err instanceof Error) {
                        description = err.message;
                    }

                    logger.log('error', 'error in waitlist controller', {
                        method: 'verifyOTP => getUserName',
                        error: description,
                    });

                    // No Name Success
                    data.name = getFormattedName(null);
                }
            }

            if (isEmailCheckRequired) {
                try {
                    const emailAddressRequestPayload = {
                        access_token: data.accessToken,
                        session_id,
                    };

                    const emailAddressResponse = await WaitlistClient.getEmailAddress(emailAddressRequestPayload);

                    data.workEmail = emailAddressResponse.email_id;
                } catch (err) {
                    let description = err;
                    if (err instanceof Error) {
                        description = err.message;
                    }

                    logger.log('error', 'error in waitlist controller', {
                        method: 'verifyOTP => getEmailAddress',
                        error: description,
                    });

                    // No Email Success
                    data.workEmail = null;
                }
            }

            const encryptedData = getEncryptedData(data);

            res.send({ data: encryptedData });
        } else {
            const description = 'Something went wrong. Retry';

            next({
                description,
                message: 'Failed to verify the otp',
                ctrl: 'waitlist',
                fn: 'verifyOTP',
            });
        }
    } catch (err) {
        // eslint-disable-next-line no-unused-vars
        const internalServerErrorCodes = [3, 5, 13, 14, 100, 101];
        const incorrectOTPCodes = [102, 103];
        const expiredOTPCodes = [104, 105];

        let description = err.message;

        if (incorrectOTPCodes.includes(err.code)) {
            description = 'Invalid OTP. Resend';
        } else if (expiredOTPCodes.includes(err.code)) {
            description = 'Invalid OTP. Retry after sometime';
        } else {
            description = 'Something went wrong. Retry';
        }

        const extraParams = {};

        if (
            err.code === 100
            || err.code === 101
            || err.code === 104
            || err.code === 105
        ) {
            extraParams.resetOtpToken = true;
        }

        next({
            description,
            message: 'Failed to verify the otp',
            ctrl: 'waitlist',
            fn: 'verifyOTP',
            extraParams,
        });
    }
};

const verifyEmployer = async (req, res, next) => {
    try {
        const { companyName, workEmail } = req.body;
        const { session_id, access_token } = req.cookies;

        if (!!access_token && !!companyName && !!workEmail) {
            const requestPayload = {
                access_token,
                employer_name: companyName,
                work_email: workEmail,
                session_id,
            };

            const response = await WaitlistClient.verifyEmployer(requestPayload);

            const data = {
                waitlistResult: getFormattedWaitlistResult(
                    response.waitlist_result,
                ),
            };

            // get finite code
            data.fc = await getFiniteCode(access_token);

            const encryptedData = getEncryptedData(data);

            res.send({ data: encryptedData });
        } else {
            error(
                res,
                null,
                401,
                'invalid accessToken or employerName or workEmail',
            );
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to verify employer',
            ctrl: 'waitlist',
            fn: 'verifyEmployer',
        });
    }
};

const searchCompany = async (req, res, next) => {
    try {
        const { companyName = '' } = req.query;
        const { prospect_id, session_id } = req.cookies;

        const requestPayload = {
            company_name: companyName,
            prospect_id,
            session_id,
        };

        const response = await WaitlistClient.searchCompany(requestPayload);

        const data = {
            companyNames: response.company_names,
        };

        success(res, data);
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to search company',
            ctrl: 'waitlist',
            fn: 'searchCompany',
        });
    }
};

const getUserAllGoldenTicket = async (req, res, next) => {
    try {
        const { accessToken } = req.query;
        const { session_id } = req.cookies;

        if (accessToken) {
            const requestPayload = {
                access_token: accessToken,
                session_id,
            };

            const response = await WaitlistClient.getUserAllGoldenTicket(
                requestPayload,
            );

            const shareableCode = [];
            const redeemedCode = [];

            response.golden_tickets.forEach((ticket) => {
                const commonApiResponse = {
                    goldenTicketCode: ticket.golden_ticket_code,
                };

                if (ticket.status === 'GOLDEN_TICKET_STATUS_UNSPECIFIED') {
                    const apiData = {
                        ...commonApiResponse,
                        refereeInfo: {
                            email: ticket.referee_email,
                            name: ticket.referee_name,
                            phone: ticket.referee_phone_number,
                        },
                    };
                    shareableCode.push(apiData);
                } else {
                    const apiData = {
                        ...commonApiResponse,
                        refereeInfo: {
                            email: ticket.referee_email,
                            name: {
                                firstName: ticket.referee_name.first_name,
                                middleName: ticket.referee_name.middle_name,
                                lastName: ticket.referee_name.last_name,
                                honorific: ticket.referee_name.honorific,
                            },
                            phone: {
                                countryCode:
                                    ticket.referee_phone_number.country_code,
                                phoneNumber:
                                    ticket.referee_phone_number.national_number,
                            },
                        },
                    };
                    redeemedCode.push(apiData);
                }
            });

            const data = {
                shareableCode,
                redeemedCode,
            };

            success(res, data);
        } else {
            error(res, null, 401, 'Invalid access token');
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to fetch golden tickets',
            ctrl: 'waitlist',
            fn: 'getUserAllGoldenTicket',
        });
    }
};

const generateLoginOtp = async (req, res, next) => {
    // TODO: need to remove this code
    const blockedPhoneNumbers = [];
    const blockedPhoneNumberErr = 'blocked phone number';

    try {
        const { countryCode, phoneNumber, token } = req.body;
        const { session_id } = req.cookies;

        // TODO: need to remove this code
        if (blockedPhoneNumbers.includes(phoneNumber)) {
            throw new Error(blockedPhoneNumberErr);
        }

        if (!!phoneNumber && !!countryCode) {
            const requestPayload = {
                phone_number: {
                    country_code: countryCode,
                    national_number: phoneNumber,
                },
                session_id,
            };

            if (token) {
                requestPayload.token = token;
            }

            const response = await WaitlistClient.generateLoginOtp(requestPayload);

            const data = {
                token: response.token,
                retryTimerSeconds: response.retry_timer_seconds,
            };

            success(res, data);
        } else {
            error(res, null, 401, 'Invalid Country Code or PhoneNumber');
        }
    } catch (err) {
        const extraParams = {};
        if (err.code === 100 || err.code === 101 || err.code === 102) {
            extraParams.resetOtpToken = true;
        } else if (err.code === 7) {
            extraParams.unregisterUser = true;
        }

        // TODO: need to remove this code
        if (err.message === blockedPhoneNumberErr) {
            // description = 'This number is currently blocked. Please try after sometime.';
            extraParams.isBlocked = true;
        }

        next({
            description: err.message,
            message: 'Failed to generate login otp',
            ctrl: 'waitlist',
            fn: 'generateLoginOtp',
            extraParams,
        });
    }
};

const updateEmailAddress = async (req, res, next) => {
    try {
        const { email, userId } = req.body;
        const { session_id, access_token } = req.cookies;

        if (email) {
            const requestPayload = {
                email_id: email,
                session_id,
            };

            if (userId) {
                requestPayload.user_id = userId;
            } else if (access_token) {
                requestPayload.access_token = access_token;
            }

            const response = await WaitlistClient.updateEmailAddress(requestPayload);

            const data = response.status.short_message;

            success(res, data);
        } else {
            error(res, null, 401, 'invalid accessToken or email');
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to update email address',
            ctrl: 'waitlist',
            fn: 'updateEmailAddress',
        });
    }
};

const getEmailAddress = async (req, res, next) => {
    try {
        const { session_id, access_token } = req.cookies;

        if (access_token) {
            const requestPayload = {
                access_token,
                session_id,
            };

            const response = await WaitlistClient.getEmailAddress(requestPayload);

            const data = {
                emailId: response.email_id,
            };

            success(res, data);
        } else {
            error(res, null, 401, 'invalid accessToken');
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to get email address',
            ctrl: 'waitlist',
            fn: 'getEmailAddress',
        });
    }
};

const storeFreelancerDetails = async (req, res, next) => {
    try {
        const { profession, workEmail, websiteUrl } = req.body;
        const { session_id, access_token } = req.cookies;

        if (!!access_token && !!profession && !!workEmail && !!websiteUrl) {
            const requestPayload = {
                access_token,
                linkedin_url: websiteUrl,
                work_email: workEmail,
                profession,
                session_id,
            };

            const response = await WaitlistClient.storeFreelancerDetails(
                requestPayload,
            );

            const data = {
                waitlistResult: getFormattedWaitlistResult(
                    response.waitlist_result,
                ),
            };

            // get finite code
            data.fc = await getFiniteCode(access_token);

            const encryptedData = getEncryptedData(data);

            res.send({ data: encryptedData });
        } else {
            error(
                res,
                null,
                400,
                'invalid accessToken or profession or workEmail or websiteUrl',
            );
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to store freelancer details',
            ctrl: 'waitlist',
            fn: 'storeFreelancerDetails',
        });
    }
};

const addCBODetails = async (req, res, next) => {
    try {
        const {
            accessToken,
            referralToken,
            firstAnswer,
            secondAnswer,
        } = req.body;
        const { session_id } = req.cookies;

        // required either referralToken or accessToken
        if (
            !!(accessToken || referralToken)
            && !!firstAnswer
            && !!secondAnswer
        ) {
            const requestPayload = {
                access_token: accessToken,
                referral_token: referralToken,
                relationship_money: firstAnswer,
                salary_answer: secondAnswer,
                session_id,
            };

            const response = await WaitlistClient.addCBODetails(requestPayload);

            const data = {
                waitlistResult: getFormattedWaitlistResult(
                    response.waitlist_result,
                ) || { isCBOFlow: true },
            };

            success(res, data);
        } else {
            error(res, null, 400, 'invalid client data - addCBODetails');
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to add CBO details',
            ctrl: 'waitlist',
            fn: 'addCBODetails',
        });
    }
};

const getCBOReferralCode = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;

        if (access_token) {
            const requestPayload = {
                access_token,
            };

            const response = await WaitlistClient.getCBOReferralCode(requestPayload);

            success(res, { referralCode: response.share_code });
        } else {
            error(res, null, 400, 'invalid client data - getCBOReferralCode');
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to get the CBO referral code',
            ctrl: 'waitlist',
            fn: 'getCBOReferralCode',
        });
    }
};

const verifyCBOReferralCode = async (req, res, next) => {
    try {
        const { referralCode } = req.body;
        const { prospect_id } = req.cookies;

        if (prospect_id && referralCode) {
            const requestPayload = {
                prospect_id,
                share_code: referralCode,
            };

            await WaitlistClient.verifyCBOReferralCode(requestPayload);

            success(res, { success: true });
        } else {
            error(
                res,
                null,
                400,
                'invalid client data - verifyCBOReferralCode',
            );
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to verify the CBO referral code',
            ctrl: 'waitlist',
            fn: 'verifyCBOReferralCode',
        });
    }
};

const getUserName = async (req, res, next) => {
    try {
        const { userId } = req.query;
        const { access_token } = req.cookies;

        if (!!userId || !!access_token) {
            const requestPayload = {};

            if (userId) {
                requestPayload.user_id = userId;
            } else {
                requestPayload.access_token = access_token;
            }

            const response = await WaitlistClient.getUserName(requestPayload);

            const data = {
                name: getFormattedName(response.name),
            };

            success(res, data);
        } else {
            error(res, null, 401, 'invalid requestId');
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to get user name',
            ctrl: 'waitlist',
            fn: 'getUserName',
        });
    }
};

const addDeviceOS = async (req, res, next) => {
    try {
        const { userId, deviceOS } = req.body;
        const { access_token } = req.cookies;
        const requestPayload = {};

        if (access_token || userId) {
            if (deviceOS) {
                if (access_token) {
                    requestPayload.access_token = access_token;
                }

                if (userId) {
                    requestPayload.user_id = userId;
                }

                if (deviceOS === 'ios') {
                    requestPayload.device_os = 'DEVICE_OS_IOS';
                } else if (deviceOS === 'android') {
                    requestPayload.device_os = 'DEVICE_OS_ANDROID';
                }

                const response = await WaitlistClient.addDeviceOS(requestPayload);
                const data = response.status.short_message;

                success(res, data);
            } else {
                error(
                    res,
                    null,
                    401,
                    'missing mandatory value deviceOS',
                );
            }
        } else {
            error(
                res,
                null,
                401,
                'invalid accessToken or userId',
            );
        }
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to add device OS',
            ctrl: 'waitlist',
            fn: 'addDeviceOS',
        });
    }
};

const getWaitlistAccessStatus = async (req, res) => {
    const errorPayload = {
        accessToken: null,
        accessStatus: null,
    };

    try {
        const { access_token } = req.cookies;

        if (access_token) {
            const requestPayload = {
                access_token,
            };

            const response = await WaitlistClient.getWaitlistedStatus(requestPayload);

            const { access_status, cbo } = response;

            if (access_status) {
                const payload = {
                    accessToken: access_token,
                    accessStatus: access_status,
                    isCBOFlow: cbo,
                };

                res.status(200).send(payload);
            } else {
                res.status(200).send(errorPayload);
            }
        } else {
            res.status(200).send(errorPayload);
        }
    } catch (err) {
        res.status(200).send(errorPayload);
    }
};

module.exports = {
    fetchConsent,
    generateOTP,
    verifyOTP,
    verifyEmployer,
    searchCompany,
    checkReferralCode,
    getUserAllGoldenTicket,
    generateLoginOtp,
    updateEmailAddress,
    getEmailAddress,
    storeFreelancerDetails,
    addCBODetails,
    getCBOReferralCode,
    verifyCBOReferralCode,
    getUserName,
    addDeviceOS,
    getWaitlistAccessStatus,
};
