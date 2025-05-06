/**
 * External api routes required for community login flow
 * These api's are called from lambda functions
 */

const ExternalCommunityRouter = require('express').Router();

const { communityController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

// create and send otp to user
ExternalCommunityRouter.post('/generate-otp', asyncFnMiddleware(communityController.generateOtp));

// verify otp sent by user
ExternalCommunityRouter.post('/verify-otp', asyncFnMiddleware(communityController.verifyOtp));

module.exports = {
    ExternalCommunityRouter,
};
