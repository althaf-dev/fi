/**
 * @file Controller for Credit Card Waitlist flow
 * handles logic of generating mobile and verifying mobile otp and getting user details to check if is
 * existing user and adding new user with name and email.
 */

const client = require('../../grpc/creditCardWaitlist/client');
const { success, error } = require('../../utils/ResponseWrapper');
const { constructPayloadWithRequestHeader } = require('../../utils/commonUtils');
const { getFormattedNameString, getFormattedNameObject } = require('../../utils/nameUtils');
const { getOtpErrorMessage } = require('../../utils/errorUtils');

// controller key
const CTRL_KEY = 'creditCardWaitlist';

// Waitlist feature Credit Card key
const WAITLIST_FEATURE = 'WAITLIST_FEATURE_CREDIT_CARD';

const getRequestDetails = (reqBody, res) => {
    const mandatoryParamsError = new Error(res, null, 400, 'Mandatory parameters are missing');
    if (!reqBody) {
        throw mandatoryParamsError;
    }
    const {
        phoneNumber, countryCode, deviceInfo, prospectId,
    } = reqBody;

    // mandatory request payload error checks
    if (!(phoneNumber || countryCode)) {
        throw mandatoryParamsError;
    }

    const requestPayload = {
        phone_number: {
            country_code: countryCode,
            national_number: phoneNumber,
        },
        send_epifi_otp: true,
        waitlist_feature: WAITLIST_FEATURE,
    };

    const requestHeaders = {
        deviceInfo,
        prospectId,
    };

    return { requestPayload, requestHeaders };
};

// create user entry based on mobile number
const createUser = async (req, res, next) => {
    const fnName = 'createUser';

    try {
        const { requestPayload } = getRequestDetails(req.body, res);

        const response = await client.createUser(requestPayload);

        success(res, response);
    } catch (err) {
        const { code, extraParams } = err;

        next({
            description: 'Failed to create user.',
            message: 'Something went wront. Please try again.',
            statusCode: code,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
            extraParams,
        });
    }
};

const generateMobileOtp = async (req, res, next) => {
    const fnName = 'generateMobileOtp';

    try {
        const { requestPayload, requestHeaders } = getRequestDetails(req.body, res);

        const response = await client.generateOTP(
            constructPayloadWithRequestHeader(requestPayload, requestHeaders),
        );

        success(res, response);
    } catch (err) {
        const { message, code, extraParams } = err;

        next({
            description: message,
            message: 'Failed to generate OTP. Please try again.',
            statusCode: code,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
            extraParams,
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
        } = req.body;

        // mandatory request payload error checks
        if (!(otp || token)) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        const requestPayload = {
            otp,
            token,
        };

        const requestHeaders = {
            deviceInfo,
        };

        const response = await client.verifyOTP(
            constructPayloadWithRequestHeader(requestPayload, requestHeaders),
        );

        success(res, response);
    } catch (err) {
        // unexpected grpc error handling and error throw by backend
        const { code, extraParams } = err;

        next({
            message: getOtpErrorMessage(code),
            code,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
            extraParams,
        });
    }
};

// Get user details like name, email
const getUserDetails = async (req, res, next) => {
    const fnName = 'getUserDetails';

    try {
        const { accessToken } = req.body;

        if (!accessToken) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        const requestPayload = {
            access_token: accessToken,
            waitlist_feature: WAITLIST_FEATURE,
        };

        const response = await client.getUserDetails(requestPayload);
        const modifiedData = {
            ...response,
            name: getFormattedNameString(response.name),
        };

        success(res, modifiedData);
    } catch (err) {
        const { code, message, extraParams } = err;

        next({
            message,
            statusCode: code,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
            extraParams,
        });
    }
};

const updateUserDetails = async (req, res, next) => {
    const fnName = 'updateUserDetails';

    try {
        const { accessToken, name, emailId } = req.body;
        const { firstName, middleName, lastName } = getFormattedNameObject(name);

        if (!(accessToken || name || emailId)) {
            error(res, null, 400, 'Mandatory parameters are missing');
            return;
        }

        const requestPayload = {
            access_token: accessToken,
            name: {
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
            },
            email_id: emailId,
            waitlist_feature: WAITLIST_FEATURE,
        };

        const response = await client.updateUserDetails(requestPayload);

        success(res, response);
    } catch (err) {
        const { code, message, extraParams } = err;

        next({
            message,
            statusCode: code,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
            extraParams,
        });
    }
};

module.exports = {
    createUser,
    generateMobileOtp,
    verifyMobileOtp,
    getUserDetails,
    updateUserDetails,
};
