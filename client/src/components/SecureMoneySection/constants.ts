/**
 * @file SecureMoneySection constants
 *
 * @fileoverview This file contains constants related to the SecureMoneySection component
 */
import {
    NAVIGATION_URLS, FEDERAL_BANK_PRIVACY_POLICY, FEDERAL_BANK_WEBSITE_LOANS_URL, GRIEVANCE_REDEESSAL, LIQUILOANS_TNC_URL, IDFC_GRO_DETAILS,
    ABFL_GRO_DETAILS,
    LIQUILOANS_WEBSITE,
    IDFC_BANK_WEBSITE,
    IDFC_PRIVACY_POLICY,
    ADITYA_BIRYLA_FINANCE_LIMITED_WEBSITE,
    ADITYA_BIRYLA_FINANCE_LIMITED_PRIVACY,
    SACHET_PORTAL,
    FI_LOANS_WEBSITE,
    FI_LOANS_PRIVACY_PAGE,
} from '../../constants/AppConstant';

import { TextLinkArray } from '../../interfaces/elements';

const INSTANT_LOAN_LINKS: TextLinkArray = [
    {
        label: 'Fi Policy:',
        links: [
            {
                text: 'Privacy Policy',
                url: NAVIGATION_URLS.PRIVACY.url,
            },
            {
                text: 'Customer Support',
                url: NAVIGATION_URLS.CONTACT_US.url,
            },
        ],
    },
    {
        label: 'Federal Bank Policy:',
        links: [
            {
                text: 'Privacy Policy',
                url: FEDERAL_BANK_PRIVACY_POLICY,
                isExternal: true,
            },
            {
                text: 'Bank Website (Loans)',
                url: FEDERAL_BANK_WEBSITE_LOANS_URL,
                isExternal: true,
            },
            {
                text: 'Grievance Redressal',
                url: GRIEVANCE_REDEESSAL,
                isExternal: true,
            },
        ],
    },
    {
        label: 'LiquiLoans Policy:',
        links: [
            {
                text: 'Privacy Policy',
                url: LIQUILOANS_TNC_URL,
                isExternal: true,
            },
            {
                text: 'Website',
                url: LIQUILOANS_WEBSITE,
                isExternal: true,
            },
        ],
    },
    {
        label: 'IDFC FIRST Bank:',
        links: [
            {
                text: 'Grievance Redressal',
                url: IDFC_GRO_DETAILS,
                isExternal: true,
            },
            {
                text: 'Bank Website (Loans)',
                url: IDFC_BANK_WEBSITE,
                isExternal: true,
            },
            {
                text: 'Privacy Policy',
                url: IDFC_PRIVACY_POLICY,
                isExternal: true,
            },
        ],
    },
    {
        label: 'Aditya Birla Finance Limited:',
        links: [
            {
                text: 'Website',
                url: ADITYA_BIRYLA_FINANCE_LIMITED_WEBSITE,
                isExternal: true,
            },
            {
                text: 'Privacy Policy ',
                url: ADITYA_BIRYLA_FINANCE_LIMITED_PRIVACY,
                isExternal: true,
            },
            {
                text: 'Grievance Redressal',
                url: ABFL_GRO_DETAILS,
                isExternal: true,
            },
        ],
    },
    {
        label: 'Sachet Portal:',
        links: [
            {
                text: 'Website',
                url: SACHET_PORTAL,
                isExternal: true,
            },
        ],
    },
    {
        label: 'Fi Loans',
        links: [
            {
                text: 'Website',
                url: FI_LOANS_WEBSITE,
                isExternal: true,
            },
            {
                text: 'Privacy Policy',
                url: FI_LOANS_PRIVACY_PAGE,
                isExternal: true,
            },
        ],

    },
];

interface LinkArray {
    INSTANT_LOAN_LINKS: TextLinkArray,
}

const LINK_ARRAY: LinkArray = {
    INSTANT_LOAN_LINKS,
};

// eslint-disable-next-line import/prefer-default-export
export { LINK_ARRAY };
