import Colors from '@/Themes/Colors';

/* eslint-disable quote-props */
const ButtonVarinatStyle: any = {
    FEATURE_PAGE_BUTTON_PRIMARY: {
        extends: '',
        properties: {
            phone: {
                'button/border': 'none',
                'button/outline': 'none',
                'button/border-radius': '19px',
                'button/text-transform': 'uppercase',
                'button/transition': 'all 0.1s ease 0s',
                'button/background-color': '#00b899',
                'button/color': '#ffffff',
                'button/cursor': 'pointer',
                'button/width': '100%',
                'button/letter-spacing': '0.45px',
                'button/padding': '16px 0px',
                'button/font-size': '14px',
                'button/font-weight': '700',
                'button/line-height': '110%',
                'botton/font-family': 'Gilroy'
            },
            tab: {
                'button/font-size': '20px',
            },
            desktop: {
                'button/font-size': '24px',
            }
        }
    },
    FEATURE_PAGE_BUTTON_PRIMARY_3: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY',
        properties: {
            phone: {
                'button/padding': '14px',
            },
            tab: {
            },
            desktop: {
                'button/padding': '24px 0px',
            }
        }
    },
    FEATURE_PAGE_BUTTON_PRIMARY_2: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY',
        properties: {
            phone: {
                'button/width': '280px',
            },
            tab: {
            },
            desktop: {
                'button/width': '452px',
            }
        }
    },
    CAREERS_PAGE_BUTTON_PRIMARY: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY',
        typographyTag: 'labelVariantThirteenGilray',
        properties: {
            phone: {
                'button/padding': '14px',
                'button/font-size': '14px',
                'button/font-weight': '700',
                'button/line-height': '110%',
                'botton/font-family': 'Gilroy'
            },
            tab: {
            },
            desktop: {
                'button/font-size': '14px',
                'button/font-weight': '700',
                'button/line-height': '110%',
                'botton/font-family': 'Gilroy',
                'button/padding': '15px 18px 14px 20px',
                'button/width': 'fit-content',
                'button/border-radius': '10px',
                'button/margin': '10px 0px 80px'
            }
        }
    },
    H3_GOLD_1: {
        colorTag: 'GOLDEN',
        typographyTag: 'h5VariantSeven',
        properties: {
            phone: {
                'button/text-align': 'center',
                'button/padding-right': '3px'
            },
            tab: {
                'button/padding-right': '5px'
            },
            desktop: {
                'button/text-align': 'center',
                'button/padding-right': '5px',
                'button/border': 'none',
                'button/background': 'transparent',
                'button/cursor': 'pointer',
                'button/color': Colors.GOLDEN_1
            }
        },
    },
    FEATURE_PAGE_BUTTON_PRIMARY_1: {
        extends: '',
        properties: {
            phone: {
                'button/border': 'none',
                'button/outline': 'none',
                'button/text-decoration': 'underline',
                'button/border-radius': '0',
                'button/text-transform': 'none',
                'button/transition': 'all 0.1s ease 0s',
                'button/background-color': 'transparent',
                'button/color': '#00b899',
                'button/cursor': 'pointer',
                'button/width': 'auto',
                'button/letter-spacing': '0.45px',
                'button/padding': '0',
                'button/font-size': '16px',
                'button/font-weight': '700',
                'button/line-height': '110%',
                'button/font-family': 'Gilroy',
            },
            tab: {
                'button/font-size': '16px',
                'button/margin-top': '10px',
            },
            desktop: {
                'button/margin-top': '0',
                'button/font-size': '20px',
            }
        }
    },
    FEATURE_PAGE_BUTTON_PRIMARY_4: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY_1',
        properties: {
            phone: {
                'button/font-size': '20px',
                'button/font-weight': '500',
            },
            tab: {
                'button/font-size': '22px',
            },
            desktop: {
                'button/font-size': '28px',
            }
        }
    },
    CREDIT_CARD_PAGE_BUTTON_PRIMARY: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY',
        properties: {
            phone: {
                'button/font-size': '14px',
                'button/background': Colors.BROWN_GRADIENT_1,
                'button/border-radius': '20px',
                'button/font-weight': '600',
                'button/line-height': '16px',
                'button/box-shadow': `0px 2px 0px 0px ${Colors.BROWN}`,
                'button/color': Colors.GOLDEN_3,
                'button/width': '80%',
            },
            tab: {
                'button/font-size': '20px',
            },
            desktop: {
                'button/font-size': '24px',
            }
        }
    },
    FEATURE_PAGE_BUTTON_PRIMARY_5: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'button/padding': '24px',
            }
        }
    },
};

export default ButtonVarinatStyle;
