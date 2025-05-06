/**
 * @file Epifi terms and condition constants.
 */

import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';
import SectionSix from './SectionSix/SectionSix';
import SectionSeven from './SectionSeven/SectionSeven';
import SectionEight from './SectionEight/SectionEight';
import SectionNine from './SectionNine/SectionNine';
import SectionTen from './SectionTen/SectionTen';
import SectionEleven from './SectionEleven/SectionEleven';
import SectionTwelve from './SectionTwelve/SectionTwelve';
import SectionThirteen from './SectionThirteen/SectionThirteen';
import SectionFourteen from './SectionFourteen/SectionFourteen';
import SectionFifteen from './SectionFifteen/SectionFifteen';
import SectionSixteen from './SectionSixteen/SectionSixteen';
import SectionSeventeen from './SectionSeventeen/SectionSeventeen';
import SectionEighteen from './SectionEighteen/SectionEighteen';

/* eslint-disable import/prefer-default-export */
const TitleTextArray = [
    'General Terms',
    '‘You’ and ‘Us’',
    'Definitions',
    'Savings Account',
    'Obligations & Rights',
    'Rights of Usage & Data Rights',
    'Notice',
    'Disclaimer of Liability',
    'Indemnity',
    'Governing Law',
    'Confidentiality',
    'Third Party Services and Links',
    'Communication from Epifi',
    'Rewards',
    'US Stocks',
    'Fees',
    'Miscellaneous Terms',
];

const sectionArray = [
    {
        titleText: 'General Terms',
        Component: SectionOne,
        threshold: 0.3,
    },
    {
        titleText: '‘You’ and ‘Us’',
        Component: SectionTwo,
        threshold: 0.3,
    },
    {
        titleText: 'Definitions',
        Component: SectionThree,
        threshold: 0.2,
    },
    {
        titleText: 'Savings Account',
        Component: SectionFour,
        threshold: 0.2,
    },
    {
        titleText: 'Obligations & Rights',
        Component: SectionFive,
        threshold: 0.2,
    },
    {
        titleText: 'Rights of Usage & Data Rights',
        Component: SectionSix,
        threshold: 0.2,
    },
    {
        titleText: 'EPIFI Plans',
        Component: SectionEighteen,
        threshold: 0.2,
    },
    {
        titleText: 'Notice',
        Component: SectionSeven,
        threshold: 0.5,
    },
    {
        titleText: 'Disclaimer of Liability',
        Component: SectionEight,
        threshold: 0.2,
    },
    {
        titleText: 'Indemnity',
        Component: SectionNine,
        threshold: 0.5,
    },
    {
        titleText: 'Governing Law',
        Component: SectionTen,
        threshold: 0.5,
    },
    {
        titleText: 'Confidentiality',
        Component: SectionEleven,
        threshold: 0.5,
    },
    {
        titleText: 'Third Party Services and Links',
        Component: SectionTwelve,
        threshold: 0.5,
    },
    {
        titleText: 'Communication from Epifi',
        Component: SectionThirteen,
        threshold: 0.5,
    },
    {
        titleText: 'Rewards',
        Component: SectionFourteen,
        threshold: 0.3,
    },
    {
        titleText: 'US Stocks',
        Component: SectionSeventeen,
        threshold: 0.3,
    },
    {
        titleText: 'Fees',
        Component: SectionFifteen,
        threshold: 0.3,
    },
    {
        titleText: 'Miscellaneous Terms',
        Component: SectionSixteen,
        threshold: 0.3,
    },
];

const EPIFI_PLANS_TABLE_DATA = {
    headData: [
        {
            name: 'Fi Plan',
        },
        {
            name: 'Federal Bank Savings Account',
        },
    ],
    rowData: [
        [
            {
                value: 'Fi Standard',
            },
            {
                value: 'Federal Bank Standard Savings Account',
            },
        ],
        [
            {
                value: 'Fi Plus',
            },
            {
                value: 'Federal Bank Max Savings Account',
            },
        ],
        [
            {
                value: 'Fi Infinite',
            },
            {
                value: 'Federal Bank Ultimate Savings Account',
            },
        ],
        [
            {
                value: 'Fi Salary',
            },
            {
                value: 'Federal Bank Ultimate Savings Account',
            },
        ],
    ],
    disableLastRowLine: true,
};

export { TitleTextArray, sectionArray, EPIFI_PLANS_TABLE_DATA };
