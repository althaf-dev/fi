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
    amountFormatter,
}
