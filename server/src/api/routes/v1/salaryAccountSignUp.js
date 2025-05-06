/**
 * @file salaryAccountSignUp routes for handle salary account signup register flow api routing
 */

const SalaryAccountSignUpRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const {
    otpApiLimiter,
    getOtpApiRateLimiterConfig,
    getApiRateLimiterConfig,
    genericApiLimiter,
} = require('../../middlewares/rateLimiterMiddleware');

const { salaryAccountSignUpController } = require('../../controllers');

// generate mobile otp routing
SalaryAccountSignUpRouter.post('/generateMobileOtp', getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(salaryAccountSignUpController.generateMobileOtp));

// verify mobile otp routing
SalaryAccountSignUpRouter.post('/verifyMobileOtp', getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(salaryAccountSignUpController.verifyMobileOtp));

// generate email otp routing
SalaryAccountSignUpRouter.post('/generateEmailOtp', getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(salaryAccountSignUpController.generateEmailOtp));

// verify email otp routing
SalaryAccountSignUpRouter.post('/verifyEmailOtp', getOtpApiRateLimiterConfig, otpApiLimiter,
    asyncFnMiddleware(salaryAccountSignUpController.verifyEmailOtp));

// send app link to whatsapp routing
SalaryAccountSignUpRouter.post('/sendAppLinKToUser', getApiRateLimiterConfig, genericApiLimiter,
    asyncFnMiddleware(salaryAccountSignUpController.sendAppLinKToUser));

module.exports = {
    SalaryAccountSignUpRouter,
};
