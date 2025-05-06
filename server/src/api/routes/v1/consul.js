const ConsulRouter = require('express').Router();

const { consulController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

ConsulRouter.get('/', asyncFnMiddleware(consulController.getDynamicConsulData));

module.exports = {
    ConsulRouter,
};
