/**
* @file Code for creating a x-axis.
*/

import { convertDateStringToFormat } from '../../utils/date';
import { convertEpochToDateFormat, convertEpochToTime, convertEpochToYear, convertEpochToDateYearFormat } from '../../utils/time';

import { AXIS_LABEL_COUNT, DIVISIBLE_PORTIONS, OFFSET_VALUES, TIME_PERIOD } from './constants';

// Create X-axis for 1Week, 1 Month, 1 Year and 5 Year chart data.
const createCommonXAxis = (chartData, chart, dFrag, timePeriod) => {
    const totalNumberOfPoints = chartData.length;
    const difference = Math.floor(totalNumberOfPoints / DIVISIBLE_PORTIONS);

    for (let i = 0; i < AXIS_LABEL_COUNT; i += 1) {
        let point;
        let offset = 0;

        if (i === 0) {
            point = chartData[0].time;
            offset = OFFSET_VALUES.AXIS_MARGIN;
        } else if (i === AXIS_LABEL_COUNT - 1) {
            point = chartData[chartData.length - 1].time;
            offset = -OFFSET_VALUES.AXIS_MARGIN;
        } else {
            point = chartData[difference * (i)].time;
        }

        const coordinate = chart.timeScale().timeToCoordinate(point);
        let label = convertEpochToDateFormat(point);
        if (timePeriod === TIME_PERIOD.ONE_YEAR) {
            label = convertEpochToDateYearFormat(point);
        } else if (timePeriod === TIME_PERIOD.FIVE_YEAR) {
            label = convertEpochToYear(point);
        }

        const xAxis = document.createElement('div');
        xAxis.className = 'line-chart-xAxisValue';
        // If time period is 5 year, show only year in x-axis else Date.
        xAxis.innerHTML = label;
        xAxis.style.left = `${coordinate + offset}px`;
        dFrag.appendChild(xAxis);
    }
};

// Create X-axis for 1 day chart. Values should be 8:00PM, 10:00PM, 12:30PM, 02:30AM.
const create1DXAxis = (chartProperties, chartData, chart, dFrag) => {
    const difference = 2 * 60 * 60;
    const width = document.getElementById('overlay').clientWidth;

    /**
     * The chartProperties.dataStartTime and chartProperties.dataEndTime value is being formatted to ensure consistent date representation
     * in the "mm/dd/yyyy hh:mm:ss" format, regardless of the original format of the input date string.
     * This formatted date can be used for displaying or further processing the date value.
     */
    const formattedStartTime = convertDateStringToFormat(chartProperties.dataStartTime);
    const formattedEndTime = convertDateStringToFormat(chartProperties.dataEndTime);

    for (let i = 0; i < 4; i += 1) {
        let point;
        let coordinate;

        if (i === 0) {
            point = new Date(formattedStartTime).getTime() / 1000;
            coordinate = 10;
        } else if (i === 3) {
            point = new Date(formattedEndTime).getTime() / 1000;
            coordinate = width - OFFSET_VALUES.WIDTH_MARGIN;
        } else {
            point = chartData[i - 1].time + difference * i;

            if (i === 2) {
                // We need to add 8960 to the previous time so added 880 to the difference and multiply by 2.
                point = chartData[i - 1].time + (difference + 880) * i;
            }

            coordinate = chart.timeScale().timeToCoordinate(point);

            if (coordinate === null) {
                const time = new Date(formattedStartTime).getTime() / 1000 as any;
                const x = chart.timeScale().timeToCoordinate(time);
                const x2 = chart.timeScale().timeToCoordinate(time + 60);
                const diff = x2 - x;
                coordinate = diff * 120 * i;
                if (i === 2) {
                    // coordinate should be at a difference of 2:30 hours so multiplied diff between to 2 coordinates to 134 * 2.
                    coordinate = diff * 134 * i;
                }
            }
        }

        const xAxis = document.createElement('div');
        xAxis.className = 'line-chart-xAxisValue';
        xAxis.innerHTML = `${convertEpochToTime(point)}`;
        xAxis.style.left = `${coordinate}px`;
        dFrag.appendChild(xAxis);
    }
};

// Remove previous X-axis labels
const removeXAxis = (xAxisElement) => {
    if (xAxisElement) {
        Array.from(xAxisElement.children).forEach((item) => {
            xAxisElement.removeChild(item);
        });
    }
};

// Create X-axis for chart.
const createXAxis = (chartData, chartProperties, chart) => {
    const xAxisElement = document.getElementById('xAxis');

    // clear x-axis element
    removeXAxis(xAxisElement);

    // Create a document fragment:
    const dFrag = document.createDocumentFragment();

    if (chartData.length > 0) {
        if (chartProperties.timePeriod === TIME_PERIOD.ONE_DAY) {
            create1DXAxis(chartProperties, chartData, chart, dFrag);
        } else {
            createCommonXAxis(chartData, chart, dFrag, chartProperties.timePeriod);
        }
    }

    xAxisElement.appendChild(dFrag);
};

export { createXAxis, removeXAxis };
