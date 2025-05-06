/**
 * @file This file contains a function for transforming data into a specific format for UI rendering.
 */

import { IFeaturePageCarousel, IUSStockData, TransformedCompanyDetails } from '../interfaces/elements';

import { getTooltipGraphOptions, getGraphDatasets, getGraphOptions, getGraphScalesData } from './chartJsCommonFunctions';
import { ONE_BILLION } from './Constants';

/**
 * Transforms an array of US stocks data into a dictionary format suitable for UI rendering.
 * Each stock in the input data is transformed into an object with properties like
 * id, title, icon, sub_text, tag_data, description, symbol, and shouldUpdateRealTime.
 *
 * @param {Array} usStocksData - The array of US stocks data to transform.
 * @returns {Object} The transformed data dictionary for UI rendering.
 */
const transformUSStocksData = (usStocksData: any[]): IUSStockData => {
    const data: IUSStockData = {};

    usStocksData?.forEach((stock) => {
        const {
            stock_id: stockId, title: stockTitle, image, amount,
            percentage_returns: percentageReturns, symbol, should_update_real_time: shouldUpdateRealTime,
        } = stock || {};

        const { plain_string: title } = stockTitle || {};
        const { image_url: imageSrc } = image || {};
        const { plain_string: currentPrice } = amount || {};
        const { texts, left_icon: leftIcon } = percentageReturns || {};
        const { image_url: icon } = leftIcon || {};
        const tagText = texts?.length ? texts[0]?.plain_string : '';
        const fontColor = texts?.length ? texts[0]?.font_color : '';

        data[stockId] = {
            id: stockId,
            title,
            icon: {
                image_src: imageSrc,
            },
            currentPrice,
            percentageReturns: {
                icon,
                text: fontColor && tagText ? `<span style="color: ${fontColor}">${tagText}</span>` : '',
            },
            symbol,
            shouldUpdateRealTime,
        };
    });

    return data;
};

/**
 * Transforms an array of data into a format suitable for UI rendering.
 */
const transformDataAccordingFeaturePageCarousel = (data: any[]): IFeaturePageCarousel[] => {
    const transformData = data?.map((item) => {
        const {
            stock_id: stockId, title: stockTitle, image, amount,
            percentage_returns: percentageReturns, symbol,
        } = item || {};

        const { plain_string: _title } = stockTitle || {};
        const { image_url: imageSrc } = image || {};
        const { plain_string: _subText } = amount || {};
        const { texts, left_icon: leftIcon } = percentageReturns || {};
        const { image_url: icon } = leftIcon || {};
        const tagText = texts?.length ? texts[0]?.plain_string : '';
        const fontColor = texts?.length ? texts[0]?.font_color : '';

        return {
            id: stockId,
            title: _title,
            icon: {
                image_src: imageSrc,
            },
            sub_text: _subText,
            tag_data: {
                icon,
                text: `<span style="color: ${fontColor}">${tagText}</span>`,
            },
            description: '',
            url: symbol,
        };
    });

    return transformData;
};

/**
 * Transforms the companiesData into a a specific format for UI rendering.
 *
 * @param {Array} companiesData - The array of companies' data.
 * @returns {Array} - The transformed data.
 */
const transformCollectionDetailsData = (companiesData = []) => companiesData?.map((company, index) => {
    const { title, image, symbol } = company || {};
    const { plain_string: name } = title || {};
    const { image_url: icon } = image || {};

    return {
        id: index + 1,
        name,
        icon,
        symbol,
    };
});

/**
 * Transforms the collectionsData and collectionDetails into a specific format for UI rendering
 *
 * @param {Array} collectionsData - The array of collections' data.
 * @param {Array} collectionDetails - The array of collection details.
 * @param {string} collectionId - The ID of the collection.
 * @returns {Array} - The transformed data.
 */

interface Collection {
    collection_id: string;
    title: string;
}

const transformUSStocksCollectionsData = (collectionsData: Collection[] = [],
    collectionDetails: [],
    collectionId: string) => {
    const filteredCollectionData = Array.isArray(collectionsData) ? collectionsData.filter((collection) => collection?.collection_id !== 'ALL_ETFS' && collection?.collection_id !== 'ALL_STOCKS') : null;

    return filteredCollectionData?.map((collection) => {
        const { collection_id: id, title } = collection || {};

        return {
            id,
            title,
            companies: id === collectionId ? transformCollectionDetailsData(collectionDetails) : [],
        };
    });
};

/**
 * Custom Labels for Ratios and Financial Charts
 */
const usStockTooltipLabelFn = (graphType: string, sumData?: number) => (context: any) => {
    const label = context.dataset.label || '';
    const value = context.parsed.y;
    let newValue;

    if (graphType === 'line' && sumData !== undefined) {
        newValue = `${((value * 100) / sumData).toFixed(2)}%`;
    } else if (graphType === 'bar') {
        newValue = `${value.toFixed(1)}B`;
    } else {
        newValue = `${value}`;
    }

    return `${label}${newValue}`;
};

/**
 * Transforms the data points for a line graph chart.
 * @param {Array} dataPoints - The data points for the line graph.
 * @returns {Object} The transformed chart data and options for the line graph.
 */
const transformFinancialsRatioCardGraphData = (dataPoints: any[]) => {
    const lineChartData = {
        labels: [],
        datasets: dataPoints?.map(({ series_data_points: seriesDataPoints, series_color: seriesColor }) => ({
            label: false,
            data: (seriesDataPoints as { value: any }[])?.map(({ value }: {value: any}) => value),
            borderColor: seriesColor,
            borderWidth: 3,
            fill: false,
            tension: 0.1,
            pointRadius: 0,
        })),
    };

    lineChartData.labels = dataPoints[0]?.series_data_points?.map(({ category_name: categoryName }: { category_name: any }) => categoryName) || [];

    /**
 * The total sum of the data points in lineChartData.
 */
    const sumData = lineChartData.datasets.flatMap((dataset) => dataset.data).reduce((sum, value) => sum + value, 0);

    const visuals = {
        graphType: 'line',
        graphOptions: {
            ...getGraphOptions(),
            ...getTooltipGraphOptions(),
            elements: {
                point: {
                    pointHoverRadius: 6,
                    pointHitRadius: 100,
                },
            },
            plugins: {
                tooltip: {
                    usePointStyle: 'circle',
                    callbacks: {
                        label: usStockTooltipLabelFn('line', sumData),
                    },
                },
            },
            scales: {
                y: { ...getGraphScalesData({ position: 'right', ticksColor: '#B2B5B9' }) },
                x: { ...getGraphScalesData({ ticksColor: '#B2B5B9' }) },
            },
        },
        graphData: lineChartData,
        labels: dataPoints?.map(({ series_color: seriesColor, series_name: seriesName }) => ({
            bulletColor: seriesColor,
            labelName: seriesName,
        })) || [],
    };

    return visuals;
};

/**
 * Transforms the financial ratio card data into a structured format.
 * @param {Object} cardData - The financial ratio card data.
 * @returns {Object} The transformed financial ratio card data.
 */
const transformFinancialsRatioCardData = (cardData: any) => {
    const { card_title: cardTitle, financial_ratio_tabs: financialRatioTabs } = cardData || {};
    const data = financialRatioTabs?.map((metricTab: any) => {
        const { ratio_name: ratioName, financial_ratio_charts: financialRatioCharts } = metricTab || {};
        let description;

        const details = financialRatioCharts?.map((metricCharts: any) => {
            const { reporting_frequency: reportingFrequency, multi_ratio_data_points: multiRatioDataPoints, footer } = metricCharts || {};

            description = footer?.plain_string;

            return {
                bottomTag: reportingFrequency?.plain_string,
                visuals: multiRatioDataPoints ? transformFinancialsRatioCardGraphData(multiRatioDataPoints) : {},
            };
        });

        return {
            topTag: ratioName?.plain_string,
            description,
            details,
        };
    });

    return {
        text: cardTitle?.plain_string,
        data,
    };
};

/**
 * Transforms the data points for a bar graph chart.
 * @param {Array} dataPoints - The data points for the bar graph.
 * @returns {Object} The transformed chart data and options for the bar graph.
 */
const transformFinancialsCardGraphData = (dataPoints: []) => {
    const financialsCardValues = dataPoints?.map((dataPoint: any) => dataPoint?.value / ONE_BILLION);
    const financialsCardBackgroundValues = dataPoints?.map((dataPoint: any) => dataPoint?.bar_color || '#5684AE');

    const visuals = {
        graphType: 'bar',
        graphOptions: {
            ...getGraphOptions(),
            ...getTooltipGraphOptions(),
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        label: usStockTooltipLabelFn('bar'),
                    },
                },
            },
            scales: {
                y: {
                    ...getGraphScalesData({
                        position: 'right', ticksColor: '#B2B5B9', titleDisplay: true, titleText: 'Amount (billion)', titleColor: '#B2B5B9',
                    }),
                },
                x: { ...getGraphScalesData({ ticksColor: '#B2B5B9' }) },
            },
        },
        graphData: {
            labels: dataPoints?.map((dataPoint: any) => dataPoint?.category_name) || [],
            datasets: [
                ...[getGraphDatasets({
                    data: financialsCardValues, borderColor: 'rgba(127, 190, 206, 1)', backgroundColor: financialsCardBackgroundValues, borderRadius: 7,
                })],
            ],
        },
    };

    return visuals;
};

/**
 * Transforms the financial card data into a structured format.
 * @param {Object} cardData - The financial card data.
 * @returns {Object} The transformed financial card data.
 */
const transformFinancialsCardData = (cardData: any) => {
    const { card_title: cardTitle, financial_metric_tabs: financialMetricTabs } = cardData || {};

    const data = financialMetricTabs?.map((metricTab: any) => {
        const { metric_name: metricName, financial_metric_charts: financialMetricCharts } = metricTab || {};
        let description;

        const details = financialMetricCharts?.map((metricCharts: any) => {
            const { reporting_frequency: reportingFrequency, metric_data_points: metricDataPoints, footer } = metricCharts || {};

            description = footer?.plain_string;

            return {
                bottomTag: reportingFrequency?.plain_string,
                visuals: metricDataPoints ? transformFinancialsCardGraphData(metricDataPoints) : {},
            };
        });

        return {
            topTag: metricName?.plain_string,
            description,
            details,
        };
    });

    return {
        text: cardTitle?.plain_string,
        data,
    };
};

/**
 * Transforms the Company card data into a structured format.
 * @param {Object} companyData - Fetails of company listed in us stock.
 * @returns {Object} The transformed company details data.
 */
const transformCompanyDetailsData = (companyData: any): TransformedCompanyDetails => {
    const {
        company_name_text: companyName, symbol_text: symbolText, description_text: descriptionText, display_entries: displayEntries,
    } = companyData || {};

    const data = displayEntries?.map((item: any) => {
        const { contains_hyperlink: containsHyperlink, title_text: titleText, value_text: valueText } = item || {};

        const { plain_string: value } = valueText || {};

        // The plain string value received from the backend in this format: '^^link^^text^^'.
        const splitValue = value?.split('^^');
        const link = splitValue?.[1];
        const text = splitValue?.[2];
        return {
            text: titleText?.plain_string,
            value: containsHyperlink
                ? `<a href='${link}' rel='noreferrer' target='_blank' style='color: #00B899; word-break: break-word;'>${text}</a>`
                : value,
        };
    });

    return {
        text: companyName?.plain_string,
        subText: symbolText?.plain_string,
        description: descriptionText?.plain_string,
        data,
    };
};

/**
 * Transforms SymbolDesisionFactors Rpc response accroding the UI Component
 */
const transfromSymbolDesisionFactorsRpcResponse = (data: any) => {
    const { symbol_decision_factors_cards: symbolDecisionFactorsCards } = data || {};

    const transformArrayIntoCardObject = symbolDecisionFactorsCards?.reduce((acc: any, item: any) => {
        acc[item.card] = item[item.card];

        return acc;
    }, {});

    const {
        financials_card: financialsCard, financial_ratios_card: financialRatiosCard,
        company_details_component: companyDetailsComponent,
    } = transformArrayIntoCardObject || {};
    const financialsCardData = transformFinancialsCardData(financialsCard);
    const financialRatiosCardData = transformFinancialsRatioCardData(financialRatiosCard);
    const companyDetails = transformCompanyDetailsData(companyDetailsComponent);

    const tranformedData = {
        companyDetails,
        financialsDetails: [financialsCardData, financialRatiosCardData],
    };

    return tranformedData;
};

export {
    transformUSStocksData, transformUSStocksCollectionsData, transfromSymbolDesisionFactorsRpcResponse, transformDataAccordingFeaturePageCarousel,
};
