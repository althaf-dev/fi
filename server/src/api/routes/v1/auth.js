const AuthRouter = require('express').Router();

const { authController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const { insightsApiLimiter, getInsightsApiRateLimiterConfig } = require('../../middlewares/rateLimiterMiddleware');

AuthRouter.get('/auth-url', getInsightsApiRateLimiterConfig, insightsApiLimiter, asyncFnMiddleware(authController.getAuthUrl));

// used by gmail to redirect the user to this route when user gives required permissions
AuthRouter.get('/login', authController.addEmailAccessInfo);

module.exports = {
    AuthRouter,
};
