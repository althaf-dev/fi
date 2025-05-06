const ELIGIBILITY_SUCCESS_SECTION = {
    logo: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-logo.svg',
    fiLogo:
      'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
    title: 'Congrats, you’re eligible!',
    description:
      'Now, the only thing left is to complete your application on the app.',
    linkText: 'DOWNLOAD THE APP',
    lottieBackground: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-confetti.json',
    subTitle: 'Enjoy these benefits with the Amplifi Credit Card',
    buttonUrl: 'https://fi.onelink.me/GvZH/grrfu0kt',
    posterImg: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-success-card.png',
    btnDescription: 'This will not impact your credit score',
    eligibilityEvent: 'EligibilitySuccess',
    eligibilityBtnEvent: 'EligibleDownload',
    benefitData: [
        {
            id: '1',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-three-percenatge.png',
            title: '3% rewards from top 20+ brands',
        },
        {
            id: '2',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-zero-percentage.png',
            title: '0% Forex markup',
        },
        {
            id: '3',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-air-miles.png',
            title: 'Redeem rewards for Air Miles',
        },
        {
            id: '4',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-vouchers.png',
            title: 'Welcome vouchers worth ₹4,000+',
        },
    ],
};

const ELIGIBILITY_FAIL_SECTION = {
    logo: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-logo.svg',
    fiLogo:
      'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
    title: 'Thank you for showing interest',
    description:
      "You don't meet the eligibility criteria right now. However, you can still check out the other products we offer.",
    linkText: 'DOWNLOAD THE APP',
    buttonUrl: 'https://fi.onelink.me/GvZH/grrfu0kt',
    posterImg: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-fail-card.png',
    btnDescription: 'This will not impact your credit score',
    eligibilityEvent: 'EligibilityFailure',
    eligibilityBtnEvent: 'Non-EigibleDownload',
    benefitData: [
        {
            id: '1',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-zero.png',
            title: 'Zero balance Savings Account',
        },
        {
            id: '2',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-air-miles.png',
            title: 'International Debit Card',
        },
        {
            id: '3',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-vouchers.png',
            title: '2% cashback on UPI spends',
        },
        {
            id: '4',
            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-track.png',
            title: 'Track all your accounts in one place',
        },
    ],
};

const getResultScreenData = (displayInfo: any, status: string) => {
    const {
        screenTitle, screenMessage, ctaText, additionalText
    } = displayInfo;

    let response: any = {
        title: screenTitle,
        linkText: ctaText,
        subTitle: additionalText,
        description: screenMessage,
    };

    if (status === 'STATUS_SUCCESSFUL') {
        response = {
            ...response,
            logo: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-logo.svg',
            fiLogo:
        'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
            linkText: 'DOWNLOAD THE APP',
            lottieBackground: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-confetti.json',
            buttonUrl: 'https://fi.onelink.me/GvZH/grrfu0kt',
            posterImg: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-success-card.png',
            btnDescription: 'This will not impact your credit score',
            benefitData: [
                {
                    id: '1',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-three-percenatge.png',
                    title: '3% rewards from top 20+ brands',
                },
                {
                    id: '2',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-zero-percentage.png',
                    title: '0% Forex markup',
                },
                {
                    id: '3',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-air-miles.png',
                    title: 'Redeem rewards for Air Miles',
                },
                {
                    id: '4',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-vouchers.png',
                    title: 'Welcome vouchers worth ₹4,000+',
                },
            ],
        };
    } else {
        response = {
            ...response,
            logo: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-logo.svg',
            fiLogo:
        'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
            buttonUrl: 'https://fi.onelink.me/GvZH/grrfu0kt',
            posterImg: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-fail-card.png',
            btnDescription: 'This will not impact your credit score',
            benefitData: [
                {
                    id: '1',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-zero.png',
                    title: 'Zero balance Savings Account',
                },
                {
                    id: '2',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-air-miles.png',
                    title: 'International Debit Card',
                },
                {
                    id: '3',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-vouchers.png',
                    title: '2% cashback on UPI spends',
                },
                {
                    id: '4',
                    icon: 'https://dza2kd7rioahk.cloudfront.net/assets/amplifi-eligibility/amplifi-track.png',
                    title: 'Track all your accounts in one place',
                },
            ],

        };
    }
    return response;
};

export { ELIGIBILITY_SUCCESS_SECTION, ELIGIBILITY_FAIL_SECTION, getResultScreenData };
