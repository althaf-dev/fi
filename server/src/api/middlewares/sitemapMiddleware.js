/**
 * @file Manages the Sitemap related functions, constants & mapping
 */
/* eslint-disable import/no-extraneous-dependencies, quotes, operator-linebreak */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const { logger } = require('../../utils/logger');
const { getFaqCanonicalUrl } = require('../../utils/urls');
const { hasEscapeCode, decodeSitemapEscapeCode } = require('../../utils/urls');

const { META_INFO_JSON, META_INFO_PAGES_MAPPING } = require('./metaInfoMiddleware');

const {
    APP_ENV, APP_URL, WEBFLOW_API_BASE_URL, STRAPI_BASE_URL, BEARER_TOKEN,
} = process.env;

/**
 * The production app URL is needed to fetch the existing sitemap data
 * as the existing sitemap data can only be fetched from the production sitemap.
 */
const PROD_APP_URL = 'https://fi.money/sitemap.xml';

const BLOG_BASE_URL = '/blog';
const GUIDES_BASE_URL = `${STRAPI_BASE_URL}/api/blogs`;
const GUIDES_PAGINATION_PARAM = 'pagination';
const GUIDES_PAGE_SIZE = 1400;

const URLS_MAP = {
    WEBFLOW_COLLECTIONS: `${WEBFLOW_API_BASE_URL}/collections`,
    WEBFLOW_SITES: `${WEBFLOW_API_BASE_URL}/sites`,
    BLOG_POSTS: `${BLOG_BASE_URL}/posts`,
    BLOG_TAGS: `${BLOG_BASE_URL}/tags`,
    BLOG_CATEGORIES: `${BLOG_BASE_URL}/categories`,
    US_STOCKS: '/us-stocks',
    GUIDES: '/guides',
    FAQ: '/FAQs',
};

/**
 * Fetches the existing sitemap XML data from the production app URL.
 *
 */
const fetchExistingSitemapXmlData = async () => {
    try {
        logger.log('info', 'fetching existing sitemap XML data from production app URL', { method: 'fetchExistingSitemapXmlData' });
        const existingSitemapResponse = await axios.get(PROD_APP_URL);

        return existingSitemapResponse.data;
    } catch (error) {
        logger.log('error', 'error in fetching existing sitemap xml data', {
            method: 'fetchExistingSitemapXmlData',
            error,
        });

        return '';
    }
};

/**
 * Fetches the sitemap URLs for the website.
 * The sitemap URLs are accessible only in production and local development environments.
 *
 * TODO: 1. [ANKIT] [MONORAIL - https://monorail.pointz.in/p/fi-app/issues/detail?id=55876] Webflow API has the lastPublished time. Compare it with lastModified time of previous sitemap.xml generated.
 * We can use this to skip the API invocation to webflow as the urls which will be fetched are same.
 *
 * TODO: 2. [ANKIT] [MONORAIL - https://monorail.pointz.in/p/fi-app/issues/detail?id=55877] Create dynamic sitemap for all other pages
 */
const getSitemapUrls = async () => {
    // the sitemap urls should be accessible only in prod & local development
    if (APP_ENV !== 'prod' && APP_ENV !== 'development') {
        return [];
    }

    const urls = [];

    Object.keys(META_INFO_JSON).forEach((key) => {
        if (key === META_INFO_PAGES_MAPPING.FAQ_ARTICLES_PAGE) {
            // separate handling for FAQ Articles as we need to generate its canonical url on runtime
            const FAQ_ARTICLES_LIST = META_INFO_JSON[key].data;

            FAQ_ARTICLES_LIST.forEach((data) => {
                const {
                    categoryName, folderName, articleTitle,
                } = data;
                const canonicalUrl = getFaqCanonicalUrl(categoryName, folderName, articleTitle, true);

                urls.push({ url: `${APP_URL}${canonicalUrl}` });
            });
        } else if (META_INFO_JSON[key].data) {
            // if 'data' key is present, it means JSON is list of objects so we need to push each object's canonical url
            const LIST_DATA = META_INFO_JSON[key].data;

            LIST_DATA.forEach((data) => {
                const { canonicalUrl } = data;

                const dataToSiteMap = {
                    url: `${APP_URL}${canonicalUrl}`,
                };

                if (META_INFO_JSON[key].isHighPriorityPageInSitemap) {
                    dataToSiteMap.priority = 0.9;
                }

                urls.push(dataToSiteMap);
            });
        } else {
            // if 'data' key is not present, it means JSON is just an object
            const { canonicalUrl } = META_INFO_JSON[key];

            urls.push({
                url: `${APP_URL}${canonicalUrl}`,
                priority: 0.9,
            });
        }
    });

    logger.log('info', 'starting to fetch all static and dynamic urls', {
        method: 'getSitemapUrls',
    });

    // eslint-disable-next-line max-len
    const strapi_response = await axios.get(`${GUIDES_BASE_URL}?${GUIDES_PAGINATION_PARAM}[pageSize]=${GUIDES_PAGE_SIZE}&populate[0]=blog_category&fields[0]=slug`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    });
    const guides = strapi_response.data.data;
    guides.forEach((guideData) => {
        const guideSlug = guideData?.attributes.slug;
        const categorySlug = guideData?.attributes?.blog_category?.data.attributes?.slug;
        urls.push({
            url: `${APP_URL}${URLS_MAP.GUIDES}/${categorySlug}/${guideSlug}`,
            priority: 0.9,
        });
    });
    return urls;
};

/**
 * Generates the XML content for the sitemap based on the URLs obtained from the getSitemapUrls function.
 * The function iterates through the URLs and constructs the XML data, including change frequency and priority
 * for blog post URLs. It then returns the final sitemap XML content as a string.
 */
const getSitemapXmlContent = async () => {
    let xmlData = (
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
    );

    const urls = await getSitemapUrls();

    logger.log('info', 'successfully get all static and dynamic urls', {
        method: 'getSitemapXmlContent',
    });

    urls.forEach((data) => {
        if (data?.url?.includes(URLS_MAP.BLOG_POSTS)) {
            const dataPriority = data.priority;

            const priority = dataPriority ? `<priority>${dataPriority}</priority>\n` : '';

            // For blog post URLs, include change frequency and priority in the sitemap XML
            xmlData = (
                `${xmlData}` +
                `<url>\n` +
                `<loc>${data.url}</loc>\n` +
                `<changefreq>weekly</changefreq>\n` +
                `${priority}` +
                `</url>\n`
            );
        } else if (data?.url?.includes(URLS_MAP.US_STOCKS)) {
            xmlData = (
                `${xmlData}` +
                `<url>\n` +
                `<changefreq>daily</changefreq>\n` +
                `<loc>${data.url}</loc>\n` +
                `<priority>0.8</priority>\n` +
                `</url>\n`
            );
        } else if (data?.url?.includes(URLS_MAP.FAQ) && hasEscapeCode(data?.url)
        ) {
            xmlData = `
                ${xmlData}
                <url>
                    <loc>${data.url}</loc>
                    ${data.priority ? `<priority>${data.priority}</priority>` : ``}
                </url>
                <url>
                    <loc>${decodeSitemapEscapeCode(data.url)}</loc>
                    ${data.priority ? `<priority>${data.priority}</priority>` : ``}
                </url>
                `;
        } else if (data?.url?.includes(URLS_MAP.FAQ) && !hasEscapeCode(data?.url)) {
            xmlData = `
                ${xmlData}
                <url>
                    <loc>${data.url}</loc>
                    ${data.priority ? `<priority>${data.priority}</priority>` : ``}
                </url>
                `;
        } else {
            // For other URLs, include only the location in the sitemap XML
            xmlData = (
                `${`${xmlData}` +
                `<url>\n` +
                `<loc>${data.url}</loc>\n`}${
                    data.priority ? `<priority>${data.priority}</priority>` : ``
                }</url>\n`
            );
        }
    });

    xmlData = (
        `${xmlData}` +
        `</urlset>`
    );

    return xmlData;
};

/**
 * Saves the generated sitemap XML content to the sitemap.xml file.
 *
 * @param {string} sitemapXmlContent - The XML content of the generated sitemap.
 */
const saveSitemapXmlToFile = (sitemapXmlContent) => {
    let directoryPath;

    if (APP_ENV === 'prod') {
        directoryPath = path.resolve(__dirname, '..', '..', 'static', 'prod');
    } else {
        directoryPath = path.resolve(__dirname, '..', '..', 'static', 'common');
    }

    const filePath = path.join(directoryPath, 'sitemap.xml');

    // Check if the directory exists, and create it if not
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }

    fs.writeFile(filePath, sitemapXmlContent, (error) => {
        if (error) {
            logger.log('error', 'error to save sitemap xml in server static folder', {
                method: 'saveSitemapXmlToFile',
                error,
            });
        } else {
            logger.log('info', 'sitemap.xml file generated successfully!', {
                method: 'saveSitemapXmlToFile',
            });
        }
    });
};

/**
 * Generates and saves the sitemap on build time.
 */
const generateAndSaveSitemap = async () => {
    try {
        const sitemapXmlContent = await getSitemapXmlContent();

        logger.log('info', 'sitemap xml content generated successfully!', {
            method: 'generateAndSaveSitemap',
        });

        saveSitemapXmlToFile(sitemapXmlContent);
    } catch (error) {
        const existingSitemapXmlData = await fetchExistingSitemapXmlData();
        saveSitemapXmlToFile(existingSitemapXmlData);
        logger.log('error', 'error to generate and save sitemap', {
            method: 'generateAndSaveSitemap',
            error,
        });
    }
};

/**
 * Generates and saves the sitemap on build time.
 */
generateAndSaveSitemap();

module.exports = {
    getSitemapUrls,
    getSitemapXmlContent,
};
