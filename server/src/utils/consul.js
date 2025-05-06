/**
 * consul client for node server
 * exposes the client to key-value pairs which can be changed dynamically
 */

const consul = require('consul')({ promisify: true });
const { logger } = require('./logger');

const getConsulKVInfo = async (key) => {
    let value;

    try {
        const { APP_ENV } = process.env;
        const kvInfo = await consul.kv.get(`${APP_ENV}/web/${key}`);

        value = kvInfo && JSON.parse(kvInfo.Value);
    } catch (error) {
        logger.log('error', 'error while fetching key-value pair from consul', {
            method: 'getConsulKVInfo',
            error: `${error}`,
            key,
        });
    }

    return value;
};

module.exports = {
    getConsulKVInfo,
};
