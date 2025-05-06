/**
 * @file This file contains common utility functions that can be used across multiple parts of the application.
 *
 * @summary Examples of functions that might be included in this file are string manipulation, number formatting, and more.
 * By centralizing these functions in a single file, we can reduce code duplication and simplify maintenance.
 *
 */

import { IColorOptions } from '../interfaces/elements';

/**
 * This function takes an object containing a boolean value and two colors, and returns one of the colors
 * based on the value of the boolean.
 * If the boolean is true, the first color is returned. Otherwise, the second color is returned.
 *
 * @param colorOptions An object containing the boolean value and two colors.
 * @returns The color that corresponds to the boolean value.
 *
 * Example usage:
 * const colorOptions = {
 *   condition: true,
 *   firstColor: "#FF0000",
 *   secondColor: "#0000FF"
 * };
 * const textColor = formatTextColorBasedOnTheCondititon(colorOptions);
 * console.log(textColor); // "#FF0000"
 */
const formatTextColorBasedOnTheCondititon = (colorOptions: IColorOptions): string => {
    const { condition, firstColor, secondColor } = colorOptions;

    const color = condition ? firstColor : secondColor;

    return color;
};

/**
 * This function formatting currency values to a locale-specific string.
 * The function takes a number value as input and returns a string representation of the value with
 * the Indian English locale format.
 *
 * Example usage:
 * const formattedValue = formatCurrencyValue(9000); // "9,000"
 */
const formatCurrencyValue = (value: number): string => value?.toLocaleString('en-IN');

/**
 * Converts a string to a URL-friendly slug format.
 *
 * @param {string} value - The string to be converted.
 * @returns {string} The slug representation of the input string.
 *
 * @example
 * convertToSlug("Hello World");
 * returns "hello-world"
 */
const convertToSlug = (value) => value?.toLowerCase().split(' ').join('-');

/**
 * Converts a slug to a string format.
 *
 * @param {string} value - The input slug.
 * @returns {string} The string representation of the input slug.
 *
 * @example
 * convertToString("hello-world");
 * returns "Hello World"
 */
const convertToString = (value) => value?.toLowerCase().split('-').join(' ');

export { formatTextColorBasedOnTheCondititon, formatCurrencyValue, convertToSlug, convertToString };
