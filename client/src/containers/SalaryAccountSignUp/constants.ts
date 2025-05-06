/**
 * @file SalaryAccountSignup containers constants.
 */

import { PNGS_URL, SVGS_URL } from '../../constants/AssetConstants';

// Component key
export const SALARY_ACCOUNT_SIGNUP_KEY = 'SalaryAccountSignup';

// Mobile number otp generation action constants
export const MOBILE_GENERATE_OTP_CODE = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/MOBILE_GENERATE_OTP_CODE`;
export const MOBILE_GENERATE_OTP_CODE_SUCCESS = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/MOBILE_GENERATE_OTP_CODE_SUCCESS`;
export const MOBILE_GENERATE_OTP_CODE_FAILED = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/SIGNUP_MOBILE_GENERATE_OTP_CODE_FAILED`;

// Verify OTP constants
export const MOBILE_VERIFY_OTP_CODE = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/_MOBILE_VERIFY_OTP_CODE`;
export const MOBILE_VERIFY_OTP_CODE_SUCCESS = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/MOBILE_VERIFY_OTP_CODE_SUCCESS`;
export const MOBILE_VERIFY_OTP_CODE_FAILED = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/MOBILE_VERIFY_OTP_CODE_FAILED`;

// Email id otp generation action constants
export const EMAIL_GENERATE_OTP_CODE = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/EMAIL_GENERATE_OTP_CODE`;
export const EMAIL_GENERATE_OTP_CODE_SUCCESS = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/EMAIL_GENERATE_OTP_CODE_SUCCESS`;
export const EMAIL_GENERATE_OTP_CODE_FAILED = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/EMAIL_GENERATE_OTP_CODE_FAILED`;

// Email OTP verify action constants
export const EMAIL_VERIFY_OTP_CODE = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/EMAIL_VERIFY_OTP_CODE`;
export const EMAIL_VERIFY_OTP_CODE_SUCCESS = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/EMAIL_VERIFY_OTP_CODE_SUCCESS`;
export const EMAIL_VERIFY_OTP_CODE_FAILED = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/EMAIL_VERIFY_OTP_CODE_FAILED`;

// Send App Link to whatsapp action constants
export const SEND_FI_APP_LINK_TO_WHATSAPP = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/SEND_FI_APP_LINK_TO_WHATSAPP`;
export const SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS`;
export const SEND_FI_APP_LINK_TO_WHATSAPP_FAILED = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/SEND_FI_APP_LINK_TO_WHATSAPP_FAILED`;

// Reset state action constant
export const RESET_SALARY_ACCOUNT_SIGNUP_STATE = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/RESET_SALARY_ACCOUNT_SIGNUP_STATE`;

// common value change in reducer action constant
export const ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE = `app/${SALARY_ACCOUNT_SIGNUP_KEY}/ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE`;

// Email page Work Benefit List
export const emailWorkBenefitData = {
    title: 'More Fi Account benefits',
    workBenefitList: [
        {
            title: 'Free 0 forex debit card',
            subTitle: 'Get a snazzy new Fi debit card',
            image: `${SVGS_URL}fi-card.svg`,
            height: '28px',
            width: '28px',
        },
        {
            title: 'Earn returns up to 9%',
            subTitle: 'When you invest in Jump',
            image: `${SVGS_URL}thunder-benefits.svg`,
            height: '28px',
            width: '28px',
        },
        {
            title: 'Automate financial actions',
            subTitle: 'AutoSave, AutoInvest & AutoPay',
            image: `${SVGS_URL}robot-benefits.svg`,
            height: '28px',
            width: '28px',
        },
        {
            title: 'Get insights into spending',
            subTitle: 'We’ll analyse your money habits',
            image: `${SVGS_URL}shopping-benefits.svg`,
            height: '28px',
            width: '28px',
        },
    ],
};

// Phone number page Work Benefit List
export const phoneNumberWorkBenefitData = {
    title: 'Fi Salary Account Perks',
    workBenefitList: [
        {
            title: 'Get 2% cashback on your spends',
            subTitle: 'Pay with your Debit Card or UPI',
            image: `${SVGS_URL}debit-card-upi.svg`,
            height: '28px',
            width: '28px',
        },
        {
            title: 'Health insurance boost up to ₹20L',
            subTitle: 'Upgraded health benefits',
            image: `${SVGS_URL}health-plus.svg`,
            height: '28px',
            width: '28px',
        },
        {
            title: 'Withdraw up to ₹50K of your salary',
            subTitle: 'Any time you want it, in just 2 minutes!',
            image: `${PNGS_URL}early-salary.png`,
            height: '28px',
            width: '28px',
        },
        {
            title: 'Exclusive vouchers every month',
            subTitle: 'Your salary comes bearing gifts',
            image: `${SVGS_URL}vouchers.svg`,
            height: '28px',
            width: '28px',
        },
    ],
};

// Group of all Work Benefit List for mobile
export const groupAllWorkBenefitData = {
    title: 'Fi Salary Account benefits',
    workBenefitList: [...phoneNumberWorkBenefitData.workBenefitList, ...emailWorkBenefitData.workBenefitList],
};

// Group of all Work Benefit List for TAB view
export const groupAllWorkBenefitDataForTabView = {
    title: 'Fi Salary Account benefits',
    workBenefitList: [
        // Due to grid position, hardcoded the item with index
        phoneNumberWorkBenefitData.workBenefitList[0],
        emailWorkBenefitData.workBenefitList[0],
        phoneNumberWorkBenefitData.workBenefitList[1],
        emailWorkBenefitData.workBenefitList[1],
        phoneNumberWorkBenefitData.workBenefitList[2],
        emailWorkBenefitData.workBenefitList[2],
        phoneNumberWorkBenefitData.workBenefitList[3],
        emailWorkBenefitData.workBenefitList[3],
    ],
};

// Navigate types
export const NAVIGATE_PAGE = {
    MOBILE_GENERATE_OTP_PAGE: 'MOBILE_GENERATE_OTP_PAGE',
    MOBILE_VERIFY_OTP_PAGE: 'MOBILE_VERIFY_OTP_PAGE',
    EMAIL_GENERATE_OTP_PAGE: 'EMAIL_GENERATE_OTP_PAGE',
    EMAIL_VERIFY_OTP_PAGE: 'EMAIL_VERIFY_OTP_PAGE',
    FINISH_SIGNUP_PAGE: 'FINISH_SIGNUP_PAGE',
    WHATSAPP_LINK_PAGE: 'WHATSAPP_LINK_PAGE',
};

// OTP_RETRY_TIME
export const OTP_RETRY_TIME = 30;

// FI APP DOWNLOAD ONE LINK FOR SALARY SIGNUP FLOW
export const FI_APP_DOWNLOAD_LINK_URL = 'https://fi.onelink.me/GvZH/grrfu0kt';
