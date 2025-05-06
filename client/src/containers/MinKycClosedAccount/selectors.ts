/**
 * @file Min Kyc closed account selectors
 */

import { createSelector } from 'reselect';
import { MIN_KYC_CLOSED_ACCOUNT_KEY } from './constants';

const selectMinKycClosedAccountReducer = createSelector(
    (state) => state[MIN_KYC_CLOSED_ACCOUNT_KEY],
    (subState) => subState,
);

export default selectMinKycClosedAccountReducer;
