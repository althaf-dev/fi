/**
 * @file Credit Card Waitlist constants.
 */

import { PNGS_URL, WEBP_URL } from '../../constants/AssetConstants';

// Component key
export const CREDIT_CARD_ELIGIBILITY_KEY = 'creditCardEligibility';

// Navigate types
export const PAGE_MAP = {
    LANDING_PAGE: 'LANDING_PAGE',
    GENERATE_OTP_PAGE: 'GENERATE_OTP_PAGE',
    VERIFY_OTP_PAGE: 'VERIFY_OTP_PAGE',
    USER_DETAILS_PAGE: 'USER_DETAILS_PAGE',
    LOADING_PAGE: 'LOADING_PAGE',
};

// Mobile number otp generation action constants
export const MOBILE_GENERATE_OTP_CODE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/MOBILE_GENERATE_OTP_CODE`;
export const MOBILE_GENERATE_OTP_CODE_SUCCESS = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/MOBILE_GENERATE_OTP_CODE_SUCCESS`;
export const MOBILE_GENERATE_OTP_CODE_FAILURE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/MOBILE_GENERATE_OTP_CODE_FAILED`;

// Verify OTP constants
export const MOBILE_VERIFY_OTP_CODE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/_MOBILE_VERIFY_OTP_CODE`;
export const MOBILE_VERIFY_OTP_CODE_SUCCESS = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/MOBILE_VERIFY_OTP_CODE_SUCCESS`;
export const MOBILE_VERIFY_OTP_CODE_FAILURE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/MOBILE_VERIFY_OTP_CODE_FAILURE`;

// common value change in reducer action constant
export const ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE`;

// Reset state action constant
export const RESET_CREDIT_CARD_WAITLIST_STATE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/RESET_CREDIT_CARD_WAITLIST_STATE`;

// set modal value action
export const SET_MODAL_VALUE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/SET_MODAL_VALUE`;

// set isInputValueValid
export const SET_INPUT_VALUE_VALID = 'SET_INPUT_VALUE_VALID';

// set error messages
export const SET_ERROR_MESSAGES = 'SET_ERROR_MESSAGES';

// OTP_RETRY_TIME
export const OTP_RETRY_TIME = 30; // 30 seconds

// Credit Card Waitlist API urls
export const URL_MAP = {
    GENERATE_OTP: 'generate-mobile-otp',
    VERIFY_OTP: 'verify-mobile-otp',
    GET_WAITLIST_FLOW_STATUS: 'get-waitlist-flow-status',
};

// keycodes
// eslint-disable-next-line no-shadow
export enum KeyCode {
    BACKSPACE = 8,
    KEY_0 = 48,
    KEY_9 = 57,
}

export const LANDING_PAGE_DESCRIPTION_DATA = [
    {
        id: 1,
        title: 'Benefits worth ₹20,000',
        icon: `${WEBP_URL}cc-rewards.webp`,
        fallbackIcon: `${PNGS_URL}cc-rewards.png`,
        imageMobileWidth: '9px',
        imageMobileHeight: '11px',
        imageDesktopWidth: '18px',
        imageDesktopHeight: '22px',
    },
    {
        id: 2,
        title: 'Welcome gift cards worth over ₹5,000',
        icon: `${WEBP_URL}cc-lounge-access.webp`,
        fallbackIcon: `${PNGS_URL}cc-lounge-access.png`,
        imageMobileWidth: '12px',
        imageMobileHeight: '12px',
        imageDesktopWidth: '24px',
        imageDesktopHeight: '24px',
    },
    {
        id: 3,
        title: 'Accelerated rewards on India\'s top 20 brands',
        icon: `${WEBP_URL}cc-Rupee.webp`,
        fallbackIcon: `${PNGS_URL}cc-Rupee.png`,
        imageMobileWidth: '10px',
        imageMobileHeight: '13px',
        imageDesktopWidth: '20px',
        imageDesktopHeight: '26px',
    },
];

// eslint-disable-next-line no-shadow
export enum ConsentType {
    CONSENT_TYPE_FI_TNC = 'CONSENT_TYPE_FI_TNC',
    CONSENT_TYPE_CREDIT_REPORT_DATA_PULL = 'CONSENT_TYPE_CREDIT_REPORT_DATA_PULL'
}

export const REQUIRED_FIELDS = ['firstName', 'lastName', 'dateOfBirth', 'panCardNumber', 'emailId', ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL, ConsentType.CONSENT_TYPE_FI_TNC];
