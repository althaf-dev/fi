const { handleGrpcResponse } = require('../../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../../utils');
const { INAPPHELP_FAQ_PROTO_PATH } = require('../../PROTO_PATH');

const { client: faqClient } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.CX_SERVICE_PATH,
    PROTO_PATH: INAPPHELP_FAQ_PROTO_PATH,
    packageKeys: ['inapphelp', 'faq', 'serving'],
    serviceKey: 'ServeFAQ',
});

const getAllCategories = (requestParams) => new Promise((resolve, reject) => {
    faqClient.GetAllCategories(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getAllFoldersInCategory = (requestParams) => new Promise((resolve, reject) => {
    faqClient.GetAllFoldersInCategory(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

const getAllArticlesInFolder = (requestParams) => new Promise((resolve, reject) => {
    faqClient.GetAllArticlesInFolder(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

module.exports = {
    getAllCategories,
    getAllFoldersInCategory,
    getAllArticlesInFolder,
};
