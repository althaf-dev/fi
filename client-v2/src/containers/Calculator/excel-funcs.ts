/**
 * Excel formulas written in javascript
 * Taken from - https://github.com/handsontable/hyperformula
 * Test formulas here - https://formulajs.info/functions
*/

/**
 * FV (future value), one of the financial functions, calculates the future value of an investment based on a constant interest rate.
 * You can use FV with either periodic, constant payments, or a single lump sum payment.
 * Ref - https://support.microsoft.com/en-us/office/fv-function-2eef9f44-a084-4c61-bdd8-4fe4bb1b71b3
 *
 * @param rate The interest rate per period
 * @param nper The total number of payment periods in an annuity.
 * @param pmt The payment made each period; it cannot change over the life of the annuity.
 *            Typically, pmt contains principal and interest but no other fees or taxes. If pmt is omitted, you must include the pv argument.
 * @param pv The present value, or the lump-sum amount that a series of future payments is worth right now.
 *           If pv is omitted, it is assumed to be 0 (zero), and you must include the pmt argument.
 * @param type The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 *             Type = 0 means payments are due at the end of the period. Type = 1 means payments are due at the beginning of the period
 * @returns The future value of an investment
 */
export const FV = (rate: number, nper: number, pmt: number, pv?: number, type?: 0 | 1): number => {
    if (rate === 0) {
        return -pv! - pmt * nper;
    }

    const term = (1 + rate) ** nper;
    return (
        (pmt * (type ? 1 + rate : 1) * (1 - term)) / rate - pv! * term
    );
};

/**
 * Calculates the payment for a loan based on constant payments and a constant interest rate.
 * Ref - https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441
 *
 * @param rate The interest rate per period.
 * @param nper The total number of payments for the loan.
 * @param pv The present value, or the total amount that a series of future payments is worth now; also known as the principal.
 * @param fv The future value, or a cash balance you want to attain after the last payment is made.
 *           If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param type The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 *             Type = 0 means payments are due at the end of the period. Type = 1 means payments are due at the beginning of the period
 * @returns The payment for a loan
 */
export const PMT = (rate: number, nper: number, pv: number, fv?: number, type?: 0 | 1): number => {
    if (rate === 0) {
        return (-pv - fv!) / nper;
    }

    const term = (1 + rate) ** nper;
    return (
        ((fv! * rate + pv * rate * term)
        * (type ? 1 / (1 + rate) : 1)) / (1 - term)
    );
};

/**
 * Returns the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.
 * Ref - https://support.microsoft.com/en-us/office/ipmt-function-5cce0ad6-8402-4a41-8d29-61a0b054cb6f
 *
 * @param rate The interest rate per period.
 * @param per The period for which you want to find the interest and must be in the range 1 to nper.
 * @param nper The total number of payment periods in an annuity.
 * @param pv The present value, or the lump-sum amount that a series of future payments is worth right now.
 * @param fv The future value, or a cash balance you want to attain after the last payment is made.
 *           If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0).
 * @param type The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 *             Type = 0 means payments are due at the end of the period. Type = 1 means payments are due at the beginning of the period
 * @returns The interest payment for a given period
 */
function ipmtCore(rate: number, per: number, nper: number, pv: number, fv?: number, type?: 0 | 1): number {
    const payment = PMT(rate, nper, pv, fv, type);
    if (per === 1) {
        return rate * (type ? 0 : -pv);
    }

    return (
        rate * (type
            ? FV(rate, per - 2, payment, pv, type) - payment
            : FV(rate, per - 1, payment, pv, type))
    );
}

/**
 * Returns the cumulative interest paid on a loan between start_period and end_period.
 * Ref - https://support.microsoft.com/en-us/office/cumipmt-function-61067bb0-9016-427d-b95b-1a752af0e606
 *
 * @param rate The interest rate.
 * @param nper The total number of payment periods.
 * @param pv The present value.
 * @param startPeriod The first period in the calculation. Payment periods are numbered beginning with 1.
 * @param endPeriod The last period in the calculation.
 * @param type The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 *             Type = 0 means payments are due at the end of the period. Type = 1 means payments are due at the beginning of the period
 * @returns The cumulative interest paid on a loan
 */
export const CUMIPMT = (rate: number, nper: number, pv: number, startPeriod: number, endPeriod: number, type: 0 | 1): number => {
    if (startPeriod > endPeriod) {
        throw new Error('start greater than end');
    }
    let acc = 0;
    for (let i = startPeriod; i <= endPeriod; i += 1) {
        acc += ipmtCore(rate, i, nper, pv, 0, type);
    }
    return acc;
};

/**
 * Returns the present value of an investment, based on a constant interest rate.
 * Ref - https://support.microsoft.com/en-us/office/pv-function-23879d31-0e02-4321-be01-da16e8168cbd
 *
 * @param rate The interest rate.
 * @param periods The total number of payment periods.
 * @param payment The payment value.
 * @param future The future value
 * @param type The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 *             Type = 0 means payments are due at the end of the period. Type = 1 means payments are due at the beginning of the period
 * @returns The present value of an investment
 */
export const PV = (rate: number, periods: number, payment: number, future: number, type: 0 | 1): number => {
    const typeValue = type ? 1 : 0;
    if (rate === -1) {
        if (periods === 0) {
            throw new Error('Period cannot be 0');
        } else {
            throw new Error('Dividing by 0');
        }
    }
    if (rate === 0) {
        return -payment * periods - future;
    }

    // eslint-disable-next-line no-restricted-properties
    return ((1 - Math.pow(1 + rate, periods)) * payment * (1 + rate * typeValue) / rate - future) / Math.pow(1 + rate, periods);
};
