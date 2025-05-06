const WaitlistRouter = require('express').Router();

const { waitlistController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const { getOtpApiRateLimiterConfig, otpApiLimiter } = require('../../middlewares/rateLimiterMiddleware');

WaitlistRouter.get('/fetch-consent', asyncFnMiddleware(waitlistController.fetchConsent));

WaitlistRouter.post('/check-referral-code', asyncFnMiddleware(waitlistController.checkReferralCode));

WaitlistRouter.post('/generate-otp', getOtpApiRateLimiterConfig, otpApiLimiter, asyncFnMiddleware(waitlistController.generateOTP));

WaitlistRouter.post('/verify-otp', asyncFnMiddleware(waitlistController.verifyOTP));

WaitlistRouter.get('/search-company', asyncFnMiddleware(waitlistController.searchCompany));

WaitlistRouter.post('/verify-employer', asyncFnMiddleware(waitlistController.verifyEmployer));

WaitlistRouter.get('/user-golden-tickets', asyncFnMiddleware(waitlistController.getUserAllGoldenTicket));

WaitlistRouter.post('/generate-login-otp', getOtpApiRateLimiterConfig, otpApiLimiter, asyncFnMiddleware(waitlistController.generateLoginOtp));

WaitlistRouter.put('/update-email', asyncFnMiddleware(waitlistController.updateEmailAddress));

WaitlistRouter.get('/email', asyncFnMiddleware(waitlistController.getEmailAddress));

WaitlistRouter.post('/freelancer-data', asyncFnMiddleware(waitlistController.storeFreelancerDetails));

WaitlistRouter.post('/cbo', asyncFnMiddleware(waitlistController.addCBODetails));

WaitlistRouter.get('/cbo/referral-code', asyncFnMiddleware(waitlistController.getCBOReferralCode));

WaitlistRouter.post('/cbo/verify-referral-code', asyncFnMiddleware(waitlistController.verifyCBOReferralCode));

WaitlistRouter.get('/user-name', asyncFnMiddleware(waitlistController.getUserName));

WaitlistRouter.put('/device-os', asyncFnMiddleware(waitlistController.addDeviceOS));

// get waitlisted user access status related details
WaitlistRouter.get('/access-status', asyncFnMiddleware(waitlistController.getWaitlistAccessStatus));

module.exports = {
    WaitlistRouter,
};
