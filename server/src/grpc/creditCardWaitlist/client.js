/**
 * @file Credit Card Waitlist protos grpc client
 */

const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { WAITLIST_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.WAITLIST_SERVICE_PATH,
    PROTO_PATH: WAITLIST_PROTO_PATH,
    packageKeys: ['waitlist'],
    serviceKey: 'Waitlist',
});

const createUser = (requestParams) => new Promise((resolve, reject) => {
    client.CreateUser(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const generateOTP = (requestParams) => new Promise((resolve, reject) => {
    client.GenerateOTP(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const verifyOTP = (requestParams) => new Promise((resolve, reject) => {
    client.VerifyOTP(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getUserDetails = (requestParams) => new Promise((resolve, reject) => {
    client.GetUserDetails(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const updateUserDetails = (requestParams) => new Promise((resolve, reject) => {
    client.UpdateUserDetails(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

module.exports = {
    createUser,
    generateOTP,
    verifyOTP,
    getUserDetails,
    updateUserDetails,
};
