/**
 * @file CDN middleware for Node JS server
 */

const httpProxy = require('http-proxy');

// proxy server
const proxy = httpProxy.createProxyServer({});

// only these url prefixes would be allowed in redirect URLs
const validRedirectionURLs = [
    'https://dza2kd7rioahk.cloudfront.net',
    'https://dviqqotdqrydv.cloudfront.net',
];

/**
 * @func validateRedirectionURL Validate if the redirection url is correct
 * This is a fail safe mechanism to only allow certain URLs for redirection.
 * @param {*} url redirection url
 * @returns true or false as the validation for redirection url
 */
const validateRedirectionURL = (url) => {
    const startsWithAnyValidURL = validRedirectionURLs.find((validRedirectionURL) => url.startsWith(validRedirectionURL));

    if (startsWithAnyValidURL) return true;
    return false;
};

const regexExp = /^(\/documents\/)/;

const cdnMiddleware = async (req, res, next) => {
    const { cdnUrls } = res.locals.consulData || { cdnUrls: {} };

    if (cdnUrls && typeof (cdnUrls) === 'object') {
        let path;
        if (req.originalUrl && req.originalUrl.startsWith('/documents/')) {
            path = req.originalUrl.replace(regexExp, '');
        }

        if (path && cdnUrls[path] && cdnUrls[path].cdnUrl && validateRedirectionURL(cdnUrls[path].cdnUrl)) {
            proxy.web(req, res, {
                target: cdnUrls[path].cdnUrl,
                changeOrigin: true,
                followRedirects: true,
                ignorePath: true,
            },
            (error) => {
                next({
                    description: `${error.message} for URL: ${cdnUrls[path].cdnUrl}`,
                    message: 'Error occurred while proxy',
                    ctrl: 'cdn',
                    fn: 'cdnMiddleware',
                    rawError: error,
                });
            });
        } else {
            next();
        }
    } else {
        next();
    }
};

module.exports = {
    cdnMiddleware,
};
