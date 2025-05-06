type fontStyle = {
    fontSize: string;
    lineHeight?: string;
    fontWeight: string | number;
    letterSpacing?: string;
};
type tag = {
    fontFamily: 'Gilroy' | 'Inter' | 'Gilroy, sans-serif' | 'Inter, sans-serif';
    desktop: fontStyle;
    tab: fontStyle;
    phone: fontStyle;
};

type typography = {
    h1: tag;
    h1NormalVariant: tag;
    h1VariantOne: tag;
    h1VariantTwo: tag;
    h1VariantThree: tag;
    h1VariantFour: tag;
    h1VariantFive: tag;
    h1VariantSix: tag;
    h1VariantSeven: tag;
    h2: tag;
    h2VariantOne: tag;
    h2VariantTwo: tag;
    h2VariantThree: tag;
    h2VariantFour: tag;
    h2VariantFive: tag;
    h2VariantSix: tag;
    h2VariantSeven: tag;
    h2VariantEight: tag;
    h2VariantNine: tag;
    h3: tag;
    h3VariantOne: tag;
    h3VariantTwo: tag;
    h3VariantThree: tag;
    h3VariantFour: tag;
    h3VariantFive: tag;
    h3VariantSix: tag;
    h3VariantSeven: tag;
    h3VariantEight: tag;
    h3VariantNine: tag;
    h4: tag;
    h4VariantOne: tag;
    h4VariantTwo: tag;
    h4VariantThree: tag;
    h4VariantFour: tag;
    h4VariantFive: tag;
    h4VariantSix: tag;
    h4VariantSeven: tag;
    h4VariantEight: tag;
    h5: tag;
    h5VariantOne: tag;
    h5VariantTwo: tag;
    h5VariantThree: tag;
    h5VariantFour: tag;
    h5VariantFive: tag;
    h5VariantSix: tag;
    h6: tag;
    h6VariantOne: tag;
    pNormalVariant: tag;
    p: tag;
    pVariantOne: tag;
    p2: tag;
    p3: tag;
    p4: tag;
    p5: tag;
    p5VariantOne: tag;
    p6: tag;
    p6VariantOne: tag;
    input: tag;
    inputVariantOne: tag;
    inputVariantTwo: tag;
    inputVariantThree: tag;
    label: tag;
    labelVariantOne: tag;
    labelVariantTwo: tag;
    labelVariantThree: tag;
    labelVariantFour: tag;
    labelVariantFive: tag;
    labelVariantSix: tag;
    labelVariantSeven: tag;
    labelVariantEight: tag;
    labelVariantNine: tag;
    labelVariantTen: tag;
    labelVariantEleven: tag;
    labelVariantTwelve: tag;
    labelVariantThirteen: tag;
    labelVariantFourteen: tag;
    labelVariantFifteen: tag;
    labelVariantSixteen: tag;
    labelVariantSeventeen: tag;
    labelVariantEighteen: tag;
    button: tag;
    buttonVariantOne: tag;
    buttonVariantTwo: tag;
    buttonVariantThree: tag;
    buttonVariantFour: tag;
    buttonVariantFive: tag;
    pSmall: tag;
    pSmallVariantOne: tag;
    pSmallVariantTwo: tag;
    pSmallVariantThree: tag;
    pSmallVariantFour: tag;
    pSmallVariantFive: tag;
    pSmallVariantSix: tag;
    pSmallVariantSeven: tag;
    pSmallVariantEight: tag;
    pSmallVariantNine: tag;
    pSmallVariantTen: tag;
    pSmallVariantEleven: tag;
    pSmallVariantTwelve: tag;
    pSmallVariantThirteen: tag;
    footerLabel: tag;
    workingInfo: tag;
    options: tag;
    description: tag;
    descriptionVariantOne: tag;
    footerMail: tag;
    cardTagFont: tag;
    cardTitleFont: tag;
    careerCardTitle: tag;
    headingTagline: tag;
    bottomSheetHeading: tag;
    bottomSheetDescription: tag;
    posterCardTitle: tag;
    posterCardDescription: tag;
    cardTitleVariantOne: tag;
    cardDescriptionVariantOne: tag;
    cardDescriptionVariantTwo: tag;
    cardTitleVariantTwo: tag;
    cardTitleVariantThree: tag;
    cardTitleVariantFour: tag;
    cardTitleVariantFive: tag;
    cardTitleVariantSix: tag;
    cardTitleVariantSeven: tag;
    cardTitleVariantEight: tag;
    cardTitleVariantNine: tag;
    cardTitleVariantTen: tag;
    cardTitleVariantEleven: tag;
    cardTitleVariantTwelve: tag;
    cardTitleVariantThirteen: tag;
    emailTitle: tag;
    emailDescription: tag;
    emailFooterText: tag;
    titleVariantOne: tag;
    titleVariantTwo: tag;
    titleVariantThree: tag;
};

const Typography: typography = {
    h1: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '64px',
            lineHeight: '105%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    h1NormalVariant: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '64px',
            lineHeight: '105%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    h1VariantOne: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    h1VariantTwo: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '84px',
            lineHeight: '96px',
            fontWeight: 'bold',
        },
        tab: {
            fontSize: '52px',
            lineHeight: '62px',
            fontWeight: 'bold',
        },
        phone: {
            fontSize: '52px',
            lineHeight: '62px',
            fontWeight: 'bold',
        },
    },

    h1VariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '48px',
            lineHeight: '110%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h1VariantFour: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '64px',
            lineHeight: '105%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '32px',
            lineHeight: '115%',
            fontWeight: '600',
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h1VariantFive: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '80px',
            lineHeight: '105%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 700,
        },
    },

    h1VariantSix: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '64px',
            lineHeight: '110%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '44px',
            lineHeight: '110%',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h1VariantSeven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '64px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '36px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '36px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    h2: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '48px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '40px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },

    h2VariantOne: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '22px',
            lineHeight: '155%',
            fontWeight: 600,
        },
    },

    h2VariantTwo: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '48px',
            lineHeight: '110%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '32px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },

    h2VariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },

    h2VariantFour: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '32%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '32%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '32%',
            fontWeight: 600,
        },
    },

    h2VariantFive: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '46px',
            lineHeight: '130%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h2VariantSix: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '22px',
            lineHeight: '155%',
            fontWeight: 600,
        },
    },

    h2VariantSeven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '40px',
            lineHeight: '48px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '26px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '130%',
            fontWeight: 600,
        },
    },

    h2VariantEight: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '40px',
            lineHeight: '110%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '32px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '110%',
            fontWeight: 500,
        },
    },

    h2VariantNine: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '40px',
            lineHeight: '48px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 500,
        },
    },

    h3: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h3VariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },

    h3VariantTwo: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '130%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '18px',
            lineHeight: '130%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '130%',
            fontWeight: 600,
        },
    },

    h3VariantFour: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '48px',
            lineHeight: '110%',
            fontWeight: 700,
        },
        tab: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 700,
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 700,
        },
    },

    h3VariantFive: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '42px',
            lineHeight: '120%',
            fontWeight: 700,
        },
        tab: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 700,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 700,
        },
    },

    h3VariantSix: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '42px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '42px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '120%',
            fontWeight: 700,
        },
    },

    h3VariantSeven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '140%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 600,
        },
    },

    h3VariantEight: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '140%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '140%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 600,
        },
    },

    h3VariantNine: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '48px',
            lineHeight: '110%',
            fontWeight: 700,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 700,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 700,
        },
    },

    h4: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '110%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '110%',
            fontWeight: 500,
        },
    },

    h4VariantOne: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h4VariantTwo: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '110%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '110%',
            fontWeight: 500,
        },
    },

    h4VariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '38px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h4VariantFour: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 400,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 400,
        },
        phone: {
            fontSize: '10px',
            lineHeight: '12px',
            fontWeight: 400,
        },
    },

    h4VariantFive: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '48px',
            lineHeight: '105%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '32px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },

    h4VariantSix: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 700,
        },
        tab: {
            fontSize: '18px',
            lineHeight: '115%',
            fontWeight: 700,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '115%',
            fontWeight: 700,
        },
    },

    h4VariantSeven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 600,
        },
    },
    h4VariantEight: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '36px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '28px',
            lineHeight: '32px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },
    h5: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '18px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },

    h5VariantOne: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '130%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '130%',
            fontWeight: 600,
        },
    },
    h5VariantTwo: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },

    h5VariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },

    h5VariantFour: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 'bold',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 'bold',
        },
    },

    h5VariantFive: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },

    h5VariantSix: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '130%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '130%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '130%',
            fontWeight: 500,
        },
    },

    h6: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '130%',
            fontWeight: 700,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '130%',
            fontWeight: 700,
        },
        phone: {
            fontSize: '12px',
            lineHeight: '155%',
            fontWeight: 700,
        },
    },

    h6VariantOne: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '130%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '130%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '12px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    p: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '18px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    pNormalVariant: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    pVariantOne: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '18px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    p2: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    p3: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    p4: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '18px',
            lineHeight: '155%',
            fontWeight: 'bold',
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 'bold',
        },
    },

    p5: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
        },
    },

    p5VariantOne: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: 500,
        },
    },

    p6: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },
    p6VariantOne: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
    },
    input: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: 500,
        },
    },

    inputVariantOne: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '26px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 600,
        },
    },

    inputVariantTwo: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '24px',
            lineHeight: '130%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '18px',
            lineHeight: '130%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '130%',
            fontWeight: 500,
        },
    },
    inputVariantThree: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },

    pSmall: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: 500,
        },
    },

    pSmallVariantOne: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '12px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },

    pSmallVariantTwo: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: 500,
        },
    },

    pSmallVariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '130%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '30px',
            lineHeight: '130%',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 'normal',
        },
    },

    pSmallVariantFour: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '125%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '16px',
            lineHeight: '125%',
            fontWeight: '500',
        },
    },

    pSmallVariantFive: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '30px',
            lineHeight: '36px',
            fontWeight: '500',
        },
        tab: {
            fontSize: '30px',
            lineHeight: '155%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: '500',
        },
    },

    pSmallVariantSix: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: '600',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: '600',
        },
    },

    pSmallVariantSeven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: '500',
        },
    },

    pSmallVariantEight: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: '600',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600',
        },
    },

    pSmallVariantNine: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: '500',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '500',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '14.4px',
            fontWeight: '500',
        },
    },
    pSmallVariantTen: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: '400',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '400',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '14.4px',
            fontWeight: '400',
        },
    },
    pSmallVariantEleven: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '24.2px',
            fontWeight: '400',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: '400',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: '400',
        },
    },
    pSmallVariantTwelve: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
        },
        phone: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
        },
    },
    pSmallVariantThirteen: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '400',
        },
        phone: {
            fontSize: '8px',
            lineHeight: '16px',
            fontWeight: '400',
        },
    },
    label: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '14px',
            lineHeight: '100%',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '10px',
            lineHeight: '110%',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
        phone: {
            fontSize: '10px',
            lineHeight: '110%',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
    },

    labelVariantOne: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '10px',
            lineHeight: '16px',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '10px',
            lineHeight: '16px',
            fontWeight: 'normal',
        },
    },

    labelVariantTwo: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '10px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '10px',
            lineHeight: '120%',
            fontWeight: '500',
        },
    },

    labelVariantThree: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
    },

    labelVariantFour: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '120%',
            fontWeight: '500',
        },
    },

    labelVariantFive: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '10px',
            lineHeight: '120%',
            fontWeight: '600',
        },
        tab: {
            fontSize: '10px',
            lineHeight: '120%',
            fontWeight: '600',
        },
        phone: {
            fontSize: '10px',
            lineHeight: '120%',
            fontWeight: '600',
        },
    },

    labelVariantSix: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: '500',
        },
    },

    labelVariantSeven: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '8px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '8px',
            lineHeight: '140%',
            fontWeight: 500,
        },
    },

    labelVariantEight: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '23px',
            lineHeight: '23px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: 600,
        },
    },

    labelVariantNine: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '21px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '13px',
            lineHeight: '14px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '13px',
            lineHeight: '14px',
            fontWeight: 600,
        },
    },

    labelVariantTen: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 400,
        },
        tab: {
            fontSize: '11px',
            lineHeight: '14px',
            fontWeight: 400,
        },
        phone: {
            fontSize: '11px',
            lineHeight: '14px',
            fontWeight: 400,
        },
    },

    labelVariantEleven: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '22px',
            lineHeight: '40px',
            fontWeight: 500,
        },
        tab: {
            fontSize: '11px',
            lineHeight: '18px',
            fontWeight: 500,
        },
        phone: {
            fontSize: '11px',
            lineHeight: '18px',
            fontWeight: 500,
        },
    },

    labelVariantTwelve: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
    },

    labelVariantThirteen: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 'normal',
        },
    },

    labelVariantFourteen: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '14',
            lineHeight: '100%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '10px',
            lineHeight: '12px',
            fontWeight: 600,
        },
    },

    labelVariantFifteen: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '28px',
            lineHeight: '110%',
            fontWeight: 700,
        },
        tab: {
            fontSize: '25px',
            lineHeight: '115%',
            fontWeight: 700,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 700,
        },
    },

    labelVariantSixteen: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: '500',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: '500',
        },
    },

    labelVariantSeventeen: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '16px',
            lineHeight: '23px',
            fontWeight: '500',
        },
        tab: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '500',
        },
        phone: {
            fontSize: '10px',
            lineHeight: '14px',
            fontWeight: '500',
        },
    },

    labelVariantEighteen: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '24px',
            lineHeight: '28px',
            fontWeight: '500',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: '500',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: '500',
        },
    },

    button: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 700,
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '110%',
            fontWeight: 700,
            letterSpacing: '0.45px',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '110%',
            fontWeight: 700,
            letterSpacing: '0.45px',
        },
    },

    buttonVariantOne: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '55px',
            lineHeight: '105%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '36px',
            lineHeight: '105%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '22px',
            lineHeight: '105%',
            fontWeight: 600,
        },
    },

    buttonVariantTwo: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '110%',
            fontWeight: 700,
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '20px',
            lineHeight: '110%',
            fontWeight: 700,
            letterSpacing: '0.45px',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '110%',
            fontWeight: 700,
            letterSpacing: '0.45px',
        },
    },

    buttonVariantThree: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
        phone: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
    },

    buttonVariantFour: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '24px',
            lineHeight: '110%',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
    },
    buttonVariantFive: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
    },
    footerLabel: {
        fontFamily: 'Inter',

        desktop: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '120%',
            fontWeight: 'normal',
            letterSpacing: 'normal',
        },
    },

    workingInfo: {
        fontFamily: 'Inter, sans-serif',

        desktop: {
            fontSize: '20px',
            lineHeight: '140%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '155%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '155%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
    },

    options: {
        fontFamily: 'Inter',

        desktop: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '125%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
    },
    description: {
        fontFamily: 'Inter',

        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '140%',
            fontWeight: 500,
            letterSpacing: 'normal',
        },
    },
    descriptionVariantOne: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '24px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '10px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },
    h3VariantOne: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },
    cardTagFont: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '20px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '14px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.3px',
        },
        phone: {
            fontSize: '14px',
            lineHeight: '110%',
            fontWeight: 'bold',
            letterSpacing: '0.45px',
        },
    },
    footerMail: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 'normal',
        },
        tab: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 'normal',
        },
        phone: {
            fontSize: '12px',
            lineHeight: '140%',
            fontWeight: '500',
        },
    },
    cardTitleFont: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '40px',
            lineHeight: '115%',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
        tab: {
            fontSize: '26px',
            lineHeight: '120%',
            fontWeight: 600,
            letterSpacing: '0.3px',
        },
        phone: {
            fontSize: '26px',
            lineHeight: '115%',
            fontWeight: 600,
            letterSpacing: '0.45px',
        },
    },
    careerCardTitle: {
        fontFamily: 'Gilroy',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '26px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },
    headingTagline: {
        fontFamily: 'Inter',
        desktop: {
            fontSize: '30px',
            lineHeight: '140%',
            fontWeight: 400,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '140%',
            fontWeight: 500,
        },
    },
    bottomSheetHeading: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '20px',
        },
        tab: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '20px',
        },
        phone: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '20px',
        },
    },
    bottomSheetDescription: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
        },
        tab: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
        },
        phone: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
        },
    },
    posterCardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '115%',
        },
        tab: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '115%',
        },
        phone: {
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '110%',
        },
    },
    posterCardDescription: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '115%',
        },
        tab: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '115%',
        },
        phone: {
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '115%',
        },
    },
    cardTitleVariantOne: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '26px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },
    cardDescriptionVariantOne: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '120%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },
    cardDescriptionVariantTwo: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '24px',
            lineHeight: '140%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '155%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '14px',
            lineHeight: '155%',
            fontWeight: 500,
        },
    },
    cardTitleVariantTwo: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '40px',
            lineHeight: '130%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '26px',
            lineHeight: '140%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '28px',
            lineHeight: '130%',
            fontWeight: 600,
        },
    },
    cardTitleVariantThree: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '48px',
            lineHeight: '130%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '32px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    cardTitleVariantFour: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '48px',
            lineHeight: '105%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '32px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    cardTitleVariantFive: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '48px',
            lineHeight: '105%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '26px',
            lineHeight: '110%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    cardTitleVariantSix: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '36px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '26px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '130%',
            fontWeight: 600,
        },
    },
    cardTitleVariantSeven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '30px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    cardTitleVariantEight: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '30px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '115%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '115%',
            fontWeight: 600,
        },
    },
    cardTitleVariantNine: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '40px',
            lineHeight: '48px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },
    cardTitleVariantTen: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '48px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '24px',
            lineHeight: '120%',
            fontWeight: 600,
        },
    },
    cardTitleVariantEleven: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '40px',
            lineHeight: '48px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: 600,
        },
    },
    cardTitleVariantTwelve: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '36px',
            lineHeight: '44px',
            fontWeight: 400,
        },
        tab: {
            fontSize: '15px',
            lineHeight: '12px',
            fontWeight: 400,
        },
        phone: {
            fontSize: '15px',
            lineHeight: '12px',
            fontWeight: 400,
        },
    },
    cardTitleVariantThirteen: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '36px',
            lineHeight: '105%',
            fontWeight: 500,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '105%',
            fontWeight: 500,
        },
        phone: {
            fontSize: '18px',
            lineHeight: '105%',
            fontWeight: 500,
        },
    },
    emailTitle: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '28px',
            lineHeight: '36px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '28px',
            lineHeight: '36px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '28px',
            lineHeight: '36px',
            fontWeight: 600,
        },
    },
    emailDescription: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '16px',
            lineHeight: '26px',
            fontWeight: 500,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '26px',
            fontWeight: 500,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '26px',
            fontWeight: 500,
        },
    },
    emailFooterText: {
        fontFamily: 'Inter, sans-serif',
        desktop: {
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: 400,
        },
        tab: {
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: 400,
        },
        phone: {
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: 400,
        },
    },
    titleVariantOne: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '32px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        tab: {
            fontSize: '32px',
            lineHeight: '110%',
            fontWeight: 600,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },
    titleVariantTwo: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '24px',
            lineHeight: '28px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
    },
    titleVariantThree: {
        fontFamily: 'Gilroy, sans-serif',
        desktop: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        tab: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
        phone: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
        },
    },
};

export default Typography;
