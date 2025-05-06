/**
 * @file Util functions for calculators
 */

import AllCalculatorJson from '../../assets/json/all-calculators.json';

const SINGLE_CALC_URLS: string[] = AllCalculatorJson.map((item) => item.url);

const isValidSingleCalcUrl = (url: string): boolean => SINGLE_CALC_URLS.indexOf(url) !== -1;

export {
    // Remove the ES lint comment when we have more than 1 export
    // eslint-disable-next-line import/prefer-default-export
    isValidSingleCalcUrl,
};
