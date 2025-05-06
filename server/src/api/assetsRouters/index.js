/**
 * @file Main route definitions for different asset types
 */

const AssetsRouter = require('express').Router();
const { CreditCardPdfFilesRouter } = require('../pdfFilesRoutes');
const { HtmlPagesRouter } = require('./v1/html-pages');

AssetsRouter.use('/pages', HtmlPagesRouter);

AssetsRouter.use('/documents', CreditCardPdfFilesRouter);

module.exports = {
    AssetsRouter,
};
