const { handleGrpcResponse } = require('../../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../../utils');
const { INSIGHTS_ACCESS_INFO_PROTO_PATH } = require('../../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.INSIGHTS_SERVICE_PATH,
    PROTO_PATH: INSIGHTS_ACCESS_INFO_PROTO_PATH,
    packageKeys: ['insights', 'accessinfo'],
    serviceKey: 'AccessInfo',
});

const addEmailAccessInfo = (requestParams) => new Promise((resolve, reject) => {
    client.AddEmailAccessInfo(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getEmailId = (requestParams) => new Promise((resolve, reject) => {
    client.GetEmailIdForWaitlistUser(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

module.exports = {
    addEmailAccessInfo,
    getEmailId,
};
