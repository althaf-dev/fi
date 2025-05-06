/**
 * @file Contains helper function that is used throughout the project to purify html string
 */
import DOMPurify from 'isomorphic-dompurify';

/**
 * Converts an dirty html string to a purified html string.
 *
 * @param {string} value - The HTML string to be purified.
 * @param {Object} options - Contains options configure DOMPurify.
 * @param {boolean} options.FORCE_BODY - Glue elements like style or others to document.body and
 *                                      prevent unintuitive browser behavior in several edge-cases (default is true).
 * @param {Array<string>} options.ADD_ATTR - Extra Attributes to be allowed by the DOMPurify(default adds scoped and target attributes).
 * @param {Array<string>} options.ADD_TAGS - Extra Tags to be allowed by the DOMPurify.
 * @returns {string} The purified HTML string.
 *
 * @example
 * // Returns '<img src="x">'
 * htmlSanitization('<img src=x onerror=alert(1)//>');
 */

const htmlSanitization = (value: string, options = {
    FORCE_BODY: true,
    ADD_TAGS: [],
    ADD_ATTR: ['scoped', 'target'],
}) => {
    const purifiedHTML = DOMPurify.sanitize(value, options);
    return purifiedHTML;
};

export default htmlSanitization;
