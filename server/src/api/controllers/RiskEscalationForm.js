const client = require('../../grpc/webfeRisk/client');
const { success, error, grpcErrorHandler } = require('../../utils/ResponseWrapper');
const { constructPayloadWithRequestHeader, base64ToArrayBuffer } = require('../../utils/commonUtils');
const { htmlToProtoFileType } = require('../../utils/constants');
const { logger } = require('../../utils/logger');

const CTRL_KEY = 'risk-form-escalation';

const errorViewHandler = (res, response, extras = {}) => {
    error(
        res,
        null,
        400,
        response?.resp_header?.error_view?.inline_error_view?.title,
        extras,
    );
};

const getEscalationForm = async (req, res, next) => {
    const fnName = 'getEscalationForm';
    try {
        const { form_id, deviceInfo, auth_token } = req.body;
        const requestHeaders = {
            deviceInfo,
            accessToken: auth_token,
        };
        const requestPayload = { form_id };
        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);
        const rpcName = 'GetForm';
        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        const handledStatusCodes = [0, 3, 5, 13, 101, 102, 103];

        if (handledStatusCodes.includes(response?.resp_header?.status?.code)) {
            success(res, response);
            return;
        }

        // common error handling if status code not eqaul to zero
        errorViewHandler(res, response);
        return;
    } catch (err) {
        const { statusCode, message, description } = grpcErrorHandler(err);
        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: fnName,
            rawError: err,
        });
    }
};

const parsePayload = (fieldResponse) => {
    const responseMap = fieldResponse.map((item) => {
        const {
            file,
        } = item;
        if (file && file.file_content) {
            return {
                ...item,
                file: {
                    file_content: base64ToArrayBuffer(file.file_content),
                    file_content_type: htmlToProtoFileType[file.file_type],
                },
            };
        }
        return { ...item };
    });
    return responseMap;
};

const SubmitEscalationForm = async (req, res, next) => {
    const rpcName = 'SubmitForm';
    try {
        const {
            form_id, field_responses, deviceInfo, accessToken,
        } = req.body;

        const requestHeaders = {
            deviceInfo,
            accessToken,
        };

        const parsedPaylaod = parsePayload(field_responses);

        const requestPayload = {
            form_id,
            field_responses: parsedPaylaod,
        };

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, requestHeaders);

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        errorViewHandler(res, response);
        return;
    } catch (err) {
        const { statusCode, message, description } = grpcErrorHandler(err);
        // this console is added for debugging purpose
        // eslint-disable-next-line no-console
        logger.log('info', rpcName + JSON.stringify(req.body));
        next({
            description,
            message,
            statusCode,
            ctrl: CTRL_KEY,
            fn: rpcName,
            rawError: err,
        });
    }
};

module.exports = {
    getEscalationForm,
    SubmitEscalationForm,
};
