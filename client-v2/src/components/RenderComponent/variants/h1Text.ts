import Colors from '@/Themes/Colors';

const textVariantH1Style: any = {

    H1_GOLD_1: {
        extends: '',
        colorTag: '',
        typographyTag: 'h1VariantEight',
        properties: {
            phone: {
                'main/margin': '0px auto 26px',
                'main/background-color': Colors.GOLDEN_1,
                'main/background': Colors.GOLDEN_GRADIENT_1,
                'main/-webkit-background-clip': 'text',
                'main/-moz-background-clip': 'text',
                'main/-webkit-text-fill-color': 'transparent',
                'main/-moz-text-fill-color': 'transparent',
                'main/text-align': 'center'
            },
            tab: {
                'main/margin': '0px auto 24px',
                'main/text-align': 'center'
            },
            desktop: {
                'main/margin': '0px 0px 30px',
                'main/padding-left': '7.5%',
                'main/text-align': 'left'
            },
        }
    },
    H1_WHITE_1: {
        colorTag: 'WHITE',
        typographyTag: 'h1',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 4px'
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px 0px 30px'
            }
        },
    },
    H1_BLACK_1: {
        colorTag: 'MINE_SHAFT',
        typographyTag: 'h1',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 4px'
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px 0px 30px'
            }
        },
    },
    H1_BLACK_2: {
        colorTag: 'MINE_SHAFT',
        typographyTag: 'h1',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 4px'
            },
            desktop: {
                'main/text-align': 'left',
                'main/margin': '0px 0px 30px'
            }
        },
    },
    H1_WHITE_2: {
        colorTag: '',
        typographyTag: 'h1VariantNine',
        properties: {
            phone: {
                'main/color': Colors.WHITE_3,
                'main/margin': '8px 0px'
            },
            tab: {
            },
            desktop: {
            }
        },
    },
    H1_GREY_2: {
        colorTag: '',
        typographyTag: 'h1VariantNine',
        properties: {
            phone: {
                'main/color': Colors.GREY_2,
                'main/margin': '8px 0px'
            },
            tab: {
            },
            desktop: {
                'main/font-size': '40px !important',
                'main/font-weight': '600'
            }
        },
    },

};

export default textVariantH1Style;
