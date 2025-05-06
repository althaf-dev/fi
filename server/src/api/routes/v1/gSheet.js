const GsheetRouter = require('express').Router();

const { gSheetController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

const URLS_MAP = {
    EMPLOYER_DATA: '/employer-data',
    HOUSING_DATA: '/housing-data',
    SALARY_B2B_DATA: '/salary-b2b-data',
};

GsheetRouter.post(URLS_MAP.EMPLOYER_DATA, asyncFnMiddleware(gSheetController.submitEmployerData));
GsheetRouter.post(URLS_MAP.HOUSING_DATA, asyncFnMiddleware(gSheetController.submitHousingData));
GsheetRouter.post(URLS_MAP.SALARY_B2B_DATA, asyncFnMiddleware(gSheetController.salaryB2bData));

module.exports = {
    GsheetRouter,
};
