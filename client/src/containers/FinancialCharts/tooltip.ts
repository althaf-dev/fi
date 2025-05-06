/**
* @file Tooltip related code.
*/

import { convertEpochDateToTime, convertEpochToDatetime, convertEpochToDateYearFormat } from '../../utils/time';

import { OFFSET_VALUES, TIME_PERIOD } from './constants';
import { retrieveTooltipInnerHTML } from './utils';

const tooltip = document.createElement('div');
const dashedLine = document.createElement('div');
const onHoverCircle = document.createElement('div');
const onHoverSecondCircle = document.createElement('div');

// Can be used if need to show tooltip on long tap.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const displayCrosshair = (param, newSeries, chartContainerRef) => {
    // If point is not in the frame don't show tooltip.
    if (
        param.point === undefined
                || !param.time
                || !param.label
                || param.point.x < 0
                || param.point.x > chartContainerRef?.current?.clientWidth
                || param.point.y < 0
                || param.point.y > chartContainerRef?.current?.clientHeight
                || !param.seriesPrices.get(newSeries)
    ) {
        tooltip.style.display = 'none';
    } else {
        tooltip.style.display = 'block';

        const price = param.seriesPrices.get(newSeries);
        const datetime = convertEpochDateToTime(param.time);

        tooltip.innerHTML = `<div class='line-chart-price-text'>${param.label}${price}</div><div class='line-chart-time-text'>${datetime}</div>`;

        const toolTipMargin = 8;
        const toolTipWidth = tooltip.offsetWidth;

        // calculate the left side point for the tooltip. If left is within the frame width, show it in middle of tooltip width
        // else show it in extreme left or show it accordingly.
        let left = param.point.x - toolTipWidth / 2 + toolTipMargin;
        if (left > chartContainerRef?.current?.clientWidth - toolTipWidth) {
            left = chartContainerRef?.current?.clientWidth - toolTipWidth;
        } else if (left < 0) {
            left = param.point.x;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = '1px';
    }
};

// Function to create tooltip with dash line and hovercircle.
export const createTooltip = (chartContainerRef, chartProperties) => {
    tooltip.id = 'tooltip';
    tooltip.className = 'line-chart-tooltip';
    tooltip.style.display = 'none';

    dashedLine.className = 'line-chart-dashed-line';
    dashedLine.style.display = 'none';

    onHoverCircle.className = 'line-chart-circle';
    onHoverCircle.style.backgroundColor = chartProperties.chartLineColor;
    onHoverCircle.style.borderColor = chartProperties.chartBgColor;
    onHoverCircle.style.display = 'none';

    Array.from(chartContainerRef.current.children).forEach((item) => {
        chartContainerRef.current!.removeChild(item);
    });

    chartContainerRef.current!.appendChild(tooltip);
    chartContainerRef.current!.appendChild(dashedLine);
    chartContainerRef.current!.appendChild(onHoverCircle);
};

// Function to display text of tooltip
const displayTooltip = (price, time, x, y, clientWidth, chartProperties, label) => {
    tooltip.style.display = 'block';
    dashedLine.style.display = 'block';
    onHoverCircle.style.display = 'block';
    // const datetime = chartProperties.is1DChart ? convertEpochToDatetime(time) : convertEpochToDateYearFormat(time);
    const datetime = (chartProperties.timePeriod === TIME_PERIOD.ONE_DAY
        || chartProperties.timePeriod === TIME_PERIOD.ONE_WEEK
        || chartProperties.timePeriod === TIME_PERIOD.ONE_MONTH)
        ? convertEpochToDatetime(time)
        : convertEpochToDateYearFormat(time);

    tooltip.innerHTML = `<div class='line-chart-price-text'>${label}${price}</div><div class='line-chart-time-text'>${datetime}</div>`;

    const toolTipMargin = 8;
    const toolTipWidth = tooltip.offsetWidth;

    /**  It is to calculate the left margin for the tooltip. If left margin is within the frame width,
     * show it in middle of tooltip width
     * else show it in extreme left or whatever the value come.
    */
    let left = x - toolTipWidth / 2 + toolTipMargin + OFFSET_VALUES.RIGHT_CHART;
    if (left > clientWidth + OFFSET_VALUES.RIGHT_CHART - toolTipWidth) {
        left = clientWidth + OFFSET_VALUES.RIGHT_CHART - toolTipWidth;
    } else if (left < 0) {
        left = x;
    }

    let dashedLineLeft = x + OFFSET_VALUES.DASH_LINE;
    if (dashedLineLeft > clientWidth + OFFSET_VALUES.RIGHT_CHART) {
        dashedLineLeft = clientWidth + OFFSET_VALUES.DASH_LINE;
    }

    let circleLeft = x + OFFSET_VALUES.CIRCLE_LEFT;
    if (x > clientWidth) {
        circleLeft = clientWidth;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = '1px';
    dashedLine.style.left = `${dashedLineLeft}px`;
    onHoverCircle.style.left = `${circleLeft}px`;
    onHoverCircle.style.top = `${y - OFFSET_VALUES.TOP}px`;
};

// Function to handle Single tap event
export const handleSingleTap = (event, chart, chartData, chartContainerRef, newSeries, chartProperties) => {
    const { clientX } = event.touches[0];
    const timestamp = chart.timeScale().coordinateToTime(clientX);
    if (timestamp != null) {
        const coordinateX = chart.timeScale().timeToCoordinate(timestamp);
        const chartValue = chartData.find((data) => data.time === timestamp);
        const coordinateY = newSeries.priceToCoordinate(chartValue.value);
        displayTooltip(chartValue.value, timestamp, coordinateX, coordinateY,
            chartContainerRef?.current?.clientWidth, chartProperties, chartValue.label);
    }
};

// Function to initialize tooltip to the latest chart data (end of the current graph)
export const tooltipInitializationFromMaxValue = (chart, chartData, chartContainerRef, newSeries, chartProperties) => {
    let lastTimestamp = 0;
    let latestChartData;
    chartData.forEach((chartDatum) => {
        if (chartDatum.time > lastTimestamp) {
            lastTimestamp = chartDatum.time;
            latestChartData = chartDatum;
        }
    });

    if (lastTimestamp && latestChartData) {
        // Delay tooltip initialization by a small duration to ensure the chart is fully rendered
        setTimeout(() => {
            const coordinateX = chart.timeScale().timeToCoordinate(lastTimestamp) || 0;
            const coordinateY = newSeries.priceToCoordinate(latestChartData.value) || 0;
            displayTooltip(latestChartData.value, lastTimestamp, coordinateX, coordinateY, chartContainerRef?.current?.clientWidth,
                chartProperties, latestChartData.label);
        }, 100);
    }
};

// Can be used if need to show tooltip on long tap in ratio chart.
export const displayRatioChartCrosshair = (param, chartContainerRef, newSeries, secondChartData, firstChartData, secondNewSeries) => {
    // If point is not in the frame don't show tooltip.
    if (
        param.point === undefined
                || !param.time
                || param.point.x < 0
                || param.point.x > chartContainerRef?.current?.clientWidth
                || param.point.y < 0
                || param.point.y > chartContainerRef?.current?.clientHeight
    ) {
        tooltip.style.display = 'none';
    } else {
        tooltip.style.display = 'block';
        const firstSeriesPrice = param.seriesPrices.get(newSeries);
        const secondSeriesPrice = secondChartData.data.length > 0 ? param.seriesPrices.get(secondNewSeries) : null;
        const seriesOneIndex = firstChartData.data.findIndex((d) => d.time === param.time);
        let dateTime = null;

        if (seriesOneIndex < 0) {
            const seriesSecondIndex = secondChartData.data.findIndex((d) => d.time === param.time);
            if (seriesSecondIndex >= 0) {
                dateTime = secondChartData.data[seriesSecondIndex].xAxisValue;
            }
        } else {
            dateTime = firstChartData.data[seriesOneIndex].xAxisValue;
        }

        tooltip.innerHTML = retrieveTooltipInnerHTML(firstSeriesPrice, secondSeriesPrice, dateTime);

        // calculate the left side point for the tooltip. If left is within the frame width, show it in middle of tooltip width
        // else show it in extreme left or show it accordingly.
        const toolTipMargin = 8;
        const toolTipWidth = tooltip.offsetWidth;
        let left = param.point.x - toolTipWidth / 2 + toolTipMargin;

        if (left > chartContainerRef?.current?.clientWidth - toolTipWidth) {
            left = chartContainerRef?.current?.clientWidth - toolTipWidth;
        } else if (left < 0) {
            left = param.point.x;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = '2px';
    }
};

// Function to create tooltip for ratio chart with dash line and hovercircle.
export const createRatioChartTooltip = (chartContainerRef, chartBgColor, firstLineColor, secondLineColor) => {
    tooltip.id = 'tooltip';
    tooltip.className = 'multi-chart-tooltip';
    tooltip.style.display = 'none';

    dashedLine.className = 'multi-chart-dashed-line';
    dashedLine.style.display = 'none';

    onHoverCircle.className = 'multi-chart-circle';
    onHoverCircle.style.backgroundColor = firstLineColor;
    onHoverCircle.style.borderColor = chartBgColor;
    onHoverCircle.style.display = 'none';

    onHoverSecondCircle.className = 'multi-chart-circle';
    onHoverSecondCircle.style.backgroundColor = secondLineColor;
    onHoverSecondCircle.style.borderColor = chartBgColor;
    onHoverSecondCircle.style.display = 'none';

    Array.from(chartContainerRef.current.children).forEach((item) => {
        chartContainerRef.current!.removeChild(item);
    });

    chartContainerRef.current!.appendChild(tooltip);
    chartContainerRef.current!.appendChild(dashedLine);
    chartContainerRef.current!.appendChild(onHoverCircle);
    chartContainerRef.current!.appendChild(onHoverSecondCircle);
};

// Function to display ratio chart tooltip
const displayRatioChartTooltip = (x, dateTime, firstSeriesPrice, secondSeriesPrice, clientWidth,
    firstCoordinateY, secondCoordinateY, firstLineColor, secondLineColor) => {
    tooltip.style.display = 'block';
    dashedLine.style.display = 'block';
    onHoverCircle.style.display = 'block';
    onHoverSecondCircle.style.display = 'block';

    tooltip.innerHTML = retrieveTooltipInnerHTML(firstSeriesPrice, secondSeriesPrice, dateTime);

    const firstPriceCircle = document.getElementById('firstPriceCircle');
    if (firstPriceCircle) {
        firstPriceCircle.style.backgroundColor = firstLineColor;
    }
    const secondPriceCircle = document.getElementById('secondPriceCircle');
    if (secondPriceCircle) {
        secondPriceCircle.style.backgroundColor = secondLineColor;
    }

    /** Calculate the left side point for the tooltip. If left is within the frame width, show it in middle of tooltip width
    * else show it in extreme left or show it accordingly.
    */
    const toolTipMargin = 8;
    const toolTipWidth = tooltip.offsetWidth;
    let left = x - toolTipWidth / 2 + toolTipMargin;

    if (left > clientWidth - toolTipWidth) {
        left = clientWidth - toolTipWidth;
    } else if (left < 0) {
        left = x;
    }

    let dashedLineLeft = x;
    if (dashedLineLeft > clientWidth) {
        dashedLineLeft = clientWidth;
    }

    let circleLeft = x;
    if (x > clientWidth) {
        circleLeft = clientWidth;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = '2px';
    dashedLine.style.left = `${dashedLineLeft - 5}px`;
    onHoverCircle.style.left = `${circleLeft - 5}px`;
    onHoverCircle.style.top = `${firstCoordinateY - 5}px`;
    onHoverSecondCircle.style.left = `${circleLeft - 5}px`;
    onHoverSecondCircle.style.top = `${secondCoordinateY - 5}px`;
};

// Function to handle ratio chart single tap event
export const handleRatioChartSingleTap = (event, chart, firstChartData, newSeries, secondChartData, secondNewSeries, clientWidth) => {
    const { clientX } = event.touches[0];
    const timestamp = chart.timeScale().coordinateToTime(clientX);
    if (timestamp != null) {
        const coordinateX = chart.timeScale().timeToCoordinate(timestamp);
        const firstChartValue = firstChartData.data.find((data) => data.time === timestamp);
        const firstCoordinateY = firstChartValue ? newSeries.priceToCoordinate(firstChartValue.value) : null;
        let dateTime = null;
        let secondChartValue = null;
        let secondCoordinateY = null;
        if (secondChartData.data.length > 0) {
            secondChartValue = secondChartData.data.find((data) => data.time === timestamp);
            secondCoordinateY = secondChartValue ? secondNewSeries.priceToCoordinate(secondChartValue.value) : null;
            dateTime = secondChartValue.xAxisValue;
        } else {
            dateTime = firstChartValue.xAxisValue;
        }
        displayRatioChartTooltip(coordinateX, dateTime, firstChartValue?.value, secondChartValue?.value,
            clientWidth, firstCoordinateY, secondCoordinateY, firstChartData?.graphLineColor, secondChartData?.graphLineColor);
    }
};
