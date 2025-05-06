/**
 * @file utils.ts
 *
 * Utility functions for ATM limit withdrawal.
 */

/**
 * Formats a given amount into a currency string based on the specified currency.
 * @param {number} amount - The amount of money to format.
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR', 'INR') to format the amount in.
 * @returns {string} - The formatted currency string.
 */

const formatAmount = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency,
    });

    return formatter.format(amount);
}

export {
    formatAmount,
}
