/**
 * @file B2BSalaryAccountHR container selectors
 */

import { createSelector } from 'reselect';

import { SALARY_ACCOUNT_B2B_KEY } from './constant';

export const selectSalaryAccountHRReducer = createSelector(
    (state) => state[SALARY_ACCOUNT_B2B_KEY],
    (subState) => subState,
);

export default selectSalaryAccountHRReducer;
