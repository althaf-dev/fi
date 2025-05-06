/* eslint-disable consistent-return */
/**
 * @file Controller for US Stocks
 */

const client = require('../../grpc/usStocks/client');
const { success, grpcErrorHandler } = require('../../utils/ResponseWrapper');
const { COMMON_ERR_MSG_MAP } = require('./constants');
const { convertAmountToString, formatDateTime } = require('../../utils/helpers');
const { logger } = require('../../utils/logger');

// controller key
const CTRL_KEY = 'usStocks';

const ERROR_MSG_MAP = {
    getGeneralCollectionDetails: 'Failed to get stocks details',
    getCollectionList: 'Failed to get collection list',
    getSymbolHistoricalPrices: 'Failed to get symbol historical prices',
    getSymbolUpdates: 'Failed to get symbol updates',
    getSymbolDesisionFactors: 'Failed to get symbol desision factors',
    getStockForSymbol: 'Failed to get stock for symbol',
};

const getGeneralCollectionDetails = async (req, res, next) => {
    const fnName = 'getGeneralCollectionDetails';

    try {
        const {
            collectionId, prevToken, afterToken, sortOption,
        } = req.query;

        if (!collectionId) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });

            return;
        }

        let requestPayload = {
            collection_id: collectionId,
        };

        if (prevToken) {
            requestPayload = {
                ...requestPayload,
                page_context: {
                    prev_token: prevToken,
                },
            };
        }

        if (afterToken) {
            requestPayload = {
                ...requestPayload,
                page_context: {
                    after_token: afterToken,
                },
            };
        }

        if (sortOption) {
            requestPayload = {
                ...requestPayload,
                sort_option: sortOption,
            };
        }

        const rpcName = 'GetGeneralCollectionDetails';

        const response = await client.makeRpcCall(requestPayload, rpcName);

        success(res, response);
    } catch (err) {
        // unexpected grpc error handling and error thrown by backend
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

const getCollectionList = async (req, res, next) => {
    const fnName = 'getCollectionList';

    try {
        const requestPayload = req;
        const rpcName = 'GetCollectionList';

        const response = await client.makeRpcCall(requestPayload, rpcName);

        success(res, response);
    } catch (err) {
        // unexpected grpc error handling and error thrown by backend
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

/**
 * Retrieves historical prices and related information for a given symbol.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @param {boolean} hasServerSideRpcCall - Indicates if the caller is internal (server-side) or external (client-side).
 * @param {Object} symbolHistoricalPricesPayload - Payload required to call GetSymbolHistoricalPrices RPC.
 */
const getSymbolHistoricalPrices = async (req, res, next, hasServerSideRpcCall, symbolHistoricalPricesPayload) => {
    const fnName = 'getSymbolHistoricalPrices';

    let requestPayload;

    if (hasServerSideRpcCall) {
        requestPayload = symbolHistoricalPricesPayload;
    } else {
        const { stockId } = req.query;

        requestPayload = {
            stock_id: stockId,
        };
    }

    if (!requestPayload.stock_id) {
        if (hasServerSideRpcCall) {
            return;
        }

        res.status(400).send({
            message: ERROR_MSG_MAP[fnName],
            description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
        });

        return;
    }

    try {
        const rpcName = 'GetSymbolHistoricalPrices';

        const response = await client.makeRpcCall(requestPayload, rpcName);

        const {
            current_price, stock_logo, stock_name, stock_prices_for_time_periods, tags,
            faq_articles,
        } = response || {};

        const currentPriceInUSD = `$${convertAmountToString(current_price)}`;

        const tagList = tags?.map((tag) => ({
            label: tag?.plain_string,
        }));

        const timePeriods = stock_prices_for_time_periods?.map((timePeriod) => {
            const {
                start_time, end_time, percentage_returns, period_text_for_tabs, should_update_real_time, stock_price_chart,
            } = timePeriod || {};

            const { init_chart_js_command, set_chart_data_js_command } = stock_price_chart || {};
            const { left_icon, texts } = percentage_returns || {};

            const { plain_string: value, font_color: fontColor } = texts[0];

            return {
                startTime: formatDateTime(start_time?.plain_string),
                endTime: formatDateTime(end_time?.plain_string),
                tabText: period_text_for_tabs?.plain_string,
                stockPriceChart: {
                    initChartJsCommand: init_chart_js_command,
                    setChartDataJsCommand: set_chart_data_js_command,
                },
                shouldUpdateRealTime: should_update_real_time,
                percentageReturns: {
                    icon: left_icon?.image_url,
                    value: `<span style="color: ${fontColor}">${value}</span>`,
                },
            };
        });

        const faqArticles = faq_articles?.map((article) => {
            const { answer: answerMetaInfo, question: questionMetaInfo } = article || {};

            const { plain_string: answer } = answerMetaInfo || {};
            const { plain_string: question } = questionMetaInfo || {};

            return {
                answer,
                question,
            };
        });

        const modifiedResponse = {
            currentPrice: currentPriceInUSD,
            icon: stock_logo?.image_url,
            name: stock_name?.plain_string,
            tagList,
            timePeriods,
            faqArticles,
        };

        if (hasServerSideRpcCall) {
            return modifiedResponse;
        }

        success(res, modifiedResponse);
    } catch (err) {
        if (hasServerSideRpcCall) {
            return;
        }

        // unexpected grpc error handling and error thrown by backend
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

const getSymbolUpdates = async (req, res, next) => {
    const fnName = 'GetSymbolUpdates';

    try {
        const { payload } = req.query;

        const requestPayload = {
            symbol_ids: JSON.parse(payload),
        };

        if (!requestPayload.symbol_ids) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });

            return;
        }

        const rpcName = 'GetSymbolUpdates';

        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        const stream = client.makeStreamingRpcCall(requestPayload, rpcName);

        /**
        * Sends data as an event in the Server-Sent Events (SSE) protocol.
        * @param {any} response - The data to be sent as an SSE event.
        *
        * SSE (Server-Sent Events) is a server-to-client communication technology that allows the server to push data to the client
          over a single HTTP connection. The onData function is responsible for writing the response data as an SSE event
          to the response stream.
        * The data is serialized using JSON.stringify and prefixed with the SSE event field "data:" to indicate that it is the
          actual data payload of the event.
        * The "\n\n" characters are used as line breaks in the SSE protocol to separate individual events.
          Each event should be sent with a double line break ("\n\n") to adhere to the SSE specification.
        * The res.flush() function is called to ensure that the response is immediately sent to the client without buffering.
        */
        const onData = (response) => {
            res.write(`data: ${JSON.stringify(response)}\n\n`);
            res.flush();
        };

        stream.on('data', onData);

        req.on('close', () => {
            stream.removeListener('data', onData);
            stream.cancel();
        });

        /**
         * Event handler for 'error' event on the stream.
         * Ignores the cancellation error if it's caused by the client.
         * If this code is removed, the client-side cancellation error will not be ignored,
         * and it may result in an unhandled error being thrown.
         *
         * @param {Error} error - The error object emitted by the stream.
         */
        stream.on('error', (error) => {
            // Ignore the cancellation error if it's caused by the client
            console.error(error);
        });
    } catch (err) {
        // Handle other errors
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

const getSymbolDesisionFactors = async (req, res, next) => {
    const fnName = 'getSymbolDesisionFactors';

    try {
        const { stockId } = req.query;

        const requestPayload = {
            stock_id: stockId,
        };

        if (!requestPayload.stock_id) {
            res.status(400).send({
                message: ERROR_MSG_MAP[fnName],
                description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
            });

            return;
        }

        const rpcName = 'GetSymbolDecisionFactors';

        const response = await client.makeRpcCall(requestPayload, rpcName);

        success(res, response);
    } catch (err) {
        // unexpected grpc error handling and error thrown by backend
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

/**
 * Retrieves stock information for a given symbol.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @param {boolean} hasServerSideRpcCall - Indicates if the caller is internal (server-side) or external (client-side).
 * @param {Object} stockForSymbolPayload - Payload containing information about the symbol for which stock information is to be retrieved.
 */
const getStockForSymbol = async (req, res, next, hasServerSideRpcCall, stockForSymbolPayload) => {
    const fnName = 'GetStockForSymbol';

    let requestPayload;

    if (hasServerSideRpcCall) {
        requestPayload = stockForSymbolPayload;
    } else {
        const { symbol } = req.query;

        requestPayload = {
            symbol: symbol.toUpperCase(),
        };
    }

    if (!requestPayload.symbol) {
        if (hasServerSideRpcCall) {
            return;
        }

        res.status(400).send({
            message: ERROR_MSG_MAP[fnName],
            description: COMMON_ERR_MSG_MAP.BAD_REQUEST,
        });

        return;
    }

    try {
        const rpcName = 'GetStockForSymbol';

        const response = await client.makeRpcCall(requestPayload, rpcName);

        const { stock_id } = response || {};

        const modifiedResponse = {
            stockId: stock_id,
        };

        if (hasServerSideRpcCall) {
            return modifiedResponse;
        }

        success(res, modifiedResponse);
    } catch (err) {
        if (hasServerSideRpcCall) {
            return;
        }

        // unexpected grpc error handling and error thrown by backend
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

/**
 * Generates meta information for the US stocks page.
 *
 * @param {string} stockSymbol - The stock symbol.
 * @param {string} stockName - The stock name.
 * @param {string} icon - The URL of the stock icon image.
 * @param {Array} faqArticles - An array of FAQ articles related to the stock.
 * @returns {Object} The generated meta information.
 */
const generateMetaInfo = (stockSymbol, stockName, icon, faqArticles, currentPrice) => {
    const uppercaseStockSymbol = stockSymbol.toUpperCase();

    const metaTitle = `${stockName} Share Price: ${uppercaseStockSymbol} (${stockName}) Stock Price Today & Updates | Fi Money`;
    // eslint-disable-next-line max-len
    const metaDescription = `Buy ${stockName} Shares from India at ${currentPrice} (0 Commission) today. Start investing in ${stockName} stocks from India now with fractional investing only on Fi Money.`;
    const canonicalUrl = `/us-stocks/${stockSymbol}`;
    // eslint-disable-next-line max-len
    const keyWords = `${stockName} share price,${stockName} stock, ${stockName} US, yahoo finance ${uppercaseStockSymbol}, ${uppercaseStockSymbol} stock, ${uppercaseStockSymbol} live US stock price, ${stockName} stock markets, US stock markets, ${stockName} market price, US markets watch, US stock markets today, US market watch, US stock markets, financial markets, US markets live, US stock live, US equity markets, fi.money, markets trading, US financial markets news, ${stockName} market cap, ${stockName} market capitalization`;

    const metaInfo = {
        metaTitle,
        metaDescription,
        canonicalUrl,
        keyWords,
        ogTitle: metaTitle,
        ogDescription: metaDescription,
        ogUrl: canonicalUrl,
        ogSiteName: 'Fi.Money',
        ogType: 'website',
        ogImage: icon,
        twitterCard: 'summary',
        twitterSite: '@Bank_on_Fi',
        twitterTitle: metaTitle,
        twitterDescription: metaDescription,
        twitterImage: icon,
        breadcrumbSchema: {
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://fi.money/',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'US Stocks',
                    item: 'https://fi.money/us-stocks/',
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: stockName,
                    item: `https://fi.money/us-stocks/${stockSymbol}`,
                },
            ],
        },
        orgSchema: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fi.Money',
            url: 'https://fi.money',
            logo: 'https://dza2kd7rioahk.cloudfront.net/assets/logos/fi-logo.svg',
            sameAs: [
                'https://www.twitter.com/Bank_on_Fi',
                'https://www.instagram.com/bankonfi/',
                'https://www.linkedin.com/company/epifi',
            ],
        },
        faqsSchema: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqArticles?.map((article) => {
                const { question, answer } = article || {};

                return {
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer,
                    },
                };
            }),
        },
    };

    return metaInfo;
};

/**
 * Generates meta information for the US stocks page
 */
const usStocksMetaInfoHandler = async (req, res, next) => {
    try {
        const stockSymbol = req.params[0];

        const uppercaseStockSymbol = stockSymbol.toUpperCase();

        const stockForSymbolPayload = {
            symbol: uppercaseStockSymbol,
        };

        const stockForSymbolResponse = await getStockForSymbol(req, res, next, true, stockForSymbolPayload);

        const { stockId } = stockForSymbolResponse || {};

        if (!stockId) {
            logger.log('error', 'Failed to fetched stockId for us stock symbol', {
                method: 'usStocksMetaInfoHandler',
            });

            return;
        }

        logger.log('info', 'Successfully fetched stockId for us stock symbol', {
            method: usStocksMetaInfoHandler,
        });

        const symbolHistoricalPricesPayload = {
            stock_id: stockId,
        };

        const symbolHistoricalPricesResponse = await getSymbolHistoricalPrices(req, res, next, true, symbolHistoricalPricesPayload);

        if (!symbolHistoricalPricesResponse) {
            logger.log('error', 'Failed to fetched symbol historical prices response for us stock', {
                method: 'usStocksMetaInfoHandler',
            });

            return;
        }

        const {
            name: stockName, icon, faqArticles, currentPrice,
        } = symbolHistoricalPricesResponse || {};

        const usStockMetaInfo = generateMetaInfo(stockSymbol, stockName, icon, faqArticles, currentPrice);

        logger.log('info', 'Generated meta info for us stock', {
            method: usStocksMetaInfoHandler,
        });

        return usStockMetaInfo;
    } catch (error) {
        logger.log('error', 'Error to generate meta info for the us stock', {
            method: 'usStocksMetaInfoHandler',
            error,
        });
    }
};

module.exports = {
    getGeneralCollectionDetails,
    getCollectionList,
    getSymbolHistoricalPrices,
    getSymbolUpdates,
    getSymbolDesisionFactors,
    getStockForSymbol,
    usStocksMetaInfoHandler,
};
