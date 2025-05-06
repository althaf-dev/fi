/* eslint-disable import/no-extraneous-dependencies */

/**
 * @file Old server-dev.js where webpack-dev-middleware is getting used.
 * Moved to a new method where server-dev.js will serve the static files after yarn build is run on client side
 * Delete this file once the new server-dev.js is stable for a few weeks.
 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const csrf = require('csurf');

const webpackDevConfig = require('../../client/webpack/webpack.dev.config');

const { initialiseExpressApp } = require('./server');
const {
    META_INFO_PAGES_MAPPING, META_INFO_JSON, META_INFO_KEYS, getMetaTags, renderPageWithMetaTagsForDev,
} = require('./api/middlewares/metaInfoMiddleware');
const { replaceAnalyticsIds } = require('./api/middlewares/analyticsFnMiddleware');
const { metricsMiddleware } = require('./utils/prometheus/api');
const { errHandler } = require('./api/middlewares/errorMiddleware');
const { proxyMiddleware } = require('./api/middlewares/proxyMiddleware');
const { getFaqCanonicalUrl } = require('./utils/urls');

// TODO: move common code to avoid duplication
const initialiseServer = () => {
    const { expressApp, port } = initialiseExpressApp();

    // webpack compiler
    const compiler = webpack(webpackDevConfig);

    // index file
    const pathToIndexFile = path.join(compiler.outputPath, 'index.html');

    // serve static files such as images, CSS files, and JavaScript files
    expressApp.use('/assets', express.static(
        path.join(compiler.outputPath, '/assets'),
        {
            maxAge: '1y',
        },
    ));

    const csrfProtection = csrf({ cookie: true });

    // facing issues if we are using renderPageWithMetaTagsForDev for this main route
    expressApp.get('/', csrfProtection, (req, res, next) => {
        compiler.outputFileSystem.readFile(
            pathToIndexFile,
            'utf8',
            (err, data) => {
                if (err) {
                    console.error(err);
                    return next(err);
                }

                const CSRF_TOKEN = req.csrfToken();

                const updatedDataWithMetaTags = data.replace(
                    '__PAGE_META__',
                    getMetaTags({
                        csrfToken: CSRF_TOKEN,
                        ...META_INFO_JSON[META_INFO_PAGES_MAPPING.HOME_PAGE],
                    }),
                );

                const updatedDataWithAnalyticsTags = replaceAnalyticsIds(updatedDataWithMetaTags);

                res.header({
                    'Content-Type': 'text/html',
                    'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
                    Expires: '-1',
                    Pragma: 'no-cache',
                });

                return res.send(updatedDataWithAnalyticsTags);
            },
        );
    });

    // using webpack
    expressApp.use(
        webpackDevMiddleware(compiler, {
            hot: false,
            noInfo: true,
            publicPath: '/',
            writeToDisk: true,
        }),
    );

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

                expressApp.use(faqUrl, csrfProtection, renderPageWithMetaTagsForDev(compiler.outputFileSystem, pathToIndexFile, metaInfo));
            });
        } else if ((key === META_INFO_PAGES_MAPPING.INDIVIDUAL_CALCULATOR_PAGE) || (key === META_INFO_PAGES_MAPPING.INDIVIDUAL_FEATURE_PAGE)) {
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

                expressApp.use(canonicalUrl, csrfProtection, renderPageWithMetaTagsForDev(compiler.outputFileSystem, pathToIndexFile, metaInfo));
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

            expressApp.use(canonicalUrl, csrfProtection, renderPageWithMetaTagsForDev(compiler.outputFileSystem, pathToIndexFile, metaInfo));
        }
    });

    expressApp.use('*', metricsMiddleware, proxyMiddleware);

    expressApp.use(errHandler);

    // for all the sub-routes or undefined routes
    // eslint-disable-next-line max-len
    expressApp.get('*', csrfProtection, renderPageWithMetaTagsForDev(compiler.outputFileSystem, pathToIndexFile, META_INFO_JSON[META_INFO_PAGES_MAPPING.HOME_PAGE]));

    expressApp.listen(port, () => console.log(`server started on port ${port}!`));
};

module.exports = {
    initialiseServer,
};
