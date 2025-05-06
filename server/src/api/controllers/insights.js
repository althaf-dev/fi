const queryString = require('query-string');

const InsightsEmailParser = require('../../grpc/insights/emailParser/client');
const InsightsAccessInfoClient = require('../../grpc/insights/accessInfo/client');
const {
    getFormattedDate,
    addOrSubtractDays,
    allMonthArr,
    monthNameArr,
} = require('../../utils/dateFormatter');
const { logger } = require('../../utils/logger');
const { getStringUUID } = require('../../utils/UUIDService');
const { PLATFORMS, DUMMY_INSIGHTS_SPEND_INFO_RESPONSE, DUMMY_INSIGHTS_SPEND_INFO_ALL_MONTHS_RESPONSE } = require('../../utils/constants');
const { getPlatformCookie } = require('../../utils/cookies');

const getUserSpendingData = async (req, res) => {
    const { merchant, fromDate, toDate } = req.query;
    const actorId = req.cookies.uuid;
    const formattedFromDate = getFormattedDate(fromDate);
    const formattedToDate = getFormattedDate(toDate);

    if (!merchant || !actorId || !formattedFromDate || !formattedToDate) {
        // Send Default Response
        res.status(200).send({
            merchant: +merchant,
            amountSpent: 0,
            totalOrder: 0,
        });
    } else {
        const requestPayload = {
            merchant: +merchant,
            actor_id: actorId,
            from_date: formattedFromDate,
            to_date: formattedToDate,
        };

        try {
            const response = await InsightsEmailParser.getUserSpendingData(requestPayload);
            const data = {
                merchant: +merchant,
                amountSpent: response.amount_spent,
                totalOrder: response.total_orders,
            };
            res.status(200).send(data);
        } catch (error) {
            logger.log('error', 'error in insights controller', {
                method: 'getUserSpendingData',
                error,
            });

            // send default response
            res.status(200).send({
                merchant: +merchant,
                amountSpent: 0,
                totalOrder: 0,
            });
        }
    }
};

const getMailSyncStatus = async (req, res) => {
    try {
        /* flow for WEB platform */
        const platform = getPlatformCookie(req);

        if (platform === PLATFORMS.WEB) {
            // dummy response for WEB platform
            res.send({ progress: 100 });
            return;
        }
        /* end flow for WEB platform */

        const { quarter } = req.query;
        const { access_token } = req.cookies;

        const qtr = parseInt(quarter, 10);
        const qtrArr = [];

        for (let i = 0; i < qtr; i += 1) {
            qtrArr.push(i + 1);
        }

        const requestPayload = {
            access_token,
            time_divisions: qtrArr,
        };

        const response = await InsightsEmailParser.getMailSyncStatus(requestPayload);

        res.send({
            progress: response.sync_percent,
        });
    } catch (error) {
        logger.log('error', 'error in insights controller', {
            method: 'getMailSyncStatus',
            error,
        });

        res.status(500).send({
            message: 'Failed to get mail sync status',
            success: false,
        });
    }
};

const getUserSpendInfo = async (req, res) => {
    try {
        const stringifiedParams = queryString.stringify(req.query);
        const queryParams = queryString.parse(stringifiedParams, {
            parseBooleans: true,
            parseNumbers: true,
            arrayFormat: 'comma',
        });
        const {
            quarter,
            merchants,
            categories,
            allMerchants,
            allCategories,
            allMonths,
        } = queryParams;
        const { access_token } = req.cookies;

        let merchantArr;
        let categoryArr;
        const requestIdArr = [];
        const requestArr = [];

        if (allMerchants) {
            /**
             * AMAZON = 1;
             * SWIGGY = 2;
             * ZOMATO = 3;
             * BIGBASKET = 4;
             * MYNTRA = 5;
             * FLIPKART = 6;
             */
            merchantArr = [1, 2, 3, 4, 5, 6];
        }

        if (allCategories) {
            /**
             * FOOD = 1;
             * SHOPPING = 2;
             */
            categoryArr = [1, 2];
        }

        if (allMonths) {
            allMonthArr.forEach((item, idx) => {
                requestIdArr.push(JSON.stringify(idx + 1));

                requestArr.push({
                    request_id: requestIdArr[idx],
                    from_date: item.fromDate,
                    to_date: item.toDate,
                    merchants: merchantArr || merchants,
                    merchant_categories: categoryArr || categories,
                });
            });
        } else {
            const currDate = new Date();
            const fromDate = getFormattedDate(
                addOrSubtractDays(currDate, quarter * 90 - 1, false),
            );
            const toDate = getFormattedDate(currDate);

            requestArr.push({
                request_id: getStringUUID(),
                from_date: fromDate,
                to_date: toDate,
                merchants: merchantArr || merchants,
                merchant_categories: categoryArr || categories,
            });
        }

        const platform = getPlatformCookie(req);
        let responses;

        if (platform === PLATFORMS.WEB) { // dummy response for WEB platform
            if (allMonths) {
                responses = DUMMY_INSIGHTS_SPEND_INFO_ALL_MONTHS_RESPONSE;
            } else {
                responses = DUMMY_INSIGHTS_SPEND_INFO_RESPONSE;
            }
        } else {
            const requestPayload = {
                access_token,
                requests: requestArr,
            };

            const response = await InsightsEmailParser.getUserSpendInfo(requestPayload);

            ({ responses } = response);
        }

        let modifiedResponse;

        if (allMonths) {
            const modifiedResponses = responses.map((item) => {
                let totalAmount = 0;

                item.spends_info.forEach((subItem) => {
                    totalAmount += parseFloat(subItem.amount_spent);
                });

                return {
                    requestId: item.request_id,
                    totalAmount: parseInt(totalAmount, 10),
                };
            });

            modifiedResponses.sort((a, b) => b.totalAmount - a.totalAmount);
            const { requestId, totalAmount } = modifiedResponses[0];

            modifiedResponse = {
                highestSpendInfo: {
                    month: monthNameArr[parseInt(requestId, 10) - 1],
                    totalAmount: totalAmount.toLocaleString('en-IN'),
                },
            };
        } else {
            const spendList = responses.map((item) => ({
                requestId: item.request_id,
                spendInfo: {
                    merchants: item.spends_info
                        .filter((subItem) => subItem.merchant && subItem.amount_spent > 0)
                        .map((subItem) => ({
                            merchant: subItem.merchant,
                            totalAmount: parseInt(subItem.amount_spent, 10).toLocaleString('en-IN'),
                            totalOrders: subItem.total_orders,
                        }))
                        .sort((a, b) => parseInt(b.totalAmount.replace(/,/g, ''), 10) - parseInt(a.totalAmount.replace(/,/g, ''), 10)),
                    categories: item.spends_info
                        .filter((subItem) => subItem.category)
                        .map((subItem) => ({
                            category: subItem.category,
                            totalAmount: parseInt(subItem.amount_spent, 10).toLocaleString('en-IN'),
                            totalOrders: subItem.total_orders,
                        }))
                        .sort((a, b) => parseInt(b.totalAmount.replace(/,/g, ''), 10) - parseInt(a.totalAmount.replace(/,/g, ''), 10)),
                },
            }));

            modifiedResponse = {
                spendList,
            };
        }

        res.send(modifiedResponse);
    } catch (error) {
        logger.log('error', 'error in insights controller', {
            method: 'getUserSpendInfo',
            error,
        });

        res.status(500).send({
            message: 'Failed to get the user spend info',
            success: false,
        });
    }
};

const getEmailId = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;
        const platform = getPlatformCookie(req);

        /* flow for WEB platform */
        if (platform === PLATFORMS.WEB) {
            // dummy response for WEB platform
            res.send({ emailId: ['team@fi.money'] });
            return;
        }
        /* end flow for WEB platform */

        const requestPayload = {
            access_token,
            client: platform,
        };

        const response = await InsightsAccessInfoClient.getEmailId(requestPayload);

        const { email_ids } = response;
        const emailId = email_ids;

        res.send({ emailId });
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to get email id',
            ctrl: 'insights',
            fn: 'getEmailId',
        });
    }
};

const deleteUserSpendInfo = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;

        const requestPayload = {
            access_token,
        };

        await InsightsEmailParser.deleteUserSpendInfo(requestPayload);

        res.send({ success: true });
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to delete the user spend info',
            ctrl: 'insights',
            fn: 'deleteUserSpendInfo',
        });
    }
};

module.exports = {
    getUserSpendingData,
    getMailSyncStatus,
    getUserSpendInfo,
    getEmailId,
    deleteUserSpendInfo,
};
