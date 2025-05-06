/**
 * @file Manages the client to expose the RPCs for b2b
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { SALARY_B2B_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.CX_SERVICE_PATH,
    PROTO_PATH: SALARY_B2B_PROTO_PATH,
    packageKeys: ['cx', 'data_collector', 'salaryprogram', 'salaryb2b'],
    serviceKey: 'SalaryB2B',
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    makeRpcCall,
};
