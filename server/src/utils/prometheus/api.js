/**
 * Imports defined metrics and executes them for logging.
 * Defines the middleware, metric & test-metric endpoint.
 */

const metric = require('./metrics');
const { testMetricsController } = require('./test');
const { getServiceName } = require('./service-endpoint-map');

// Increment counter based on status code
const statusCodeController = (statusCode, endpoint) => {
    const serviceName = getServiceName(endpoint);
    if (statusCode >= 200 && statusCode <= 299) {
        metric.status2xxMetric.labels(endpoint).inc();
        metric.serviceLvlMetric.labels(serviceName, '2xx').inc();
        return;
    }
    if (statusCode >= 300 && statusCode <= 399) {
        metric.status3xxMetric.labels(endpoint).inc();
        metric.serviceLvlMetric.labels(serviceName, '3xx').inc();
        return;
    }
    if (statusCode >= 400 && statusCode <= 499) {
        metric.status4xxMetric.labels(endpoint).inc();
        metric.serviceLvlMetric.labels(serviceName, '4xx').inc();
        return;
    }
    if (statusCode >= 500) {
        metric.status5xxMetric.labels(endpoint).inc();
        metric.serviceLvlMetric.labels(serviceName, '5xx').inc();
    }
};

/**
 * Formats the url to log only the main service of the route.
 * Examples:
 * 1. /api/v1/tickets/1234/users/5678 --> /api/v1/tickets
 * 2. /api/v1/agents/ --> /api/v1/agents
 * 3. /api/v1/logs --> /api/v1/logs
 * This is done so that we do not have many unique routes for prometheus to log, as the number of unique labels (endpoints in this case) increases,
 * the performance decreases. Hence we only want to log metrics at a service / main route level.
 * @param {string} reqPath The url of the api without query params.
 * @param {int} slashCount The number of slashes '/' after which the url must be removed.
 */
const formatBaseUrl = (reqPath, slashCount) => {
    if (reqPath === '') return reqPath;
    // chunks = ["", "api", "v1", "tickets"]
    const chunks = reqPath.split('/', slashCount);
    const pathLen = chunks.length;
    if (pathLen === 1 || pathLen < slashCount) return reqPath;
    let finalUrl = '';
    // skipping the 1st element as it is an empty string
    for (let i = 1; i < pathLen; i += 1) { finalUrl += `/${chunks[i]}`; }
    return finalUrl;
};

// Middleware
const metricsMiddleware = (req, res, next) => {
    // Since we are applying middleware for /api, the req.path does not have that
    const ogUrl = `/api${req.path}`;
    let baseUrl;
    if (req.path.startsWith('/v1/us-stocks/')) {
        baseUrl = formatBaseUrl(ogUrl, 5);
    } else {
        baseUrl = formatBaseUrl(ogUrl, 4);
    }

    if (baseUrl !== '') {
        metric.serverCountMetric.labels(baseUrl).inc();
        const stopReqSummaryTimer = metric.reqDurationSummaryMetric.labels(baseUrl).startTimer();
        const stopReqHistogramTimer = metric.reqDurationHistogramMetric.labels(baseUrl).startTimer();
        res.on('finish', () => {
            stopReqSummaryTimer();
            stopReqHistogramTimer();
            statusCodeController(res.statusCode, baseUrl);
        });
    }
    next();
};

// Metrics endpoint
const prometheusController = async (req, res) => {
    try {
        res.set('Content-Type', metric.register.contentType);
        res.end(await metric.register.metrics());
    } catch (err) {
        const errMsg = `Error while fetching prometheus metrics: ${err}`;
        res.status(500).end(errMsg);
    }
};

// Health check endpoint

const healthCheckController = (req, res) => {
    res.end('server up');
};

module.exports = {
    metricsMiddleware,
    prometheusController,
    testMetricsController,
    healthCheckController,
};
