/**
 * @file Manages the Meta Tags related functions, constants & mapping
 */

/* eslint-disable quote-props, quotes, max-len, operator-linebreak */

const { logger } = require('../../utils/logger');
const FAQ_ARTICLES = require('../../models/meta-info/faq-articles-v2.json');
const FAQ_ARTICLES_DEV = require('../../models/meta-info/faq-articles.dev.json');
const FAQ_CATEGORIES_JSON = require('../../models/meta-info/faq-categories.json');
const FAQ_JSON = require('../../models/meta-info/faq.json');
const INDIVIDUAL_CALCULATOR_JSON = require('../../models/meta-info/individual-calculator.json');
const CALCULATORS_JSON = require('../../models/meta-info/calculators.json');
const HOME_JSON = require('../../models/meta-info/home.json');
const OPEN_SAVINGS_ACCOUNT_ONLINE_JSON = require('../../models/meta-info/open-saving-account-online.json');
const ABOUT_JSON = require('../../models/meta-info/about.json');
const COLLECTIONS_JSON = require('../../models/meta-info/collections.json');
const CAREERS_JSON = require('../../models/meta-info/careers.json');
const FEES_JSON = require('../../models/meta-info/fees.json');
const INDIVIDUAL_FEATURE_JSON = require('../../models/meta-info/individual-feature.json');
const FEATURES_JSON = require('../../models/meta-info/features.json');
const TEAM_JSON = require('../../models/meta-info/team.json');
const OPEN_SALARY_ACCOUNT_ONLINE_JSON = require('../../models/meta-info/open-salary-account-online.json');
const CORPORATE_SALARY_ACCOUNT_ONLINE_JSON = require('../../models/meta-info/corporate-salary-account-online.json');
const BLOG_JSON = require('../../models/meta-info/blog.json');
const WEB_STORIES_JSON = require('../../models/meta-info/web-stories.json');
const CONTACT_US_JSON = require('../../models/meta-info/contact-us.json');
const FI_SECURE_JSON = require('../../models/meta-info/fi-secure.json');
const STATIC_PAGES_JSON = require('../../models/meta-info/static-pages.json');
const INDIVIDUAL_US_STOCK_JSON = require('../../models/meta-info/individual-us-stock.json');
const NON_BLOG_WEB_FLOW_JSON = require('../../models/meta-info/non-blog-web_flow-pages.json');
const US_STOCK_DIRECTORY_JSON = require('../../models/meta-info/us-stock-directory.json');

const { replaceAnalyticsIds } = require('./analyticsFnMiddleware');

const { APP_ENV, APP_URL } = process.env;
let FAQ_ARTICLES_JSON = FAQ_ARTICLES_DEV;

if (APP_ENV === 'prod') {
    FAQ_ARTICLES_JSON = FAQ_ARTICLES;
}

const META_INFO_PAGES_MAPPING = {
    HOME_PAGE: 'HOME_PAGE',
    OPEN_SAVINGS_ACCOUNT_ONLINE_PAGE: 'OPEN_SAVINGS_ACCOUNT_ONLINE_PAGE',
    ABOUT_PAGE: 'ABOUT_PAGE',
    COLLECTIONS_PAGE: 'COLLECTIONS_PAGE',
    CAREERS_PAGE: 'CAREERS_PAGE',
    TEAM_PAGE: 'TEAM_PAGE',
    INDIVIDUAL_FEATURE_PAGE: 'INDIVIDUAL_FEATURE_PAGE',
    FEATURES_PAGE: 'FEATURES_PAGE',
    FEES_PAGE: 'FEES_PAGE',
    FAQ_ARTICLES_PAGE: 'FAQ_ARTICLES_PAGE',
    FAQ_CATEGORIES_PAGE: 'FAQ_CATEGORIES_PAGE',
    FAQS_PAGE: 'FAQS_PAGE',
    INDIVIDUAL_CALCULATOR_PAGE: 'INDIVIDUAL_CALCULATOR_PAGE',
    CALCULATORS_PAGE: 'CALCULATORS_PAGE',
    OPEN_SALARY_ACCOUNT_ONLINE_JSON: 'OPEN_SALARY_ACCOUNT_ONLINE_JSON',
    BLOG_PAGE: 'BLOG_PAGE',
    WEB_STORIES_PAGE: 'WEB_STORIES_PAGE',
    CONTACT_US_PAGE: 'CONTACT_US_PAGE',
    FI_SECURE_PAGE: 'FI_SECURE_PAGE',
    STATIC_PAGES: 'STATIC_PAGES',
    INDIVIDUAL_US_STOCK_PAGE: 'INDIVIDUAL_US_STOCK_PAGE',
    NON_BLOG_WEB_FLOW_PAGES: 'NON_BLOG_WEB_FLOW_PAGES',
    US_STOCK_DIRECTORY_PAGES: 'US_STOCK_DIRECTORY_PAGES',
    CORPORATE_SALARY_ACCOUNT_ONLINE_JSON: 'CORPORATE_SALARY_ACCOUNT_ONLINE_JSON',
};

// use 'data' key if JSON is list of objects, else directly assign it with JSON object
const META_INFO_JSON = {
    [META_INFO_PAGES_MAPPING.HOME_PAGE]: HOME_JSON,
    [META_INFO_PAGES_MAPPING.OPEN_SAVINGS_ACCOUNT_ONLINE_PAGE]: OPEN_SAVINGS_ACCOUNT_ONLINE_JSON,
    [META_INFO_PAGES_MAPPING.ABOUT_PAGE]: ABOUT_JSON,
    [META_INFO_PAGES_MAPPING.COLLECTIONS_PAGE]: COLLECTIONS_JSON,
    [META_INFO_PAGES_MAPPING.CAREERS_PAGE]: CAREERS_JSON,
    [META_INFO_PAGES_MAPPING.TEAM_PAGE]: TEAM_JSON,
    [META_INFO_PAGES_MAPPING.US_STOCK_DIRECTORY_PAGES]: { "data": US_STOCK_DIRECTORY_JSON, "isHighPriorityPageInSitemap": true },
    // this needs to be placed before main Features route, else we won't get individual feature meta data inserted properly as it's a sub-route
    [META_INFO_PAGES_MAPPING.INDIVIDUAL_FEATURE_PAGE]: {
        "data": INDIVIDUAL_FEATURE_JSON,
        "isHighPriorityPageInSitemap": true,
    },
    [META_INFO_PAGES_MAPPING.FEATURES_PAGE]: FEATURES_JSON,
    [META_INFO_PAGES_MAPPING.FEES_PAGE]: FEES_JSON,
    [META_INFO_PAGES_MAPPING.OPEN_SALARY_ACCOUNT_ONLINE_JSON]: OPEN_SALARY_ACCOUNT_ONLINE_JSON,
    [META_INFO_PAGES_MAPPING.CORPORATE_SALARY_ACCOUNT_ONLINE_JSON]: CORPORATE_SALARY_ACCOUNT_ONLINE_JSON,
    [META_INFO_PAGES_MAPPING.CONTACT_US_PAGE]: CONTACT_US_JSON,
    [META_INFO_PAGES_MAPPING.FI_SECURE_PAGE]: FI_SECURE_JSON,
    [META_INFO_PAGES_MAPPING.STATIC_PAGES]: {
        "data": STATIC_PAGES_JSON,
        "isHighPriorityPageInSitemap": true,
    },
    // this needs to be placed before main FAQs route, else we won't get faq articles meta data inserted properly as it's a sub-route
    [META_INFO_PAGES_MAPPING.FAQ_ARTICLES_PAGE]: {
        "data": FAQ_ARTICLES_JSON,
    },
    [META_INFO_PAGES_MAPPING.FAQ_CATEGORIES_PAGE]: {
        "data": FAQ_CATEGORIES_JSON,
    },
    [META_INFO_PAGES_MAPPING.FAQS_PAGE]: FAQ_JSON,
    // this needs to be placed before main Calculators route, else we won't get individual calculator meta data inserted properly as it's a sub-route
    [META_INFO_PAGES_MAPPING.INDIVIDUAL_CALCULATOR_PAGE]: {
        "data": INDIVIDUAL_CALCULATOR_JSON,
        "isHighPriorityPageInSitemap": true,
    },
    [META_INFO_PAGES_MAPPING.NON_BLOG_WEB_FLOW_PAGES]: {
        "data": NON_BLOG_WEB_FLOW_JSON,
        "isHighPriorityPageInSitemap": true,
    },
    [META_INFO_PAGES_MAPPING.CALCULATORS_PAGE]: CALCULATORS_JSON,
    [META_INFO_PAGES_MAPPING.BLOG_PAGE]: {
        "data": BLOG_JSON,
    },
    [META_INFO_PAGES_MAPPING.WEB_STORIES_PAGE]: {
        "data": WEB_STORIES_JSON,
    },
    [META_INFO_PAGES_MAPPING.INDIVIDUAL_US_STOCK_PAGE]: {
        "data": INDIVIDUAL_US_STOCK_JSON,
    },
};

// keys for which we don't want to insert any meta data
const FILTERED_KEYS = [
    META_INFO_PAGES_MAPPING.HOME_PAGE,
    META_INFO_PAGES_MAPPING.STATIC_PAGES,
    META_INFO_PAGES_MAPPING.FAQ_CATEGORIES_PAGE,
    META_INFO_PAGES_MAPPING.BLOG_PAGE,
    META_INFO_PAGES_MAPPING.WEB_STORIES_PAGE,
    META_INFO_PAGES_MAPPING.INDIVIDUAL_US_STOCK_PAGE,
    META_INFO_PAGES_MAPPING.NON_BLOG_WEB_FLOW_PAGES,
];

const SOCIAL_MEDIA_META_INFO_MAPPING = {
    ogTitle: 'og:title',
    ogSiteName: 'og:site_name',
    ogUrl: 'og:url',
    ogDescription: 'og:description',
    ogType: 'og:type',
    ogImage: 'og:image',
    twitterCard: 'twitter:card',
    twitterSite: 'twitter:site',
    twitterTitle: 'twitter:title',
    twitterDescription: 'twitter:description',
    twitterImage: 'twitter:image',
};

const getSocialMediaMetaTags = (metInfoPayload) => {
    let metaData = '';
    Object.keys(metInfoPayload).forEach((item) => {
        if (metInfoPayload[item]) {
            metaData += `<meta property="${SOCIAL_MEDIA_META_INFO_MAPPING[item]}" content="${metInfoPayload[item]}" />`;
        }
    });
    return metaData;
};

// need to filter out the FILTERED_KEYS as we are not using this to render their meta info
const META_INFO_KEYS = Object.keys(META_INFO_JSON)
    .filter((item) => !FILTERED_KEYS.includes(item));

const getMetaTags = (params) => {
    const {
        metaTitle, metaDescription, canonicalUrl, breadcrumbSchema, orgSchema, productSchema, faqsSchema, csrfToken,
        ogTitle, ogSiteName, ogUrl, ogDescription, ogType, ogImage, twitterCard, twitterSite,
        twitterTitle, twitterDescription, twitterImage, keyWords, isProd = true,
    } = params;

    const socialMediaMetaInfo = {
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
    };

    let htmlString = (
        `<title>${metaTitle}</title>` +
        '\n' +
        `<meta name="description" content="${metaDescription}" />` +
        '\n' +
        `<link rel="canonical" href="${APP_URL}${canonicalUrl}" />` +
        '\n' +
        `<meta name="csrf-token" content="${csrfToken}" />` +
        '\n' +
        `${getSocialMediaMetaTags(socialMediaMetaInfo)}` +
        '\n'
    );

    if (keyWords) {
        htmlString = (
            `${htmlString}` +
            `<meta name="keywords" content="${keyWords}" />` +
            '\n'
        );
    }

    // Crawlers should not index the page if it's not a production environment
    if (!isProd) {
        htmlString = (
            `${htmlString}` +
            '<meta name="robots" content="noindex" />' +
            '\n'
        );
    }

    if (orgSchema) {
        htmlString = (
            `${htmlString}` +
            `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>` +
            `\n`
        );
    }

    if (breadcrumbSchema) {
        htmlString = (
            `${htmlString}` +
            `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>` +
            `\n`
        );
    }

    if (productSchema) {
        htmlString = (
            `${htmlString}` +
            `<script type="application/ld+json">${JSON.stringify(productSchema)}</script>` +
            `\n`
        );
    }

    if (faqsSchema) {
        htmlString = (
            `${htmlString}` +
            `<script type="application/ld+json">${JSON.stringify(faqsSchema)}</script>` +
            `\n`
        );
    }

    return htmlString;
};

const renderPageWithMetaTags = (metaInfo, isCanonicalConfig = true) => (req, res) => {
    const updatedMetaInfo = !isCanonicalConfig ? { ...metaInfo, canonicalUrl: req.originalUrl } : metaInfo;

    const data = res.locals.indexHTML;

    const CSRF_TOKEN = req.csrfToken();

    const updatedDataWithMetaTags = data.replace(
        '__PAGE_META__',
        getMetaTags({ csrfToken: CSRF_TOKEN, ...updatedMetaInfo }),
    );

    const updatedDataWithAnalyticsTags = replaceAnalyticsIds(updatedDataWithMetaTags);

    // for home page, we need to fetch the latest version
    if (req.originalUrl === '/') {
        res.header({
            'Content-Type': 'text/html',
            'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
            Expires: '-1',
            Pragma: 'no-cache',
        });
    }

    return res.send(updatedDataWithAnalyticsTags);
};

const renderPageWithMetaTagsForDev = (fs, pathToIndexFile, metaInfo, isCanonicalConfig = true) => (req, res, next) => {
    const updatedMetaInfo = !isCanonicalConfig ? { ...metaInfo, canonicalUrl: req.originalUrl } : metaInfo;

    fs.readFile(
        pathToIndexFile,
        'utf8',
        (err, data) => {
            if (err) {
                if (APP_ENV === 'development') {
                    console.error(err);
                    return next(err);
                }

                logger.log('error', 'error in meta info middleware', {
                    method: 'renderPageWithMetaTags',
                    error: JSON.stringify(err),
                });

                return res.status(500).send('Something went wrong!');
            }

            const CSRF_TOKEN = req.csrfToken();

            const updatedDataWithMetaTags = data.replace(
                '__PAGE_META__',
                getMetaTags({ csrfToken: CSRF_TOKEN, isProd: false, ...updatedMetaInfo }),
            );

            const updatedDataWithStyleTags = updatedDataWithMetaTags.replace(
                '__STYLES_TAGS__',
                '',
            );

            const updatedDataWithAnalyticsTags = replaceAnalyticsIds(updatedDataWithStyleTags);

            // for home page, we need to fetch the latest version
            if (req.originalUrl === '/') {
                res.header({
                    'Content-Type': 'text/html',
                    'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
                    Expires: '-1',
                    Pragma: 'no-cache',
                });
            }

            return res.send(updatedDataWithAnalyticsTags);
        },
    );
};

module.exports = {
    META_INFO_PAGES_MAPPING,
    META_INFO_JSON,
    META_INFO_KEYS,
    getMetaTags,
    renderPageWithMetaTags,
    renderPageWithMetaTagsForDev,
};
