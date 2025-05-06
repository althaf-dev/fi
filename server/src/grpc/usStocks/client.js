/**
 * @file Manages the client to expose the RPCs for us stocks service
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { US_STOCKS_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.FRONTEND_SERVICE_PATH,
    PROTO_PATH: US_STOCKS_PROTO_PATH,
    packageKeys: ['frontend', 'usstocks'],
    serviceKey: 'USStocks',
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

const makeStreamingRpcCall = (requestParams, rpcName) => {
    const stream = client[rpcName](requestParams);

    return stream;
};

module.exports = {
    makeRpcCall,
    makeStreamingRpcCall,
};
