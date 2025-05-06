/**
* @file Util functions for Financial Charts.
*/

import { Nominal } from 'lightweight-charts';

import { ClientPlatform } from '../../interfaces/mobile';
import { callMobileClientFunction } from '../../utils/Mobile';

import { US_STOCKS_MOBILE_FN_NAME } from './constants';
import { IUSStocksMobileEvent } from './interfaces';

/**
 * nextBusinessDay returns the next day for a provided date
 * @param time {{day: number, month: number, year: number}}
 * @returns {{day: number, month: number, year: number}}
 */
const nextBusinessDay = (time) => {
    const d = new Date();
    d.setUTCFullYear(time.year);
    d.setUTCMonth(time.month - 1);
    d.setUTCDate(time.day + 1);
    d.setUTCHours(0, 0, 0, 0);

    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
    };
};

/**
 * removeEscapeCharacter removes the escape character '\' from a string
 * @param originalString {string} original string
 * @returns {string} newString without the escape character
 */
const removeEscapeCharacter = (originalString) => {
    const newString = originalString.replace('\\', '');

    return newString;
};

/**
 * convertDataToParsedJson converts received data to JSON format
 * @param data {object} time and price
 * @returns parsedJSON {JSON} parsed json
 */
const convertDataToParsedJson = (data) => {
    // Chart needs time data in UTCTimestamp.
    // @ref https://tradingview.github.io/lightweight-charts/docs/api#time
    type UTCTimestamp = Nominal<number, 'UTCTimestamp'>;
    const modifiedData = removeEscapeCharacter(data);
    const parsedJSON = JSON.parse(modifiedData);
    parsedJSON.time = parsedJSON.time as UTCTimestamp;
    return parsedJSON;
};

/**
 * triggerMobileEvents trigger mobile events
 */
const triggerMobileEvents = (eventData: IUSStocksMobileEvent, platform: ClientPlatform) => {
    // eslint-disable-next-line no-console
    console.log(`EVENT TRIGGERED: ${eventData.eventName}`);
    callMobileClientFunction(platform, eventData, US_STOCKS_MOBILE_FN_NAME);
};

/**
 * retrieveTooltipInnerHTML Generate inner html for tooltip
 */
const retrieveTooltipInnerHTML = (firstSeriesPrice, secondSeriesPrice, dateTime) => {
    if (secondSeriesPrice && firstSeriesPrice) {
        return `<div class='multi-chart-price-text'>
        <div id='firstPriceCircle' class='multi-chart-price1-circle'></div> ${Number(firstSeriesPrice).toFixed(2)} 
        <div id='secondPriceCircle' class='multi-chart-price2-circle'></div> ${Number(secondSeriesPrice).toFixed(2)}</div>
        <div class='multi-chart-time-text'>${dateTime}</div>`;
    }

    if (!firstSeriesPrice) {
        return `<div class='multi-chart-price-text'>
        <div id='secondPriceCircle' class='multi-chart-price2-circle'></div> ${Number(secondSeriesPrice).toFixed(2)}
        <div class='multi-chart-time-text'>${dateTime}</div>`;
    }

    return `<div class='multi-chart-price-text'>
        <div id='firstPriceCircle' class='multi-chart-price1-circle'></div> ${Number(firstSeriesPrice).toFixed(2)}
        <div class='multi-chart-time-text'>${dateTime}</div>`;
};

export {
    nextBusinessDay, removeEscapeCharacter, convertDataToParsedJson, triggerMobileEvents, retrieveTooltipInnerHTML,
};
