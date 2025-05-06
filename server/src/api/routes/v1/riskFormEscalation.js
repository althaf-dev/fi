/**
 * @file Routes for Risk Escaltion Form
 */

const riskEscalationFromRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
// const { otpApiLimiter, getOtpApiRateLimiterConfig } = require('../../middlewares/rateLimiterMiddleware');
const { riskEscalationFromController } = require('../../controllers');

const URLS_MAP = {
    GET_FROM: 'form',
    SUBMIT_FORM: 'submit',
};

riskEscalationFromRouter.post(`/${URLS_MAP.GET_FROM}`, asyncFnMiddleware(riskEscalationFromController.getEscalationForm));

riskEscalationFromRouter.post(`/${URLS_MAP.SUBMIT_FORM}`, asyncFnMiddleware(riskEscalationFromController.SubmitEscalationForm));

module.exports = {
    riskEscalationFromRouter,
};
