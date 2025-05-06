const grpc = require('@grpc/grpc-js');

const success = (res, data, code = 200, message = 'Successfully Done!!') => {
    const responseObj = {
        code,
        message,
        data: data || null,
        success: true,
    };

    return res.status(code).json(responseObj);
};

const error = (
    res,
    err,
    code = 500,
    message = 'Oops! Some error occurred',
    other = {},
) => {
    const responseObj = {
        code,
        error: {
            message,
            ...other,
        },
    };

    return res.status(code).json(responseObj);
};

//  grpc unexpected error handler
const grpcErrorHandler = (errorReq) => {
    let statusCode;
    let message;
    let description;

    if (errorReq.description) {
    // User thrown error will always have description
        statusCode = 400;
        message = errorReq.message;
        description = errorReq.description;
    }

    switch (errorReq.code) {
        case grpc.status.INVALID_ARGUMENT:
        case grpc.status.FAILED_PRECONDITION:
        case grpc.status.OUT_OF_RANGE:
            statusCode = 400;
            message = 'Bad Request';
            description = errorReq.message;
            break;
        case grpc.status.UNAUTHENTICATED:
            statusCode = 401;
            message = 'Unauthorized';
            description = errorReq.message;
            break;
        case grpc.status.PERMISSION_DENIED:
            statusCode = 403;
            message = 'Permission Denied';
            description = errorReq.message;
            break;
        case grpc.status.NOT_FOUND:
            statusCode = 404;
            message = 'Not Found';
            description = errorReq.message;
            break;
        case grpc.status.ALREADY_EXISTS:
        case grpc.status.ABORTED:
            statusCode = 409;
            message = 'Conflict';
            description = errorReq.message;
            break;
        case grpc.status.RESOURCE_EXHAUSTED:
            statusCode = 429;
            message = 'Too Many Requests';
            description = errorReq.message;
            break;
        case grpc.status.CANCELLED:
            statusCode = 499;
            message = 'Client Closed Request';
            description = errorReq.message;
            break;
        case grpc.status.INTERNAL:
            statusCode = 500;
            message = 'Internal Server Error';
            description = errorReq.message;
            break;
        case grpc.status.UNIMPLEMENTED:
            statusCode = 501;
            message = 'Not Implemented';
            description = errorReq.message;
            break;
        case grpc.status.UNAVAILABLE:
            statusCode = 503;
            message = 'Service Unavailable';
            description = errorReq.message;
            break;
        case grpc.status.DEADLINE_EXCEEDED:
            statusCode = 504;
            message = 'Gateway Timeout';
            description = errorReq.message;
            break;
        default:
            statusCode = 500; // Internal Server Error (for unhandled status codes)
            message = 'Internal Server Error';
            description = 'An unknown error occurred';
    }

    return {
        statusCode,
        message,
        description,
    };
};

module.exports = {
    success,
    error,
    grpcErrorHandler,
};
