/**
 * Main route definitions for external api's.
 * Note: When a new route is added, edit the file: server/utils/prometheus/service-endpoint-map.js
 * Please add the route in the existing service arrays or create a new one if needed.
 */

const ExternalApiRouter = require('express').Router();

const { ExternalCommunityRouter } = require('./v1/community');

ExternalApiRouter.use('/v1/community', ExternalCommunityRouter);

module.exports = {
    ExternalApiRouter,
};
