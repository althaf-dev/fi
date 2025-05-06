const crypto = require('crypto');

const base64ToAscii = (str) => Buffer.from(str, 'base64').toString('ascii');

const asciiToBase64 = (str) => Buffer.from(str, 'ascii').toString('base64');

const base64ToString = (str) => Buffer.from(str, 'base64').toString();

const stringToBase64 = (str) => Buffer.from(str).toString('base64');

/**
 * Returns a random number from a given range.
 * Min and Max are both inclusive.
 * @param {number} min The minimum number for the range.
 * @param {number} max The maximum number for the range.
 * @returns {number} A number between the min & max range.
 */
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// helper function for getRandomString()
const intToHex = (nr) => nr.toString(16).padStart(2, '0');

/**
 * Generates a random string of the given the number of bytes.
 * The length of the string is 2 times the number of bytes passed.
 * @param {number} bytes The number of bytes for generating the random string.
 * @returns {string} The random string generated.
 */
const getRandomString = (bytes) => {
    if (!bytes) return '';
    const array = crypto.randomBytes(bytes).toJSON().data;
    return array.map(intToHex).join('');
};

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
 * Formats a given input date and time into the desired format.
 *
 * @param {string} inputDateTime - The input date and time string (in the format "YYYY-MM-DDTHH:mm").
 * @returns {string} The formatted date and time string in the format "HH:mm AM/PM DD MMM YY".
 *
 * @example
 * // Returns "09:29 AM 03 Jun 23"
 * formatDateTime("2023-06-03T01:29");
 */
const formatDateTime = (inputDateTime) => {
    const dateObj = new Date(inputDateTime);

    const formattedTime = dateObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const formattedDate = dateObj.toLocaleString('en-US', { day: '2-digit', month: 'short', year: '2-digit' });

    const formattedDateTime = `${formattedTime} ${formattedDate}`;

    return formattedDateTime;
};

module.exports = {
    base64ToAscii,
    asciiToBase64,
    base64ToString,
    stringToBase64,
    randomIntFromInterval,
    getRandomString,
    convertAmountToString,
    formatDateTime,
};
