const CxCustomerAuthCallbackClient = require('../../grpc/cxCustomerAuthCallback/client');
const { grpcErrorHandler } = require('../../utils/ResponseWrapper');

const verifyEmail = async (req, res, next) => {
    try {
        const { requestId, hash } = req.body;
        const requestPayload = {
            request_id: requestId,
            hash,
        };

        await CxCustomerAuthCallbackClient.verifyEmail(requestPayload);

        res.send({ success: true });
    } catch (error) {
        const { statusCode, message, description } = grpcErrorHandler(error);
        next({
            description,
            message,
            statusCode,
            ctrl: 'customerAuth',
            fn: 'verifyEmail',
            rawError: error,
        });
    }
};

module.exports = {
    verifyEmail,
};
