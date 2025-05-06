/**
 * @file Credit Card Waitlist constants.
 */

import { ELIGIBILITY_FAILURE, ELIGIBILITY_SUCCESS, ELIGIBILITY_DOWNLOAD, NON_ELIGIBILITY_DOWNLOAD } from '@/events/EventName';
import { PNGS_URL, WEBP_URL, CREDIT_CARD_ELIGIBILIT_URL_MAP } from '../../constants/AssetConstants';
import { SVGS_URL } from '@/constants/AssetConstants';
import { amplifiUrl, magnifyUrl, CREDIT_CARD_TYPE } from '@/constants/AppConstant';

// Component key
export const CREDIT_CARD_ELIGIBILITY_KEY = 'creditCardEligibility';

// Navigate types
export const PAGE_MAP = {
    MOBILE_VERIFICATION: 'MOBILE_VERIFICATION',
    LANDING_PAGE: 'LANDING_PAGE',
    GENERATE_OTP_PAGE: 'GENERATE_OTP_PAGE',
    VERIFY_OTP_PAGE: 'VERIFY_OTP_PAGE',
    USER_DETAILS_PAGE: 'USER_DETAILS_PAGE',
    LOADING_PAGE: 'LOADING_PAGE',
    CREDIT_CARD_ELIGIBILITY_SUCCESS: 'CREDIT_CARD_ELIGIBILITY_SUCCESS',
    CREDIT_CARD_POLLING_STATUS: 'CREDIT_CARD_POLLING_STATUS'
};

export const TITLE_MAP = {
    LANDING_PAGE: 'Enter your personal details',
    VERIFY_OTP_PAGE: '',
    USER_DETAILS_PAGE: 'USER_DETAILS_PAGE'
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

export const STEP_CHANGE = `app/${CREDIT_CARD_ELIGIBILITY_KEY}/STEP_CHANGE`;

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

export const creditCardEligibilityStatus = {
    STATUS_UNSPECIFIED: 'STATUS_UNSPECIFIED',
    STATUS_IN_PROGRESS: 'STATUS_IN_PROGRESS',
    STATUS_SUCCESSFUL: 'STATUS_SUCCESSFUL',
    STATUS_FAILED: 'STATUS_FAILED'
};

export const getResultScreenData = (displayInfo: any, status: string, PageConfig: any, benefitData: any) => {
    const {
        screenTitle, screenMessage, ctaText, additionalText,
    } = displayInfo;

    const { posterUrl, fiLogo } = PageConfig.url;

    let response: any = {
        title: screenTitle,
        linkText: ctaText,
        subTitle: additionalText,
        description: screenMessage,
        logo: fiLogo,
        fiLogo,
    };

    if (status === creditCardEligibilityStatus.STATUS_SUCCESSFUL) {
        response = {
            ...response,
            linkText: 'DOWNLOAD THE APP',
            lottieBackground: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_CONFETTI,
            buttonUrl: 'https://fi.onelink.me/GvZH/grrfu0kt',
            posterImg: posterUrl,
            btnDescription: 'This will not impact your credit score',
            eligibilityEvent: ELIGIBILITY_SUCCESS,
            eligibilityBtnEvent: ELIGIBILITY_DOWNLOAD,
            benefitData: benefitData.successScreen,
        };
    } else {
        response = {
            ...response,
            buttonUrl: 'https://fi.onelink.me/GvZH/grrfu0kt',
            posterImg: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_FAIL_CARD,
            btnDescription: 'This will not impact your credit score',
            eligibilityEvent: ELIGIBILITY_FAILURE,
            eligibilityBtnEvent: NON_ELIGIBILITY_DOWNLOAD,
            benefitData: benefitData.failureScreen,
        };
    }
    return response;
};

export const steps = [
    PAGE_MAP.LANDING_PAGE,
    PAGE_MAP.MOBILE_VERIFICATION,
    PAGE_MAP.VERIFY_OTP_PAGE,
    PAGE_MAP.USER_DETAILS_PAGE,
    PAGE_MAP.CREDIT_CARD_POLLING_STATUS,
    PAGE_MAP.CREDIT_CARD_ELIGIBILITY_SUCCESS];

export const REQUIRED_FIELDS = ['phone', 'firstName', 'lastName', 'dateOfBirth', 'panCardNumber', 'emailId', ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL, ConsentType.CONSENT_TYPE_FI_TNC];

enum CardProgramType {
    CARD_PROGRAM_TYPE_UNSPECIFIED = 'CARD_PROGRAM_TYPE_UNSPECIFIED',
    CARD_PROGRAM_TYPE_SECURED = 'CARD_PROGRAM_TYPE_SECURED',
    CARD_PROGRAM_TYPE_UNSECURED = 'CARD_PROGRAM_TYPE_UNSECURED',
    CARD_PROGRAM_TYPE_MASS_UNSECURED = 'CARD_PROGRAM_TYPE_MASS_UNSECURED',
}

enum CardProgramVendor {
    CARD_PROGRAM_VENDOR_UNSPECIFIED = 'CARD_PROGRAM_VENDOR_UNSPECIFIED',
    CARD_PROGRAM_VENDOR_FEDERAL = 'CARD_PROGRAM_VENDOR_FEDERAL',
}

export const PageConfig: any = {
    [CREDIT_CARD_TYPE.MAGNIFI]: {
        cardProgramType: CardProgramVendor.CARD_PROGRAM_VENDOR_FEDERAL,
        cardProgramVendor: CardProgramType.CARD_PROGRAM_TYPE_MASS_UNSECURED,
        styleConfig: {
            posterStyle: {
                phone: {
                    bgColor: '#25130B',
                },
                tab: {
                    bgColor: '#25130B',
                }
            },
            headerStyle: {
                desktop: {
                    marginTop: '60px',
                },
                phone: {
                    marginTop: '25px',
                    titleColor: '#FFFFFF',
                    subTitleColor: '#F6E1C1',
                },
            },
            privacyText: {
                text1: {
                    color: '#F6E1C1'
                },
                text2: {
                    color: '#FFFFFF',
                }
            },
            loader: {
                stroke: '#F1CE9B',
            },
            submitButton: {
                disableBgColor: 'LIME_GREEN',
                disableFontColor: 'ZINNWALDITE_BROWN',
                bgColor: '#F6F9FD',
            },
            footer: {
                consentText: '#F6E1C1'
            },
            pageStyle: {
                inputBoxStyle: {
                    bgColor: '#744a2c'
                },
            },
            successScreen: {
                phone: {
                    bgColor: '#25130B',
                },
                desktop: {
                    bgColor: '#25130B',
                }
            },
            failureScreen: {
                phone: {
                    bgColor: '#18191B',
                },
                desktop: {
                    bgColor: '#282828',
                }
            },
            mobileVerification: {
                whatsappConsentCheckbox: {
                    color: '#F6E1C1'
                }
            },
            downloadAppButton: {
                color: '#ffffff',
                bgColor: 'linear-gradient(180deg, #985A27 0%, #BA6F3A 100%)',
                boxShadow: '0 7px 0 #F1CE9B'
            },
            personalDetails: {
                textType1: {
                    color: '#F6E1C1',
                },
                textType2: {
                    color: '#FFFFFF'
                },
                checkbox: {
                    bgColor: '#FFFFFF',
                    color: '#FFFFFF',
                }
            }
        },
        url: {
            fiLogo: `${SVGS_URL}magnifi-fi-logo.svg`,
            posterUrl: magnifyUrl('eligibility-card.png'),
            backnav: magnifyUrl('magnifi-eligibiligy-left.svg'),
        },
        benefitData: {
            successScreen: [
                {
                    id: '1',
                    icon: magnifyUrl('magnifi-brand-20-percent.svg'),
                    title: '20% cashback on your favourite brands',
                },
                {
                    id: '2',
                    icon: magnifyUrl('magnifi-brand-4x.svg'),
                    title: '4x rewards on select brands',
                },
                {
                    id: '3',
                    icon: magnifyUrl('magnifi-brand-1x.svg'),
                    title: '1x rewards on all spends',
                },
                {
                    id: '4',
                    icon: magnifyUrl('magnifi-brand-lifetimefree.svg'),
                    title: 'LIFETIME FREE',
                },
            ],
            failureScreen: [
                {
                    id: '1',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_ZERO,
                    title: 'Zero balance Savings Account',
                },
                {
                    id: '2',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_AIR_MILES,
                    title: 'International Debit Card',
                },
                {
                    id: '3',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_VOUCHERS,
                    title: '2% cashback on UPI spends',
                },
                {
                    id: '4',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_TRACK,
                    title: 'Track all your accounts in one place',
                },
            ]
        }
    },
    [CREDIT_CARD_TYPE.AMPLIFI]: {
        cardProgramType: CardProgramVendor.CARD_PROGRAM_VENDOR_FEDERAL,
        cardProgramVendor: CardProgramType.CARD_PROGRAM_TYPE_UNSECURED,
        styleConfig: {
            posterStyle: {
                phone: {
                    bgColor: '#18191b',
                },
                tab: {
                    bgColor: '#282828',
                }
            },
            headerStyle: {
                desktop: {
                    marginTop: '60px',
                },
                phone: {
                    marginTop: '25px',
                    titleColor: '#FFFFFF',
                    subTitleColor: '#929599',
                },
            },
            privacyText: {
                text1: {
                    color: '#00b899'
                },
                text2: {
                    color: '#FFFFFF',
                }
            },
            loader: {
                stroke: '#00B899',
            },
            submitButton: {
                disableBgColor: 'GREEN_PEA',
                disableFontColor: 'BOMBAY',
                bgColor: '#00b899',
            },
            footer: {
                consentText: '#00b899'
            },
            pageStyle: {
                inputBoxStyle: {
                    bgColor: '#555555'
                },
            },
            successScreen: {
                phone: {
                    bgColor: '#18191B',
                },
                desktop: {
                    bgColor: '#18191B',
                }
            },
            failureScreen: {
                phone: {
                    bgColor: '#282828',
                },
                desktop: {
                    bgColor: '#282828',
                }
            },
            mobileVerification: {
                whatsappConsentCheckbox: {
                    color: '#6A6D70'
                }
            },
            downloadAppButton: {
                color: '#085245',
                bgColor: '#00B899',
                boxShadow: '0 7px 0 #085245'
            },
            personalDetails: {
                textType1: {
                    color: '#00b899',
                },
                textType2: {
                    color: '#00b899'
                },
                checkbox: {
                    bgColor: '#FFFFFF',
                    color: '#6A6D70'
                }
            }
        },
        url: {
            fiLogo: `${SVGS_URL}logo.svg`,
            posterUrl: amplifiUrl('amplifi-success-card.png'),
            backnav: `${SVGS_URL}arrow-back.svg`
        },
        benefitData: {
            successScreen: [
                {
                    id: '1',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_THREE_PERCENTAGE,
                    title: '3% rewards from top 20+ brands',
                },
                {
                    id: '2',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_ZERO_PERCENTAGE,
                    title: '0% Forex markup',
                },
                {
                    id: '3',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_AIR_MILES,
                    title: 'Redeem rewards for Air Miles',
                },
                {
                    id: '4',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_VOUCHERS,
                    title: 'Welcome vouchers worth ₹4,000+',
                },
            ],
            failureScreen: [
                {
                    id: '1',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_ZERO,
                    title: 'Zero balance Savings Account',
                },
                {
                    id: '2',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_AIR_MILES,
                    title: 'International Debit Card',
                },
                {
                    id: '3',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_VOUCHERS,
                    title: '2% cashback on UPI spends',
                },
                {
                    id: '4',
                    icon: CREDIT_CARD_ELIGIBILIT_URL_MAP.AMPLIFI_TRACK,
                    title: 'Track all your accounts in one place',
                },
            ]
        }
    },
};
