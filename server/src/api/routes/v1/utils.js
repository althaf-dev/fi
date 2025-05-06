const UtilsRouter = require('express').Router();

const { utilsController } = require('../../controllers');

UtilsRouter.get('/uuid', utilsController.getUUID);
// UtilsRouter.get('/lottie-json', utilsController.getLottieJSON);

module.exports = {
    UtilsRouter,
};
