/**
 * @file Manages the router to expose the endpoints for us stocks service
 */

const USStocksRouter = require('express').Router();

const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

const { usStocksController } = require('../../controllers');

const URLS_MAP = {
    STOCKS_DETAILS: '/stocks-details',
    COLLECTIONS: '/collections',
    SYMBOL_HISTORICAL_PRICES: '/symbol-historical-prices',
    SYMBOL_UPDATES: '/symbol-updates',
    SYMBOL_DECISION_FACTORS: '/symbol-decision-factors',
    SYMBOL_VALIDATION: '/symbol-validation',
};

// get us stocks details
USStocksRouter.get(`${URLS_MAP.STOCKS_DETAILS}`, asyncFnMiddleware(usStocksController.getGeneralCollectionDetails));

// get us stocks collections
USStocksRouter.get(`${URLS_MAP.COLLECTIONS}`, asyncFnMiddleware(usStocksController.getCollectionList));

// get symbol historical prices
USStocksRouter.get(`${URLS_MAP.SYMBOL_HISTORICAL_PRICES}`, asyncFnMiddleware(usStocksController.getSymbolHistoricalPrices));

// get symbol historical prices
USStocksRouter.get(`${URLS_MAP.SYMBOL_UPDATES}`, asyncFnMiddleware(usStocksController.getSymbolUpdates));

// get symbol decision factors
USStocksRouter.get(`${URLS_MAP.SYMBOL_DECISION_FACTORS}`, asyncFnMiddleware(usStocksController.getSymbolDesisionFactors));

// get stock id for symbol
USStocksRouter.get(`${URLS_MAP.SYMBOL_VALIDATION}`, asyncFnMiddleware(usStocksController.getStockForSymbol));

module.exports = {
    USStocksRouter,
};
