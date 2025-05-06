/**
 * @file DailyExpenses
 * This file defines a component that renders a list of daily expenses for a travel budget application.
 * It displays each expense with its image, amount in the user's currency, and its equivalent in the foreign currency.
 */
import React from 'react';

import { useAppSelector } from '@/rtk/hooks';

import { amountFormatter } from '../../utils';

import {
    DailyExpenseAmount, ExpenseDetails, ExpenseImage, ExpenseItem, ExpensesList, ExpensesTitle, ExpensesWrapper,
    ForeignCountryAmount, PageDivider
} from '../styles';

const DailyExpenses = () => {
    // Retrieve the budget details from the application's state
    const { budget } = useAppSelector((state) => state.travelBudget);

    // Destructure necessary budget details for displaying daily expenses
    const { dailyExpenses, nativeCurrencySymbol, currencyConversionRate } = budget || {};

    // Render nothing if there are no daily expenses to display
    if (!dailyExpenses || !Array.isArray(dailyExpenses) || dailyExpenses.length === 0) {
        return <></>;
    }

    return (
        <>
            <PageDivider />
            <ExpensesWrapper>
                <ExpensesTitle>DAILY EXPENSES</ExpensesTitle>
                <ExpensesList>
                    {dailyExpenses.map(({ expenseImage: { mobileImageUrl = '' } = {}, amount, type } = {}) => (
                        <ExpenseItem key={(amount || '') + (type || '')}>
                            <ExpenseImage src={mobileImageUrl} />
                            <ExpenseDetails>
                                <DailyExpenseAmount>
                                    {amountFormatter(amount || 0)}
                                    {' '}
                                    / day
                                </DailyExpenseAmount>
                                <ForeignCountryAmount>
                                    {nativeCurrencySymbol}
                                    {' '}
                                    {amountFormatter(
                                        ((amount && currencyConversionRate) ? amount * currencyConversionRate : 0),
                                        { min: 0, max: 3 },
                                        false
                                    )}
                                </ForeignCountryAmount>
                            </ExpenseDetails>
                        </ExpenseItem>
                    ))}
                </ExpensesList>
            </ExpensesWrapper>
        </>
    );
};

export default DailyExpenses;
