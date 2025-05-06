/**
 * @file Credit Card Waitlist constants.
 */

import { SVGS_URL } from '../../constants/AssetConstants';

// Component key
export const CREDIT_CARD_ELIGIBILITY_KEY = 'creditCardEligibility';

// Navigate types
export const PAGE_MAP = {
    MOBILE_VERIFICATION: 'MOBILE_VERIFICATION',
    LANDING_PAGE: 'LANDING_PAGE',
    VERIFY_OTP_PAGE: 'VERIFY_OTP_PAGE',
    LOADING_PAGE: 'LOADING_PAGE',
    QUESTION_PAGE: 'QUESTION_PAGE',
    INTRO_SCREEN: 'INTRO_SCREEN',
    FINAL_SCREEN: 'FINAL_SCREEN',
    INVALID_FROM: 'INVALID_FROM',
};

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

// eslint-disable-next-line no-shadow
export enum ConsentType {
    CONSENT_TYPE_FI_TNC = 'CONSENT_TYPE_FI_TNC',
    CONSENT_TYPE_CREDIT_REPORT_DATA_PULL = 'CONSENT_TYPE_CREDIT_REPORT_DATA_PULL',
    ConsentType_CONSENT_TYPE_FI_TNC = 'ConsentType_CONSENT_TYPE_FI_TNC',
    ConsentType_CONSENT_TYPE_FED_TNC = 'ConsentType_CONSENT_TYPE_FED_TNC',
    ConsentType_CONSENT_TYPE_FI_PRIVACY_POLICY = 'ConsentType_CONSENT_TYPE_FI_PRIVACY_POLICY',
    ConsentType_CONSENT_TYPE_FI_WEALTH_TNC = 'ConsentType_CONSENT_TYPE_FI_WEALTH_TNC',
    ConsentType_CONSENT_TYPE_CREDIT_REPORT_DATA_PULL = 'ConsentType_CONSENT_TYPE_CREDIT_REPORT_DATA_PULL',
    CONSENT_TYPE_FED_TNC = 'CONSENT_TYPE_FED_TNC',
    CONSENT_TYPE_FI_PRIVACY_POLICY = 'CONSENT_TYPE_FI_PRIVACY_POLICY',
    CONSENT_TYPE_FI_WEALTH_TNC= 'CONSENT_TYPE_FI_WEALTH_TNC',
}

export const steps = [
    PAGE_MAP.MOBILE_VERIFICATION,
    PAGE_MAP.VERIFY_OTP_PAGE,
    PAGE_MAP.INTRO_SCREEN,
    PAGE_MAP.QUESTION_PAGE,
    PAGE_MAP.FINAL_SCREEN];

export const REQUIRED_FIELDS = ['phone', 'firstName', 'lastName', 'dateOfBirth', 'panCardNumber', 'emailId', ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL, ConsentType.CONSENT_TYPE_FI_TNC];

export const CLOSE_ICON_URL = `${SVGS_URL}close.svg`;

export const FileContentType = {
    FILE_CONTENT_TYPE_UNSPECIFIED: 'FILE_CONTENT_TYPE_UNSPECIFIED',
    FILE_CONTENT_TYPE_CSV: 'text/csv',
    FILE_CONTENT_TYPE_TXT: 'text/plain',
    FILE_CONTENT_TYPE_JPEG: 'image/jpeg',
    FILE_CONTENT_TYPE_XLS: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    FILE_CONTENT_TYPE_XLSX: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    FILE_CONTENT_TYPE_PDF: 'application/pdf',
    FILE_CONTENT_TYPE_DOC: '.doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    FILE_CONTENT_TYPE_DOCX: '.doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

export enum FieldType {
    FIELD_TYPE_UNSPECIFIED = 'FIELD_TYPE_UNSPECIFIED',
    FIELD_TYPE_TEXT_BOX = 'FIELD_TYPE_TEXT_BOX',
    FIELD_TYPE_DROPDOWN = 'FIELD_TYPE_DROPDOWN',
    FIELD_TYPE_FILE = 'FIELD_TYPE_FILE',
    FIELD_TYPE_CHECK_BOX = 'FIELD_TYPE_CHECK_BOX',
    FIELD_TYPE_RADIO_BUTTON = 'FIELD_TYPE_RADIO_BUTTON'
  }

export const protoToHtmlFileType: {
    [key: string]: string | null;
} = {
    FILE_CONTENT_TYPE_JPEG: 'image/jpeg',
    FILE_CONTENT_TYPE_PDF: 'application/pdf',
    FILE_CONTENT_TYPE_PNG: 'image/png',
    FILE_CONTENT_TYPE_UNSPECIFIED: null,
};

export const PageConfigMap = {
    [PAGE_MAP.MOBILE_VERIFICATION]: {
        submitButtonText: 'Next',
        SubmitButtonVisbility: true,
        backNavVisbility: false,
        isHeaderRequired: true,
        isContentRequired: true,
        description: 'Use your primary number here',
        class: '',
        headerStyle: {
            desktop: {
                marginTop: '10px',
            },
            phone: {
                marginTop: '24px',
            },
        },
    },
    [PAGE_MAP.VERIFY_OTP_PAGE]: {
        submitButtonText: 'CONFIRM',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
        description: 'Use your primary number here',
        isHeaderRequired: true,
        isContentRequired: true,
        class: '',
        headerStyle: {
            desktop: {
                marginTop: '10px',
            },
            phone: {
                marginTop: '24px',
            },
        },
    },
    [PAGE_MAP.QUESTION_PAGE]: {
        submitButtonText: 'Submit',
        SubmitButtonVisbility: false,
        backNavVisbility: true,
        description: 'Use your primary number here',
        isHeaderRequired: true,
        isContentRequired: false,
        class: 'question-page-wrapper',
        headerStyle: {
            desktop: {
                marginTop: '60px',
            },
            phone: {
                marginTop: '25px',
            },
        },
    },
    [PAGE_MAP.INTRO_SCREEN]: {
        submitButtonText: 'Proceed',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
        description: 'Use your primary number here',
        isHeaderRequired: true,
        isContentRequired: false,
        class: '',
        headerStyle: {
            desktop: {
                marginTop: '60px',
            },
            phone: {
                marginTop: '25px',
            },
        },
    },
    [PAGE_MAP.FINAL_SCREEN]: {
        submitButtonText: 'Submit',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
        description: 'Use your primary number here',
        isHeaderRequired: false,
        isContentRequired: false,
        class: '',
        headerStyle: {
            desktop: {
                marginTop: '60px',
            },
            phone: {
                marginTop: '25px',
            },
        },
    },
    [PAGE_MAP.INVALID_FROM]: {
        submitButtonText: 'Go Back to fi.money',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
        description: '',
        isHeaderRequired: true,
        isContentRequired: false,
        class: '',
        headerStyle: {
            desktop: {
                marginTop: '10px',
            },
            phone: {
                marginTop: '25px',
            },
        },
    },
};
