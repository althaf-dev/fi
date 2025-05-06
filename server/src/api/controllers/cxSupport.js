const CxSupportClient = require('../../grpc/cxSupport/client');

const getIssueResolutionValue = (response, answer) => {
    const { is_feedback_comms_valid, is_feedback_exists, response_meta } = response;

    const additionalInfo = response[response_meta];

    // feedback is not valid
    if (is_feedback_comms_valid !== 'TRUE') return 'invalid';

    // feedback is valid and already recorded
    if (is_feedback_exists === 'TRUE') return 'already-recorded';

    // feedback not recorded yet and answer is yes
    if (answer === 'yes') return 'yes';

    // answer is no and txn type is p2p
    if (additionalInfo.transaction_type === 'TRANSACTION_TYPE_P2P') return 'no-p2p';

    // answer is no and txn type is p2m, default response as well
    if (additionalInfo.transaction_type === 'TRANSACTION_TYPE_P2M') return 'no';

    // default, unhandled case
    return 'error';
};

const verifyIssueResolutionFeedback = async (req, res, next) => {
    try {
        const { ticketId, answer } = req.body;
        const requestPayload = {
            ticket_id: ticketId,
            response: answer,
        };

        const response = await CxSupportClient.verifyIssueResolutionFeedback(requestPayload);

        const { response_meta } = response;

        const additionalInfo = response[response_meta];
        const issueResolutionFeedback = getIssueResolutionValue(response, answer);

        res.send({
            issueResolutionFeedback,
            additionalInfo,
        });
    } catch (error) {
        const extraParams = {};

        if (error.code === 13) {
            extraParams.issueResolutionFeedback = 'error';
        }

        next({
            description: error.message,
            message: 'Failed to verify the issue resolution feedback',
            ctrl: 'issueResolution',
            fn: 'verifyIssueResolutionFeedback',
            extraParams,
        });
    }
};

module.exports = {
    verifyIssueResolutionFeedback,
};
