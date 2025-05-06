/**
 * @file Contains all helper functions that are used throughout the project
 */

import either from 'ramda/src/either';
import isEmpty from 'ramda/src/isEmpty';
import isNil from 'ramda/src/isNil';

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`.
 *
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isNilOrEmpty([1, 2, 3]); //=> false
 * RA.isNilOrEmpty([]); //=> true
 * RA.isNilOrEmpty(''); //=> true
 * RA.isNilOrEmpty(null); //=> true
 * RA.isNilOrEmpty(undefined): //=> true
 * RA.isNilOrEmpty({}); //=> true
 * RA.isNilOrEmpty({length: 0}); //=> false
 */
// eslint-disable-next-line import/prefer-default-export
const isNilOrEmpty = either(isNil, isEmpty);

/**
 * Converts an amount object to a formatted string.
 *
 * @param {Object} amount - The amount object containing units and decimals.
 * @param {number} amount.units - The unit value.
 * @param {number} amount.decimals - The decimal value.
 * @returns {string} The formatted amount string.
 *
 * @example
 * // Returns '107.78'
 * convertAmountToString({ units: 107, decimals: 78 });
 *
 * // Returns '-'
 * convertAmountToString({});
 */
const convertAmountToString = (amount) => {
    if (!amount || !amount.units || !amount.decimals) {
        return '';
    }

    const units = Number(amount.units);
    const decimals = String(amount.decimals).padStart(2, '0');
    const amountStr = `${units}.${decimals}`;

    return amountStr;
};

/**
 * Encodes the input url as html encoded to avoid xss
 * @param url the url which needs to be encoded for HTML
 * @returns {string} encoded html format of the url
 * P.S : there is another copy of the same in server/src/utils/urls.js
 * common utils for both server and client needs to be moved into one place
 * TODO : https://monorail.pointz.in/p/fi-app/issues/detail?id=62645
 */
const getEncodedURL = (url = '') => {
    // if the input url is empty or contains white space return empty string
    if (!url || url.trim()) {
        return '';
    }

    // create a URL object from the url string. This will encode the value to be compatible with html encoding
    // this also handles double encoding of the url. If the url is already encoded then it will be handled by the
    // URL object itself.
    // encodeURIComponent doesn't encode single quote (') hence it should be encoded to %27 after encoding
    // https://stackoverflow.com/questions/7298770/how-do-you-pass-an-apostrophe-through-a-url
    return new URL(url).toString().replace(/'/g, '%27');
};

const helpers = {
    isNilOrEmpty,
    convertAmountToString,
    getEncodedURL,
};

export default helpers;
