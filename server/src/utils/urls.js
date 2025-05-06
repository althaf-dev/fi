const { convertSpaceToHyphenString } = require('./convertSpaceToHyphenString');

/**
 * Function takes a url and formats it according to the sitemap guidelines
 *
 * @param {string} url The url to format according to the sitemap guidelines
 * @returns {string} formatted url with the sitemap guidelines
 */
const getFormattedUrlWithSitemapEscapeCode = (url) => (
    url
        .replace(/&/g, '%26')
        .replace(/'/g, '%27')
        .replace(/"/g, '%22')
        .replace(/>/g, '%3E')
        .replace(/</g, '%3C')
);

/**
 * Function to check if the url has escape code
 */
const hasEscapeCode = (url) => /%[0-9A-Fa-f]{2}/.test(url);

/**
 * Function to decode the sitemap escape code
 */
const decodeSitemapEscapeCode = (url) => (
    url
        .replace(/%26/g, '&')
        .replace(/%27/g, "'")
        .replace(/%22/g, '"')
        .replace(/%3E/g, '>')
        .replace(/%3C/g, '<')
);

const MAIN_FAQ_URL = 'FAQs';

/**
 * Take a reference from the client/src/containers/Faq/utils
 * Function takes a string and create a url according to the params
 * @param categoryNameData {string}
 * @param folderTitleData {string}
 * @param articleTitleData {string}
 * @param {boolean} requiredSitemapUrl the boolean flag if the sitemap recommended url is required
 * @returns url {string}
 */
const getFaqCanonicalUrl = (categoryNameData, folderTitleData, articleTitleData, requiredSitemapUrl) => {
    let categoryName;

    if (categoryNameData) {
        categoryName = convertSpaceToHyphenString(categoryNameData);
    }

    let canonicalUrl = `/${MAIN_FAQ_URL}/${categoryName}`;

    if (folderTitleData && articleTitleData) {
        const folderTitle = convertSpaceToHyphenString(folderTitleData);
        const articleTitle = convertSpaceToHyphenString(articleTitleData);

        canonicalUrl = `${canonicalUrl}/${folderTitle}/${articleTitle}`;
    }

    if (requiredSitemapUrl) {
        return getFormattedUrlWithSitemapEscapeCode(canonicalUrl);
    }

    return canonicalUrl;
};

/**
 * Encodes the input url as html encoded to avoid xss
 * @param url the url which needs to be encoded for HTML
 * @returns {string} encoded html format of the url
 * P.S : there is another copy of the same in client/src/utils/helpers.ts
 * common utils for both server and client needs to be moved into one place
 * TODO : https://monorail.pointz.in/p/fi-app/issues/detail?id=62645
 */
const getEncodedURL = (url = '') => {
    // if the input url is empty or contains white space return empty string
    if (!url || !url.trim()) {
        return '';
    }

    // create a URL object from the url string. This will encode the value to be compatible with html encoding
    // this also handles double encoding of the url. If the url is already encoded then it will be handled by the
    // URL object itself.
    // encodeURIComponent doesn't encode single quote (') hence it should be encoded to %27 after encoding
    // https://stackoverflow.com/questions/7298770/how-do-you-pass-an-apostrophe-through-a-url
    return new URL(url).toString().replace(/'/g, '%27');
};

module.exports = {
    getFaqCanonicalUrl,
    getEncodedURL,
    getFormattedUrlWithSitemapEscapeCode,
    hasEscapeCode,
    decodeSitemapEscapeCode,
};
