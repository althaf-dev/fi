const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { CX_CUSTOMER_AUTH_CALLBACK_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.CX_SERVICE_PATH,
    PROTO_PATH: CX_CUSTOMER_AUTH_CALLBACK_PROTO_PATH,
    packageKeys: ['cx', 'customer_auth'],
    serviceKey: 'CustomerAuthCallback',
});

const verifyEmail = (requestParams) => new Promise((resolve, reject) => {
    client.VerifyEmailCallback(requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    verifyEmail,
};
