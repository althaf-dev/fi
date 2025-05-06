const CxSupportRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const { issueResolutionApiLimiter, getIssueResolutionApiRateLimiterConfig } = require('../../middlewares/rateLimiterMiddleware');

const { cxSupportController } = require('../../controllers');

// verify cx support feedback
CxSupportRouter.post('/verify-feedback', getIssueResolutionApiRateLimiterConfig, issueResolutionApiLimiter,
    asyncFnMiddleware(cxSupportController.verifyIssueResolutionFeedback));

module.exports = {
    CxSupportRouter,
};
