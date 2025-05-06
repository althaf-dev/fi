/**
 * @file Amplifi eligibility page's constants
 */

import { MAGNIFY_ELIGIBILITY_URL } from '../../../constants/AppConstant';

const magnifyUrl = (path: string) => `${MAGNIFY_ELIGIBILITY_URL}/${path}`;

const POSTER_SECTION_DATA = [
    {
        headerData: {
            fiLogo: 'https://dza2kd7rioahk.cloudfront.net/assets/svgs/magnifi-fi-logo.svg',
        },
    },
    {
        posterData: {
            title: 'Meet MagniFi',
            subTitle: 'LIFETIME FREE',
            description: 'The Ultimate Weekend Credit Card',
            posterImageDesktop: magnifyUrl('magnifi-eligibility-card.png'),
            posterImageMobile: 'https://dza2kd7rioahk.cloudfront.net/assets/pngs/magnifi-card.png',
        },
    },
    {
        benefitsData: [
            {
                id: '1',
                title: '20% cashback on weekends',
                subTitle: 'On Zomato, Ajio, BookMyShow and Blinkit',
                icon: `${MAGNIFY_ELIGIBILITY_URL}/magnifi-eligibility-icon2.svg`,
            },
            {
                id: '2',
                title: '4x rewards on weekends on select brands',
                icon: magnifyUrl('magnifi-eligibility-icon3.svg')
            },
            {
                id: '3',
                title: '1x rewards everyday spends',
                icon: magnifyUrl('magnifi-eligibility-icon4.svg')
            },
        ],
    },
    {
        eligibilityData: {
            btnTitle: 'APPLY NOW',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-right-white-arrow.svg',
            btnDescription: 'This will not impact your credit score',
        },
    },
];

const BRANDS_SECTION = {
    title: 'Offers like no other',
    brandLogosMobile:
    'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-brands-mobile.png',
    brandLogosDesktop:
    'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-brands.png',
};

const FEATURES_DATA = {
    title: 'Other features you’ll love',
    subTitle: '',
    FI_DATA: [
        {
            id: '1',
            title: 'Convert your bills to EMI',
            description: 'Coming soon',
            icon: magnifyUrl('magnifi-eligibility-rupee.png')
        },
        {
            id: '2',
            title: 'Control your card from the app',
            description: 'Card settings, international usage, bill dates & more, do it all via the app.',
            icon: magnifyUrl('magnifi-eligibility-check.png')
        },
        {
            id: '3',
            title: 'Get insights on all your spends',
            description: 'Get an overview of your spending habits',
            icon: magnifyUrl('magnifi-eligibility-insights.png')
        },
        {
            id: '4',
            title: 'Change your billing cycle anytime',
            description: 'Choose a date that suits you',
            icon: magnifyUrl('magnifi-eligibility-bill.png')
        },
        {
            id: '5',
            title: 'Payment reminders',
            description: 'Never miss a bill payment again',
            icon: magnifyUrl('magnifi-eligibility-bell.png')
        },
    ],
};

const OTHER_FEATURES_DATA = {
    title: 'Put your Fi-Coins to use',
    subTitle: '100 Fi-Coins = ₹3',
    FI_DATA: [
        {
            id: '1',
            title: 'Convert to cash',
            description: 'Turn your Fi-Coins into cash',
            icon: magnifyUrl('Rupee-3.svg'),
        },
        {
            id: '2',
            title: 'Vouchers from top brands',
            description: 'Redeem Fi-Coins for exclusive vouchers from brands you love',
            icon: magnifyUrl('magnifi-group.png'),
        },
        {
            id: '3',
            title: 'Pay your bill',
            description: 'Use Fi-Coins to pay off your Credit Card bill',
            icon: magnifyUrl('magnifi-eligibility-bill.png'),
        },
        {
            id: '4',
            title: 'Exciting merchandise',
            description: 'Browse our catalogue for rewards from top brands',
            icon: magnifyUrl('magnifi-marshall.png'),
        }
    ],
};

export {
    POSTER_SECTION_DATA, BRANDS_SECTION, FEATURES_DATA, OTHER_FEATURES_DATA, magnifyUrl
};
