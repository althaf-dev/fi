/**
 * for reference - https://expressjs.com/en/guide/error-handling.html
 * https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139
 */

const { logger } = require('../../utils/logger');

// determine if rawError is passed and convert to string if required
const formatRawError = (rawError) => {
    const errorStack = rawError.stack;

    return JSON.stringify({
        rawError,
        errorStack,
    });
};

// logs the error and sends back error response
// eslint-disable-next-line no-unused-vars
const errHandler = async (err, req, res, next) => { // do not remove next middleware from here
    let rawError = null;

    if (err.rawError) {
        const { enableRawError } = res.locals.consulData.serverMetaData;

        if (enableRawError) rawError = formatRawError(err.rawError);
    }

    if (err.ctrl) {
        logger.log('error', `error in ${err.ctrl} controller`, {
            method: err.fn,
            error: err.description,
            rawError,
        });
    }

    const { statusCode = 500 } = err;

    // send back error response
    return res.status(statusCode).send({
        success: false,
        code: statusCode,
        message: err.message,
        description: err.description,
        ...err.extraParams,
    });
};

module.exports = {
    errHandler,
};
