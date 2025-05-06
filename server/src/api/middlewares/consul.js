/**
 * @file consulMiddleware
 * Load common consul values and store in res.locals so that we don't need to fetch multiple times
 */

const { getConsulKVInfo } = require('../../utils/consul');
const defaultCdnUrls = require('../../consulDefaults/cdn-urls');
const defaultRedirectionUrls = require('../../consulDefaults/redirection-urls');

/**
 * Need to set CSP header for all routes from which user is coming to the app
 * HACK: Do not need it for api routes as of now
 */

const consulMiddleware = async (req, res, next) => {
    let serverMetaData = await getConsulKVInfo('server-meta-info');
    const cdnUrls = await getConsulKVInfo('cdn-urls');
    const redirectURLS = await getConsulKVInfo('redirection-urls');

    // default values if cannot connect to consul
    if (!serverMetaData) {
        serverMetaData = {
            enableRawError: true,
            // make this true if you want to enable profiling in local dev env
            tagsToCategoryRedirectionEnabled: false,
            enableContinuousProfiling: false,
            cloudFrontCDNForBlogs: true,
            blogCategoryEnabledInUrl: false,
            blogCategories: [
                'banking',
                'investments',
                'us-stocks',
                'mutual-funds',
                'credit-cards',
                'debit-cards',
                'personal-loans',
                'personal-finance',
                'money-matters',
                'tech-speak-at-Fi',
                'all-things-money',
            ],
        };
    }

    res.locals.consulData = {};

    res.locals.consulData.serverMetaData = serverMetaData;

    res.locals.consulData.cdnUrls = cdnUrls || defaultCdnUrls;

    res.locals.consulData.redirectURLS = redirectURLS || defaultRedirectionUrls;

    next();
};

module.exports = consulMiddleware;
