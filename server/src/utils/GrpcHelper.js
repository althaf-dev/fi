const protoLoader = require('@grpc/proto-loader');
const { pathOr } = require('ramda');

const { logger } = require('./logger');

// eslint-disable-next-line arrow-body-style
const getPackageDefinition = (protoPath) => {
    return protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [
            process.env.PROTOS_PATH,
            'node_modules/google-proto-files',
        ],
    });
};

const handleGrpcResponse = (resolve, reject) => (err, response) => {
    let errLabel = '';
    let errCode;
    let status;
    let extraParams;

    if (err) {
        if (process.env.APP_ENV === 'development') {
            logger.log('error', 'error in calling grpc method', { err });
        }

        errLabel = pathOr(err, ['details'], err);

        logger.log('error', 'error in calling grpc method', {
            error: errLabel,
            method: 'handleGrpcResponse',
        });
    } else if (
        response.status === null
        || (response.status && response.status.code !== 0 && response.status.code !== 6)
        // grpc response status 6 if the entity already exists and is not an error
    ) {
        ({ status, ...extraParams } = response);

        const debugMessage = pathOr('', ['debug_message'], status);
        const shortMessage = pathOr('', ['short_message'], status);

        errLabel = debugMessage || shortMessage;
        errCode = pathOr('', ['status', 'code'], response);

        logger.log('error', 'error returned by grpc method', {
            error: errLabel,
            statusCode: errCode,
            method: 'handleGrpcResponse',
        });
    }

    if (errLabel || errCode) {
        reject({ message: errLabel, code: errCode, extraParams });
    } else {
        if (process.env.APP_ENV === 'development') {
            logger.log('info', 'response', { response });
        }

        resolve(response);
    }
};

module.exports = {
    getPackageDefinition,
    handleGrpcResponse,
};
