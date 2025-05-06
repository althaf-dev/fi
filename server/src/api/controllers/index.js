const authController = require('./auth');
const customerAuthController = require('./customerAuth');
const insightsController = require('./insights');
const communityController = require('./community');
const metaInfoController = require('./metaInfo');
const consulController = require('./consul');
const gSheetController = require('./gSheet');
const cxSupportController = require('./cxSupport');
const utilsController = require('./utilsController');
const faqController = require('./faq');
const waitlistController = require('./waitlist');
const documentController = require('./document');
const salaryAccountSignUpController = require('./salaryAccountSignUp');
const creditCardWaitlistController = require('./creditCardWaitlist');
const usStocksController = require('./usStocks');
const b2bController = require('./b2b');
const creditCardEligibilityController = require('./creditCardEligibility');
const minKycClosedAccountController = require('./minKycClosedAccount');
const riskEscalationFromController = require('./RiskEscalationForm');
const unsubscribeController = require('./unsubscribe');
const travelController = require('./travel');

module.exports = {
    authController,
    customerAuthController,
    insightsController,
    communityController,
    metaInfoController,
    consulController,
    gSheetController,
    cxSupportController,
    utilsController,
    faqController,
    waitlistController,
    documentController,
    salaryAccountSignUpController,
    creditCardWaitlistController,
    usStocksController,
    b2bController,
    creditCardEligibilityController,
    minKycClosedAccountController,
    riskEscalationFromController,
    unsubscribeController,
    travelController,
};
