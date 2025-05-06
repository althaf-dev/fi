const FaqRouterV2 = require('express').Router();

const { faqController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

// get faqs combined data in a single request
FaqRouterV2.get('/', asyncFnMiddleware(faqController.getFaqDataV2));

module.exports = {
    FaqRouterV2,
};
