/**
 * @file Manages the client to expose the RPCs for b2b domain whitelisting
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { DOMAIN_WHITE_LISTING_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.USER_SERVICE_PATH,
    PROTO_PATH: DOMAIN_WHITE_LISTING_PROTO_PATH,
    packageKeys: ['employment'],
    serviceKey: 'Employment',
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    makeRpcCall,
};
