const InsightsRouter = require('express').Router();

const { insightsController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

InsightsRouter.get('/user-spending-data', asyncFnMiddleware(insightsController.getUserSpendingData));
InsightsRouter.get('/mail-sync', asyncFnMiddleware(insightsController.getMailSyncStatus));
InsightsRouter.get('/spend-info', asyncFnMiddleware(insightsController.getUserSpendInfo));
InsightsRouter.delete('/spend-info', asyncFnMiddleware(insightsController.deleteUserSpendInfo));
InsightsRouter.get('/email', asyncFnMiddleware(insightsController.getEmailId));

module.exports = {
    InsightsRouter,
};
