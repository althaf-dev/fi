/**
 * @file webfe proto grpc client APIs
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { WEB_FE_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.WAITLIST_SERVICE_PATH,
    PROTO_PATH: WEB_FE_PROTO_PATH,
    packageKeys: ['webfe'],
    serviceKey: 'Webfe',
});

// generate mobile otp
const generateMobileOtp = (requestParams) => new Promise((resolve, reject) => {
    client.GeneratePhoneOtp(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

// verify mobile otp
const verifyMobileOtp = (requestParams) => new Promise((resolve, reject) => {
    client.VerifyPhoneOtp(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

// generate email otp
const generateEmailOtp = (requestParams) => new Promise((resolve, reject) => {
    client.GenerateEmailOtp(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

// verify email otp
const verifyEmailOtp = (requestParams) => new Promise((resolve, reject) => {
    client.VerifyEmailOtp(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

// send app link to whatsapp
const sendAppLinKToUser = (requestParams) => new Promise((resolve, reject) => {
    client.SendAppLinkToUser(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

// generic function to call a RPC. We do not need to create new functions for each RPC
const makeRpcCall = (requestParams, rpcName) => new Promise((resolve, reject) => {
    client[rpcName](requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    generateMobileOtp,
    verifyMobileOtp,
    generateEmailOtp,
    verifyEmailOtp,
    sendAppLinKToUser,
    makeRpcCall,
};
