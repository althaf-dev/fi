/**
 * @file File that initiates profiling using pyroscope
 */

const Pyroscope = require('@pyroscope/nodejs');

const { logger } = require('../../utils/logger');

let isProfilingEnabledCurrently = false;

const startProfiling = () => {
    const fnName = 'startProfiling';

    try {
        Pyroscope.init({
            serverAddress: process.env.PYROSCOPE_SERVER_ADDRESS,
            appName: process.env.PYROSCOPE_APPLICATION_NAME,
        });
        Pyroscope.startCpuProfiling();
        Pyroscope.startHeapProfiling();
        isProfilingEnabledCurrently = true;
        logger.log('info', 'successfully started profiling using pyroscope', { method: fnName });
    } catch (error) {
        logger.log('error', 'error occurred while starting profiling in pyroscope', {
            method: fnName,
            error: JSON.stringify(error),
        });
    }
};

const profilingMiddleware = async (req, res, next) => {
    const fnName = 'profilingMiddleware';

    try {
        const { enableContinuousProfiling } = res.locals.consulData.serverMetaData;

        // If value in consul is set to true to enable continuous profiling
        if (enableContinuousProfiling) {
            // If in the current state of the server, profiling is off, start profiling again
            if (!isProfilingEnabledCurrently) {
                Pyroscope.startCpuProfiling();
                Pyroscope.startHeapProfiling();
            }

            isProfilingEnabledCurrently = true;

            next();
            return;
        }

        // value in consul is set to false to disable continuous profiling
        // If in the current state of the server, profiling is on, stop profiling
        if (isProfilingEnabledCurrently) {
            Pyroscope.stopCpuProfiling();
            Pyroscope.stopHeapProfiling();
        }

        isProfilingEnabledCurrently = false;

        next();
    } catch (error) {
        logger.log('error', 'error occurred in profiling middleware', {
            method: fnName,
            error: JSON.stringify(error),
        });
    }
};

module.exports = {
    startProfiling,
    profilingMiddleware,
};
