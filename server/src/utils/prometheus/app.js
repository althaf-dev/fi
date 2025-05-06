const express = require('express');
const { prometheusController, healthCheckController } = require('./api');

const initialisePrometheus = () => {
    // Prometheus
    const promApp = express();
    // health check endpoint
    promApp.use('/_health', healthCheckController);
    // Metrics endpoint for scraping
    promApp.use('/metrics', prometheusController);
    const PROM_PORT = process.env.PROMETHEUS_PORT || 9999;
    promApp.listen(PROM_PORT);
    console.log(`prometheus server started on port ${PROM_PORT}`);
};

module.exports = {
    initialisePrometheus
};
