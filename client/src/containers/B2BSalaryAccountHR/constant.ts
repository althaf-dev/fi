/**
 * @file B2BSalaryAccountHR containers constants.
 */

import B2B_ACCOUNT_DATA from '../../assets/json/b2b-salary-account.json';
import SME_ACCOUNT_DATA from '../../assets/json/sme-salary-account.json';

// Component key
export const SALARY_ACCOUNT_B2B_KEY = 'salaryAccountB2B';
export const SALARY_ACCOUNT_FORM_ID = 'salary_form';

export const SET_EMPLOYER_DATA_ON_GOOGLE_SHEET = `app/{${SALARY_ACCOUNT_B2B_KEY}}/SET_EMPLOYER_DATA_ON_GOOGLE_SHEET`;
export const SET_LEAD_DETAILS = `app/{${SALARY_ACCOUNT_B2B_KEY}}/SET_LEAD_DETAILS`;

// common value change in reducer action constant
export const ON_CHANGE_SALARY_ACCOUNT_HR_VALUE = `app/${SALARY_ACCOUNT_B2B_KEY}/ON_CHANGE_SALARY_ACCOUNT_HR_VALUE`;

// salary account online page url
export const SALARY_PAGE_URL = '/open-salary-account-online';

// Fi money home page page url
export const HOME_PAGE_URL = '/';

// Book demo now ID
export const DEMO_SECTION_ID_MOBILE = 'scroll-section-mobile-tab';
export const DEMO_SECTION_ID_DESKTOP = 'scroll-section-desktop';

// Desktop width
export const WINDOW_INNER_WIDTH = 770;

// Logo URL
export const LOGO_URL = 'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg';

export const CALENDLY_CONFIG = {
    url: 'https://calendly.com/fisalaryprogram/30min?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1',
    styles: {
        maxWidth: '640px',
        height: '380px',
        maxHeight: '380px',
        margin: '0 auto',
    },
    pageSettings: {
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        hideGdprBanner: true,
    },
};

// eslint-disable-next-line no-shadow
export enum SectionType {
    SalaryBenefitSection = 'salary_benefit_section',
    RightChoiceSection = 'right_choice_section',
    ButtonSection = 'button_section',
    FeatureCardSection = 'feature_card_section',
    CompanySection = 'company_section',
    SalaryProgramSection = 'salary_program_section',
    SalaryFaqSection = 'salary_faq_section',
    SecureMoneySection = 'secure_money_section',
    ContactSection = 'contact_section',
    TestimonialSection = 'testimonial_section',
}

// card style config
export const CARD_INFO = {
    large_card: {
        desktop: {
            card: {
                width: '287px',
                height: '303px',
            },
            titleText: {
                weight: 600,
                size: '32px',
                lineHeight: '130%',
                width: '248px',
            },
            descriptionText: {
                weight: 600,
                size: '24px',
                lineHeight: '130%',
                width: '248px',
            },
        },
        tab: {
            card: {
                width: '250px',
                height: '237px',
            },
        },
        phone: {
            card: {
                width: '100%',
                height: '237px',
            },
            titleText: {
                weight: 600,
                size: '28px',
                lineHeight: '130%',
            },
            descriptionText: {
                weight: 600,
                lineHeight: '20px',
                width: '248px',
            },
        },
    },
    medium_card: {
        desktop: {
            card: {
                width: '287px',
                height: '303px',
            },
            titleText: {
                weight: 600,
                size: '32px',
                lineHeight: '130%',
            },
            descriptionText: {
                weight: 600,
                size: '24px',
                lineHeight: '130%',
                width: '248px',
            },
        },
        tab: {
            card: {
                width: 'intial',
                height: '154px',
            },
        },
        phone: {
            card: {
                width: '160px',
                height: '154px',
            },
            titleText: {
                weight: 600,
                size: '28px',
                lineHeight: '130%',
            },
            descriptionText: {
                weight: 600,
                lineHeight: '20px',
            },
        },
    },
    small_card: {
        desktop: {
            card: {
                width: '264px',
                height: '252px',
            },
            titleText: {
                weight: 600,
                size: '40px',
                lineHeight: '96%',
            },
            descriptionText: {
                weight: 600,
                size: '24px',
                lineHeight: '130%',
                width: '248px',
            },
        },
        tab: {
            card: {
                width: '250px',
                height: '178px',
            },
        },
        phone: {
            card: {
                width: '100%',
                height: '178px',
            },
            titleText: {
                weight: 600,
                size: '28px',
                lineHeight: '130%',
                width: '248px',
            },
            descriptionText: {},
        },
    },
    custom_card_sme: {
        desktop: {
            card: {
                width: '315px',
                height: '303px',
            },
            titleText: {
                weight: 600,
                size: '32px',
                lineHeight: '130%',
                width: '248px',
            },
            descriptionText: {
                weight: 600,
                size: '24px',
                lineHeight: '130%',
                width: '248px',
            },
        },
        tab: {
            card: {
                width: '250px',
                height: '237px',
            },
        },
        phone: {
            card: {
                width: '100%',
                height: '237px',
            },
            titleText: {
                weight: 600,
                size: '28px',
                lineHeight: '130%',
            },
            descriptionText: {
                weight: 600,
                lineHeight: '20px',
                width: '248px',
            },
        },
    },
};

export const PAGE_TYPE = {
    corporate: {
        label: 'corporate',
        url: '/open-salary-account-online/corporate',
    },
    sme: {
        label: 'sme',
        url: '/corporate-salary-accounts',
    },
};

export const configMap = {
    [PAGE_TYPE.corporate.label]: B2B_ACCOUNT_DATA,
    [PAGE_TYPE.sme.label]: SME_ACCOUNT_DATA,
};

export const EVENT_LIST = {
    LANDED_ON_LANDING_PAGE: 'LANDED_ON',
    SCROLL_ON_LANDING_PAGE: 'SCROLL_ON',
    LANDED_ON_OTP_PAGE: 'LANDED_ON_OTP_PAGE',
    ENTERED_FULL_NAME: 'ENTERED_FULL_NAME',
    ENTERED_COMPANY_NAME: 'ENTERED_COMPANY_NAME',
    ENTERED_EMAIL: 'ENTERED_EMAIL',
    ENTERED_PHONE_NUMBER: 'ENTERED_PHONE_NUMBER',
    CLICKED_DEMO_BUTTON: 'CLICKED_DEMO_BUTTON',
    OTP_SUCCESS: 'OTP_SUCCESS',
    OTP_FAILED: 'OTP_FAILED',
    ENTERED_OTP: 'ENTERED_OTP',
    VERIFIED_OTP: 'VERIFY_OTP',
    CLICK_CALENDLY_LINK: '',
    LANDED_ON_CALENDLY: 'Clicked_Calendly_Book_NowB2B',
    FORM_SUBMIT_BUTTON: 'FORM_SUBMIT_BUTTON',
    CLICKED_OTHER_WAYS_VERIFY: 'Salary_B2b_Clicked_Other_ways_verify',
    LOADED_CALENDER: 'LoadedGoogleCalendarOnSEM',
    CLICKED_DEMO_BUTTON_2: 'ClickedBookDemoButton',
    CLICKED_DEMO_BUTTON_ON_VALIDATION: 'ClickedBookDemoButtonWithInvalidValue',
};

export const EVENT_MAP = {
    corporate: {
        [EVENT_LIST.LANDED_ON_LANDING_PAGE]: 'LandedOnSalaryB2BPage',
        [EVENT_LIST.SCROLL_ON_LANDING_PAGE]: 'ScrollOnSalaryB2BPage',
        [EVENT_LIST.LANDED_ON_OTP_PAGE]: 'LandedOnSalaryOTPScreen',
        [EVENT_LIST.ENTERED_EMAIL]: 'EnteredEmailOnSalaryB2BPage',
        [EVENT_LIST.ENTERED_PHONE_NUMBER]: 'EnteredPhoneOnSalaryB2BPage',
        [EVENT_LIST.CLICKED_DEMO_BUTTON]: 'ClickedBookDemoButton',
        [EVENT_LIST.OTP_SUCCESS]: 'OTPSuccess',
        [EVENT_LIST.OTP_FAILED]: 'OTPFailure',
        [EVENT_LIST.ENTERED_OTP]: 'EnteredOTPOnSalaryB2BPage',
        [EVENT_LIST.VERIFIED_OTP]: 'B2B_OTP_verified',
        [EVENT_LIST.LANDED_ON_CALENDLY]: 'LoadedCalendlyPageOnSEM',
        [EVENT_LIST.ENTERED_FULL_NAME]: 'EnteredFullNameOnSalaryB2BPage',
        [EVENT_LIST.ENTERED_COMPANY_NAME]: 'EnteredCompanyNameOnSalaryB2BPage',
        [EVENT_LIST.FORM_SUBMIT_BUTTON]: 'Salary_B2b_page_form_submit',
    },
    sme: {
        [EVENT_LIST.LANDED_ON_LANDING_PAGE]: 'LandedOnSalarySEMPage',
        [EVENT_LIST.SCROLL_ON_LANDING_PAGE]: 'ScrollOnSalarySEMPage',
        [EVENT_LIST.LANDED_ON_OTP_PAGE]: 'LandedOnSalaryOTPScreen',
        [EVENT_LIST.ENTERED_EMAIL]: 'EnteredEmailOnSalarySEMPage',
        [EVENT_LIST.ENTERED_PHONE_NUMBER]: 'EnteredPhoneOnSalarySEMPage',
        [EVENT_LIST.CLICKED_DEMO_BUTTON]: 'ClickedBookDemoButtonOnSalarySEM',
        [EVENT_LIST.OTP_SUCCESS]: 'OTPSuccessSEM',
        [EVENT_LIST.OTP_FAILED]: 'OTPFailureSEM',
        [EVENT_LIST.ENTERED_OTP]: 'EnteredOTPOnSalarySEMPage',
        [EVENT_LIST.VERIFIED_OTP]: 'VerifiedOTPOnSalarySEMPage',
        [EVENT_LIST.LANDED_ON_CALENDLY]: 'LoadedCalendlyPageOnSEM',
    },
};
