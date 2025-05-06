/**
 * @file Controller for Credit Card Eligibility flow
 */

const client = require('../../grpc/webfe/client');
const { success, error, grpcErrorHandler } = require('../../utils/ResponseWrapper');
const { constructPayloadWithRequestHeader } = require('../../utils/commonUtils');
const { COMMON_ERR_MSG_MAP } = require('./constants');

// controller key
const CTRL_KEY = 'creditCardEligibility';

const ERROR_MSG_MAP = {
    verifyMobileOtp: 'Failed to verify mobile otp',
    getWaitlistFlowStatus: 'Failed to get waitlist flow status',
};

const GENERATE_OTP_FLOW_OFF_APP_CC_ELIGIBILITY_CHECK = 'GENERATE_OTP_FLOW_OFF_APP_CC_ELIGIBILITY_CHECK';

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

const generateMobileOtp = async (req, res, next) => {
    const fnName = 'generateMobileOtp';

    try {
        const {
            phoneNumber,
            countryCode,
            deviceInfo,
            token,
            has_whatsapp_consent,
        } = req.body;

        // mandatory request payload error checks
        if (!(phoneNumber || countryCode)) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });

            return;
        }

        let requestPayload = {
            phone_number: {
                country_code: countryCode,
                national_number: phoneNumber,
            },
            generate_otp_flow: GENERATE_OTP_FLOW_OFF_APP_CC_ELIGIBILITY_CHECK,
            has_whatsapp_consent,
        };

        if (token) {
            requestPayload = { ...requestPayload, token };
        }

        const requestHeaders = {
            deviceInfo,
        };

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        const rpcName = 'GeneratePhoneOtp';

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
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

const verifyMobileOtp = async (req, res, next) => {
    const fnName = 'verifyMobileOtp';

    try {
        const {
            deviceInfo,
            otp,
            token,
            countryCode,
            phoneNumber,
            consentType,
            cardProgramType,
            cardProgramVendor,
        } = req.body;

        // mandatory request payload error checks
        if (!(req.body)) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });

            return;
        }

        const phone_number = {
            country_code: countryCode,
            national_number: phoneNumber,
        };

        const requestPayload = {
            otp,
            token,
            phone_number,
            consent_types: consentType,
            web_flow: 'WEB_FLOW_OFF_APP_CC_ELIGIBILITY_CHECK',
            additional_details: {
                card_program_vendor: cardProgramType,
                card_program_type: cardProgramVendor,
            },
        };

        const requestHeaders = {
            deviceInfo,
        };

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        const rpcName = 'VerifyPhoneOtp';

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

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

/**
 * formatDateToProtoCompatiable
 * @param {*} date input date as "yyyy-mm-dd"
 * @returns date in format year month day where month is from 1-12
 *
 * date constructor expects month as 0-11
 * getMonth returns 0-11
 * proto month expects 1-12
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
 * https://github.com/googleapis/googleapis/blob/master/google/type/date.proto#L46
 */
const formatDateToProtoCompatiable = (date) => {
    const parts = date.split('-');
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[0], 10);

    // Create a Date object using the parsed components
    const dateObj = new Date(year, month, day);

    // // Extract year, month, and day from the Date object
    const dob = {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        day: dateObj.getDate(),
    };

    return dob;
};

const getWaitlistFlowStatus = async (req, res, next) => {
    const fnName = 'getWaitlistFlowStatus';

    try {
        const { clientReqId, actorId, webflow } = req.body;

        if (!(clientReqId || actorId || webflow)) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });

            return;
        }

        const requestPayload = {
            client_req_id: clientReqId,
            actor_id: actorId,
            web_flow: webflow,
        };

        const rpcName = 'GetRequestStatus';

        const response = await client.makeRpcCall(requestPayload, rpcName);

        const { request_status, display_info } = response || {};

        const {
            header_icon, screen_title, screen_message, screen_image, cta_text, additional_text,
            bottom_text,
        } = display_info || {};

        const modifiedResponse = {
            requestStatus: request_status,
            displayInfo: {
                headerIcon: header_icon,
                screenTitle: screen_title,
                screenMessage: screen_message,
                screenImage: screen_image,
                ctaText: cta_text,
                additionalText: additional_text,
                bottomText: bottom_text || 'Approval of card application shall be at issuer discretion',
            },
        };

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, modifiedResponse);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
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

const checkCreditCardEligibility = async (req, res, next) => {
    const fnName = 'checkCreditCardEligibility';
    try {
        const {
            firstName, lastName, pan, dob, email_id, token, deviceInfo, accessToken, consents, cardProgramType, cardProgramVendor,
        } = req.body;

        const requestPayload = {
            name: {
                first_name: firstName,
                last_name: lastName,
            },
            pan,
            dob: formatDateToProtoCompatiable(dob),
            email_id,
            token,
            consents,
            card_program_type: cardProgramType,
            card_program_vendor: cardProgramVendor,
        };

        const requestHeaders = {
            deviceInfo,
            accessToken,
        };

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        const rpcName = 'CheckCreditCardEligibility';

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
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
    getWaitlistFlowStatus,
    checkCreditCardEligibility,
};
