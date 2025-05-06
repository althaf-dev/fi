/**
 * Formats give name object with name keys in snake_case into camelCase
 * @param {object} name name object with keys in snake_case
 * @returns {object} formatted name with keys in camelCase
 */

const getFormattedName = (name) => {
    const formattedName = {
        firstName: '',
        middleName: '',
        lastName: '',
        honorific: '',
    };

    if (name) {
        const {
            first_name, middle_name, last_name, honorific,
        } = name;
        formattedName.firstName = first_name;
        formattedName.middleName = middle_name;
        formattedName.lastName = last_name;
        formattedName.honorific = honorific;
    }

    return formattedName;
};

/**
* Formats given name string into an object with first name, middle name and last name
* @param {string} name name string in the format 'firstName middleName lastName' where middleName is optional
* @return {object} formatted name object in the format {firstName: 'firstName', middleName: 'middleName', lastName: 'lastName'}
*/

const getFormattedNameObject = (name) => {
    if (!name) return {};

    const nameArray = name.split(' '); // split given name string based on single space

    let formattedName = {};
    if (nameArray.length >= 3) {
        /**
        * If given name string is of length 3 after splitting based on a single space, like 'John Dan Joe',
        * formatted name will be {firstName: 'John', middleName: 'Dan', lastName: 'Joe'}
        * If length is more than 3 like 'John Dan Smith Joe', first and last will be first and last name respectively
        * and the remaining will be middle name e.g. {firstName: 'John', middleName: 'Dan Smith', lastName: 'Joe'}
        */

        const tempArray = Object.assign([], nameArray);
        tempArray.shift();
        tempArray.pop();

        formattedName = {
            firstName: nameArray[0],
            middleName: tempArray.join(' '),
            lastName: nameArray[nameArray.length - 1],
        };
    } else if (nameArray.length === 2) {
        /**
         * If given name string is of length 2 like 'John Joe',
         * formatted name will be {firstName: 'John', middleName: '', lastName: 'Joe'}
         */

        formattedName = {
            firstName: nameArray[0],
            middleName: '',
            lastName: nameArray[1],
        };
    } else if (nameArray.length === 1) {
        /**
         * If given name string is of length 1 like 'John',
         * formatted name will be {firstName: 'John', middleName: '', lastName: ''}
         */

        formattedName = {
            firstName: nameArray[0],
            middleName: '',
            lastName: '',
        };
    }
    return formattedName;
};

/**
* Formats given name object into name string.
* @param {object} name name object in the format {firstName: 'firstName', middleName: 'middleName', lastName: 'lastName'}
* @return {string} formatted name string in the format 'firstName middleName lastName'
*/

const getFormattedNameString = (name) => {
    if (!name) return '';

    const formattedName = `${name?.firstName || name?.first_name} ${name?.middleName || name?.middle_name} ${name?.lastName || name?.last_name}`;
    return formattedName;
};

module.exports = { getFormattedName, getFormattedNameObject, getFormattedNameString };
