/**
 * @file webfe accounts proto grpc client APIs
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { WEB_FE_ACCOUNTS_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.WAITLIST_SERVICE_PATH,
    PROTO_PATH: WEB_FE_ACCOUNTS_PROTO_PATH,
    packageKeys: ['webfe', 'accounts'],
    serviceKey: 'Accounts',
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    makeRpcCall,
};
