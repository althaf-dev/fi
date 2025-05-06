const rateLimit = require('express-rate-limit');

const { logger } = require('../../utils/logger');
const { getConsulKVInfo } = require('../../utils/consul');

const getApiRateLimiterConfig = async (_, res, next) => {
    // remove this check if you need to test consul changes in development
    if (process.env.APP_ENV === 'development') {
        next();
        return;
    }

    const windowLimit = await getConsulKVInfo('rate-limiter/api/window-limit');
    const maxNumberOfRequests = await getConsulKVInfo('rate-limiter/api/requests');

    res.locals.apiWindowLimit = windowLimit;
    res.locals.apiMaxNumberOfRequests = maxNumberOfRequests;

    next();
};

const getOtpApiRateLimiterConfig = async (_, res, next) => {
    // remove this check if you need to test consul changes in development
    if (process.env.APP_ENV === 'development') {
        next();
        return;
    }

    const windowLimit = await getConsulKVInfo('rate-limiter/otp-api/window-limit');
    const maxNumberOfRequests = await getConsulKVInfo('rate-limiter/otp-api/requests');

    res.locals.otpApiWindowLimit = windowLimit;
    res.locals.otpApiMaxNumberOfRequests = maxNumberOfRequests;

    next();
};

const getInsightsApiRateLimiterConfig = async (_, res, next) => {
    // remove this check if you need to test consul changes in development
    if (process.env.APP_ENV === 'development') {
        next();
        return;
    }

    const windowLimit = await getConsulKVInfo('rate-limiter/insights-api/window-limit');
    const maxNumberOfRequests = await getConsulKVInfo('rate-limiter/insights-api/requests');

    res.locals.insightsWindowLimit = windowLimit;
    res.locals.insightsMaxNumberOfRequests = maxNumberOfRequests;

    next();
};

const getIssueResolutionApiRateLimiterConfig = async (_, res, next) => {
    // remove this check if you need to test consul changes in development
    if (process.env.APP_ENV === 'development') {
        next();
        return;
    }

    const windowLimit = await getConsulKVInfo('rate-limiter/issue-resolution-api/window-limit');
    const maxNumberOfRequests = await getConsulKVInfo('rate-limiter/issue-resolution-api/requests');

    res.locals.issueResolutionWindowLimit = windowLimit;
    res.locals.issueResolutionMaxNumberOfRequests = maxNumberOfRequests;

    next();
};

const getIPFromIPv6 = (ipAddress) => {
    if (ipAddress.substr(0, 7) === '::ffff:') {
        return ipAddress.substr(7).trim();
    }

    return ipAddress.trim();
};

const getClientIP = (addLogs) => (req) => {
    if (process.env.APP_ENV === 'development') {
        return req.ip;
    }

    let rawClientIP;
    const ipAddressHeaders = req.headers['x-forwarded-for'] || '';

    if (ipAddressHeaders.length === 0) {
        rawClientIP = req.ip || '';

        if (addLogs) {
            logger.log('info', 'missing x-forwarded-for header', {
                method: 'genericApiLimiter - keyGenerator',
                clientIP: rawClientIP,
            });
        }

        return getIPFromIPv6(rawClientIP);
    }

    const ipAddressList = ipAddressHeaders.split(',');
    const ipAddressListLength = ipAddressList.length;
    const numberOfHopsThatAddXForwardedFor = process.env.X_FORWARDED_FOR_HEADER_HOPS;
    /**
     * Given that load balancers or proxies keep appending their IPs to x-forwarded-for, first IP in the list
     * gives the real IP of the client in ideal cases.
     * However, an attacker can generate a header with wrong IP and pass it which can break this assumption.
     * Hence, IP that epiFi infra sees at its perimeter will be the right choice
     */
    if (ipAddressListLength < numberOfHopsThatAddXForwardedFor) {
        /**
         * Fallback in case number of ipAddressList is less than the number of IPs in the header.
         * We are defaulting to the last entry as we are expecting at-least one IP to be added to the header by our infra.
         */
        rawClientIP = ipAddressList[ipAddressListLength - 1];

        if (addLogs) {
            logger.log('info', 'Fallback to last IP entry in the header', {
                method: 'genericApiLimiter - keyGenerator',
                clientIP: rawClientIP,
            });
        }
    } else {
        rawClientIP = ipAddressList[ipAddressListLength - numberOfHopsThatAddXForwardedFor];
    }

    /*
    const otherIPAddress = req.socket.remoteAddress
        || req.connection.remoteAddress
        || req.connection.socket.remoteAddress;
    */

    return getIPFromIPv6(rawClientIP);
};

const rateLimitKeyGenerator = (req) => {
    const { device_id: deviceId } = req.cookies;
    const clientIP = getClientIP(true)(req);

    if (deviceId) {
        return `${deviceId}`;
    }

    return clientIP;
};

const rateLimitHandler = (method) => (req, res) => {
    const { device_id: deviceId } = req.cookies;
    const clientIP = getClientIP(false)(req);

    logger.log('error', 'rate limit exceeded', {
        method,
        clientIP,
        deviceId,
    });

    res.status(429).send({
        description: 'Too many requests, please try again after sometime',
    });
};

/**
 * Using this rate limiter only for generate OTP API.
 * Do not allow more than 5 API calls within 5 minutes.
 * Same configuration is getting used on BE server.
 */
const otpApiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: (_, res) => res.locals.otpApiMaxNumberOfRequests || 5,
    keyGenerator: rateLimitKeyGenerator,
    handler: rateLimitHandler('otpApiLimiter'),
});

/**
 * Using this rate limiter for all APIs.
 * Do not allow more than X API calls within Y minutes from a single IP.
 */
const genericApiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: (_, res) => res.locals.apiMaxNumberOfRequests || 200,
    keyGenerator: rateLimitKeyGenerator,
    handler: rateLimitHandler('genericApiLimiter'),
});

/**
 * Using this rate limiter for all APIs.
 * Do not allow more than X API calls within Y minutes from a single IP.
 */
const insightsApiLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: (_, res) => res.locals.insightsMaxNumberOfRequests || 3,
    keyGenerator: rateLimitKeyGenerator,
    handler: rateLimitHandler('insightsApiLimiter'),
});

/**
 * Using this rate limiter for all APIs.
 * Do not allow more than X API calls within Y minutes from a single IP.
 */
const issueResolutionApiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: (_, res) => res.locals.issueResolutionMaxNumberOfRequests || 5,
    keyGenerator: rateLimitKeyGenerator,
    handler: rateLimitHandler('issueResolutionApiLimiter'),
});

module.exports = {
    getApiRateLimiterConfig,
    getOtpApiRateLimiterConfig,
    getInsightsApiRateLimiterConfig,
    getIssueResolutionApiRateLimiterConfig,
    otpApiLimiter,
    genericApiLimiter,
    insightsApiLimiter,
    issueResolutionApiLimiter,
};
