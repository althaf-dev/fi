/**
 * @file TotalExpense
 * This file defines a component that renders the total estimated expense for a trip,
 * including a daily expense breakdown and the exchange rate.
 */

import React from 'react';

import { useAppSelector } from '@/rtk/hooks';

import { amountFormatter } from '../../utils';

import {
    BackgroundImage, DailyAmount, ExchangeRate, ExpenseAmount, ExpenseCard, ExpenseTitle, ExpenseWrapper, TotalAmount
} from '../styles';

/**
 * Renders the total estimated expense component.
 * It displays the country's image, the total estimated expense, daily expense breakdown,
 * and the exchange rate between INR and the destination's native currency.
 */
const TotalExpense = () => {
    // Retrieve the budget details from the application's state
    const { budget } = useAppSelector((state) => state?.travelBudget);

    // Destructure necessary values from the budget for displaying
    const {
        countryImage, // The image of the destination country
        unitTotalEstimateExpenseAmount, // The total estimated expense amount
        currencyConversionRate, // The exchange rate between INR and the destination's native currency
        destinationNativeCurrency, // The symbol of the destination's native currency
        travelDays // The number of days of the trip
    } = budget || {};

    const { mobileImageUrl } = countryImage || {}; // The URL of the mobile image for the country

    return (
        <ExpenseWrapper>
            <BackgroundImage
                src={mobileImageUrl}
                alt='country image'
            />
            <ExpenseTitle>TOTAL ESTIMATED EXPENSE</ExpenseTitle>
            <ExpenseCard>
                <ExpenseAmount>
                    <TotalAmount>
                        {amountFormatter(unitTotalEstimateExpenseAmount || 0)}
                    </TotalAmount>
                    <DailyAmount>
                        {amountFormatter(
                            (
                                (unitTotalEstimateExpenseAmount && travelDays && travelDays !== 0)
                                    ? (unitTotalEstimateExpenseAmount / travelDays) : 0
                            ),
                        )}
                        {' '}
                        / day
                    </DailyAmount>
                </ExpenseAmount>
                <ExchangeRate>
                    1 INR =
                    {' '}
                    {amountFormatter(currencyConversionRate || 0, { min: 0, max: 3 }, false)}
                    {' '}
                    {destinationNativeCurrency || ''}
                </ExchangeRate>
            </ExpenseCard>
        </ExpenseWrapper>
    );
};

export default TotalExpense;
