/**
 * @file utils functions for us stock
 */

import { helpers } from '../../utils';

import { ITimePeriod } from './types';

/**
 * Creates a closure for handling streaming stock data.
 *
 * @returns {Function} The streaming data handler function.
 */
const createStreamingDataHandler = () => {
    /**
     * The streaming data cache to store the latest values of streaming stock data.
     */
    const streamingDataCache = {
        currentPriceInUSD: null,
        leftIcon: null,
        value: null,
        fontColor: null,
        updateChartDataJsCommand: null,
    };

    /**
     * Handle streaming stock data and update the streaming data cache.
     * @param {object} data - The incoming streaming data.
     *
     * @returns {object} - The transformed data including current price, percentage returns, and chart data JS command.
     */
    const handleStreamingStockData = (data) => {
        const { datapoint } = data || {};

        if (datapoint === 'price_update') {
            const { price_update: priceUpdate } = data || {};

            if (priceUpdate) {
                const { percentage_returns: percentageReturns, stock_price: stockPrice } = priceUpdate || {};
                const { left_icon: leftIconData, texts } = percentageReturns || {};
                const { plain_string: valueData, font_color: fontColorData } = texts[0] || {};

                // Update the streaming data cache with price update data
                streamingDataCache.currentPriceInUSD = `$${helpers.convertAmountToString(stockPrice)}`;
                streamingDataCache.leftIcon = leftIconData?.image_url;
                streamingDataCache.value = valueData;
                streamingDataCache.fontColor = fontColorData;
            }
        }

        if (datapoint === 'minute_bar') {
            const { minute_bar: minuteBar } = data || {};

            if (minuteBar) {
                const { update_chart_data_js_command: updateChartDataJsCommandData } = minuteBar || {};

                // Update the streaming data cache with minute bar data
                streamingDataCache.updateChartDataJsCommand = updateChartDataJsCommandData;
            }
        }

        return {
            currentPrice: streamingDataCache.currentPriceInUSD,
            percentageReturns: {
                icon: streamingDataCache.leftIcon,
                text: `<span style="color: ${streamingDataCache.fontColor}">${streamingDataCache.value}</span>`,
            },
            chartDataJsCommand: {
                updateChartDataJsCommand: streamingDataCache.updateChartDataJsCommand,
            },
        };
    };

    return handleStreamingStockData;
};

/**
 * Extracts stock price and chart data from the given data object.
 *
 */
const extractStockPriceAndChartData = (data: ITimePeriod, currentPrice: string) => {
    const { percentageReturns, stockPriceChart } = data || {};

    const values = {
        currentPrice,
        percentageReturns,
        chartDataJsCommand: stockPriceChart,
    };

    return values;
};

export { createStreamingDataHandler, extractStockPriceAndChartData };
