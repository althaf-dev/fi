/**
 * Main route definitions for internal api's
 * Note: When a new route is added, edit the file: server/utils/prometheus/service-endpoint-map.js
 * Please add the route in the existing service arrays or create a new one if needed
 */

const ApiRouter = require('express').Router();

const BASE_URLS = {
    V1: '/v1',
};

const URLS_MAP = {
    CREDIT_CARD_WAITLIST: `${BASE_URLS.V1}/waitlist`,
    US_STOCKS: `${BASE_URLS.V1}/us-stocks`,
    B2B: `${BASE_URLS.V1}/b2b`,
    CREDIT_CARD_ELIGIBILITY: `${BASE_URLS.V1}/eligibility`,
    MIN_KYC_CLOSED_ACCOUNT: `${BASE_URLS.V1}/min-kyc-closed-account`,
    RISK_ESCALATION_FORM: `${BASE_URLS.V1}/risk-escalation`,
    TRAVEL_BUDGET: `${BASE_URLS.V1}/travel`,
};

const { AuthRouter } = require('./v1/auth');
const { InsightsRouter } = require('./v1/insights');
const { UtilsRouter } = require('./v1/utils');
const { FaqRouter } = require('./v1/faq');
const { FaqRouterV2 } = require('./v2/faq');
const { CustomerAuthRouter } = require('./v1/customerAuth');
const { MetaInfoRouter } = require('./v1/metaInfo');
const { ConsulRouter } = require('./v1/consul');
const { GsheetRouter } = require('./v1/gSheet');
const { CxSupportRouter } = require('./v1/cxSupport');
const { SalaryAccountSignUpRouter } = require('./v1/salaryAccountSignUp');
const { CreditCardWaitlistRouter } = require('./v1/creditCardWaitlist');
const { USStocksRouter } = require('./v1/usStocks');
const { B2BRouter } = require('./v1/b2b');
const { creditCardEligibilityRouter } = require('./v1/creditCardEligibility');
const { MinKycClosedAccountRouter } = require('./v1/minKycClosedAccount');
const { riskEscalationFromRouter } = require('./v1/riskFormEscalation');
const { UnsubscribeRouter } = require('./v1/unsubscribe');
const { TravelBudgetRouter } = require('./v1/travel');
// deprecated routes
// const { WaitlistRouter } = require('./v1/waitlist');
// const { CommunityRouter } = require('./v1/community');

ApiRouter.use('/v1/auth', AuthRouter);
ApiRouter.use('/v1/insights', InsightsRouter);
ApiRouter.use('/v1/utils', UtilsRouter);
ApiRouter.use('/v1/faq', FaqRouter);
ApiRouter.use('/v2/faq', FaqRouterV2);

ApiRouter.use('/v1/meta-info', MetaInfoRouter);
ApiRouter.use('/v1/consul', ConsulRouter);
ApiRouter.use('/v1/google-sheet', GsheetRouter);
ApiRouter.use('/v1/cx-support', CxSupportRouter);
ApiRouter.use('/v1/salary-account-signup', SalaryAccountSignUpRouter);
ApiRouter.use(`${URLS_MAP.CREDIT_CARD_WAITLIST}`, CreditCardWaitlistRouter);
ApiRouter.use(`${URLS_MAP.US_STOCKS}`, USStocksRouter);
ApiRouter.use(`${URLS_MAP.B2B}`, B2BRouter);
ApiRouter.use(`${URLS_MAP.CREDIT_CARD_ELIGIBILITY}`, creditCardEligibilityRouter);
ApiRouter.use(`${URLS_MAP.MIN_KYC_CLOSED_ACCOUNT}`, MinKycClosedAccountRouter);
ApiRouter.use(`${URLS_MAP.RISK_ESCALATION_FORM}`, riskEscalationFromRouter);
ApiRouter.use(`${URLS_MAP.TRAVEL_BUDGET}`, TravelBudgetRouter);

// customer auth verifications
ApiRouter.use('/v1/customer-auth', CustomerAuthRouter);

// deprecated routes
// ApiRouter.use('/v1/community', CommunityRouter);
// ApiRouter.use('/v1/waitlist', WaitlistRouter);

ApiRouter.use('/v1/email/unsubscribe', UnsubscribeRouter);

module.exports = {
    ApiRouter,
};
