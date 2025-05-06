/**
 * This file contains utility functions for the DebitCardTravelBudget container.
 */

import { ClientPlatform } from '@/interfaces/mobile';
import { DC_TRAVEL_BUDGET_FN_NAME, DC_TRAVEL_BUDGET_WINDOW_OBJECT_NAME, monthNames } from './constants';
import { callMobileClientFunction } from '@/utils/Mobile';

/**
 * Converts a date string to the format 'YYYY-MM-DD'.
 * @param dateString - The date string to be converted.
 * @returns The converted date string in the format 'YYYY-MM-DD'.
 * @example
 * convertDate('2023-04-15') // Returns '2023-04-15'
 * convertDate('April 15, 2023') // Returns '2023-04-15'
 */
const convertDate = (dateString: string, dayChange?: number) => {
    if (!dateString) return '';
    const dateObject = new Date(dateString);
    const date = dateObject?.getDate() + (dayChange || 0);
    const month = dateObject?.getMonth() + 1;
    const year = dateObject?.getFullYear();

    if (date && month && year) {
        if (date < 10 && month < 10) {
            return `${year}-0${month}-0${date}`;
        }
        if (date < 10) {
            return `${year}-${month}-0${date}`;
        }
        if (month < 10) {
            return `${year}-0${month}-${date}`;
        }
        return `${year}-${month}-${date}`;
    }
    return '';
};

/**
 * Converts arrival and departure dates to a formatted string.
 * @param arrival - The arrival date.
 * @param departure - The departure date.
 * @returns The formatted string representing the arrival and departure dates.
 * @example
 * convertDates({ arrival: '2023-04-15', departure: '2023-04-20' })
 * // Returns '15 April - 20 April'
 */
const convertDates = ({ arrival, departure }: { arrival?: string | number, departure?: string | number }) => {
    if (!(arrival && departure)) return '';
    if (Number.isNaN(new Date(departure).getTime())) {
        // eslint-disable-next-line no-param-reassign
        arrival = Date.now();
    }
    if (Number.isNaN(new Date(departure).getTime())) {
        // eslint-disable-next-line no-param-reassign
        departure = new Date().setDate(new Date(arrival).getDate() + 1);
    }
    const arrivalTime = new Date(arrival);
    const departureTime = new Date(departure);
    const arrivalDate = arrivalTime?.getDate();
    const arrivalMonth = arrivalTime?.getMonth();
    const arrivalYear = arrivalTime?.getFullYear();

    const departureDate = departureTime?.getDate();
    const departureMonth = departureTime?.getMonth();
    const departureYear = departureTime?.getFullYear();

    if (arrivalYear !== departureYear) {
        return `${arrivalDate} ${monthNames[arrivalMonth]}, ${arrivalYear} - ${departureDate} ${monthNames[departureMonth]}, ${departureYear}`;
    }
    return `${arrivalDate} ${monthNames[arrivalMonth]} - ${departureDate} ${monthNames[departureMonth]}`;
};

/**
 * Searches an array of objects based on a query string.
 * @param searchData - The array of objects to be searched.
 * @param query - The query string to search for.
 * @returns An array of objects that match the search query.
 * @example
 * search([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }], 'Jane')
 * // Returns [{ name: 'Jane', age: 25 }]
 */
const search = (searchData: Array<object>, query: string): object[] => {
    // Get the keys of the search data objects
    const searchParameters = Object.keys(Object.assign({}, ...searchData));
    // Format the query string to lowercase and trim any leading/trailing spaces
    const formattedQuery = query.toLowerCase().trim();
    // Filter the searchData array based on the search query
    return searchData.filter(
        (data: { [key: string]: any }) => searchParameters.some((parameter) => data[parameter].toString().toLowerCase().includes(formattedQuery))
    );
};

/**
 * Triggers mobile events using the Mobile utility function.
 * @param eventData - The event data containing the event name and optional data.
 * @param platform - The client platform (iOS or Android).
 * @example
 * triggerMobileEvents({ eventName: 'navigate', data: { screen: 'home' } }, 'iOS')
 * // Logs 'EVENT TRIGGERED: navigate'
 */
const triggerMobileEvents = (eventData: { eventName: string, data?: object }, platform: ClientPlatform) => {
    // eslint-disable-next-line no-console
    console.log(`EVENT TRIGGERED: ${eventData.eventName}`);
    callMobileClientFunction(platform, eventData, DC_TRAVEL_BUDGET_FN_NAME, DC_TRAVEL_BUDGET_WINDOW_OBJECT_NAME);
};

/**
 * Formats an amount with optional decimal digits and currency symbol.
 * @param amount - The amount to be formatted.
 * @param decimalDigits - The optional decimal digits configuration.
 * @param isCurrency - Whether the amount represents a currency value.
 * @returns The formatted amount string.
 * @example
 * amountFormatter(1234.56, { min: 2, max: 2 }, true) // Returns '₹1,234.56'
 * amountFormatter(1234, {}, false) // Returns '1,234'
 */
const amountFormatter = (
    amount: number,
    decimalDigits: { min?: number, max?: number } = {},
    isCurrency = true,
) => {
    if (amount === undefined) {
        if (isCurrency) {
            return '₹0';
        }
        return '0';
    }

    const formatter = new Intl.NumberFormat('en-IN', {
        ...(isCurrency && {
            style: 'currency',
            currency: 'INR',
        }),
        maximumFractionDigits: (decimalDigits && decimalDigits?.max) || 0,
        minimumFractionDigits: (decimalDigits && decimalDigits?.min) || 0,
    });

    return formatter.format(amount);
};

export {
    convertDate,
    convertDates,
    search,
    triggerMobileEvents,
    amountFormatter,
};
