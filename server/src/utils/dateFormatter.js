const getFormattedDate = (dateString) => {
    const date = new Date(dateString);

    if (date.toString() !== 'Invalid Date') {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
        };
    }

    return null;
};

const addOrSubtractDays = (startingDate, number, add) => {
    if (add) {
        return new Date(new Date().setDate(startingDate.getDate() + number));
    }

    return new Date(new Date().setDate(startingDate.getDate() - number));
};

const allMonthArr = [
    {
        fromDate: {
            year: 2020,
            month: 1,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 1,
            day: 31,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 2,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 2,
            day: 29,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 3,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 3,
            day: 31,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 4,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 4,
            day: 30,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 5,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 5,
            day: 31,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 6,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 6,
            day: 30,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 7,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 7,
            day: 31,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 8,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 8,
            day: 31,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 9,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 9,
            day: 30,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 10,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 10,
            day: 31,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 11,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 11,
            day: 30,
        },
    },
    {
        fromDate: {
            year: 2020,
            month: 12,
            day: 1,
        },
        toDate: {
            year: 2020,
            month: 12,
            day: 31,
        },
    },
];

const monthNameArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
* Given date object, returns formatted date string.
* @param {Date} date Date object
* @return {string} formatted dateString in 'Day Month, Year' form. e.g. '1 January, 2023'
*/
const getFormattedDateString = (date) => {
    if (!(date instanceof Date)) return '';

    const options = {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata',
    };
    const localeDateString = date.toLocaleDateString('en-US', options);
    const formattedDate = getFormattedDate(localeDateString);
    return `${formattedDate.day} ${monthNameArr[formattedDate.month - 1]}, ${formattedDate.year}`;
};

/**
* Given date object, returns formatted time string.
* @param {Date} date Date object
* @return {string} formatted timeString in 'Hr:Min:Sec AM/PM' form. e.g. '11:06:23 PM'
*/
const getFormattedTimeString = (date) => {
    if (!(date instanceof Date)) return '';

    const formattedTimeString = date.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
    return formattedTimeString;
};

/**
* Function to convert given date object to date and time format
* @param {Date} date Date object
* @return {string} formatted time and date string in the format e.g. '1 January, 2023 11:06:23 PM'
* Ref: https://stackoverflow.com/a/18648314
*/
const getFormattedDateAndTime = (date) => {
    if (!(date instanceof Date)) return '';

    const formattedDate = getFormattedDateString(date);
    const formattedTime = getFormattedTimeString(date);
    return `${formattedDate} ${formattedTime}`;
};

/**
 * Given a timestamp object, returns a formatted date string.
 * @param {object} ts Timestamp object
 * @return {string} Formatted date string in 'DD/MM/YYYY' form. e.g. '10/02/2021'
 */
const getParsedDateFromTs = (ts) => {
    if (!ts || !ts.seconds) return '-';

    const { seconds } = ts;
    const date = new Date(seconds * 1000);

    // e.g. - 10/02/2021
    return date.toLocaleString('en-GB', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};

/**
 * Given a date string, returns the timestamp in seconds.
 * @param {string} dateStr Date string
 * @return {number|null} Timestamp in seconds or null if the date string is invalid
 */
const getTimestampInSeconds = (dateStr) => {
    if (!dateStr) return null;

    const date = new Date(dateStr);

    return Date.parse(date) / 1000;
};

module.exports = {
    getFormattedDate,
    addOrSubtractDays,
    allMonthArr,
    monthNameArr,
    getFormattedDateAndTime,
    getParsedDateFromTs,
    getTimestampInSeconds,
};
