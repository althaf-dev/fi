const MetaInfoRouter = require('express').Router();

const { metaInfoController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

// fetch wealth tnc complaints data
MetaInfoRouter.get('/wealth/tnc/complaints', asyncFnMiddleware(metaInfoController.getWealthTncComplaintsData));

// fetch app related assistance
MetaInfoRouter.get('/app/assistance', asyncFnMiddleware(metaInfoController.getAppAssistanceData));

module.exports = {
    MetaInfoRouter,
};
