/**
 * @file Controller for b2b
 */

const b2bClient = require('../../grpc/b2b/client');
const domainWhiteListingClient = require('../../grpc/domainWhitelisting/client');
const { success, grpcErrorHandler } = require('../../utils/ResponseWrapper');
const { COMMON_ERR_MSG_MAP } = require('./constants');
const metrics = require('../../utils/prometheus/metrics');
const { logger } = require('../../utils/logger');

// controller key
const CTRL_KEY = 'b2b';

const ERROR_MSG_MAP = {
    getOtp: 'Failed to send lead details',
    verifyOtp: 'Failed to verify the otp',
    getDomainDetails: 'Failed to get domain details',
};

const getOtp = async (req, res, next) => {
    const fnName = 'getOtp';

    try {
        const { payload } = req.query;

        const { lead_details } = JSON.parse(payload);

        const requestPayload = {
            lead_details,
        };

        if (!lead_details) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });
            return;
        }

        const rpcName = 'CreateLeadAndSendOTP';

        const response = await b2bClient.makeRpcCall(requestPayload, rpcName);

        const { otp_token, retry_timer_in_seconds, status } = response || {};

        const modifiedResponse = {
            otpToken: otp_token,
            retryTimerInSeconds: retry_timer_in_seconds,
            status,
        };

        success(res, modifiedResponse);
    } catch (err) {
        // unexpected grpc error handling and error thrown by backend
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

const verifyOtp = async (req, res, next) => {
    const fnName = 'verifyOtp';

    const { payload } = req.query;

    const { lead_details, otp, otp_token } = JSON.parse(payload);

    if (!lead_details || !otp || !otp_token) {
        res.status(400).send({
            message: ERROR_MSG_MAP[fnName],
            description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
        });
        return;
    }

    const requestPayload = {
        lead_details,
        otp,
        otp_token,
    };

    try {
        const rpcName = 'VerifyLeadOTP';

        const response = await b2bClient.makeRpcCall(requestPayload, rpcName);

        const { status } = response || {};

        const modifiedResponse = {
            status,
        };

        success(res, modifiedResponse);
    } catch (err) {
        // unexpected grpc error handling and error thrown by backend
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

const getDomainDetails = async (req, res, next) => {
    const fnName = 'GetDomainDetails';

    try {
        const { payload } = req.query;
        const { domain, domain_type } = JSON.parse(payload);

        const requestPayload = {
            domain,
            domain_type,
        };

        if (!domain || !domain_type) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });
            return;
        }

        const rpcName = 'GetDomainDetails';
        const response = await domainWhiteListingClient.makeRpcCall(requestPayload, rpcName);

        const { status, domain_details } = response || {};

        const modifiedResponse = {
            status,
            domain_details,

        };

        success(res, modifiedResponse);
    } catch (err) {
        // unexpected grpc error handling and error thrown by backend
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

const recordDomain = async (req, res, next) => {
    try {
        const { hrms_domain, hrms_phone_and_email } = req.body;
        if (hrms_domain) {
            metrics.domainMetric.labels(hrms_domain).inc();
        }
        if (hrms_phone_and_email) {
            logger.log('info', 'hrms detail', { hrms_phone_and_email });
        }
        res.send({ added: true }).status(200);
    } catch (err) {
        next({
            description: 'Failed to record domain',
            message: 'Failed to record domain',
            statusCode: 500,
            ctrl: CTRL_KEY,
            fn: 'recordDomain',
            rawError: err,
        });
    }
};

module.exports = {
    getOtp,
    verifyOtp,
    getDomainDetails,
    recordDomain,
};
