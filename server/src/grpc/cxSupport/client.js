const { handleGrpcResponse } = require('../../utils/GrpcHelper');

const { getRpcServiceAndClient } = require('../utils');
const { CX_ISSUE_RESOLUTION_FEEDBACK_PROTO_PATH } = require('../PROTO_PATH');

const { client } = getRpcServiceAndClient({
    SERVICE_PATH: process.env.CX_SERVICE_PATH,
    PROTO_PATH: CX_ISSUE_RESOLUTION_FEEDBACK_PROTO_PATH,
    packageKeys: ['cx', 'issue_resolution_feedback'],
    serviceKey: 'IssueResolutionFeedbackService',
});

const verifyIssueResolutionFeedback = (requestParams) => new Promise((resolve, reject) => {
    client.PushIssueResolutionFeedback(requestParams, handleGrpcResponse(resolve, reject));
});

module.exports = {
    verifyIssueResolutionFeedback,
};
