/**
 * @file Proxy middleware for Node JS server
 */

const httpProxy = require('http-proxy');
const { logger } = require('../../utils/logger');

// proxy server
const proxy = httpProxy.createProxyServer({});

const STORY_HOME_QUERY_PARAM = '1192d1a6_page';

const DOMAIN_NAME_MAP = {
    BLOG: 'https://blog.fi.money',
    STATIC_CONTENT: `${process.env.CDN_URL}/content`,
    CONTENT_BLOG: `${process.env.CDN_URL}/content/blog`,
    STORIES: 'https://stories.fi.money',
    NEXT_JS: 'http://localhost:3001',
    STRAPI: `${process.env.CDN_URL}/content/guides`,
};

const mutualFundsUrlPattern = /\/features\/mutual-funds/;
const riskForm = /\/account-info-form\/*/;

// Define URL patterns for different pages
const urlPatterns = {
    ABOUT_US: {
        CONTACT_US: /\/contact-us/,
        TEAMS: /\/teams/,
    },
    FEATURES: {
        JUMP: /\/features\/jump/,
        ASKFI: /\/features\/ask-fi/,
        CONNECT_ALL_YOUR_BANK_ACCOUNTS: /\/features\/connect-all-your-bank-accounts/,
        DEPOSITS: /\/features\/deposits/,
        FIT_RULES: /\/features\/fit-rules/,
        REWARDS: /\/features\/rewards/,
        PAY_WITH_FI: /\/features\/pay-with-fi/,
        ACCOUNTS: /\/features\/accounts/,
    },
    ACCOUNTS: {
        PLUS: /\/features\/accounts#plus/,
        INFINITE: /\/features\/accounts#infinite/,
        STANDARD: /\/features\/accounts#standard/,
    },
};

/**
 * A regex pattern is used here as the urlPattern
 * Check the request URL with urlPattern and redirect to a specific domain
 * Web stories landing page and individual stories page domain are different. Hence we using different urlPattern for the stories
 * Set replacePrefix to true if the proxy identifier has to be removed sending request to the targetUrl
 * To match exact routes, use $ at the end of the route
*/
const ROUTE_URLS = [
    /**
     * /stories$ - If this urlPattern match with request URL, in that case we need to proxy on the blog domain because the web stories page is hosted on a blog.
     * Example - /stories
    */
    {
        urlPattern: /\/stories($|\?.*)/,
        domain: DOMAIN_NAME_MAP.STATIC_CONTENT,
        isStoryHome: true,
        errMsg: 'Failed to fetch web story catalogue',
    },
    /**
     * /stories/ - If this urlPattern match with request URL in that case we need to proxy on stories domain because individual stories are hosted on a stories domain ( https://stories.fi.money).
     * Example - /stories/personal-finance/123
    */
    {
        urlPattern: /\/stories\//,
        domain: DOMAIN_NAME_MAP.STORIES,
        errMsg: 'Failed to fetch the web story',
    },

    // regex for redirection urls to the blog home page ex - /guides or /guides/
    {
        urlPattern: /\/guides\/?($|\?.*)/,
        domain: `${DOMAIN_NAME_MAP.STRAPI}/guides.html`,
        replacePrefix: true,
        errMsg: 'Failed to fetch the blog home page',
    },
    {
        urlPattern: /\/blog/,
        domain: DOMAIN_NAME_MAP.CONTENT_BLOG,
        replacePrefix: true,
        proxyToHtmlFile: true,
        errMsg: 'Failed to fetch the blog page',
    },
    // redirection to the blog page ex - /guides/personal-finance/tax-saving-strategies-to-maximise-your-wealth
    {
        urlPattern: /guides\/(.*)/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    // redirection to the blog page ex - /guides/financial-planning/pages/1
    {
        urlPattern: /guides\/(.*)\/pages\/(.*)/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /\/salary-program-tnc/,
        domain: DOMAIN_NAME_MAP.CONTENT_BLOG,
        proxyToHtmlFile: true,
        errMsg: 'Failed to fetch the salary program tnc page',
    },
    {
        urlPattern: /\/upi-tnc/,
        domain: DOMAIN_NAME_MAP.CONTENT_BLOG,
        proxyToHtmlFile: true,
        errMsg: 'Failed to fetch the upi tnc page',
    },
    // based on the regex below redirection url will look like /credit-card/amplifi
    {
        urlPattern: /\/credit-cards\/(amplifi|simplifi)(\/(?!eligibility).*)?(\?.*)?$/,
        domain: DOMAIN_NAME_MAP.STATIC_CONTENT,
        proxyToHtmlFile: true,
        errMsg: 'Failed to fetch the credit card feature landing page',
    },
    {
        urlPattern: /\/_next\/*/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    // based on the regex below redirection url will look like /credit-card/amplifi/eligibility
    {
        urlPattern: /\/credit-cards\/amplifi\/eligibility/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /\/app-redirect/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: mutualFundsUrlPattern,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: riskForm,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.JUMP,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /\/secure-digital-savings-account/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /\/credit-cards\/magnifi/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /\/email\/unsubscribe/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /^\/us-stocks\/collections/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /^\/us-stocks(?!\/)/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /^\/us-stocks\/stock-directory\/?(.*)/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/us-stocks\/(.*)/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.ASKFI,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.CONNECT_ALL_YOUR_BANK_ACCOUNTS,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.DEPOSITS,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.FIT_RULES,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.REWARDS,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.PAY_WITH_FI,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.ABOUT_US.CONTACT_US,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.ABOUT_US.TEAMS,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.FEATURES.ACCOUNTS,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.ACCOUNTS.PLUS,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.ACCOUNTS.INFINITE,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: urlPatterns.ACCOUNTS.STANDARD,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /^\/travel-budget$/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /^\/tnc\/(.*)/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/checksum$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/debit-card$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/debit-card\/order-request-placed$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/zero-interest-loan$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/flexi-interest-loan$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/instant-approval-loan$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/debit-card\/deals-fest$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/debit-card\/debit-deals-fest$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/wealth-analyser-disclaimer$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/atm-limit$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
    {
        urlPattern: /^\/calculators\/currency-convertor$/,
        domain: DOMAIN_NAME_MAP.NEXT_JS,
        errMsg: 'Failed to proxy to next.js in the middleware',
    },
    {
        urlPattern: /^\/nre-nro-savings-account-opening$/,
        domain: DOMAIN_NAME_MAP.STRAPI,
        proxyToHtmlFile: true,
        errMsg: 'Failed to proxy to cdn in the middleware',
    },
];

const getTargetUrl = (req, routeObject) => {
    const {
        domain, urlPattern, replacePrefix, proxyToHtmlFile,
    } = routeObject;

    let { originalUrl } = req;
    // @example
    // urlPattern = /blog
    // originalUrl = /blog/path-to-blog
    // originalUrl after replacement - /path-to-blog
    if (replacePrefix) {
        originalUrl = originalUrl.replace(urlPattern, '');
    }

    if (proxyToHtmlFile) {
        const queryString = originalUrl.split('?')[1] ? `?${originalUrl.split('?')[1]}` : '';
        return `${domain}${originalUrl.split('?')[0]}.html${queryString}`;
    }

    return `${domain}${originalUrl}`;
};

const proxyMiddleware = async (req, res, next) => {
    const { showClientV2MutualFunds } = res.locals.consulData.serverMetaData;
    // baseUrl examples:
    // If request is to "https://fi.money/blog/some-post", baseUrl will be "/blog/some-post"
    // If request is to "https://fi.money/features/accounts", baseUrl will be "/features/accounts"
    // If request is to "https://fi.money/stories/finance/123", baseUrl will be "/stories/finance/123"
    // If request is to "https://fi.money/travel-budget?btcta=Ordercard&link=KSHY", baseUrl will be "/travel-budget"
    const url = req.baseUrl;
    logger.log('info', 'consul showClientV2MutualFunds', { showClientV2MutualFunds });
    // feature flag to show mutual funds page from clientV2
    const routeObject = ROUTE_URLS.find((item) => {
        const isValidUrl = item.urlPattern.test(url);

        if (mutualFundsUrlPattern.test(url) && isValidUrl) {
            return !!showClientV2MutualFunds;
        }

        if (isValidUrl) {
            return item;
        }

        return false;
    });

    if (routeObject) {
        const mainTargetUrl = getTargetUrl(req, routeObject);

        let targetUrl = mainTargetUrl;

        if (routeObject.isStoryHome) {
            let paginationValue = req.query[STORY_HOME_QUERY_PARAM];
            if (!paginationValue) {
                paginationValue = 1;
            }

            const storyURL = new URL(mainTargetUrl);

            storyURL.searchParams = new URLSearchParams();

            storyURL.pathname = `/content/stories/stories-page${paginationValue}.html`;

            targetUrl = storyURL.toString();
        }
        if (mainTargetUrl.includes('.html')) {
            targetUrl = mainTargetUrl;
        }
        // To run blog pagination locally, add a new key ignorePath and set it to true
        proxy.web(req, res, {
            target: targetUrl,
            changeOrigin: true,
            followRedirects: true,
            ignorePath: true,
        },
        (error) => {
            const { errMsg } = routeObject;
            next({
                description: `${errMsg} for URL: ${targetUrl}`,
                message: 'Error occurred while proxying',
                ctrl: 'proxy',
                fn: 'proxyMiddleware',
                rawError: error,
            });
        });
    } else {
        next();
    }
};

module.exports = {
    proxyMiddleware,
};
