/**
 * @file minKycClosedAccount controller for handling closed account due to min kyc alternate account webform flow
 */

const webFeAuthClient = require('../../grpc/webfeAuth/client');
const webFeAccountClient = require('../../grpc/webfeAccounts/client');
const {
    success,
    error,
    grpcErrorHandler,
} = require('../../utils/ResponseWrapper');
const {
    constructPayloadWithRequestHeader, extractNextActionsResponse, constructPayloadWithRequestHeaderAndRefreshToken,
} = require('../../utils/commonUtils');

// controller key
const CTRL_KEY = 'minKycClosedAccount';

// otp flow for min kyc
const OTP_FLOW = 'OTP_FLOW_CLOSED_ACCOUNTS_BALANCE_TRANSFER';

// error view handler
const errorViewHandler = (res, response, extras = {}) => {
    error(
        res,
        null,
        /**
         * If the error is not recognized then :
         *      404 Bad Request:
         *          The server cannot or will not process the request due to something that is perceived to be a client error
         *          (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
         */
        400,
        response?.error_message,
        extras,
    );
};

// generate otp for min kyc account closure
const generateOtp = async (req, res, next) => {
    const fnName = 'generateOtp';

    try {
        const {
            phoneNumber, email, token, deviceInfo, prospectId, otpFlow,
        } = req.body;

        // mandatory request payload error checks

        if (otpFlow && otpFlow === 'OTP_FLOW_RISK_OUTCALL' && !phoneNumber) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        } if (!phoneNumber && !email) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            auth_identifier: {
                phone_number: {
                    country_code: 91,
                    national_number: Number(phoneNumber) || undefined,
                },
                email: email || undefined,
            },
            otp_flow: otpFlow || OTP_FLOW,
            token,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
        };

        const rpcName = 'GenerateOtp';

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        const response = await webFeAuthClient.makeRpcCall(payloadWithRequestHeader, rpcName);

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not equal to zero
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

// verify otp for min kyc account closure
const verifyOtp = async (req, res, next) => {
    const fnName = 'verifyOtp';

    try {
        const {
            phoneNumber,
            emailId,
            deviceInfo,
            otp,
            token,
            prospectId,
            otpFlow,
        } = req.body;

        // mandatory request payload error checks
        if (!(phoneNumber || emailId) || !otp || !token) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            auth_identifier: {
                phone_number: {
                    country_code: 91,
                    national_number: Number(phoneNumber) || undefined,
                },
                email: emailId || undefined,
            },
            token,
            otp,
            otp_flow: otpFlow || OTP_FLOW,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
        };

        const rpcName = 'VerifyOtp';

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        // verify mobile otp response
        const response = await webFeAuthClient.makeRpcCall(payloadWithRequestHeader, rpcName);

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        const extraParams = {};

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

// verify pan for min kyc account closure
const verifyPan = async (req, res, next) => {
    const fnName = 'verifyPan';

    try {
        const {
            pan, deviceInfo, prospectId, accessToken,
        } = req.body;

        // mandatory request payload error checks
        if (!pan) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            pan,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
            accessToken,
        };

        const rpcName = 'VerifyPan';

        const payloadWithRequestHeader = constructPayloadWithRequestHeaderAndRefreshToken(requestPayload, requestHeaders);

        const response = await webFeAccountClient.makeRpcCall(payloadWithRequestHeader, rpcName);

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0 || response?.resp_header?.status?.code === 999) {
            const modifiedResponse = {
                ...extractNextActionsResponse(response),
                accountLastFourDigits: response.last_four_digits_account_no,
                accessToken: response.access_token,
            };
            success(res, modifiedResponse);
            return;
        }

        // common error handling if status code not equal to zero
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

// add alternate account for min kyc account closure
const addAlternateAccount = async (req, res, next) => {
    const fnName = 'addAlternateAccount';

    try {
        const {
            ifsc, accountNumber, accountHolderName, deviceInfo, prospectId, accessToken,
        } = req.body;

        // mandatory request payload error checks
        if (!ifsc || !accountNumber || !accountHolderName) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        // request payload data
        const requestPayload = {
            ifsc,
            account_number: accountNumber,
            account_holder_name: accountHolderName,
        };

        // request Header
        const requestHeaders = {
            deviceInfo,
            prospectId,
            accessToken,
        };

        const rpcName = 'ShareAlternateAccountForBalanceTransfer';

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        const response = await webFeAccountClient.makeRpcCall(payloadWithRequestHeader, rpcName);

        // send success 200 response when status code is zero
        if (response?.resp_header?.status?.code === 0 || response?.resp_header?.status?.code === 998) {
            const modifiedResponse = {
                ...extractNextActionsResponse(response),
                formErrors: response.form_errors,
            };
            success(res, modifiedResponse);
            return;
        }

        // common error handling if status code not equal to zero
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
    generateOtp,
    verifyOtp,
    verifyPan,
    addAlternateAccount,
};
