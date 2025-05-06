/**
 * @file Routes for Credit Card Waitlist flow
 */

const CreditCardWaitlistRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const { otpApiLimiter, getOtpApiRateLimiterConfig } = require('../../middlewares/rateLimiterMiddleware');
const { creditCardWaitlistController } = require('../../controllers');

const URLS_MAP = {
    CREATE_USER: 'create-user',
    GENERATE_OTP: 'generate-mobile-otp',
    VERIFY_OTP: 'verify-mobile-otp',
    GET_USER_DETAILS: 'get-user-details',
    UPDATE_USER_DETAILS: 'update-user-details',
};

// create user routing
CreditCardWaitlistRouter.post(`/${URLS_MAP.CREATE_USER}`, asyncFnMiddleware(creditCardWaitlistController.createUser));

// generate mobile otp routing
CreditCardWaitlistRouter.post(`/${URLS_MAP.GENERATE_OTP}`, getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(creditCardWaitlistController.generateMobileOtp));

// verify mobile otp routing
CreditCardWaitlistRouter.post(`/${URLS_MAP.VERIFY_OTP}`, getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(creditCardWaitlistController.verifyMobileOtp));

// get user details
CreditCardWaitlistRouter.post(`/${URLS_MAP.GET_USER_DETAILS}`, asyncFnMiddleware(creditCardWaitlistController.getUserDetails));

// update user details
CreditCardWaitlistRouter.post(`/${URLS_MAP.UPDATE_USER_DETAILS}`, asyncFnMiddleware(creditCardWaitlistController.updateUserDetails));

module.exports = {
    CreditCardWaitlistRouter,
};
