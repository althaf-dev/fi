const { getSecret } = require('../secretManager/aws');

const initialiseGoogleSheetCredentials = async (app) => {
    let credentials = {};

    // if local env
    if (process.env.APP_ENV === 'development') {
        // get service account credentials from env variables
        credentials = process.env.SALARY_ACC_GSHEET_CREDS && JSON.parse(process.env.SALARY_ACC_GSHEET_CREDS);
    } else {
        // get service account credentials from secret manager
        const secretName = process.env.SALARY_ACC_GSHEET_CREDS_SECRET;
        const secretString = await getSecret(secretName);
        credentials = JSON.parse(secretString);
    }

    // eslint-disable-next-line no-param-reassign
    app.locals.gSheetCredentials = credentials;
};

module.exports = { initialiseGoogleSheetCredentials };
