/**
 * Prometheus node js client library for recording metrics of this server.
 * It collects default metrics mentioned here - https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors
 * Following metrics are collected:
 * 1. CPU Usage
 * 2. Memory Usage
 * 3. Total Server Visit Count
 * 4. Request Duration
 * 5. Throughput ( req / sec )
 * 6. Different Status Code Count
 */
const client = require('prom-client');
// Create a Registry which registers the metrics
const register = new client.Registry();
// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'web-nodejs-server',
});

// Metric definitions
// Enable the collection of default metrics
client.collectDefaultMetrics({ register });
// Register all server visit counts
const serverCountMetric = new client.Counter({
    name: 'server_visit_counts',
    help: 'Number of times server has been hit',
    labelNames: ['endpoint'],
});
// Summary metric for measuring request durations
// Used for measuring request duration
const reqDurationSummaryMetric = new client.Summary({
    name: 'app_summary_request_duration_seconds',
    help: 'Summary of request durations',
    percentiles: [0.5, 0.75, 0.9, 0.95, 0.99],
    labelNames: ['endpoint'],
});
// Histogram metric for measuring request durations
// Use for measuring throughput
const reqDurationHistogramMetric = new client.Histogram({
    name: 'app_histogram_request_duration_seconds',
    help: 'Histogram of request durations',
    buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 0.8, 1, 1.2, 1.5, 3, 5, 8, 10],
    labelNames: ['endpoint'],
});
// 2xx, 3xx, 4xx, 5xx count metrics
const status2xxMetric = new client.Counter({
    name: 'status_2xx_counts',
    help: 'Number of 2xx status responses',
    labelNames: ['endpoint'],
});
const status3xxMetric = new client.Counter({
    name: 'status_3xx_counts',
    help: 'Number of 3xx status responses',
    labelNames: ['endpoint'],
});
const status4xxMetric = new client.Counter({
    name: 'status_4xx_counts',
    help: 'Number of 4xx status responses',
    labelNames: ['endpoint'],
});
const status5xxMetric = new client.Counter({
    name: 'status_5xx_counts',
    help: 'Number of 5xx status responses',
    labelNames: ['endpoint'],
});
// For logging status codes at service level like CX, Insights service etc.
const serviceLvlMetric = new client.Counter({
    name: 'service_level_status',
    help: 'Records http status codes at service level',
    labelNames: ['service_name', 'status_code'],
});

const domainMetric = new client.Counter({
    name: 'domain_counter',
    help: 'Records domain count',
    labelNames: ['domain'],
});

// Register all the metrics
register.registerMetric(serverCountMetric);
register.registerMetric(reqDurationSummaryMetric);
register.registerMetric(reqDurationHistogramMetric);
register.registerMetric(status2xxMetric);
register.registerMetric(status3xxMetric);
register.registerMetric(status4xxMetric);
register.registerMetric(status5xxMetric);
register.registerMetric(serviceLvlMetric);
register.registerMetric(domainMetric);

module.exports = {
    register,
    serverCountMetric,
    reqDurationSummaryMetric,
    reqDurationHistogramMetric,
    status2xxMetric,
    status3xxMetric,
    status4xxMetric,
    status5xxMetric,
    serviceLvlMetric,
    domainMetric,
};
