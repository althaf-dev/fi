import { META_INFO_CONTEXT_KEYMAP } from '../../context';

import { APP_URLS, FEDERAL_POLICIES, NAVIGATION_URLS } from '../../constants/AppConstant';
import { PNGS_URL, SVGS_URL, LOGOS_URL_MAP } from '../../constants/AssetConstants';

const FI_PRONUNCIATION_DATA = [
    {
        id: 1,
        text: 'hi',
        icon: `${PNGS_URL}hifi.png`,
    },
    {
        id: 2,
        text: 'sky',
        icon: `${PNGS_URL}sky.png`,
    },
    {
        id: 3,
        text: 'tie',
        icon: `${SVGS_URL}tie.svg`,
    },
    {
        id: 4,
        text: 'fly',
        icon: `${SVGS_URL}fly.svg`,
    },
];

const APP_ASSISTANCE_DATA = [
    {
        id: 1,
        key: META_INFO_CONTEXT_KEYMAP.hidePhoneNumberLabel,
        text: '080-47485490',
    },
    {
        id: 2,
        key: META_INFO_CONTEXT_KEYMAP.hideEmailLabel,
        text: 'help@fi.care',
        mailto: 'mailto:help@fi.care',
    },
    {
        id: 3,
        key: META_INFO_CONTEXT_KEYMAP.hideInAppChatLabel,
        text: 'In-app chat',
    },
];

const FIRST_ROW_NAV_LINK_DATA = [
    { name: 'Home', url: '/' },
    { name: 'What’s Fi', url: '/about' },
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Team', url: '/teams' },
    { name: 'Careers', url: '/careers' },
];

const SECOND_ROW_NAV_LINK_DATA = [
    { name: 'Salary Account', url: '/open-salary-account-online' },
    { name: 'Features', url: '/features' },
    { name: 'Fees', url: '/fees' },
    { name: 'Calculators', url: '/calculators' },
    { name: 'Guides', url: '/blog', external: true },
    { name: 'FAQ', url: '/FAQs' },
];

const SOCIAL_MEDIA_LINK_DATA = [
    {
        id: 1,
        name: 'instagram',
        icon: LOGOS_URL_MAP.INSTAGRAM_WHITE,
        link: 'https://www.instagram.com/bankonfi',
    },
    {
        id: 2,
        name: 'twitter',
        icon: LOGOS_URL_MAP.TWITTER_WHITE,
        link: 'https://www.twitter.com/Bank_on_Fi',
    },
    {
        id: 3,
        name: 'linkedin',
        icon: LOGOS_URL_MAP.LINKEDIN_WHITE,
        link: 'https://www.linkedin.com/company/epifi',
    },
];

const FOOTER_LINK_DATA = [
    {
        id: 1,
        label: 'Terms & Conditions',
        url: '/T&C',
        external: true,
        urlMap: {
            [NAVIGATION_URLS.SALARY_ACCOUNT.url]: {
                url: '/assets/documents/salary-tnc',
                external: true,
            },
            [NAVIGATION_URLS.US_STOCKS.url]: {
                url: APP_URLS.US_STOCKS_TNC_PAGE,
                external: true,
            },
        },
    },
    {
        id: 6,
        label: 'Federal Bank Terms & Conditions',
        url: 'https://www.federalbank.co.in/personal-loans-through-fintech-partners',
        external: true,
        showPathsList: [
            NAVIGATION_URLS.INSTANT_LOAN.url,
        ],
    },
    {
        id: 7,
        label: 'Federal Bank Privacy Policy',
        url: ' https://www.federalbank.co.in/personal-loans-through-fintech-partners',
        external: true,
        showPathsList: [
            NAVIGATION_URLS.INSTANT_LOAN.url,
        ],
    },
    {
        id: 8,
        label: 'Grievance Redressal Officer',
        url: 'https://www.federalbank.co.in/documents/10180/86180/List+of+Zonal+Officers+for+Grievance+Redressal.pdf/3976cb24-4b31-63d3-038b-be712e30a1d7?t=1672982467975',
        external: true,
        showPathsList: [
            NAVIGATION_URLS.INSTANT_LOAN.url,
        ],
    },
    {
        id: 2,
        label: 'Security',
        url: '/Fi-Secure',
    },
    {
        id: 3,
        label: 'Partner Bank Codes & Policies',
        url: FEDERAL_POLICIES,
        external: true,
        hiddenPathsList: [
            NAVIGATION_URLS.MUTUAL_FUNDS.url,
        ],
    },
    {
        id: 4,
        label: 'Investor Charter',
        url: '/wealth/TnC#investor-charter',
        hiddenPathsList: [
            NAVIGATION_URLS.HOME.url,
            NAVIGATION_URLS.FEES.url,
            NAVIGATION_URLS.US_STOCKS.url,
            NAVIGATION_URLS.JUMP.url,
            NAVIGATION_URLS.SALARY_ACCOUNT.url,
            NAVIGATION_URLS.ASK_FI.url,
            NAVIGATION_URLS.INSTANT_LOAN.url,
        ],
    },
    {
        id: 5,
        label: 'Customer Grievance',
        url: '/wealth/TnC#customer-grievance',
        hiddenPathsList: [
            NAVIGATION_URLS.HOME.url,
            NAVIGATION_URLS.FEES.url,
            NAVIGATION_URLS.US_STOCKS.url,
            NAVIGATION_URLS.JUMP.url,
            NAVIGATION_URLS.SALARY_ACCOUNT.url,
            NAVIGATION_URLS.ASK_FI.url,
            NAVIGATION_URLS.INSTANT_LOAN.url,
        ],
    },
];

const PATHS_TO_SHOW_SEBI_REGIONAL_OFFICE_ADDRESS = [
    NAVIGATION_URLS.MUTUAL_FUNDS.url,
];

const PATHS_TO_SHOW_STOCK_DIRECTORY = [
    NAVIGATION_URLS.US_STOCKS.url,
];

export {
    FI_PRONUNCIATION_DATA,
    APP_ASSISTANCE_DATA,
    FIRST_ROW_NAV_LINK_DATA,
    SECOND_ROW_NAV_LINK_DATA,
    SOCIAL_MEDIA_LINK_DATA,
    FOOTER_LINK_DATA,
    PATHS_TO_SHOW_SEBI_REGIONAL_OFFICE_ADDRESS,
    PATHS_TO_SHOW_STOCK_DIRECTORY,
};
