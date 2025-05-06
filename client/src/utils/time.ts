/* eslint-disable import/prefer-default-export */
/**
* @param countDownDate
* @returns days and hours
* check countDownDate date is valid or not if valid then calculate the remaining days and hours between the countdown date and currentDate
*/

// TODO: need to write unit test for this function
export const countDownTimer = (countDownDate: string) => {
    const countDownTime = new Date(countDownDate).getTime();

    if (!countDownTime) {
        return '';
    }

    const currentTime = new Date().getTime();
    const remaningTime = countDownTime - currentTime;

    let timeLeft = {};

    if (remaningTime > 0) {
        timeLeft = {
            days: Math.floor(remaningTime / (1000 * 60 * 60 * 24)),
            hours: Math.floor((remaningTime / (1000 * 60 * 60)) % 24),
        };
    }

    return timeLeft;
};

/**
 * convertEpochDateToHuman converts a epoch time to a human readable time
 * @param dateTime {DateTime} Ex - 2017-09-12T20:00
 * @returns {string} human readable time Ex - 08:00PM
 */
export const convertEpochDateToTime = (dateTime) => {
    const date = new Date(dateTime);
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    const resultFormat = `${time}`;
    return resultFormat;
};

/**
 * convertEpochDateToDate converts a formatted datetime to specify format datetime
 * @param dateTime {DateTime} Ex - 2017-09-12T20:00
 * @returns {string} human readable datetime Ex - 12 09 2017
 */
export const convertEpochDateToDate = (dateTime) => {
    const date = new Date(dateTime);
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.toLocaleString('en-US', { year: '2-digit' });
    const resultFormat = `${day} ${month} ${year}`;
    return resultFormat;
};

/**
 * convertEpochToDatetime converts a formatted datetime to specify format datetime
 * @param utcSeconds {utcSeconds} Ex - 123124123
 * @returns {string} human readable datetime Ex - 08:00PM 12 SEPT 2017
 */
export const convertEpochToDatetime = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.toLocaleString('en-US', { year: '2-digit' });
    const resultFormat = `${time} ${day} ${month} ${year}`;
    return resultFormat;
};

/**
 * convertEpochToDate converts a formatted datetime to specify format datetime
 * @param utcSeconds {utcSeconds} Ex - 123124123
 * @returns {string} human readable datetime Ex - 12 Sept'2017
 */
export const convertEpochToDate = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.toLocaleString('en-US', { year: '2-digit' });
    const resultFormat = `${day} ${month}'${year}`;
    return resultFormat;
};

/**
 * convertEpochToDateYearFormat converts a formatted datetime to specify format datetime
 * @param utcSeconds {utcSeconds} Ex - 123124123
 * @returns {string} human readable datetime Ex - 12 SEPT 2017
 */
export const convertEpochToDateYearFormat = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.toLocaleString('en-US', { year: '2-digit' });
    const resultFormat = `${day} ${month} ${year}`;
    return resultFormat;
};

/**
 * convertEpochToDateFormat converts a formatted datetime to specify format datetime
 * @param utcSeconds {utcSeconds} Ex - 123124123
 * @returns {string} human readable datetime Ex - 12 SEPT
 */
export const convertEpochToDateFormat = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const resultFormat = `${day} ${month}`;
    return resultFormat;
};

/**
 * convertEpochToTime converts a formatted datetime to specify format datetime
 * @param utcSeconds {utcSeconds} Ex - 123124123
 * @returns {string} human readable time Ex - 8:00PM
 */
export const convertEpochToTime = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    return time;
};

/**
 * convertEpochToYear converts a formatted datetime to specify format year
 * @param utcSeconds {utcSeconds} Ex - 123124123
 * @returns {string} human readable time Ex - 2017
 */
export const convertEpochToYear = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);
    const year = date.toLocaleString('en-US', { year: 'numeric', timeZone: 'GMT' });
    return year;
};

/**
 * convertEpochToDatetime converts a formatted datetime to specify format datetime
 * @param dateTime {DateTime} Ex - 2017-09-12T20:00
 * @returns {string} human readable datetime 8:00PM 12 Sept 2017
 */
export const convertEpochDateToDatetime = (dateTime) => {
    const date = new Date(dateTime);
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.toLocaleString('en-US', { year: '2-digit' });
    const resultFormat = `${time} ${day} ${month} ${year}`;
    return resultFormat;
};
