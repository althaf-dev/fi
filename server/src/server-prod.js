const path = require('path');
const express = require('express');
const csrf = require('csurf');
const httpProxy = require('http-proxy');

const { initialiseExpressApp } = require('./server');
const {
    META_INFO_PAGES_MAPPING, META_INFO_JSON, META_INFO_KEYS, getMetaTags, renderPageWithMetaTags,
} = require('./api/middlewares/metaInfoMiddleware');
const { replaceAnalyticsIds } = require('./api/middlewares/analyticsFnMiddleware');
const { metricsMiddleware } = require('./utils/prometheus/api');
const { errHandler } = require('./api/middlewares/errorMiddleware');
const { proxyMiddleware } = require('./api/middlewares/proxyMiddleware');
const { redirectionMiddleware } = require('./api/middlewares/redirectionMiddleware');
const { renderHTML } = require('./api/middlewares/ssrMiddleware');
const { usStocksMetaInfoHandler } = require('./api/controllers/usStocks');
const { getFaqCanonicalUrl } = require('./utils/urls');
const { logger } = require('./utils/logger');
const { NextJSRoutes } = require('./nextjs-routes');

const { BUILD_PATH } = process.env;

const { expressApp, port } = initialiseExpressApp();

const proxy = httpProxy.createProxyServer();

const INDEX_HTML_PATH = path.join(BUILD_PATH, 'index.html');

const NextJsURL = 'http://localhost:3001';

// added this as Browser/DOM related APIs are not available for server
globalThis.window = {
    document: {},
    localStorage: {},
};

// TODO: move common code to avoid duplication
const initialiseServer = () => {
    const csrfProtection = csrf({ cookie: true });

    logger.log('info', 'Express request landed');

    NextJSRoutes.forEach((nextJSRoute) => {
        expressApp.use(nextJSRoute, (req, res) => {
            logger.log('info', 'Next js request landed', {
                requestPath: req.path,
            });
            const target = `${NextJsURL}/${nextJSRoute}`;

            // Proxy the request to the Next.js server
            proxy.web(req, res, { target });
        });
    });

    // facing issues if we are using renderPageWithMetaTags for this main route
    expressApp.get('/', csrfProtection, renderHTML(INDEX_HTML_PATH, expressApp), (req, res) => {
        const data = res.locals.indexHTML;

        const CSRF_TOKEN = req.csrfToken();

        const updatedDataWithMetaTags = data.replace(
            '__PAGE_META__',
            getMetaTags({
                csrfToken: CSRF_TOKEN,
                ...META_INFO_JSON[META_INFO_PAGES_MAPPING.HOME_PAGE],
            }),
        );

        const updatedDataWithAnalyticsTags = replaceAnalyticsIds(updatedDataWithMetaTags);

        return res.send(updatedDataWithAnalyticsTags);
    });

    /**
     * The following middleware functions are executed in the specified order:
     *
     * This file (where the expressApp.use() statement is defined)
     * redirectionMiddleware file
     * proxyMiddleware file
     */
    expressApp.use('*', metricsMiddleware, redirectionMiddleware, proxyMiddleware);

    /**
     * Route handler for the US stocks page
     * Gnerates meta information for the US stocks page
     */
    expressApp.get('/us-stocks/*', csrfProtection, renderHTML(INDEX_HTML_PATH, expressApp), async (req, res, next) => {
        // Check if the path is "/us-stocks/collections"
        if (req.params[0] === 'collections') {
        // Skip  and move to the next middleware as the meta info for collections page is not present on the backend as collections is not a stock name
            return next();
        }

        // Check if the path is "/us-stocks/stock-directory"
        if (req.params[0].startsWith('stock-directory')) {
        // Skip  and move to the next middleware as the meta info for stock-directory is not present on the backend as stock-directory  is not a stock name
            return next();
        }

        try {
            const data = res.locals.indexHTML;

            const metaInfo = await usStocksMetaInfoHandler(req, res, next);

            const CSRF_TOKEN = req.csrfToken();

            const updatedDataWithMetaTags = data.replace(
                '__PAGE_META__',
                getMetaTags({
                    csrfToken: CSRF_TOKEN,
                    ...metaInfo,
                }),
            );

            const updatedDataWithStyleTags = updatedDataWithMetaTags.replace(
                '__STYLES_TAGS__',
                '',
            );

            const updatedDataWithDynamicHeadTags = updatedDataWithStyleTags.replace(
                '__DYNAMIC_HEAD_TAGS__',
                '',
            );

            const updatedDataWithAnalyticsTags = replaceAnalyticsIds(updatedDataWithDynamicHeadTags);

            res.header({
                'Content-Type': 'text/html',
                'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
                Expires: '-1',
                Pragma: 'no-cache',
            });

            logger.log('info', 'Successfully added meta data for US stocks page', {
                requestPath: req.path,
            });

            return res.send(updatedDataWithAnalyticsTags);
        } catch (err) {
            logger.log('info', 'Failed to add meta data in the us stock page', {
                requestPath: req.path,
            });

            return next(err);
        }
    });

    // serve static files such as images, CSS files, and JavaScript files
    expressApp.use(express.static(BUILD_PATH, {
        maxAge: '1y',
    }));

    // for all the routes & sub-routes where we need some meta info
    META_INFO_KEYS.forEach((key) => {
        if (key === META_INFO_PAGES_MAPPING.FAQ_ARTICLES_PAGE) {
            const FAQ_ARTICLES_LIST = META_INFO_JSON[key].data;

            // for all the faq articles routes where we need some meta info
            FAQ_ARTICLES_LIST.forEach((data) => {
                const {
                    categoryName, folderName, articleTitle, metaTitle, metaDescription,
                } = data;

                const faqUrl = getFaqCanonicalUrl(categoryName, folderName, articleTitle);
                const metaInfo = {
                    metaTitle,
                    metaDescription,
                    canonicalUrl: faqUrl,
                };

                expressApp.use(faqUrl, csrfProtection, renderHTML(INDEX_HTML_PATH, expressApp), renderPageWithMetaTags(metaInfo));
            });
        // eslint-disable-next-line max-len
        } else if ((key === META_INFO_PAGES_MAPPING.INDIVIDUAL_CALCULATOR_PAGE) || (key === META_INFO_PAGES_MAPPING.INDIVIDUAL_FEATURE_PAGE) || (key === META_INFO_PAGES_MAPPING.US_STOCK_DIRECTORY_PAGES)) {
            const META_INFO_DATA = META_INFO_JSON[key].data;

            // for all the calculators routes where we need some meta info
            META_INFO_DATA.forEach((data) => {
                const {
                    metaTitle, metaDescription, canonicalUrl, breadcrumbSchema, faqsSchema, productSchema,
                    ogTitle, ogSiteName, ogUrl, ogDescription, ogType, ogImage, twitterCard, twitterSite,
                    twitterTitle, twitterDescription, twitterImage,
                } = data;

                const metaInfo = {
                    metaTitle,
                    metaDescription,
                    canonicalUrl,
                    ogTitle,
                    ogSiteName,
                    ogUrl,
                    ogDescription,
                    ogType,
                    ogImage,
                    twitterCard,
                    twitterSite,
                    twitterTitle,
                    twitterDescription,
                    twitterImage,
                    breadcrumbSchema,
                    faqsSchema,
                    productSchema,
                };

                expressApp.use(canonicalUrl, csrfProtection, renderHTML(INDEX_HTML_PATH, expressApp), renderPageWithMetaTags(metaInfo));
            });
        } else {
            const {
                metaTitle, metaDescription, canonicalUrl, orgSchema, breadcrumbSchema, productSchema,
                ogTitle, ogSiteName, ogUrl, ogDescription, ogType, ogImage, twitterCard, twitterSite,
                twitterTitle, twitterDescription, twitterImage,
            } = META_INFO_JSON[key];
            const metaInfo = {
                metaTitle,
                metaDescription,
                canonicalUrl,
                ogTitle,
                ogSiteName,
                ogUrl,
                ogDescription,
                ogType,
                ogImage,
                twitterCard,
                twitterSite,
                twitterTitle,
                twitterDescription,
                twitterImage,
                orgSchema,
                breadcrumbSchema,
                productSchema,
            };

            expressApp.use(canonicalUrl, csrfProtection, renderHTML(INDEX_HTML_PATH, expressApp), renderPageWithMetaTags(metaInfo, false));
        }
    });

    expressApp.use(errHandler);

    // for all the sub-routes or undefined routes
    expressApp.get('*', csrfProtection, renderHTML(INDEX_HTML_PATH, expressApp), renderPageWithMetaTags(META_INFO_JSON.HOME_PAGE));

    expressApp.listen(port, () => {
        logger.log('info', `express api server started on port ${port}`, { method: 'initialiseServer' });
    });
};

module.exports = {
    initialiseServer,
};
