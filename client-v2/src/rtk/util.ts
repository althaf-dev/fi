/**
 * Capitalizes the first letter of a string.
 * @param string - The input string.
 * @returns The input string with the first letter capitalized.
 */
export function capitalize(string: string) {
    if (string.length === 0) return '' as never;

    return (string[0].toUpperCase() + string.slice(1)) as never;
}

/**
 * Converts a snake_case string to camelCase.
 * @param string - The input string in snake_case.
 * @returns The input string converted to camelCase.
 */
export function snakeToCamel(string: string) {
    const [start, ...rest] = string.split('_');

    return (start + rest.map(capitalize).join('')) as never;
}

/**
 * Converts all snake_case properties of an object to camelCase.
 * @param object - The input object.
 * @returns A new object with all snake_case properties converted to camelCase.
 */
export function snakeToCamelProperties(object: object): object {
    if (!object || typeof object !== 'object') return object;
    return Object
        .entries(object)
        .reduce((result, [key, value]) => ({
            ...result,
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            [snakeToCamel(key)]: snakeToCamelNestedValues(value),
        }), {});
}

/**
 * Recursively converts all snake_case properties of an object to camelCase.
 * @param value - The input value.
 * @returns The input value with all snake_case properties converted to camelCase.
 */
export function snakeToCamelNestedValues(value: any): any {
    if (!value || typeof value !== 'object') return value;

    if (!Array.isArray(value)) {
        return snakeToCamelProperties(value);
    }

    return value.map(snakeToCamelNestedValues);
}

/**
 * Converts an object to a query string.
 * @param data - The input object.
 * @param mask - Whether to mask the values in the query string.
 * @returns The query string representation of the input object.
 */
export const getQueryStringFromObject = (data: { [key: string]: any }, mask = false) => (
    Object.keys(data)
        .filter((key) => data[key])
        .map((key) => {
            let value = data[key];

            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }

            if (mask) value = btoa(value);

            value = encodeURIComponent(value);

            return `${key}=${value}`;
        }).join('&')
);
