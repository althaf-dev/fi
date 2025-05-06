const CustomerAuthRouter = require('express').Router();

const { customerAuthController } = require('../../controllers');

// verify email
CustomerAuthRouter.post('/verify-email', customerAuthController.verifyEmail);

module.exports = {
    CustomerAuthRouter,
};
