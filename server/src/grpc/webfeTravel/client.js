/**
 * @file webfe travel proto grpc client APIs
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { WEBFE_TRAVEL } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.FRONTEND_SERVICE_PATH,
    PROTO_PATH: WEBFE_TRAVEL,
    packageKeys: ['webfe', 'travel'],
    serviceKey: 'TravelBudget',
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    makeRpcCall,
};
