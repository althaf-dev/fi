const client = require('../../grpc/webfeTravel/client');
const { success, error, grpcErrorHandler } = require('../../utils/ResponseWrapper');
const { constructPayloadWithRequestHeader } = require('../../utils/commonUtils');
const { getParsedDateFromTs, getTimestampInSeconds } = require('../../utils/dateFormatter');

const CTRL_KEY = 'travel-budget';

const errorViewHandler = (res, response, extras = {}) => {
    error(
        res,
        null,
        400,
        response?.resp_header?.error_view?.inline_error_view?.title,
        extras,
    );
};

const getDestinations = async (req, res, next) => {
    const fnName = 'getDestinations';
    try {
        const {
            deviceInfo, prospectId,
        } = req.query;

        const payloadWithRequestHeader = constructPayloadWithRequestHeader({}, { deviceInfo, prospectId });

        const rpcName = 'GetTravelDestinations';

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        if (response?.resp_header?.status?.code === 0) {
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

const getForexExchangeRate = async (req, res, next) => {
    const fnName = 'getForexExchangeRate';
    try {
        const {
            deviceInfo, prospectId,
            from_country_code, to_country_code, amount,
        } = req.query;

        const requestPayload = {
            amount: {
                currency_code: from_country_code,
                units: amount,
            },
            from_country_code,
            to_country_code,
        };

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, { deviceInfo, prospectId });
        const rpcName = 'GetForexExchangeRate';

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not equal to zero
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

const getTravelBudget = async (req, res, next) => {
    const fnName = 'getTravelBudget';
    try {
        const {
            country, startDate, endDate, peopleCount, travelStyle, deviceInfo, prospectId,
        } = req.query;

        const requestPayload = {
            expense_data: {
                country,
                start_date: startDate && {
                    seconds: getTimestampInSeconds(startDate),
                },
                end_date: endDate && {
                    seconds: getTimestampInSeconds(endDate),
                },
                people_count: peopleCount,
                travel_style: travelStyle,
            },
        };

        const payloadWithRequestHeader = constructPayloadWithRequestHeader(requestPayload, { deviceInfo, prospectId });

        const rpcName = 'GetTravelExpense';

        const response = await client.makeRpcCall(payloadWithRequestHeader, rpcName);

        if (response?.resp_header?.status?.code === 0) {
            const { start_date, end_date, travel_style } = response?.expense_budget || {};

            response.expense_budget.start_date = getParsedDateFromTs(start_date);
            response.expense_budget.end_date = getParsedDateFromTs(end_date);

            if (travel_style) {
                response.expense_budget.travel_style = {
                    label: travel_style.charAt(0).toUpperCase() + travel_style.slice(1).toLowerCase(),
                    value: travel_style,
                };

                if (travel_style.includes('_UNSPECIFIED')) {
                    response.expense_budget.travel_style = '-';
                }
            }
            success(res, response);
            return;
        }

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

const getCountryLimitData = async (req, res, next) => {
    const fnName = 'getCountryLimitData';
    try {
        const rpcName = 'GetInternationalATMWithdrawalLimits';

        const response = await client.makeRpcCall({}, rpcName);

        if (response?.resp_header?.status?.code === 0) {
            success(res, response);
            return;
        }

        // common error handling if status code not equal to zero
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

module.exports = {
    getDestinations,
    getTravelBudget,
    getCountryLimitData,
    getForexExchangeRate,
};
