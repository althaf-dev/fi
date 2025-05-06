import {
    WEBP_URL, PNGS_URL, SVGS_URL, LOGOS_URL_MAP, SALARY_ACCOUNT_URL,
} from '../../constants/AssetConstants';

const SET_EMPLOYER_DATA_ON_GOOGLE_SHEET = 'app/SET_EMPLOYER_DATA_ON_GOOGLE_SHEET';

const POSTER_SECTION_DATA = {
    IMAGES: {
        PNG: `${SALARY_ACCOUNT_URL}poster.png`,
        WEBP: `${SALARY_ACCOUNT_URL}poster.webp`,
    },
};

const sectionOneData = [
    {
        id: 1,
        cardType: 'rightImage',
        titleText: 'Flat 2% cashback on your monthly spends',
        descriptionText: '',
        finePrint: {
            text: '*T&Cs Apply',
            font: 'pSmallVariantEight',
            color: 'GREY_2',
        },
        imageIcon: `${SALARY_ACCOUNT_URL}money-and-coins.webp`,
        fallbackIcon: `${SALARY_ACCOUNT_URL}money-and-coins.png`,
    },
];

const sectionSixData = [
    {
        id: 1,
        cardType: 'leftImage',
        titleText: 'Flat 20% of your Debit Card spends as Fi-Coins',
        descriptionText: '',
        finePrint: {
            text: '*T&Cs Apply',
            font: 'pSmallVariantEight',
            color: 'GREY_2',
        },
        imageIcon: `${WEBP_URL}debit-card-spends.webp`,
        fallbackIcon: `${PNGS_URL}debit-card-spends.png`,
    },
];

const sectionTwoData = [
    {
        id: 1,
        cardType: 'rightImage',
        titleText: 'Give your health insurance a boost',
        descriptionText: '',
        finePrint: {
            text: '*T&Cs Apply',
            font: 'pSmallVariantEight',
            color: 'GREY_2',
        },
        imageIcon: `${WEBP_URL}health-booster.webp`,
        fallbackIcon: `${PNGS_URL}health-booster.png`,
    },
];

const sectionThreeData = {
    title: 'We got your basics covered',
    data: [
        {
            id: 1,
            icon: `${SVGS_URL}zero-forex-changes.svg`,
            title: 'Zero Forex Charges',
        },
        {
            id: 2,
            icon: `${SVGS_URL}zero-balance-account.svg`,
            title: 'Zero-balance Account',
        },
        {
            id: 3,
            icon: `${WEBP_URL}two-debit-cards.webp`,
            title: 'Free Lifetime Debit Card',
        },
    ],
};

const sectionFourData = {
    title: 'One place for all things money',
    cardData: {
        title: 'Connect all your bank accounts to Fi and see your spend patterns',
        data: [
            {
                id: 1,
                icon: `${SVGS_URL}hdfc-bank.svg`,
                title: '1,14,500',
            },
            {
                id: 2,
                icon: `${SVGS_URL}axis-bank.svg`,
                title: '17,500',
            },
            {
                id: 3,
                icon: `${SVGS_URL}kotak-bank.svg`,
                title: '4,24,390',
            },
            {
                id: 4,
                icon: `${SVGS_URL}kotak-bank.svg`,
                title: '',
            },
        ],
    },
    cardOneData: {
        title: 'Filter and invest in mutual funds based on your needs',
        data: [
            {
                id: 1,
                icon: `${WEBP_URL}basket.webp`,
                fallbackIcon: `${PNGS_URL}basket.png`,
                title: 'Starter Funds',
                description: 'Curated by Fi',
            },
            {
                id: 2,
                icon: `${WEBP_URL}medal.webp`,
                fallbackIcon: `${PNGS_URL}medal.png`,
                title: 'Efficient Equity',
                description: '8 filters',
            },
            {
                id: 3,
                icon: `${WEBP_URL}power.webp`,
                fallbackIcon: `${PNGS_URL}power.png`,
                title: 'Stable & Able',
                description: 'Curated by Fi',
            },
            {
                id: 4,
                icon: `${WEBP_URL}drip.webp`,
                fallbackIcon: `${PNGS_URL}drip.png`,
                title: 'Steady Drip',
                description: '12 filters',
            },
            {
                id: 5,
                icon: `${WEBP_URL}bank-logo-one.webp`,
                fallbackIcon: `${PNGS_URL}bank-logo-one.png`,
                title: 'Tax Saver',
                description: '7 filters',
            },
            {
                id: 6,
                icon: `${WEBP_URL}tree.webp`,
                fallbackIcon: `${PNGS_URL}tree.png`,
                title: 'Long Game',
                description: '7 filters',
            },
        ],
    },
    cardTwoData: {
        title: 'Whatever your goal, save for it in a Jar',
        icon: `${SVGS_URL}jar.svg`,
    },
    cardThreeData: {
        title: 'Get answers with AskFi - A smart financial assistant',
        icon: `${SVGS_URL}search-icon.svg`,
    },
};

const sectionFiveData = {
    title: 'Your account is 100% secure',
    data: [
        {
            id: 1,
            icon: `${SVGS_URL}bank-logo.svg`,
            title: 'Fi’s banking partner, Federal Bank, is a licensed bank',
        },
        {
            id: 2,
            icon: `${SVGS_URL}money-insured.svg`,
            title: 'Your money is insured for up to ₹5 lakh',
        },
        {
            id: 3,
            icon: `${SVGS_URL}check-mark.svg`,
            title: 'Your data is protected by our PCI DSS certified security system',
        },
        {
            id: 4,
            icon: `${SVGS_URL}security.svg`,
            title: 'Only you have access to your money',
        },
    ],
};

const fiCoinsSectionData = {
    icon: LOGOS_URL_MAP.FI_LOGO_V2,
    title: 'Use Fi-Coins to get merchandise, gift vouchers and more',
    url: '/FAQs/rewards',
};

const departmentData = [
    {
        id: 1,
        name: 'Marketing',
        value: 'Marketing',
    },
    {
        id: 2,
        name: 'Human Resources',
        value: 'Human Resources',
    },
    {
        id: 3,
        name: 'Finance',
        value: 'Finance',
    },
    {
        id: 4,
        name: 'Operations',
        value: 'Operations',
    },
    {
        id: 5,
        name: 'Sales',
        value: 'Sales',
    },
    {
        id: 6,
        name: 'Purchase',
        value: 'Purchase',
    },
    {
        id: 7,
        name: 'Data',
        value: 'Data',
    },
    {
        id: 8,
        name: 'Tech',
        value: 'Tech',
    },
    {
        id: 9,
        name: 'Engg',
        value: 'Engg',
    },
    {
        id: 10,
        name: 'Other',
        value: 'Other',
    },
];

const salaryFaqsData = [
    {
        id: 1,
        title: '<div>What is a salary account?</div>',
        content: '<div>A salary account is a bank account specifically designed for receiving regular salary payments from an employer. It typically offers benefits such as free or discounted services, and convenient features for managing salary transactions.</div>',
    },
    {
        id: 2,
        title: '<div>How do I get a salary account?</div>',
        content: "<div>Upgrading to a Salary Account through Fi is simple.</div><br /><ul style='padding: 0px 30px'><li>Download the app & confirm your employment.</li><br /><li>Ask your company’s HR team to upgrade your salary account to the one offered through Fi.</li><br /></ul>",
    },
    {
        id: 3,
        title: '<div>What benefits does the salary account provide?</div>',
        content: "<ul style='padding: 0px 30px'><li>Flat 2% cashback on monthly Debit Card and UPI spends.</li><br/><li>20% of Debit Card and 10% of UPI spends in Fi-Coins.</li><br /> <li>Exclusive offers.</li><br /> <li>A free VISA debit card.</li><br /> <li>0 Forex charges.</li><br /> <li>Access to 9% returns p.a. with Jump & more.</li><br /></ul><br/> <a style='-webkit-text-decoration: underline; text-decoration: underline; text-underline-position: under; cursor: pointer; color: #00B899' target='_blank' href='https://fi.money/blog/salary-program-tnc' >T&C Apply<span style='display: inline-block; height: 19px; width: 19px; margin-left: 3px; vertical-align: middle;' ><img style='object-fit: contain; height: 100%; width: 100%; display: block;' src='https://dza2kd7rioahk.cloudfront.net/assets/svgs/top-right-arrow-green.svg' alt='arrow' loading='lazy' id=''></span></a>",
    },
    {
        id: 4,
        title: '<div>Who is eligible for a salary account?</div>',
        content: "<div>To upgrade to a salary account users need to meet our eligibility criteria:</div><br /><ul style='padding: 0px 30px'><li>Monthly in-hand salary of over ₹25,000*</li><br /><li>Employer GST must be registered or recognised by the Ministry of Corporate Affairs and the Empployees’ Provident Fund Organisation.</li><br /><li>Completion of full KYC through the Fi app.</li><br /></ul> <br/> <a style='-webkit-text-decoration: underline; text-decoration: underline; text-underline-position: under; cursor: pointer; color: #00B899' target='_blank' href='https://fi.money/blog/salary-program-tnc' >T&C Apply<span style='display: inline-block; height: 19px; width: 19px; margin-left: 3px; vertical-align: middle;' ><img style='object-fit: contain; height: 100%; width: 100%; display: block;' src='https://dza2kd7rioahk.cloudfront.net/assets/svgs/top-right-arrow-green.svg' alt='arrow' loading='lazy' id=''></span></a>",
    },
];

export {
    sectionOneData, sectionTwoData, sectionThreeData, sectionFourData, sectionFiveData, sectionSixData, SET_EMPLOYER_DATA_ON_GOOGLE_SHEET,
    fiCoinsSectionData, departmentData, POSTER_SECTION_DATA, salaryFaqsData,
};
