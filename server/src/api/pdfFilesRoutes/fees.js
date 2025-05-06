/**
 * @file Fess Pdf files routes
 */

const FeesPdfFilesRouter = require('express').Router();

const { documentController } = require('../controllers');

/**
 * We do not need asyncFnMiddleware since all the processes within renderPdfFiles function are synchronous
 * The pdf file will not render if we add asyncFnMiddleware because the renderPdfFiles function returns void, and inside the async middleware, it runs the catch method, which throws an error
 */
FeesPdfFilesRouter.get('/:pageName', documentController.renderFeesPdfFiles);

module.exports = {
    FeesPdfFilesRouter,
};
