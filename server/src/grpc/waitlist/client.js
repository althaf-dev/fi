const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { WAITLIST_PROTO_PATH } = require('../PROTO_PATH');

const { client: waitlistClient } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.WAITLIST_SERVICE_PATH,
    PROTO_PATH: WAITLIST_PROTO_PATH,
    packageKeys: ['waitlist'],
    serviceKey: 'Waitlist',
});

const fetchConsent = () => new Promise((resolve, reject) => {
    waitlistClient.FetchConsent(
        null,
        handleGrpcResponse(resolve, reject),
    );
});

const generateOTP = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GenerateOTP(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const verifyOTP = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.VerifyOTP(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const verifyEmployer = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.VerifyEmployer(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const searchCompany = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.SearchCompany(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const checkReferralCode = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.CheckReferralCode(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getUserAllGoldenTicket = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetGoldenTickets(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const generateLoginOtp = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.LoginGenerateOTP(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const updateEmailAddress = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.UpdateEmailAddress(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getEmailAddress = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetEmailAddress(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getWaitlistedStatus = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetWaitlistedStatus(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const storeFreelancerDetails = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.AddFreelancerData(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const addCBODetails = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.AddCBOData(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getCBOReferralCode = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetShareCBOCode(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const verifyCBOReferralCode = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.MarkCBOVouch(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getUserName = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetName(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const generateCommunityOtp = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GenerateCommunityLoginOtp(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const verifyCommunityOtp = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.VerifyCommunityLoginOtp(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getFiniteCode = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetFiniteCode(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const addDeviceOS = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.RecordUserDeviceOs(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getWaitlistUserDetails = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetWaitlistUserDetails(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getUserDetailsForCommunity = (requestParams) => new Promise((resolve, reject) => {
    waitlistClient.GetUserDetailsForCommunity(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

module.exports = {
    fetchConsent,
    checkReferralCode,
    generateOTP,
    verifyOTP,
    verifyEmployer,
    searchCompany,
    getUserAllGoldenTicket,
    generateLoginOtp,
    updateEmailAddress,
    getEmailAddress,
    getWaitlistedStatus,
    storeFreelancerDetails,
    addCBODetails,
    getCBOReferralCode,
    verifyCBOReferralCode,
    getUserName,
    generateCommunityOtp,
    verifyCommunityOtp,
    getFiniteCode,
    addDeviceOS,
    getWaitlistUserDetails,
    getUserDetailsForCommunity,
};
