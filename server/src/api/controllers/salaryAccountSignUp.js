/**
 * @file salaryAccountSignUp controller for handle salary account signup register flow
 * handles logic of generate mobile and email otp and verify mobile and email otp, send app link to whatsapp
 */

const webFeClient = require('../../grpc/webfe/client');
const {
    success,
    error,
    grpcErrorHandler,
} = require('../../utils/ResponseWrapper');
const {
    constructPayloadWithRequestHeader,
} = require('../../utils/commonUtils');

// controller key
const CTRL_KEY = 'salaryAccountSignUp';

// geneate otp constants
const SALARY_ACCOUNT_SIGNUP_GENERATE_OTP_FLOW = 'GENERATE_OTP_FLOW_B2B_ONBOARDING';

// consent types constants
const SALARY_ACCOUNT_SIGNUP_CONSENT_TYPES = [
    'CONSENT_TYPE_FI_TNC',
    'CONSENT_TYPE_FED_TNC',
    'CONSENT_TYPE_FI_PRIVACY_POLICY',
    'CONSENT_TYPE_FI_WEALTH_TNC',
];

// error view handler
const errorViewHandler = (res, response, extras = {}) => {
    error(
        res,
        null,
        400,
        response?.resp_header?.error_view?.inline_error_view?.title,
        extras,
    );
};

// generate mobile otp for salary account signup
const generateMobileOtp = async (req, res, next) => {
    const fnName = 'generateMobileOtp';

    try {
        const {
            phoneNumber, countryCode, deviceInfo, prospectId,
        } = req.body;

        // mandatory request payload error checks
        if (!phoneNumber || !countryCode) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            phone_number: {
                country_code: countryCode,
                national_number: phoneNumber,
            },
            generate_otp_flow: SALARY_ACCOUNT_SIGNUP_GENERATE_OTP_FLOW,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
        };

        // generate mobile otp response
        const response = await webFeClient.generateMobileOtp(
            constructPayloadWithRequestHeader(requestPayload, requestHeaders),
        );

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
    // unexpected grpc error handling and error throw by backend
        const { statusCode, message, description } = grpcErrorHandler(err);

        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
        });
    }
};

// verify mobile otp for salary account signup
const verifyMobileOtp = async (req, res, next) => {
    const fnName = 'verifyMobileOtp';

    try {
        const {
            phoneNumber,
            countryCode,
            deviceInfo,
            otp,
            token,
            whatsappPreference,
            prospectId,
            webUrl,
        } = req.body;

        // mandatory request payload error checks
        if (!phoneNumber || !countryCode || !otp || !token) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            phone_number: {
                country_code: countryCode,
                national_number: phoneNumber,
            },
            has_whatsapp_consent: whatsappPreference,
            consent_types: SALARY_ACCOUNT_SIGNUP_CONSENT_TYPES,
            token,
            otp,
            web_url: webUrl || '',
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
        };

        // verify mobile otp response
        const response = await webFeClient.verifyMobileOtp(
            constructPayloadWithRequestHeader(requestPayload, requestHeaders),
        );

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // mentioned error code need to block the signup flow
        const accountBlockStatusCode = [104, 105, 108, 111];
        const extraParams = {};
        const checkAccountBlockStatusCode = accountBlockStatusCode.find(
            (code) => response?.resp_header?.status?.code === code,
        );

        if (checkAccountBlockStatusCode) {
            // if isVerifyOtpBlocked  true the frontend won't allow further
            extraParams.isVerifyOtpBlocked = true;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response, extraParams);
        return;
    } catch (err) {
    // unexpected grpc error handling and error throw by backend
        const { statusCode, message, description } = grpcErrorHandler(err);

        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
        });
    }
};

// generate email otp for salary account signup
const generateEmailOtp = async (req, res, next) => {
    const fnName = 'generateEmailOtp';

    try {
        const {
            email, accessToken, deviceInfo, clientReqId, prospectId,
        } = req.body;

        // mandatory request payload error checks
        if (!email || !clientReqId || !accessToken) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload for generate mobile otp
        const requestPayload = {
            generate_otp_flow: SALARY_ACCOUNT_SIGNUP_GENERATE_OTP_FLOW,
            client_req_id: clientReqId,
            email,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
            accessToken,
        };

        // generate email otp response
        const response = await webFeClient.generateEmailOtp(
            constructPayloadWithRequestHeader(requestPayload, requestHeaders),
        );

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
    // unexpected grpc error handling and error throw by backend
        const { statusCode, message, description } = grpcErrorHandler(err);

        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
        });
    }
};

// verify email otp for salary account signup
const verifyEmailOtp = async (req, res, next) => {
    const fnName = 'verifyEmailOtp';

    try {
        const {
            email,
            deviceInfo,
            otp,
            token,
            accessToken,
            clientReqId,
            prospectId,
        } = req.body;

        // mandatory request payload error checks
        if (!email || !accessToken || !otp || !token || !clientReqId) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            email,
            token,
            otp,
            clientReqId,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
            accessToken,
        };

        // verify email otp response
        const response = await webFeClient.verifyEmailOtp(
            constructPayloadWithRequestHeader(requestPayload, requestHeaders),
        );

        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // mentioned error code need to block the signup flow
        const accountBlockStatusCode = [104, 105, 108, 111];
        const extraParams = {};
        const checkAccountBlockStatusCode = accountBlockStatusCode.find(
            (code) => response?.resp_header?.status?.code === code,
        );

        if (checkAccountBlockStatusCode) {
            // if isVerifyOtpBlocked  true the frontend won't allow further
            extraParams.isVerifyOtpBlocked = true;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response, extraParams);
        return;
    } catch (err) {
    // unexpected grpc error handling and error throw by backend
        const { statusCode, message, description } = grpcErrorHandler(err);

        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
        });
    }
};

// send app link to whatsapp for salary account signup
const sendAppLinKToUser = async (req, res, next) => {
    const fnName = 'sendAppLinKToUser';

    try {
        const { accessToken, deviceInfo, prospectId } = req.body;

        // mandatory request payload error checks
        if (!accessToken) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
            accessToken,
        };

        //  send app link to whatsapp response
        const response = await webFeClient.sendAppLinKToUser(
            constructPayloadWithRequestHeader({}, requestHeaders),
        );

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
    // unexpected grpc error handling and error throw by backend
        const { statusCode, message, description } = grpcErrorHandler(err);

        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
        });
    }
};

module.exports = {
    generateMobileOtp,
    verifyMobileOtp,
    generateEmailOtp,
    verifyEmailOtp,
    sendAppLinKToUser,
};
