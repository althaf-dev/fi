/**
 * @file Credit Card Waitlist selectors
 */

import { createSelector } from 'reselect';

import { CREDIT_CARD_ELIGIBILITY_KEY } from './constants';

export const selectCreditCardEligibilityReducer = createSelector(
    (state) => state[CREDIT_CARD_ELIGIBILITY_KEY],
    (subState) => subState,
);

export const selectToken = createSelector(
    (state) => state[CREDIT_CARD_ELIGIBILITY_KEY].token,
    (subState) => subState,
);

export const selecOtpVerificationStatus = createSelector(
    (state) => state[CREDIT_CARD_ELIGIBILITY_KEY].otpVerificationStatus,
    (subState) => subState,
);

export const selectPhoneNumber = createSelector(
    (state) => state[CREDIT_CARD_ELIGIBILITY_KEY].phone,
    (subState) => subState,
);

export const selectUserDetails = createSelector(
    (state) => state[CREDIT_CARD_ELIGIBILITY_KEY].userDetails,
    (subState) => subState,
);
