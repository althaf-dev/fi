import Colors from '@/Themes/Colors';

const textVariantStyle: any = {
    'H4VARIANTFOUR-GREY_3': {
        colorTag: 'GREY_3',
        typographyTag: 'h1',
        extends: '',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    'H4VARIANTFOUR-BLACK': {
        colorTag: 'BLACK',
        typographyTag: 'h1VariantSix',
        extends: '',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    'CARDTITLEVARIANTFIVE-MINE_SHAFT': {
        extends: '',
        colorTag: 'MINE_SHAFT',
        typographyTag: 'cardTitleVariantFive',
        properties: {
            phone: {
                'main/margin': '0px auto 20px',
            },
        }
    },
    CARDTITLEVARIANTFIVE_MINE_SHAFT_1: {
        extends: 'CARDTITLEVARIANTFIVE-MINE_SHAFT',
        typographyTag: 'cardTitleVariantFive',
        properties: {
            phone: {
                'main/text-align': 'center',
                'main/margin-bottom': '20px'
            },
        }
    },
    H1VARIANT_BLACK: {
        extends: 'CARDTITLEVARIANTFIVE-MINE_SHAFT',
        colorTag: 'BLACK',
        typographyTag: 'h1',
        properties: {
            phone: {
                'main/margin': '0px auto 20px',
            },
            tab: {
                'main/text-align': 'center',
            },
            desktop: {
                'main/text-align': 'left',
            },
        }
    },
    H5VARIANTNINE_BLACK_ACCOUNTS: {
        extends: 'FEATURE_PAGE_TEXT_TYPE_1',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
                'main/text-align': 'center',
                'main/padding': '5px 0px',
                'main/height': '115px'
            },
            tab: {
                'main/height': '190px'
            },
            desktop: {
                'main/padding': '30px',
                'main/display': 'flex',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/height': '200px',
                'main/width': '332px'
            },
        }
    },
    H5VARIANTNINE_BLACK: {
        extends: 'FEATURE_PAGE_TEXT_TYPE_1',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
                'main/text-align': 'center',
                'main/padding': '5px 0px',
            },
            tab: {
            },
            desktop: {
                'main/padding': '30px 0px',
                'main/display': 'flex',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/height': '200px'
            },
        }
    },
    H5VARIANTNINE_BLACK_LEFT: {
        extends: 'H5VARIANTNINE_BLACK',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding': '30px 0px',
                'main/display': 'flex',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'left',
                'main/justify-content': 'left',
                'main/height': '210px',
                'main/width': '332px',
            },
        }
    },
    H5VARIANTNINE_BLACK_LEFT_HIDDEN: {
        extends: 'H5VARIANTNINE_BLACK_LEFT',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding': '30px 0px',
                'main/height': '200px',
                'main/visibility': 'hidden'
            },
        }
    },
    H5VARIANTNINE_BLACK_LEFT_HIDDEN_DEPOSIT: {
        extends: 'H5VARIANTNINE_BLACK_LEFT',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding': '30px 0px',
                'main/height': 'unset',
                'main/visibility': 'hidden'
            },
        }
    },
    H5VARIANTNINE_BLACK_DEPOSIT: {
        extends: 'FEATURE_PAGE_TEXT_TYPE_1',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
                'main/text-align': 'center',
                'main/padding': '5px 0px',
            },
            tab: {
            },
            desktop: {
                'main/padding': '30px 0px',
                'main/display': 'flex',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/height': 'unset'
            },
        }
    },
    H5VARIANTNINE_BLACK_LEFT_DEPOSIT: {
        extends: 'H5VARIANTNINE_BLACK',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding': '30px 0px',
                'main/display': 'flex',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'left',
                'main/justify-content': 'left',
                'main/height': 'unset',
                'main/width': '332px',
            },
        }
    },
    VIEW_OPEN_ROLES: {
        colorTag: 'TUNDORA_2',
        typographyTag: 'h4VariantTwelve',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding-top': '50px',
            },
        }
    },
    PNORMALVARIANT_GREY_4: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '30px',
                'main/text-align': 'center'
            },
            tab: {
                'main/margin-bottom': '30px',
            }
        }
    },
    PNORMALVARIANT_GREY_4_1: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '30px'
            },
            tab: {
                'main/margin-bottom': '30px',
            }
        }
    },
    FEES_BREAKDOWN: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '30px',
                'main/text-align': 'center',
                'main/padding': '0px 20px'
            },
            tab: {
                'main/margin-bottom': '80px',
            }
        }
    },
    LABEL_GREY_7: {
        extends: '',
        colorTag: 'GREY_7',
        typographyTag: 'label',
        properties: {
            phone: {
                'main/display': 'block',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
                'main/display': 'none'
            }
        }
    },
    H5VARIANT_BLACK_1: {
        extends: '',
        colorTag: 'BLACK',
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
                'main/padding': '5px 0px',
                'main/text-align': 'center'
            },
            tab: {
            }
        }
    },
    TABLE_BORDER: {
        typographyTag: 'h5VariantFour',
        properties: {
            phone: {
                'main/width': '12px',
                'main/height': '1px',
                'main/background-color': 'rgb(206, 210, 214)',
                'main/margin': '0px 0px 10px',
                'main/display': 'block'
            },
            tab: {
            },
            desktop: {
                'main/display': 'none'
            }
        }
    },
    'pNormalVariant-GREY_3': {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '30px',
            },
            tab: {
                'main/margin-bottom': '0px',
            }
        }
    },
    PNORMALVARIANT_GREY_3_1: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '0px',
            },
            tab: {
                'main/margin-bottom': '0px',
            }
        }
    },
    'pNormalVariant-GREY_7': {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '10px',
                'main/text-align': 'center',
            },
            tab: {
                'main/text-align': 'start',
            }
        }
    },
    'pNormalVariant-GREY_5': {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'labelVariantEighteen',
        properties: {
            phone: {
                'main/margin': '0px',
            },
        }
    },
    PNORMAL_VARINT_GREY3_1: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '30px',
            },
            tab: {
                'main/margin-bottom': '0px',
            },
            desktop: {
                'main/margin': '20px 0px 80px'
            }
        }
    },
    h6VARIANT_GREY3: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'h6VariantOne',
        properties: {
            phone: {
                'main/margin-bottom': '30px',
                'main/font-size': '14px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin-bottom': '0px',
            },
            desktop: {
                'main/line-height': '140% !important',
                'main/text-align': 'left',
            }
        }
    },
    h6VARIANT_GREY3_1: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'h6VariantOne',
        properties: {
            phone: {
                'main/margin': '30px 0px',
                'main/font-size': '14px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px',
            },
            desktop: {
                'main/line-height': '140% !important',
                'main/text-align': 'left',
                'main/margin': '0px',
            }
        }
    },
    h6VARIANT_GREY3_2: {
        extends: '',
        colorTag: 'GREY_3',
        typographyTag: 'h6VariantOne',
        properties: {
            phone: {
                'main/margin-bottom': '30px',
                'main/font-size': '14px',
                'main/text-align': 'center',
                'main/line-height': '120% !important',
            },
            tab: {
                'main/margin-bottom': '0px',
            },
            desktop: {
                'main/line-height': '140% !important',
                'main/text-align': 'left',
            }
        }
    },
    'buttonVariantThree-FOREST_GREEN': {
        extends: '',
        colorTag: 'FOREST_GREEN',
        typographyTag: 'buttonVariantThree',
        properties: {
            phone: {
                'main/margin-top': '20px',
                'main/margin-bottom': '30px',
            },
            tab: {
                'main/margin-bottom': '0px',
            }
        }
    },
    'pNormalVariant-GREY_4': {
        extends: '',
        colorTag: 'GREEN_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin': '30px auto',
                'main/text-align': 'center',

            },
            tab: {
                'main/margin': '50px auto',
            }
        }
    },
    'pNormalVariant-WHITE': {
        extends: '',
        colorTag: 'WHITE',
        typographyTag: 'labelVariantNineteen',
        properties: {
            phone: {
                'main/margin': '0px',
            },
        }
    },
    PSMALLVARIANTEIGHT__SKY_BLUE_TAG: {
        extends: '',
        colorTag: 'SKY_BLUE',
        typographyTag: 'pSmallVariantEight',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/border-radius': '20px',
                'main/padding': '4px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 12px',
                'main/display': 'inline-block',
            },
            tab: {
                'main/padding': '8px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/width': 'max-content',
                'main/margin': '0px 0px 30px',
                'main/display': 'inline-block',
            },
        }
    },
    PSMALLVARIANTEIGHT__VIOLET_TAG: {
        extends: '',
        colorTag: 'VIOLET',
        typographyTag: 'pSmallVariantEight',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/border-radius': '20px',
                'main/padding': '4px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 12px',
                'main/display': 'inline-block',
            },
            tab: {
                'main/padding': '8px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/width': 'max-content',
                'main/margin': '0px 0px 30px',
                'main/display': 'inline-block',
            },
        }
    },
    PSMALLVARIANTEIGHT__GREEN_TAG: {
        colorTag: 'FI_GREEN',
        typographyTag: 'pSmallVariantEight',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/border-radius': '20px',
                'main/padding': '4px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 12px',
                'main/display': 'inline-block',
            },
            tab: {
                'main/padding': '8px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/width': 'max-content',
                'main/margin': '0px 0px 30px',
                'main/display': 'inline-block',
            },
        }
    },
    PSMALLVARIANTEIGHT_PATTERNS_BLUE_TWO: {
        colorTag: 'PATTERNS_BLUE_TWO',
        typographyTag: 'pSmallVariantEight',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/border-radius': '20px',
                'main/padding': '4px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 12px',
                'main/display': 'inline-block',
            },
            tab: {
                'main/padding': '8px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/width': 'max-content',
                'main/margin': '0px 0px 30px',
                'main/display': 'inline-block',
            },
        }
    },
    EMPTY_TEXT: {
        extends: '',
        colorTag: '',
        typographyTag: 'pSmallVariantEight',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    H1_GOLD: {
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
    H2_GOLD: {
        extends: '',
        colorTag: '',
        typographyTag: 'cardTitleVariantTwo_1',
        properties: {
            phone: {
                'main/margin': '0px auto 40px',
                'main/padding-top': '40px',
                'main/background-color': Colors.GOLDEN_1,
                'main/background': Colors.GOLDEN_GRADIENT_1,
                'main/-webkit-background-clip': 'text',
                'main/-moz-background-clip': 'text',
                'main/-webkit-text-fill-color': 'transparent',
                'main/-moz-text-fill-color': 'transparent',
                'main/text-align': 'left',
                'main/width': '330px',
                'main/height': 'auto'
            },
            tab: {
                'main/margin': '0px auto 24px',
                'main/text-align': 'left'
            },
            desktop: {
                'main/margin': '0px 0px 50px',
                'main/text-align': 'center',
                'main/width': '100%',
                'main/height': 'auto',
                'main/-webkit-text-fill-color': Colors.WHITE
            },
        }
    },
    H2_GOLD_1: {
        extends: '',
        colorTag: '',
        typographyTag: 'cardTitleVariantTwo_1',
        properties: {
            phone: {
                'main/margin': '0px auto 88px',
                'main/padding-top': '40px',
                'main/background-color': Colors.GOLDEN_1,
                'main/background': Colors.GOLDEN_GRADIENT_1,
                'main/-webkit-background-clip': 'text',
                'main/-moz-background-clip': 'text',
                'main/-webkit-text-fill-color': 'transparent',
                'main/-moz-text-fill-color': 'transparent',
                'main/text-align': 'left',
                'main/width': '320px'
            },
            tab: {
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/margin': '0px 0px 30px',
                'main/color': Colors.WHITE,
                'main/text-align': 'center',
                'main/width': 'auto',
                'main/-webkit-text-fill-color': Colors.WHITE
            },
        }
    },
    H1_GOLD_1: {
        extends: '',
        colorTag: '',
        typographyTag: 'h1VariantTwelve',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/padding-top': '40px',
                'main/background-color': Colors.GOLDEN_1,
                'main/background': Colors.GOLDEN_GRADIENT_1,
                'main/-webkit-background-clip': 'text',
                'main/-moz-background-clip': 'text',
                'main/-webkit-text-fill-color': 'transparent',
                'main/-moz-text-fill-color': 'transparent',
                'main/text-align': 'left'
            },
            tab: {
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/margin': '0px 0px 30px',
                'main/color': Colors.WHITE,
                'main/-webkit-text-fill-color': Colors.WHITE,
                'main/animation': 'none',
                'main/transform': 'translateY(0)',
            },
        }
    },
    H1_GOLD_4: {
        extends: 'H1_GOLD_1',
        colorTag: '',
        typographyTag: 'h1VariantTen',
        properties: {
            phone: {
                'main/text-align': 'center',
                'main/color': Colors.GOLDEN_1,
                'main/margin': '12px auto'
            },
        }
    },
    H3_GOLD: {
        colorTag: 'GOLDEN',
        typographyTag: 'h3VariantThree',
        properties: {
            phone: {
                'main/margin': '0px auto 32px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 4px',
                'main/text-align': 'center'
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px 0px 30px'
            }
        },
    },
    H3_GOLD_2: {
        colorTag: 'GOLDEN',
        typographyTag: 'h3VariantFourteen',
        properties: {
            phone: {
                'main/margin': '0px auto 20px',
                'main/text-align': 'left',
                'main/color': Colors.GOLDEN_4
            },
            tab: {
                'main/margin': '0px auto 20px'
            },
            desktop: {
                'main/text-align': 'left',
                'main/margin': '0px 0px 30px'
            }
        },
    },
    H3_GOLD_3: {
        extends: 'H3_GOLD_2',
        colorTag: 'GOLDEN',
        typographyTag: 'h3VariantFourteen',
        properties: {
            phone: {
                'main/text-decoration': 'underline',
                'main/color': Colors.GOLDEN_4,
                'main/text-align': 'left',
                'main/cursor': 'pointer',
            },
            tab: {
            },
            desktop: {
            }
        },
    },
    H3_GOLD_DYNAMIC: {
        colorTag: 'GOLDEN',
        extends: 'H3_GOLD_2',
        typographyTag: 'h3VariantFifteen',
        properties: {
            phone: {
                'main/color': Colors.GOLDEN_4,
                'main/margin-bottom': '20px'
            },
            tab: {
            },
            desktop: {
                'main/color': Colors.WHITE,
                'main/text-align': 'center',
                'main/margin-bottom': '50px'
            }
        },
    },
    H3_WHITE: {
        colorTag: 'WHITE',
        typographyTag: 'h3VariantThirteen',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'left'
            },
            tab: {
                'main/margin': '0px auto 20px'
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px 0px 30px',
            }
        },
    },
    H3_WHITE_1: {
        colorTag: 'WHITE',
        extends: 'H3_WHITE',
        typographyTag: 'h3VariantThirteen',
        properties: {
            phone: {
                'main/margin': '0px auto 20px',
                'main/text-align': 'left'
            },
            tab: {
                'main/margin': '0px auto 20px'
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px 0px 30px',
            }
        },
    },
    H3_WHITE_2: {
        colorTag: 'WHITE',
        typographyTag: 'h3VariantThirteen',
        properties: {
            phone: {
                'main/margin': '0px auto 20px',
                'main/text-align': 'left'
            },
            tab: {
                'main/margin': '0px auto 20px'
            },
            desktop: {
                'main/margin': '0px 0px 30px',
            }
        },
    },
    OTHER_PRODUCTS_TEXT: {
        colorTag: 'WHITE',
        typographyTag: 'h3VariantSeventeen',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'left',
                'main/padding': '15px 0px 0px 20px',
                'main/font-weight': '400',
                'main/font-size': '14px'
            },
            tab: {
                'main/margin': '0px auto 20px'
            },
            desktop: {
                'main/margin': '0px',
                'main/padding': '20px 50px 20px 50px',
                'main/font-size': '36px'
            }
        },
    },
    OTHER_PRODUCTS_CARD: {
        extends: '',
        properties: {
            phone: {
                'main/width': 'auto',
                'main/border-radius': '12px',
                'main/background': Colors.BLACK_GRADIENT,
                'main/margin-right': '20px',
                'main/height': '175px'
            },
            tab: {
            },
            desktop: {
                'main/width': 'auto',
                'main/height': '600px',
                'main/border-radius': '42.283px',
                'main/background': Colors.BLACK_GRADIENT
            }
        }
    },
    H4_GOLD: {
        colorTag: 'GOLDEN',
        typographyTag: 'h4VariantNine',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'center',
                'main/color': Colors.GOLDEN_2,
                'main/background': Colors.BROWN_GRADIENT_4,
                'main/width': '50%',
                'main/border-radius': '12px',
                'main/padding': '10px'
            },
            tab: {
                'main/margin': '0px auto 4px'
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px 0px 30px',
                'main/display': 'none'
            }
        },
    },
    H6_WHITE_2: {
        colorTag: 'WHITE_2',
        typographyTag: 'h6',
        properties: {
            phone: {
                'main/color': Colors.WHITE_2,
                'main/padding-right': '8px'
            },
            tab: {
            },
            desktop: {
            }
        },
    },
    H6_WHITE_3: {
        colorTag: 'WHITE_2',
        typographyTag: 'labelVariantSeven',
        properties: {
            phone: {
                'main/color': Colors.WHITE_2,
                'main/margin-top': '5px'
            },
            tab: {
            },
            desktop: {
                'main/padding-bottom': '100px'
            }
        },
    },
    H1_WHITE: {
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
    H1_CHARCOAL_GREY: {
        colorTag: 'CHARCOAL_GREY',
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
    H11_WHITE: {
        colorTag: 'WHITE',
        typographyTag: 'h3VariantEleven',
        properties: {
            phone: {
                'main/margin': '0px auto 32px',
                'main/text-align': 'center',
                'main/opacity': '0'
            },
            tab: {
                'main/margin': '0px auto 30px',
                'main/text-align': 'center',
            },
            desktop: {
                'main/text-align': 'left',
                'main/margin': '0px 0px 30px',
                'main/padding-left': '7.5%',
                'main/animation': 'none',
                'main/opacity': '1'
            }
        },
    },
    H1_WHITE_3: {
        colorTag: 'WHITE',
        typographyTag: 'h1VariantThirteen',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
            }
        },
    },
    H6_GREY_1: {
        colorTag: 'GREY_3',
        typographyTag: 'h6VariantThree',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
            }
        },
    },
    H3_HONEY: {
        colorTag: '',
        typographyTag: 'h3VariantTen',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
                'main/padding-left': '7.5%',
                'main/color': Colors.GOLDEN_2,
                'main/opacity': '0'
            },
            tab: {
                'main/margin': '0px auto 4px',
                'main/text-align': 'center',
            },
            desktop: {
                'main/margin': '0px 0px 60px',
                'main/text-align': 'left',
                'main/animation': 'none',
                'main/opacity': '1'
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
    H4_WHITE: {
        colorTag: '',
        typographyTag: 'h5VariantEight',
        properties: {
            phone: {
                'main/color': Colors.WHITE_3,
            },
            tab: {
            },
            desktop: {
            }
        },
    },
    H6_ORANGE_BACKGROUND: {
        colorTag: '',
        typographyTag: 'h6VariantTwo',
        properties: {
            phone: {
                'main/border-radius': '12px',
                'main/padding': '4px 8px',
                'main/background': Colors.ORANGE,
                'main/color': Colors.BLACK_1,
                'main/width': 'fit-content'
            },
            tab: {
            },
            desktop: {
            }
        },
    },
    H2_CARD_TITLE: {
        colorTag: '',
        typographyTag: 'h2VariantTen',
        properties: {
            phone: {
                'main/color': Colors.WHITE,
                'main/margin': '0px 0px 16px 0px'
            },
            tab: {
            },
            desktop: {
                'main/color': Colors.WHITE,
                'main/display': 'block',
                'main/padding-bottom': '32px'
            }
        },
    },
    H2_CARD_SUB_TITLE: {
        colorTag: '',
        typographyTag: 'h4VariantTen',
        properties: {
            phone: {
                'main/color': Colors.WHITE,
                'main/padding-bottom': '30px'
            },
            tab: {
            },
            desktop: {
                'main/color': Colors.WHITE,
                'main/display': 'block',
                'main/padding-bottom': '15px'
            }
        },
    },
    H3_TEXT: {
        colorTag: '',
        typographyTag: 'h3VariantTwelve',
        properties: {
            phone: {
                'main/color': Colors.WHITE,
            },
            tab: {
            },
            desktop: {
                'main/color': Colors.WHITE,
                'main/display': 'block',
                'main/padding-top': '15px'
            }
        },
    },
    CUSTOM_TEXT_FEATURE_PAGE_POWEREDBY: {
        colorTag: 'SUVA_GREY',
        typographyTag: 'subText',
        properties: {
            phone: {
                'main/margin': '0 auto 3px'
            },
            tab: {
                'main/margin': '0 auto 12px'
            },
            desktop: {
            }
        },
    },
    CUSTOM_TEXT_FEATURE_PAGE_POWEREDBY_1: {
        colorTag: 'SUVA_GREY',
        typographyTag: 'h4VariantFour',
        properties: {
            phone: {
                'main/margin': '0px 6px'
            },
            tab: {
                'main/margin': '0px 10px 10px'
            },
            desktop: {
                'main/margin': '4px 10px 0px'
            }
        },
    },
    CUSTOM_TEXT_FEATURE_PAGE_POWEREDBY_2: {
        colorTag: 'SUVA_GREY',
        typographyTag: 'h4VariantEleven',
        properties: {
            phone: {
                'main/margin': '0 auto 3px'
            },
            tab: {
                'main/margin': '0 auto 2px'
            },
            desktop: {
                'main/margin': '0 auto 12px'
            }
        },
    },
    CUSTOM_TEXT_FEATURE_PAGE_POWEREDBY_3: {
        extends: 'CUSTOM_TEXT_FEATURE_PAGE_POWEREDBY',
        colorTag: 'SUVA_GREY',
        typographyTag: 'subText',
        properties: {
            phone: {
                'main/margin': '0px auto 12px'
            }
        },
    },
    P_SILVER_2: {
        colorTag: 'SILVER_2',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 36px',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px auto 30px',
            }
        }
    },
    PSMALLVARIANTONE_GREY_3: {
        colorTag: 'GREY_3',
        typographyTag: 'pSmallVariantOne',
        properties: {
            phone: {
                'main/text-align': 'left',
                'main/margin': '5px auto 20px',
            },
            tab: {
                'main/margin': '4px auto 10px',
            },
            desktop: {
                'main/margin': '8px auto 20px',
            }
        }
    },
    H5VARIANTTWO_CHARCOAL_GREY: {
        colorTag: 'CHARCOAL_GREY',
        typographyTag: 'h5VariantTwo',
        properties: {
            phone: {
                'main/text-align': 'left',
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    P_GREY_3: {
        extends: 'P_SILVER_2',
        colorTag: 'GREY_3',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px auto',
            }
        }
    },
    P_TUNDORA_2: {
        extends: 'P_TUNDORA_2',
        colorTag: 'TUNDORA_2',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px auto',
            }
        }
    },
    P_SUVA_GREY: {
        extends: 'P_SUVA_GREY',
        colorTag: 'SUVA_GREY',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto',
            },
            desktop: {
                'main/text-align': 'left',
                'main/margin': '0px auto'
            }
        }
    },
    P_SILVER_3: {
        extends: 'P_SILVER_2',
        colorTag: 'SILVER_2',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px auto',
            }
        }
    },
    H1_HONEY_1: {
        colorTag: 'HONEY_1',
        typographyTag: 'h3VariantTen',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 36px',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px auto 30px',
            }
        }
    },
    feature_cards_innerwrapper_card_text: {
        colorTag: 'TUNDORA_2',
        typographyTag: 'h3VariantTwo',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'center',
            }
        }
    },
    CAREERS_CARDS_INNERWRAPPER_CARD_TEXT: {
        colorTag: 'TUNDORA_2',
        typographyTag: 'h3VariantTwo',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'left',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
            }
        }
    },
    CONTACT_CARD_TITLE: {
        colorTag: 'MINE_SHAFT',
        typographyTag: 'h2VariantThree',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/text-align': 'left',
                'main/padding': '0px 30px 16px',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px 40px 20px',
            }
        }
    },
    CAREERS_BANNER_TITLE: {
        extends: 'CONTACT_CARD_TITLE',
        colorTag: 'FOREST_GREEN',
        typographyTag: 'h2VariantThree',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/padding': '0px 30px 16px',
            },
            tab: {
            },
            desktop: {
                'main/padding': '0px 40px 20px',
            }
        }
    },
    TEAM_CARD_TITLE: {
        extends: 'CONTACT_CARD_TITLE',
        colorTag: 'MINE_SHAFT',
        typographyTag: 'h2VariantThree',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/text-align': 'center',
                'main/padding': '0px 30px 16px',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px',
            }
        }
    },
    TEAM_CARD_TITLE_MOB: {
        extends: 'CONTACT_CARD_TITLE',
        colorTag: 'MINE_SHAFT',
        typographyTag: 'h2VariantThree',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/text-align': 'center',
                'main/padding': '0px 30px 30px',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px',
            }
        }
    },
    CONTACT_BANNER_SUBTITILE: {
        colorTag: 'GREY_3',
        typographyTag: 'posterCardTitle',
        properties: {
            phone: {
                'main/margin': '20px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '40px auto 12px',
            }
        }
    },
    CONTACT_BANNER_TITILE: {
        colorTag: 'WHITE',
        typographyTag: 'posterCardDescription',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'center',
            }
        }
    },
    CONTACT_CARD_DESCRIPTION: {
        colorTag: 'GREY_3',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'left',
                'main/padding': '0px 30px 30px',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px 40px 40px',
            }
        }
    },
    CAREERS_CARD_DESCRIPTION: {
        extends: 'CONTACT_CARD_DESCRIPTION',
        colorTag: 'GREY_3',
        typographyTag: 'buttonVariantFiveInter',
        properties: {
            phone: {
                'main/text-align': 'left',
                'main/padding': '0px 30px 30px',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px 40px 40px',
            }
        }
    },
    TEAM_CARD_DESCRIPTION: {
        extends: 'CONTACT_CARD_DESCRIPTION',
        colorTag: 'GREY_3',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'left',
                'main/padding': '0px 30px 30px',
            },
            tab: {
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px',
            }
        }
    },
    GRID_CARD_DESCRIPTION: {
        colorTag: 'GREY_3',
        typographyTag: 'h1VariantFour',
        properties: {
            phone: {
                'main/padding': '63px 40px',
                'main/background-color': 'rgb(58, 58, 58)',
                'main/color': 'rgb(209, 218, 241)'
            },
            tab: {
            },
            desktop: {
                'main/padding': '98px 144px 98px 80px',
            }
        }
    },
    GRID_CARD_DESCRIPTION_2: {
        colorTag: 'GREY_3',
        typographyTag: 'h4VariantThree',
        properties: {
            phone: {
                'main/padding': '63px 40px',
                'main/color': 'rgb(209, 218, 241)'
            },
            tab: {
            },
            desktop: {
                'main/padding': '98px 144px 98px 80px',
            }
        }
    },
    GRID_CARD_DESCRIPTION_3: {
        colorTag: 'CHARCOAL_GREY',
        typographyTag: 'h4VariantThree',
        properties: {
            phone: {
                'main/margin': '30px auto 20px',
            },
            tab: {
                'main/margin': '0px auto 26px',
            },
            desktop: {
                'main/padding': '0px',
            }
        }
    },
    GRID_CARD_DESCRIPTION_4: {
        colorTag: 'GREY_2',
        typographyTag: 'button',
        properties: {
            phone: {
                'main/padding': '0px',
            },
            tab: {
            },
            desktop: {
                'main/padding': '0px',
            }
        }
    },
    TEAM_CARD_COMPANY_TAG: {
        colorTag: 'GREY_3',
        typographyTag: 'pSmall',
        properties: {
            phone: {
                'main/margin': '0px auto 0px',
                'main/text-align': 'left',
                'main/padding': '0px',
            },
            tab: {
                'main/padding': '0px',
            },
            desktop: {
                'main/text-align': 'left',
                'main/padding': '0px',
            }
        }
    },
    FEATURE_PAGE_TEXT_TYPE_1: {
        colorTag: 'MINE_SHAFT',
        typographyTag: 'cardTitleVariantFive',
        properties: {
            phone: {
                'main/margin': '0px auto 20px',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    FEATURE_PAGE_FAQ_TEXT: {
        EXTENDS: 'FEATURE_PAGE_TEXT_TYPE_1',
        colorTag: 'MINE_SHAFT',
        typographyTag: 'cardTitleVariantFive',
        properties: {
            phone: {
                'main/margin': '0px auto 40px',
            },
            tab: {
                'main/margin': '0px auto 60px',

            },
            desktop: {
                'main/margin': '0px auto 80px',

            }
        }
    },
    FEATURE_PAGE_TEXT_TYPE_2: {
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto 36px',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '0px auto 30px',
            }
        }
    },
    SCROLL_TO_VIEW: {
        colorTag: 'FOREST_GREEN',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin': '0px auto 12px',
                'main/text-align': 'center',
                'main/display': 'none'
            },
            tab: {
                'main/margin': '0px auto 36px',
            },
            desktop: {
                'main/text-align': 'center',
                'main/margin': '40px 140px 0px 0px',
                'main/position': 'absolute',
                'main/right': '12%'
            }
        }
    },
    FEATURE_PAGE_TEXT_TYPE_3: {
        colorTag: 'MINE_SHAFT',
        typographyTag: 'cardTitleVariantFive',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
                'main/margin-bottom': '20px',
            }
        }
    },
    FEATURE_PAGE_TEXT_TYPE_4: {
        colorTag: 'MINE_SHAFT',
        typographyTag: 'cardTitleVariantFive',
        properties: {
            phone: {
                'main/margin': '0px auto 50px',
                'main/text-align': 'center',
            },
            tab: {
            },
            desktop: {
                'main/margin-bottom': '60px',
            }
        }
    },
    DESCLAIMER_TEXT: {
        colorTag: 'SUVA_GREY',
        typographyTag: 'h4VariantFour',
        properties: {
            phone: {
                'main/margin': '50px auto 0',
                'main/padding': '0 20px',
                'main/text-align': 'center'
            },
            tab: {
                'main/margin': '60px auto 0',
            },
            desktop: {
                'main/margin': '80px auto 0',
            }
        }
    },
    DESCLAIMER_TEXT_V2: {
        colorTag: 'SILVER_2',
        typographyTag: 'h4VariantFour',
        properties: {
            phone: {
                'main/margin': '20px auto',
                'main/text-align': 'center'
            },
            tab: {
                'main/margin': '15px auto 0',
                'main/text-align': 'start'
            },
            desktop: {
                'main/margin': '20px auto 0',
            }
        }
    },
    DESCLAIMER_TEXT_V3: {
        extends: 'DESCLAIMER_TEXT',
        colorTag: 'SILVER_2',
        typographyTag: 'h4VariantFour',
        properties: {
            phone: {
                'main/margin': '20px auto 0',
            },
            tab: {
                'main/margin': '30px auto 0',
            },
            desktop: {
                'main/margin': '40px auto 0',
            }
        }
    },
    DESCLAIMER_TEXT_PORCELAIN: {
        extends: 'DESCLAIMER_TEXT',
        colorTag: '',
        typographyTag: 'h6VariantFour',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/color': Colors.STEEL,
            },
            tab: {
                'main/margin': '0px',
            },
            desktop: {
                'main/margin': '0px',
                'main/width': '1086px'
            }
        }
    },
    CARD_TEXT_TUNDORA_2: {
        extends: 'DESCLAIMER_TEXT',
        colorTag: 'TUNDORA_2',
        typographyTag: 'h5VariantOne',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/color': Colors.TUNDORA_2,
            },
            tab: {
                'main/margin': '0px',
            },
            desktop: {
                'main/margin': '0px',
            }
        }
    },
    CARD_TEXT_LIGHT_YELLOW: {
        colorTag: 'LIGHT_YELLOW',
        typographyTag: 'pSmallVariantEight',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/border-radius': '20px',
                'main/padding': '4px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 12px',
                'main/display': 'inline-block',
            },
            tab: {
                'main/padding': '8px 16px',
                'main/width': 'max-content',
                'main/margin': '0px auto 24px'
            },
            desktop: {
                'main/width': 'max-content',
                'main/margin': '0px 0px 30px',
                'main/display': 'inline-block',
            },
        }
    },
    footer_logo_text: {
        extends: '',
        colorTag: 'Black',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/text-align': 'center',
                'main/margin': ' 0.5rem 0',
            },
            tab: {
            },
            desktop: {
                'main/margin': ' 1rem 0',
            }
        }
    },
    FOOTER_LOGO_TEXT_1: {
        extends: 'footer_logo_text',
        colorTag: 'Black',
        typographyTag: 'p5VariantOne',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    HEADING_TEXT: {
        colorTag: '',
        typographyTag: 'h1VariantEleven',
        properties: {
            phone: {
                'main/text-align': 'start',
                'main/color': Colors.BROWN,
                'main/width': '320px',
                'main/margin': '0px auto',
            },
            tab: {
                'main/margin': '35px auto',
                'main/width': 'auto',
            },
            desktop: {
                'main/margin': '39px  auto 20px auto',
                'main/text-align': 'center',
                'main/color': '#FFFFFF',
                'main/width': 'auto',
            }
        }
    },
    HEADING_TEXT_2: {
        colorTag: '',
        typographyTag: 'h2',
        properties: {
            phone: {
                'main/margin': '30px auto',
                'main/text-align': 'center',
                'main/color': Colors.BROWN
            },
            tab: {
                'main/margin': '35px auto',
            },
            desktop: {
                'main/margin': '39px  auto 79px auto',
                'main/text-align': 'center',
                'main/color': '#FFFFFF'
            }
        }
    },
    HEADING_TEXT_3: {
        colorTag: '',
        typographyTag: 'h2',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/text-align': 'center',
                'main/color': Colors.BROWN,
                'main/padding-bottom': '30px',
                'main/padding-top': '50px'
            },
            tab: {
                'main/margin': '0px',
            },
            desktop: {
                'main/margin': '0px',
                'main/text-align': 'center',
                'main/color': '#FFFFFF',
                'main/padding-top': '100px',
                'main/padding-bottom': '50px'
            }
        }
    },
    OTHER_DETAILS: {
        colorTag: '',
        typographyTag: 'h3VariantSixteen',
        properties: {
            phone: {
                'main/margin': '0px',
                'main/padding-bottom': '0px',
                'main/padding-right': '5px',
                'main/text-align': 'center',
                'main/color': Colors.GOLDEN_4,
                'main/text-decoration': 'underline'
            },
            tab: {
                'main/margin': '35px auto',
            },
            desktop: {
                'main/margin': '0px',
                'main/padding': '0px',
                'main/text-align': 'center',
                'main/color': Colors.GOLDEN_4,
                'main/text-decoration': 'underline',
                'main/padding-right': '7px',
            }
        }
    },
    ROUNDED_BACKGROUND_TEXT: {
        typographyTag: 'h2',
        properties: {
            phone: {
                'main/background': 'rgb(247, 249, 250)',
                'main/border-radius': '60px',
                'main/padding': '24px 48px',
                'main/width': 'max-content',
                'main/color': Colors.FOREST_GREEN,
                'main/margin-bottom': '16px'
            },
            tab: {
            },
            desktop: {
                'main/background': 'rgb(247, 249, 250)',
                'main/border-radius': '60px',
                'main/padding': '24px 48px',
                'main/width': 'max-content',
                'main/color': Colors.FOREST_GREEN,
                'main/margin-bottom': '40px'
            }
        }
    },
    ELIGIBILITY: {
        typographyTag: 'cardTitleVariantThree',
        properties: {
            phone: {
                'main/color': Colors.CHARCOAL_GREY,
                'main/margin-bottom': '20px'
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    US_STOCK_TEXT: {
        colorTag: '',
        typographyTag: 'h1VariantFourteen',
        properties: {
            phone: {
                'main/opacity': '0.2',
                'main/color': Colors.FOREST_GREEN,
                'main/font-style': 'normal'
            },
            tab: {
            },
            desktop: {

            }
        }
    },
    NUMBERED_TEXT: {
        colorTag: '',
        typographyTag: 'h1VariantFourteen',
        properties: {
            phone: {
                'main/opacity': '0.2',
                'main/color': Colors.FOREST_GREEN,
                'main/font-style': 'normal',
                'main/position': 'relative',
                'main/left': '30px',
            },
            tab: {
            },
            desktop: {

            }
        }
    },
    'pNormalVariant-GREY_6': {
        extends: 'pNormalVariant-GREY_3',
        colorTag: 'GREY_3',
        typographyTag: 'pNormalVariant',
        properties: {
            phone: {
                'main/margin-bottom': '0px',
            },
            tab: {
            }
        }
    },

    FEATURE_TEXT_2_WITH_MARGIN: {
        colorTag: 'GREY_3',
        extends: 'FEATURE_PAGE_TEXT_TYPE_2',
        typographyTag: 'pNormalVariant',
        properties: {
            desktop: {
                'main/margin-top': '10px'
            },
            tab: {
                'main/margin-top': '10px'
            },
            phone: {
                'main/margin-top': '10px'
            }
        }
    },
    CARD_TAG_TEXT: {
        extends: '',
        colorTag: 'GREY_2',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto',
            },
            desktop: {
                'main/text-align': 'left',
                'main/margin': '0px auto',
                'main/font-size': '16px !important',
                'main/font-weight': '700 !important',
                'main/font-family': 'Gilroy !important',
                'main/background': 'white',
                'main/padding': '10px 16px',
                'main/border-radius': '5px',
                'main/display': 'inline-block'
            }
        }
    },
    CARD_HEADING: {
        extends: '',
        colorTag: 'GREY_2',
        typographyTag: 'p',
        properties: {
            phone: {
                'main/margin': '0px auto',
                'main/text-align': 'center',
            },
            tab: {
                'main/margin': '0px auto',
            },
            desktop: {
                'main/text-align': 'left',
                'main/margin': '0px auto',
                'main/font-size': '40px !important',
                'main/font-weight': '700 !important',
                'main/font-family': 'Gilroy !important',
                'main/background': 'white',
                'main/padding': '10px 16px',
                'main/border-radius': '5px',
                'main/display': 'inline-block'
            }
        }
    },

};

export default textVariantStyle;
