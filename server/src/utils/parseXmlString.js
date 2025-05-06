/**
 * @file Manages XML parsing using xml2js library.
 */
const { parseString } = require('xml2js');

/**
 * Parses XML data and converts it to a JavaScript object using xml2js.
 *
 * @param {string} xmlData - The XML data to be parsed.
 * @returns {Promise<object>} A Promise that resolves to the JavaScript object representing the parsed XML.
 * @throws {Error} If there's an error during parsing, the Promise is rejected with the error.
 */
const parseXmlString = (xmlData) => new Promise((resolve, reject) => {
    parseString(xmlData, (error, result) => {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    });
});

module.exports = {
    parseXmlString,
};
