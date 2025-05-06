const { handleGrpcResponse } = require('../../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../../utils');
const { INSIGHTS_EMAIL_PARSER_PROTO_PATH } = require('../../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.INSIGHTS_SERVICE_PATH,
    PROTO_PATH: INSIGHTS_EMAIL_PARSER_PROTO_PATH,
    packageKeys: ['insights', 'emailparser'],
    serviceKey: 'EmailParser',
});

const getUserSpendingData = (requestParams) => new Promise((resolve, reject) => {
    client.GetUserSpendingData(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getMailSyncStatus = (requestParams) => new Promise((resolve, reject) => {
    client.GetWaitlistUserMailSyncStatus(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getUserSpendInfo = (requestParams) => new Promise((resolve, reject) => {
    client.GetUserSpendsBatch(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const deleteUserSpendInfo = (requestParams) => new Promise((resolve, reject) => {
    client.DeleteSpendsDataForWaitlistUser(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

module.exports = {
    getUserSpendingData,
    getMailSyncStatus,
    getUserSpendInfo,
    deleteUserSpendInfo,
};
