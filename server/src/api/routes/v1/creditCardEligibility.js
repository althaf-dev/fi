/**
 * @file Routes for Credit Card Waitlist flow
 */

const creditCardEligibilityRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const { otpApiLimiter, getOtpApiRateLimiterConfig } = require('../../middlewares/rateLimiterMiddleware');
const { creditCardEligibilityController } = require('../../controllers');

const URLS_MAP = {
    GENERATE_OTP: 'generate-mobile-otp',
    VERIFY_OTP: 'verify-mobile-otp',
    GET_WAITLIST_FLOW_STATUS: 'get-waitlist-flow-status',
    CHECK_CREDIT_CARD_ELIGIBILITY: 'check-credit-card-eligibility',
};

// generate mobile otp routing
creditCardEligibilityRouter.post(`/${URLS_MAP.GENERATE_OTP}`, getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(creditCardEligibilityController.generateMobileOtp));

// verify mobile otp routing
creditCardEligibilityRouter.post(`/${URLS_MAP.VERIFY_OTP}`, getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(creditCardEligibilityController.verifyMobileOtp));

// get waitlist flow status
creditCardEligibilityRouter.post(`/${URLS_MAP.GET_WAITLIST_FLOW_STATUS}`, asyncFnMiddleware(creditCardEligibilityController.getWaitlistFlowStatus));

creditCardEligibilityRouter.post(`/${URLS_MAP.CHECK_CREDIT_CARD_ELIGIBILITY}`,
    asyncFnMiddleware(creditCardEligibilityController.checkCreditCardEligibility));

module.exports = {
    creditCardEligibilityRouter,
};
