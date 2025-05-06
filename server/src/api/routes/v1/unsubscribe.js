const UnsubscribeRouter = require('express').Router();

const { unsubscribeController } = require('../../controllers');

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

UnsubscribeRouter.post('/', asyncFnMiddleware(unsubscribeController.postPreferences));

UnsubscribeRouter.get('/areas', asyncFnMiddleware(unsubscribeController.getPreferences));

module.exports = {
    UnsubscribeRouter,
};
