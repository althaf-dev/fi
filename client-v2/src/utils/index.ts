/* eslint-disable import/prefer-default-export */
import clientApiWrapper from './clientAPIWrapper';
import { debounce } from './debounce';
import { validateInputtedNumber } from './validateInputtedNumber';
import { countDownTimer } from './time';
import helpers from './helpers';
import { getDifferenceBetweenTwoDates, getMonthNameFromDate, getMiliSecondPerDay, isValidDate } from './date';
import createStreamingConnection from './createStreamingConnection';
import { getDefaultMiddleScrollLeftOffSet } from './commonUtils';
import { getEncodedPlayStoreURL } from './getEncodedPlayStoreURL';
import htmlSanitization from './htmlSanitization';
import clientApiWrapperV2 from './clientAPIWrapperV2';
import { formatCurrencyValue,formatTextColorBasedOnTheCondititon } from './formater';

export {
    clientApiWrapper,
    clientApiWrapperV2,
    debounce,
    validateInputtedNumber,
    countDownTimer,
    helpers,
    getDifferenceBetweenTwoDates,
    getMonthNameFromDate,
    getMiliSecondPerDay,
    createStreamingConnection,
    // transfromSymbolDesisionFactorsRpcResponse,
    // transformUSStocksCollectionsData,
    // transformUSStocksData,
    // transformDataAccordingFeaturePageCarousel,
    getDefaultMiddleScrollLeftOffSet,
    isValidDate,
    getEncodedPlayStoreURL,
    htmlSanitization,
    formatCurrencyValue,
    formatTextColorBasedOnTheCondititon
};
