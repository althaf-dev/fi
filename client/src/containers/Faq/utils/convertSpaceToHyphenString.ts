/**
 * Function take a string and split the string on the bases of ? and add hyphen at the place of spaces
 * @param str {string}
 * @returns {string}
 */
const convertSpaceToHyphenString = (str: string) => {
    const formattedString = str.split('?')[0].trim().toLowerCase();

    if (formattedString.indexOf(' ') >= 0) {
        return encodeURIComponent(formattedString.split(' ').join('-'));
    }

    return encodeURIComponent(formattedString);
};

export default convertSpaceToHyphenString;
