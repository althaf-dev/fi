/**
 * @file Credit Card Waitlist selectors
 */

import { createSelector } from 'reselect';

import { CREDIT_CARD_WAITLIST_KEY } from './constants';

export const selectCreditCardWaitlistReducer = createSelector(
    (state) => state[CREDIT_CARD_WAITLIST_KEY],
    (subState) => subState,
);

export const selectToken = createSelector(
    (state) => state[CREDIT_CARD_WAITLIST_KEY].token,
    (subState) => subState,
);

export const selecOtpVerificationStatus = createSelector(
    (state) => state[CREDIT_CARD_WAITLIST_KEY].otpVerificationStatus,
    (subState) => subState,
);

export const selectPhoneNumber = createSelector(
    (state) => state[CREDIT_CARD_WAITLIST_KEY].phone,
    (subState) => subState,
);

export const selectUserDetails = createSelector(
    (state) => state[CREDIT_CARD_WAITLIST_KEY].userDetails,
    (subState) => subState,
);
