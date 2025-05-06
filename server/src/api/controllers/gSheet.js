const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

const { getFormattedDateAndTime } = require('../../utils/dateFormatter');

const { COMMON_ERR_MSG_MAP } = require('./constants');

// controller key
const CTRL_KEY = 'gSheet';

const ERROR_MSG_MAP = {
    salaryB2bData: 'Failed to submit salary progam details',
};

const GOOGLE_SHEET_AUTH_URL = 'https://www.googleapis.com/auth/spreadsheets';

const submitEmployerData = async (req, res, next) => {
    const submissionDateAndTime = getFormattedDateAndTime(new Date());

    try {
        const gSheetCreds = req.app.locals.gSheetCredentials;
        const {
            name, department, company, workEmailId, number, employeeStrength,
        } = req.body;

        const auth = await new GoogleAuth({ scopes: 'https://www.googleapis.com/auth/spreadsheets' }).fromJSON(gSheetCreds.serviceAccount);

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [name, department, company, workEmailId, number, employeeStrength, submissionDateAndTime],
        ];

        const resource = { values };

        await sheets.spreadsheets.values.append({
            spreadsheetId: gSheetCreds.gSheetId, resource, range: 'A:G', insertDataOption: 'INSERT_ROWS', valueInputOption: 'RAW',
        });

        res.send('Data inserted successfully');
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to submit employer data',
            ctrl: 'gSheet',
            fn: 'submitEmployerData',
        });
    }
};

const submitHousingData = async (req, res, next) => {
    try {
        const gSheetCreds = req.app.locals.gSheetCredentials;
        const {
            name, number, emailId,
        } = req.body;

        const auth = await new GoogleAuth({ scopes: 'https://www.googleapis.com/auth/spreadsheets' }).fromJSON(gSheetCreds.serviceAccount);

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [name, emailId, number],
        ];

        const resource = { values };

        await sheets.spreadsheets.values.append({
            // eslint-disable-next-line max-len
            spreadsheetId: gSheetCreds.gSheetIdHousingProject, resource, range: 'A:C', insertDataOption: 'INSERT_ROWS', valueInputOption: 'RAW',
        });

        res.send('Data inserted successfully');
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to submit housing data',
            ctrl: 'gSheet',
            fn: 'submitHousingData',
        });
    }
};

const salaryB2bData = async (req, res, next) => {
    const fnName = 'salaryB2bData';

    try {
        const gSheetCreds = req.app.locals.gSheetCredentials;
        const submissionDateAndTime = getFormattedDateAndTime(new Date());
        const {
            name, company, workEmailId, number,
        } = req.body;

        if (!name || !company || !workEmailId || !number) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.MANDATORY_PARAMS,
            });

            return;
        }

        const auth = await new GoogleAuth({ scopes: GOOGLE_SHEET_AUTH_URL }).fromJSON(gSheetCreds.serviceAccount);

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [name, company, workEmailId, number, submissionDateAndTime],
        ];

        const resource = { values };

        await sheets.spreadsheets.values.append({
            spreadsheetId: gSheetCreds.gSheetIdSalaryb2bFlow, resource, range: 'A:E', insertDataOption: 'INSERT_ROWS', valueInputOption: 'RAW',
        });

        res.send('Successfully submitted information');
    } catch (error) {
        next({
            fn: fnName,
            message: error.message,
            description: error.description,
            rawError: error,
            ctrl: CTRL_KEY,
        });
    }
};

module.exports = {
    submitEmployerData,
    submitHousingData,
    salaryB2bData,
};
