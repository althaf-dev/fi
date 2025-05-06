/**
 * Function to return the platform cookie from req
 * @param {*} req It represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
 * @returns platform 'WEB'|'ANDROID'|'IOS'
 */
const getPlatformCookie = (req) => {
    let { platform } = req.cookies;

    // if platform is not there in cookies, it is a web request
    if (!platform) {
        platform = 'WEB';
    } else {
        platform = platform.toUpperCase();
    }

    return platform;
};

module.exports = {
    getPlatformCookie,
};
