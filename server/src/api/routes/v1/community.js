const CommunityRouter = require('express').Router();

const { communityController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

// verify jwt from vanilla on initial community login page load
CommunityRouter.get('/login', asyncFnMiddleware(communityController.verifyJwt));

// start custom challenge using phone number
CommunityRouter.post('/login', asyncFnMiddleware(communityController.signInWithPhoneNum));

// verify custom challenge using otp
CommunityRouter.post('/custom-challenge', asyncFnMiddleware(communityController.verifyCustomChallenge));

// check if user is on waitlist and if yes, create user in cognito user pool
CommunityRouter.post('/waitlist', asyncFnMiddleware(communityController.createCognitoUser));

module.exports = {
    CommunityRouter,
};
