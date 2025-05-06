/**
 * @file Credit Card Waitlist constants.
 */

// Component key
export const CREDIT_CARD_WAITLIST_KEY = 'creditCardWaitlist';

// Navigate types
export const PAGE_MAP = {
    GENERATE_OTP_PAGE: 'GENERATE_OTP_PAGE',
    VERIFY_OTP_PAGE: 'VERIFY_OTP_PAGE',
    USER_DETAILS_PAGE: 'USER_DETAILS_PAGE',
};

// Create user based on mobile no.
export const CREATE_USER = `app/${CREDIT_CARD_WAITLIST_KEY}/CREATE_USER`;
export const CREATE_USER_SUCCESS = `app/${CREDIT_CARD_WAITLIST_KEY}/CREATE_USER_SUCCESS`;
export const CREATE_USER_FAILURE = `app/${CREDIT_CARD_WAITLIST_KEY}/CREATE_USER_FAILURE`;

// Mobile number otp generation action constants
export const MOBILE_GENERATE_OTP_CODE = `app/${CREDIT_CARD_WAITLIST_KEY}/MOBILE_GENERATE_OTP_CODE`;
export const MOBILE_GENERATE_OTP_CODE_SUCCESS = `app/${CREDIT_CARD_WAITLIST_KEY}/MOBILE_GENERATE_OTP_CODE_SUCCESS`;
export const MOBILE_GENERATE_OTP_CODE_FAILURE = `app/${CREDIT_CARD_WAITLIST_KEY}/MOBILE_GENERATE_OTP_CODE_FAILED`;

// Verify OTP constants
export const MOBILE_VERIFY_OTP_CODE = `app/${CREDIT_CARD_WAITLIST_KEY}/_MOBILE_VERIFY_OTP_CODE`;
export const MOBILE_VERIFY_OTP_CODE_SUCCESS = `app/${CREDIT_CARD_WAITLIST_KEY}/MOBILE_VERIFY_OTP_CODE_SUCCESS`;
export const MOBILE_VERIFY_OTP_CODE_FAILURE = `app/${CREDIT_CARD_WAITLIST_KEY}/MOBILE_VERIFY_OTP_CODE_FAILURE`;

// Get personal details constants
export const GET_USER_DETAILS = `app/${CREDIT_CARD_WAITLIST_KEY}/GET_USER_DETAILS`;
export const GET_USER_DETAILS_SUCCESS = `app/${CREDIT_CARD_WAITLIST_KEY}/GET_USER_DETAILS_SUCCESS`;
export const GET_USER_DETAILS_FAILURE = `app/${CREDIT_CARD_WAITLIST_KEY}/GET_USER_DETAILS_FAILURE`;

// Add personal details constants
export const UPDATE_USER_DETAILS = `app/${CREDIT_CARD_WAITLIST_KEY}/UPDATE_USER_DETAILS`;
export const UPDATE_USER_DETAILS_SUCCESS = `app/${CREDIT_CARD_WAITLIST_KEY}/UPDATE_USER_DETAILS_SUCCESS`;
export const UPDATE_USER_DETAILS_FAILURE = `app/${CREDIT_CARD_WAITLIST_KEY}/UPDATE_USER_DETAILS_FAILURE`;

// common value change in reducer action constant
export const ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE = `app/${CREDIT_CARD_WAITLIST_KEY}/ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE`;

// Reset state action constant
export const RESET_CREDIT_CARD_WAITLIST_STATE = `app/${CREDIT_CARD_WAITLIST_KEY}/RESET_CREDIT_CARD_WAITLIST_STATE`;

// set modal value action
export const SET_MODAL_VALUE = `app/${CREDIT_CARD_WAITLIST_KEY}/SET_MODAL_VALUE`;

// OTP_RETRY_TIME
export const OTP_RETRY_TIME = 30; // 30 seconds

// Credit Card Waitlist API urls
export const URL_MAP = {
    CREATE_USER: 'create-user',
    GENERATE_OTP: 'generate-mobile-otp',
    VERIFY_OTP: 'verify-mobile-otp',
    GET_USER_DETAILS: 'get-user-details',
    UPDATE_USER_DETAILS: 'update-user-details',
};

// keycodes
// eslint-disable-next-line no-shadow
export enum KeyCode {
    BACKSPACE = 8,
    KEY_0 = 48,
    KEY_9 = 57,
}

// Confirmation modal constants
export const CONFIRMATION_MODAL_DATA = {
    IMAGE_EXISTING_USER: 'partying-face-already-fi.png',
    IMAGE_NEW_USER: 'partying-face-new.png',
    TITLE_EXISTING_USER: 'We’ll keep you posted!',
    TITLE_NEW_USER: 'You’re ready for Fi!',
    DESCRIPTION_EXISTING_USER: 'We’ll notify you through your Fi app in about 4 weeks, when your card is ready',
    DESCRIPTION_NEW_USER: 'Download the Fi app and get ready for your credit card.',
    BUTTON_LABEL_EXISTING_USER: 'OPEN FI',
    BUTTON_LABEL_NEW_USER: 'GET FI',
};
