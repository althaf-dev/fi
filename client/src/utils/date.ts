/* eslint-disable import/prefer-default-export */

/**
 * @param {number} numberOfDays
 * @returns {number} return milisecond per day
 */
export const getMiliSecondPerDay = (numberOfDays?: number): number => {
    const msPerDay: number = 1000 * 60 * 60 * (24 * (numberOfDays || 1));

    return msPerDay;
};

/**
 * @param {string} startDate
 * @param {string } endDate
 * @returns {number} return difference between two dates in number of days
 */
export const getDifferenceBetweenTwoDates = (startDate: string, endDate: string): number => {
    const startDateValue: Date = new Date(startDate);
    const endDateValue: Date = new Date(endDate);

    const differenceBetweenTwoDatesInMiliSeconds: number = Math.abs(endDateValue.valueOf() - startDateValue.valueOf());
    const differenceBetweenTwoDatesInDays: number = Math.ceil(differenceBetweenTwoDatesInMiliSeconds / getMiliSecondPerDay(1));

    return differenceBetweenTwoDatesInDays;
};

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * @param {Date} date
 * @returns {string} month name
 */
export const getMonthNameFromDate = (date: Date) => monthNames[date.getMonth()];

/**
 * Converts a mobile date string to the "mm/dd/yyyy hh:mm:ss" format that works in all browsers.
 *
 * @param {string} dateString - The date string in "2022-06-28T09:30" format.
 * @returns {string} The date string in "mm/dd/yyyy hh:mm:ss" format.
 */
export const convertMobileDateStringToFormat = (dateString: string): string => {
    const date = new Date(dateString);
    const formattedDate = `${(date.getMonth() > 8)
        ? (date.getMonth() + 1) : (`0${date.getMonth() + 1}`)}/${(date.getDate() > 9) ? date.getDate()
        : (`0${date.getDate()}`)}/${date.getFullYear()}`;

    // Format the date string in "mm/dd/yyyy hh:mm:ss" format
    return `${formattedDate} ${date.toString().split(' ')[4]}`;
};

/**
 * Converts a date string to the "mm/dd/yyyy hh:mm:ss" format that works in all browsers.
 *
 * @param {string} dateString - The date string in "hh:mm AM/PM DD MMM YY" format.
 * @returns {string} The date string in "mm/dd/yyyy hh:mm:ss" format.
 */
export const convertDateStringToFormat = (dateString: string): string => {
    // Split the date string into its respective parts
    const dateParts: string[] = dateString.split(' ');

    /**
     * Check length to determine what type of dateString format is being used.
     * In mobile devices like android/ios, the date format is - "2022-06-28T09:30"
     * In web devices, the date format is - "07:00 PM 27 Jun 23"
     */
    if (dateParts.length <= 1) {
        return convertMobileDateStringToFormat(dateString);
    }

    // Extract the time, AM/PM, day, month, and year parts from the date string
    const timePart: string = dateParts[0];
    const ampmPart: string = dateParts[1];
    const dayPart: string = dateParts[2];
    const monthPart: string = dateParts[3];
    const yearPart: string = dateParts[4];

    // Get the month number by finding the index of the month name in the monthNames array
    const monthNumber: number = monthNames.indexOf(monthPart) + 1;

    // Convert the two-digit year to a four-digit year by adding 2000
    const year: number = Number(yearPart) + 2000;

    // Convert the hour and minute parts to numbers
    const [hour, minute]: number[] = timePart.split(':').map(Number);

    // Adjust the hour value based on AM/PM
    let hour24Format: number = hour;

    if (ampmPart === 'PM' && hour < 12) {
        hour24Format += 12;
    } else if (ampmPart === 'AM' && hour === 12) {
        hour24Format = 0;
    }

    // Create padded strings for hour, minute, and second
    const paddedHour: string = (`0${hour24Format}`).slice(-2);
    const paddedMinute: string = (`0${minute}`).slice(-2);
    const paddedSecond: string = '00'; // Set the second to '00' for now

    // Format the date string in "mm/dd/yyyy hh:mm:ss" format
    const formattedDate: string = `${monthNumber}/${dayPart}/${year} ${paddedHour}:${paddedMinute}:${paddedSecond}`;

    return formattedDate;
};

/**
 * Validates a date string for format and calendar validity.
 *
 * @param dateString - The date string to validate.
 * @param dateFormatRegex - The regular expression for date format validation.
 *
 * @returns true if the date is valid; otherwise, false.
 */
export const isValidDate = (dateString: string, dateFormatRegex: RegExp): boolean => {
    if (!dateFormatRegex.test(dateString)) {
        return false; // Invalid format
    }

    const date = new Date(dateString);
    const isDateValid = !Number.isNaN(date.getTime());

    return isDateValid;
};
