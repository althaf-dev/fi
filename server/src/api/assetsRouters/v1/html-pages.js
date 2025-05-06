/**
 * @file Html pages routes
 */

const HtmlPagesRouter = require('express').Router();

const { documentController } = require('../../controllers');

/**
* We do not need asyncFnMiddleware since all the processes within renderHtmlPages function are synchronous
* The HTML file will not render if we add asyncFnMiddleware because the renderHTMLPages function returns void, and inside the async middleware, it runs the catch method, which throws an error.
* Adding * at the end to catch extended urls like /assets/pages/a2-form/v2
 */
HtmlPagesRouter.get('/:pageName*', documentController.renderHtmlPages);

module.exports = {
    HtmlPagesRouter,
};
