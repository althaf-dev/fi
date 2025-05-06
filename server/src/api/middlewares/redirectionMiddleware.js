/**
 * @file Redirection Middleware
 *
 * @summary This file defines a redirection middleware that redirects specific URLs to new destinations.
 */

const { default: axios } = require('axios');
const { logger } = require('../../utils/logger');
const { faqUrlRedirectMap, guidesUrlRedirectMap } = require('../../constants');

/**
 * Define all your base url here
 */

const BASE_URLS = {
    CREDIT_CARD_FEATURE_PAGE: '/apply-credit-card-online',
    SALARY_ACCOUNT_PAGE: '/salary-account',
    MAIN_TNC: '/T&C',
    MAIN_TNC_LOWER_CASE: '/t&c',
    WEB_FLOW_MAIN_TNC: '/blog/tnc',
    US_STOCK_PAGE: '/features/us-stock-market-investing',
    US_STOCK_PAGE_NEW_URL: '/us-stocks',
    NON_BLOG_WEB_FLOW_CC_URL: '/blog/apply-credit-card-online',
    CREDIT_CARD: '/credit-cards',
    ADS_EXPERIMENTATION_PAGE: '/ads-experimentation',
    BLOG_POSTS: '/blog/posts',
    GUIDES: '/guides',
};

function hasCapitalLetter(url) {
    for (let i = 0; i < url.length; i += 1) {
        if (url[i] !== url[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

/**
 * The route URLs used in the application.
 */
const ROUTE_URLS = {
    APPLY_CREDIT_CARD_ONLINE: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}`,
    APPLY_CREDIT_CARD_ONLINE_WAITLIST: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/waitlist`,
    OPEN_SALARY_ACCOUNT_ONLINE: '/open-salary-account-online',
    COGNIZANT_SALARY_ACCOUNT: `${BASE_URLS.SALARY_ACCOUNT_PAGE}/cognizant`,
    APPLY_CREDIT_CARD_ONLINE_ELIGIBILITY_OLD: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/eligibility/campaign=CCGFFQREligibility`,
    APPLY_CREDIT_CARD_ONLINE_ELIGIBILITY_NEW: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/eligibility?campaign=CCGFFQREligibility`,
    APPLY_CREDIT_CARD_ONLINE_BLOG: `${BASE_URLS.NON_BLOG_WEB_FLOW_CC_URL}`,
    APPLY_CREDIT_CARD_ONLINE_WELCOME_OFFERS_BLOG: `${BASE_URLS.NON_BLOG_WEB_FLOW_CC_URL}/welcome-offers`,
    APPLY_CREDIT_CARD_ONLINE_REWARDS_BLOG: `${BASE_URLS.NON_BLOG_WEB_FLOW_CC_URL}/rewards`,
    APPLY_CREDIT_CARD_ONLINE_JOINING_FEE_BLOG: `${BASE_URLS.NON_BLOG_WEB_FLOW_CC_URL}/joining-fees`,
    APPLY_CREDIT_CARD_ONLINE_COIN_CONVERSION_BLOG: `${BASE_URLS.NON_BLOG_WEB_FLOW_CC_URL}/coinconversion`,
    APPLY_CREDIT_CARD_ONLINE_WELCOME_OFFERS: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/welcome-offers`,
    APPLY_CREDIT_CARD_ONLINE_REWARDS: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/rewards`,
    APPLY_CREDIT_CARD_ONLINE_JOINING_FEE: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/joining-fees`,
    APPLY_CREDIT_CARD_ONLINE_COIN_CONVERSION: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/coinconversion`,
    AMPLIFI_OFFERS: `${BASE_URLS.CREDIT_CARD}/amplifi/welcome-offers`,
    AMPLIFI_REWARDS: `${BASE_URLS.CREDIT_CARD}/amplifi/rewards`,
    AMPLIFI_JOINING_FEE: `${BASE_URLS.CREDIT_CARD}/amplifi/joining-fees`,
    AMPLIFI_COIN_CONVERSION: `${BASE_URLS.CREDIT_CARD}/amplifi/coinconversion`,
    AMPLIFI_ELIGIBILITY: `${BASE_URLS.CREDIT_CARD}/amplifi/eligibility`,
    MAGNIFI_ELIGIBILITY: `${BASE_URLS.CREDIT_CARD}/magnifi/eligibility`,
    ELIGIBILITY: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/eligibility`,
    SOURCE_MAGNIFI_ELIGIBILITY: `${BASE_URLS.CREDIT_CARD_FEATURE_PAGE}/magnifi/eligibility`,
    SIMPLIFI_CREDIT_CARD_BLOG: '/blog/simplifi-credit-card',
    SIMPLIFI_CREDIT_CARD: '/simplifi-credit-card',
    AMPLIFI_CREDIT_CARD: `${BASE_URLS.CREDIT_CARD}/amplifi`,
    SIMPLIFI_CREDIT_CARD_NEW: `${BASE_URLS.CREDIT_CARD}/simplifi`,
    CONTENT_GUIDES_DEBIT_CARD: '/content/guides/debit-card', // TODO -  This is a temp fix for debit card redirection
    DEBIT_CARD: '/debit-card',
};

/**
 * The URL mappings for redirection.
 */
const URL_MAPPINGS = [
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_WAITLIST, to: ROUTE_URLS.AMPLIFI_CREDIT_CARD },
    { from: ROUTE_URLS.COGNIZANT_SALARY_ACCOUNT, to: ROUTE_URLS.OPEN_SALARY_ACCOUNT_ONLINE },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_ELIGIBILITY_OLD, to: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_ELIGIBILITY_NEW },
    { from: BASE_URLS.MAIN_TNC, to: BASE_URLS.WEB_FLOW_MAIN_TNC },
    { from: BASE_URLS.US_STOCK_PAGE, to: BASE_URLS.US_STOCK_PAGE_NEW_URL },
    { from: BASE_URLS.MAIN_TNC_LOWER_CASE, to: BASE_URLS.WEB_FLOW_MAIN_TNC },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_BLOG, to: ROUTE_URLS.AMPLIFI_CREDIT_CARD },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_REWARDS_BLOG, to: ROUTE_URLS.AMPLIFI_REWARDS },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_WELCOME_OFFERS_BLOG, to: ROUTE_URLS.AMPLIFI_OFFERS },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_JOINING_FEE_BLOG, to: ROUTE_URLS.AMPLIFI_JOINING_FEE },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_COIN_CONVERSION_BLOG, to: ROUTE_URLS.AMPLIFI_COIN_CONVERSION },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_REWARDS, to: ROUTE_URLS.AMPLIFI_REWARDS },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_WELCOME_OFFERS, to: ROUTE_URLS.AMPLIFI_OFFERS },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_JOINING_FEE, to: ROUTE_URLS.AMPLIFI_JOINING_FEE },
    { from: ROUTE_URLS.APPLY_CREDIT_CARD_ONLINE_COIN_CONVERSION, to: ROUTE_URLS.AMPLIFI_COIN_CONVERSION },
    { from: ROUTE_URLS.ELIGIBILITY, to: ROUTE_URLS.AMPLIFI_ELIGIBILITY },
    { from: ROUTE_URLS.SIMPLIFI_CREDIT_CARD_BLOG, to: ROUTE_URLS.SIMPLIFI_CREDIT_CARD_NEW },
    { from: ROUTE_URLS.SIMPLIFI_CREDIT_CARD, to: ROUTE_URLS.SIMPLIFI_CREDIT_CARD_NEW },
    { from: BASE_URLS.CREDIT_CARD_FEATURE_PAGE, to: ROUTE_URLS.AMPLIFI_CREDIT_CARD },
    { from: ROUTE_URLS.SOURCE_MAGNIFI_ELIGIBILITY, to: ROUTE_URLS.MAGNIFI_ELIGIBILITY },
    { from: ROUTE_URLS.CONTENT_GUIDES_DEBIT_CARD, to: ROUTE_URLS.DEBIT_CARD },
];

const EXTERNAL_EXPERIMENTATION_URL = 'https://fintechindia.zohosites.com';

/**
 * Middleware function for URL redirection.
 *
 * Find a matching redirection mapping based on the original URL.
 * Perform URL redirection if a matching mapping is found.
 * Proceed to the next middleware if no matching mapping is found.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {void}
 */
const redirectionMiddleware = async (req, res, next) => {
    try {
        if (req.baseUrl === '/blog') {
            res.redirect(301, '/guides');
            return;
        }

        const { tagsToCategoryRedirectionEnabled } = res.locals.consulData.serverMetaData;

        if (tagsToCategoryRedirectionEnabled && req.baseUrl.startsWith('/blog/tags')) {
            const lastPath = req.baseUrl.split('/').pop();
            res.redirect(301, `/guides/${lastPath}/pages/1`);
            return;
        }

        const { blogCategoryEnabledInUrl } = res.locals.consulData.serverMetaData;

        if (blogCategoryEnabledInUrl && req.baseUrl.startsWith('/guides/')) {
            const params = req.baseUrl.split('/').splice(2);
            let slug_id;

            if (params.length === 3 && params[1] === 'pages') {
                next();
                return;
            }
            if (params.length === 1) {
                // eslint-disable-next-line prefer-destructuring
                slug_id = params[0];
            } else {
                // eslint-disable-next-line prefer-destructuring
                slug_id = params[1];
            }

            // redirection of the blog category with the slug_id to the correct category using the status code 301.
            const { blogCategories } = res.locals.consulData.serverMetaData;
            if (blogCategories.includes(slug_id)) {
                res.redirect(301, `/guides/${slug_id}/pages/1`);
                return;
            }

            const categoryUrl = `${process.env.CDN_URL}/content/guides/guides/strapi-meta-data/blogs/${slug_id}.json`;
            let category = 'all-things-money';
            try {
                const categoriesResponse = await axios.get(categoryUrl);
                const categoryResponseJson = categoriesResponse.data;
                category = categoryResponseJson.category_slug;
            } catch (axiosError) {
                // such error would happen if the blog slug is invalid.
                // TODO : show 404 page
                logger.log('error', 'error while getting the metadata of the blog');
            }

            // if the total length of items in the params is greater than one. it means that the urls if of format
            // /guides/{category}/{slug}. Hence we can check with params[0] to match for the current category.
            // if url contains just slug || with category but wrong category do a redirect
            // 301 status code for redirecton to the correct category
            if ((params.length === 1) || (params.length > 1 && params[0] !== category)) {
                res.redirect(301, `/guides/${category}/${slug_id}`);
                return;
            }
        }

        if (req.baseUrl === BASE_URLS.ADS_EXPERIMENTATION_PAGE) {
            res.redirect(302, EXTERNAL_EXPERIMENTATION_URL);
            return;
        }

        if (req.baseUrl.startsWith('/us-stocks/') && hasCapitalLetter(req.baseUrl)) {
            res.redirect(301, req.originalUrl.replace(req.baseUrl, req.baseUrl.toLowerCase()));
            return;
        }

        const cloudFrontCDNForBlogsEnabled = res.locals.consulData.serverMetaData.cloudFrontCDNForBlogs;

        if (cloudFrontCDNForBlogsEnabled && req.baseUrl.startsWith(BASE_URLS.BLOG_POSTS)) {
            res.redirect(301, req.originalUrl.replace(req.baseUrl, req.baseUrl.replace(BASE_URLS.BLOG_POSTS, BASE_URLS.GUIDES)));
            return;
        }

        if (req.baseUrl.startsWith('/FAQs/')) {
            const faqUrl = Object.keys(faqUrlRedirectMap).find((faq) => {
                const afterFAQs = req.baseUrl.split('/FAQs')[1];
                return faq === afterFAQs;
            });
            if (faqUrl) {
                res.redirect(301, req.originalUrl.replace(faqUrl, faqUrlRedirectMap[faqUrl]));
                return;
            }
        }

        // Handle guides redirection
        if (req.baseUrl.startsWith('/guides/')) {
            const guideUrl = Object.keys(guidesUrlRedirectMap).find((guide) => {
                const afterGuides = req.baseUrl.split('/guides')[1];
                return guide === afterGuides;
            });
            if (guideUrl) {
                res.redirect(301, req.originalUrl.replace(guideUrl, guidesUrlRedirectMap[guideUrl]));
                return;
            }
        }

        const redirect = URL_MAPPINGS.find((item) => item.from === req.baseUrl);
        const consulRedirectURLs = res.locals.consulData.redirectURLS;
        const consulRedirect = consulRedirectURLs[req.baseUrl];
        if (consulRedirect) {
            res.redirect(301, req.originalUrl.replace(req.baseUrl, consulRedirect.url));
        } else if (redirect) {
            res.redirect(301, req.originalUrl.replace(req.baseUrl, redirect.to));
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send('Unexpected error while redirecting to url');
    }
};

module.exports = {
    redirectionMiddleware,
};
