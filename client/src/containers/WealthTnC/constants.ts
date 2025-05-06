const MENU_ITEMS_LIST = [
    'General Terms',
    '‘You’ and ‘Us’',
    'Definitions',
    'Obligations & Rights',
    'Rights of Usage & Data Rights',
    'Notice',
    'Disclaimer of Liability',
    'Indemnity',
    'Governing Law',
    'Confidentiality',
    'Communication from Epifi',
    'Fees',
    'Assignment',
    'Investor Charter',
    'Customer Grievance',
    'Disclosure',
];
const CUSTOMER_GRIEVANCE_SECTION_HASH = '#customer-grievance';
const INVESTOR_CHARTER_SECTION_HASH = '#investor-charter';

const GET_WEALTH_DATA = 'wealthTnc/GET_WEALTH_DATA';
const UPDATE_WEALTH_DATA = 'wealthTnc/UPDATE_WEALTH_DATA';

const TRACKING_PAYLOAD = {
    flow_name: 'website',
    channel: 'website',
    page_name: 'wealth tnc page',
};

const DISCLOSURE_SECTION_DATA = {
    title: 'Disclosure',
    headData: [
        {
            name: 'Sr. no',
        },
        {
            name: 'Financial Year',
        },
        {
            name: 'Compliance Audit Status',
        },
        {
            name: 'Remarks, If any',
        },
    ],
    rowData: [
        [
            {
                value: 1,
            },
            {
                value: 'FY 2020-21',
            },
            {
                value: 'Conducted',
            },
            {
                value: 'N.A.',
            },
        ],
        [
            {
                value: 2,
            },
            {
                value: 'FY 2021-22',
            },
            {
                value: 'Conducted',
            },
            {
                value: 'N.A.',
            },
        ],
        [
            {
                value: 3,
            },
            {
                value: 'FY 2022-23',
            },
            {
                value: 'Conducted',
            },
            {
                value: 'N.A.',
            },
        ],
        [
            {
                value: 4,
            },
            {
                value: 'FY 2023-24',
            },
            {
                value: 'Conducted',
            },
            {
                value: 'N.A.',
            },
        ],
    ],
};

export {
    MENU_ITEMS_LIST,
    GET_WEALTH_DATA,
    UPDATE_WEALTH_DATA,
    TRACKING_PAYLOAD,
    CUSTOMER_GRIEVANCE_SECTION_HASH,
    INVESTOR_CHARTER_SECTION_HASH,
    DISCLOSURE_SECTION_DATA,
};
