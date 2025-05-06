/**
 * @file image url converter
 * function to handle image url conversion
 */

/**
 * Formats an amount with optional decimal digits and currency symbol.
 * @param CDN_URL - The CDN URL to be formatted.
 * @param url - The original URL to be converted.
 * @param hasContent - Whether the URL has "content".
 * @returns The formatted URL string.
 */

export const toCDNUrl = (CDN_URL: string, url: string, hasContent: boolean) => {
    if (!url) return "";
    const regexToGetGroup = /https:\/\/.*\/(.*?)(\?|$)/;
    const group = url.match(regexToGetGroup);
    return `${CDN_URL}${hasContent?'':'/content'}/${group![1]}`;      
};
