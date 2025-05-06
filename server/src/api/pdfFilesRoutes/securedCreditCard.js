/**
 * @file Secured Credit Card Pdf files routes
 */

const SecuredCreditCardPdfFilesRouter = require('express').Router();

const { documentController } = require('../controllers');

/**
 * We do not need asyncFnMiddleware since all the processes within renderPdfFiles function are synchronous
 * The pdf file will not render if we add asyncFnMiddleware because the renderPdfFiles function returns void, and inside the async middleware, it runs the catch method, which throws an error
 */
SecuredCreditCardPdfFilesRouter.get('/:pageName', documentController.renderSecuredCreditCardPdfFiles);

module.exports = {
    SecuredCreditCardPdfFilesRouter,
};
