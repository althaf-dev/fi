/**
 * @file Salary signUp container selectors
 */

import { createSelector } from 'reselect';
import { SALARY_ACCOUNT_SIGNUP_KEY } from './constants';

const selectSalaryAccountSignUpReducer = createSelector(
    (state) => state[SALARY_ACCOUNT_SIGNUP_KEY],
    (subState) => subState,
);

export default selectSalaryAccountSignUpReducer;
