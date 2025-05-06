/**
 * @file Manages the router to expose the endpoints for us stocks service
 */

const B2BRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

const { b2bController } = require('../../controllers');

const URLS_MAP = {
    CREATE_LEAD_SEND_OTP: '/create-lead-and-send-otp',
    VERIFY_OTP: '/verify-otp',
    VERIFY_DOMAIN: '/get-domain-details',
    RECORD_DOMAIN: '/record_domain',
};

// create lead and send otp
B2BRouter.get(`${URLS_MAP.CREATE_LEAD_SEND_OTP}`, asyncFnMiddleware(b2bController.getOtp));

// verify otp
B2BRouter.get(`${URLS_MAP.VERIFY_OTP}`, asyncFnMiddleware(b2bController.verifyOtp));

// get domain details
B2BRouter.get(`${URLS_MAP.VERIFY_DOMAIN}`, asyncFnMiddleware(b2bController.getDomainDetails));

// record domain
B2BRouter.post(`${URLS_MAP.RECORD_DOMAIN}`, asyncFnMiddleware(b2bController.recordDomain));

module.exports = {
    B2BRouter,
};
