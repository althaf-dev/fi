/**
 * @file Routes for DC Travel budget
 */

const TravelBudgetRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');
const { travelController } = require('../../controllers');

TravelBudgetRouter.get('/destinations', asyncFnMiddleware(travelController.getDestinations));

TravelBudgetRouter.get('/budget-calculator', asyncFnMiddleware(travelController.getTravelBudget));

TravelBudgetRouter.get('/country-data', asyncFnMiddleware(travelController.getCountryLimitData));

// get currency exchange rate
TravelBudgetRouter.get('/forex-exchange-rate', asyncFnMiddleware(travelController.getForexExchangeRate));

module.exports = {
    TravelBudgetRouter,
};
