/**
 * @file Dev node server to be used while developing locally
 * To view UI using dev server, run yarn build inside client/ folder and dev server will pick those files
 * Need to run yarn build every time there is a change on the UI since the dev server only picks the build files
 */
const path = require('path');
const express = require('express');
const csrf = require('csurf');
const fs = require('fs');

const { initialiseExpressApp } = require('./server');
const {
    META_INFO_PAGES_MAPPING, META_INFO_JSON, META_INFO_KEYS, getMetaTags, renderPageWithMetaTagsForDev,
} = require('./api/middlewares/metaInfoMiddleware');
const { replaceAnalyticsIds } = require('./api/middlewares/analyticsFnMiddleware');
const { metricsMiddleware } = require('./utils/prometheus/api');
const { errHandler } = require('./api/middlewares/errorMiddleware');
const { proxyMiddleware } = require('./api/middlewares/proxyMiddleware');
const { usStocksMetaInfoHandler } = require('./api/controllers/usStocks');
const { getFaqCanonicalUrl } = require('./utils/urls');
const { logger } = require('./utils/logger');

const {
    BUILD_PATH,
} = process.env;

// TODO: move common code to avoid duplication
const initialiseServer = () => {
    const { expressApp, port } = initialiseExpressApp();

    // index file
    const pathToIndexFile = path.join(BUILD_PATH, 'index.html');

    const csrfProtection = csrf({ cookie: true });

    logger.log('info', 'Express request landed');

    // facing issues if we are using renderPageWithMetaTagsForDev for this main route
    expressApp.get('/', csrfProtection, (req, res, next) => {
        logger.log('info', 'React request landed', {
            requestPath: req.path,
        });
        fs.readFile(
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
                        isProd: false,
                        ...META_INFO_JSON[META_INFO_PAGES_MAPPING.HOME_PAGE],
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

                return res.send(updatedDataWithAnalyticsTags);
            },
        );
    });

    /**
     * The following middleware functions are executed in the specified order:
     *
     * This file (where the expressApp.use() statement is defined)
     * proxyMiddleware file
     */

    expressApp.use('*', metricsMiddleware, proxyMiddleware);

    /**
     * Route handler for the US stocks page
     * Gnerates meta information for the US stocks page
     */

    expressApp.get('/us-stocks/*', csrfProtection, async (req, res, next) => {
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
            const data = await fs.promises.readFile(pathToIndexFile, 'utf8');

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

                expressApp.use(faqUrl, csrfProtection, renderPageWithMetaTagsForDev(fs, pathToIndexFile, metaInfo));
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

                expressApp.use(canonicalUrl, csrfProtection, renderPageWithMetaTagsForDev(fs, pathToIndexFile, metaInfo));
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

            expressApp.use(canonicalUrl, csrfProtection, renderPageWithMetaTagsForDev(fs, pathToIndexFile, metaInfo, false));
        }
    });

    expressApp.use(errHandler);

    // for all the sub-routes or undefined routes
    // eslint-disable-next-line max-len
    // expressApp.get('*', csrfProtection, renderPageWithMetaTagsForDev(fs, pathToIndexFile, META_INFO_JSON[META_INFO_PAGES_MAPPING.HOME_PAGE]));

    expressApp.listen(port, () => console.log(`server started on port ${port}!`));
};

module.exports = {
    initialiseServer,
};
