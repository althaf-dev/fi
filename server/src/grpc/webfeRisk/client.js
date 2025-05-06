/**
 * @file webfe proto grpc client APIs
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { WEBFE_RISK } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.WAITLIST_SERVICE_PATH,
    PROTO_PATH: WEBFE_RISK,
    packageKeys: ['webfe', 'risk'],
    serviceKey: 'Risk',
});

const getEscalationForm = (requestParams) => new Promise((resolve, reject) => {
    client.GetForm(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    getEscalationForm,
    makeRpcCall,
};
