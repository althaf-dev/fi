/**
 * @file minKycClosedAccount routes for handle min kyc alternate account flow api routing
 */

const MinKycClosedAccountRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const {
    otpApiLimiter,
    getOtpApiRateLimiterConfig,
} = require('../../middlewares/rateLimiterMiddleware');

const { minKycClosedAccountController } = require('../../controllers');

// generate otp routing
MinKycClosedAccountRouter.post('/generate-otp', getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(minKycClosedAccountController.generateOtp));

// verify otp routing
MinKycClosedAccountRouter.post('/verify-otp', asyncFnMiddleware(minKycClosedAccountController.verifyOtp));

// verify pan routing
MinKycClosedAccountRouter.post('/verify-pan', asyncFnMiddleware(minKycClosedAccountController.verifyPan));

// add alternate account routing
MinKycClosedAccountRouter.post('/add-alternate-account', asyncFnMiddleware(minKycClosedAccountController.addAlternateAccount));

module.exports = {
    MinKycClosedAccountRouter,
};
