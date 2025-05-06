const { handleGrpcResponse } = require('../../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../../utils');
const { INAPPHELP_RECENT_ACTIVITY_PROTO_PATH } = require('../../PROTO_PATH');

const { client: recentActivityClient } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.CX_SERVICE_PATH,
    PROTO_PATH: INAPPHELP_RECENT_ACTIVITY_PROTO_PATH,
    packageKeys: ['serving'],
    serviceKey: 'RecentActivity',
});

const getRelatedFaqs = (requestParams) => new Promise((resolve, reject) => {
    recentActivityClient.FetchRelatedFaq(
        requestParams,
        handleGrpcResponse(resolve, reject),
    );
});

module.exports = {
    getRelatedFaqs,
};
