const AWS = require('aws-sdk');
const { pathOr } = require('ramda');

const { logger } = require('../utils/logger');

const AWS_REGION = 'ap-south-1';

const getSecret = (secretId) => {
    logger.log('info', 'in aws get secret method', { method: 'getSecret', secretId });

    // get new instance of secret manager
    const client = new AWS.SecretsManager({ region: AWS_REGION });

    // get secret value
    return new Promise((resolve, reject) => {
        try {
            client.getSecretValue({ SecretId: secretId }, (err, data) => {
                if (err) {
                    logger.log('error', `error while fetching secret from aws secret manager: ${err.code} ${err.message}`, { method: 'getSecret' });
                    reject(err.message);
                } else {
                    logger.log('info', 'success while fetching secret from aws secret manager', { method: 'getSecret' });
                    resolve(pathOr(null, ['SecretString'], data));
                }
            });
        } catch (error) {
            logger.log('error', 'error while fetching secret from aws secret manager - catch block', { method: 'getSecret' });
            reject(error);
        }
    });
};

module.exports = {
    getSecret,
};
