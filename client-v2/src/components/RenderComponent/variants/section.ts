/* eslint-disable quote-props */
import Colors from '@/Themes/Colors';

const sectionVariantStyle: any = {
    BANNER__DARK_GREY: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.DARK_GREY,
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'justify-content': 'center'
            },
        }
    },
    BANNER__LIGHT_YELLOW: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.LIGHT_YELLOW,
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'justify-content': 'center'
            },
        }
    },
    ABOUT_INFO_SECTION: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.CHALK_GREY,
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'justify-content': 'center'
            },
        }
    },
    BANNER__BLACK: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.BLACK,
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'justify-content': 'center'
            },
        }
    },
    BANNER__GOLDEN_WRAPPER: {
        properties: {
            phone: {
                'main/background-image': 'transparent',
            },
            tab: {
            },
            desktop: {
                'main/background-image': 'transparent',
            },
        }
    },
    BANNER__GOLDEN_SECONDARY: {
        properties: {
            phone: {
                'main/background-image': 'transparent',
            },
            tab: {
            },
            desktop: {
                'main/background-image': 'transparent',
            },
        }
    },
    BANNER__GOLDEN_WRAPPER_CONTAINER: {
        properties: {
            phone: {
                'main/background-image': 'transparent',
            },
            tab: {
            },
            desktop: {
                'main/background-image': 'transparent',
                'main/margin': '0 auto',
                'main/max-width': '1440px'
            },
        }
    },
    BANNER__GOLDEN: {
        extends: '',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/display': 'flex',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/padding': '0px 35px',
                'main/max-width': '1440px',
                'main/margin': 'auto'
            },
        }
    },
    CAROUSEL_BANNER__GOLDEN: {
        extends: 'BANNER__GOLDEN',
        properties: {
            phone: {
                'main/background-image': 'transparent',
            },
            tab: {
            },
            desktop: {
                'main/background-image': 'transparent',
                'main/max-width': 'auto',
                'main/margin': 'auto',
                'main/display': 'flex',
                'main/flex-direction': 'column'
            },
        }
    },
    BANNER__GOLDEN_1: {
        extends: 'BANNER__GOLDEN',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/flex-direction': 'column',
                'main/padding': '0px 35px',
            },
        }
    },
    BANNER__GOLDEN_2: {
        extends: 'BANNER__GOLDEN',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/flex-direction': 'column',
                'main/padding': '0px',
            },
        }
    },
    BANNER__GOLDEN_PADDING: {
        extends: '',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column',
                'main/padding': '0px 30px'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'main/max-width': '1440px',
                'main/margin': 'auto'
            },
        }
    },
    BANNER__FI_GREEN: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.FI_GREEN,
                'main/height': 'auto',
                'main/width': '100%',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/flex-direction': 'row',
                'justify-content': 'center',
                'main/margin-bottom': '60px'
            },
        }
    },
    BANNER__FI_LIGHT_BLUE: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.FI_LIGHT_BLUE,
                'main/height': 'auto',
                'main/width': '100%',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/flex-direction': 'row',
                'justify-content': 'center'
            },
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/justify-content': 'center',
                'main/width': '1290px',
                'main/margin': '40px 0px'
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    FEATURE_PAGE_CARDS: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/justify-content': 'center',
                'main/-webkit-box-pack': 'justify',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/box-sizing': 'border-box',
                'main/flex-flow': 'column wrap',
                'main/padding': '60px 0px 0px'
            },
            tab: {
                'main/max-width': '768px',
            },
            desktop: {
                'main/max-width': '100%',
            },
        }
    },
    FEATURE_PAGE_CARDS_1: {
        extends: 'FEATURE_PAGE_CARDS',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding': '120px 0px 0px'
            }
        }
    },
    FEATURE_PAGE_CARDS_2: {
        extends: ' FEATURE_PAGE_CARDS',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/margin-top': '50px',
                'main/gap': '2rem',
                'main/flex-direction': 'Column',
            },
            tab: {
                'main/margin-top': '100px',
            },
            desktop: {
                'main/margin-top': '150px',
            },
        }
    },
    FEATURE_PAGE_BODY_CONTAINER: {
        extends: 'display__Column_CENTER',
        properties: {
            phone: {
                'main/max-width': '1440px',
                'main/margin': 'auto',
                'main/padding-bottom': '56px'
            },
            tab: {
                'main/padding-bottom': '100px'
            },
            desktop: {
                'main/padding-bottom': '180px'
            },
        }
    },
    FEATURE_PAGE_TEXT_TYPE_1: {
        extends: '',
        properties: {
            phone: {
                'main/margin': '50px auto 0px',
                'main/padding': '0px'
            },
            tab: {
                'main/margin': '60px auto 0px',
            },
            desktop: {
                'main/margin': '80px auto 0px',
                'main/max-width': '1150px'
            }
        }
    },
    WIN_REWARDS: {
        extends: '',
        properties: {
            phone: {
                'main/margin': '50px auto 0px',
                'main/padding': '0px'
            },
            tab: {
                'main/margin': '60px auto 0px',
            },
            desktop: {
                'main/margin': '80px auto 0px',
                'main/max-width': '1290px',
                'main/padding': '120px 70px 0px'
            }
        }
    },
    ColumnFlexDirection: {
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'column',
            }
        },
    },
    display__Column_CENTER: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/justify-content': 'center',
                'main/flex-direction': 'column',
                'main/align-items': 'center',
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    display_BlogPosts: {
        extends: 'display__Column_CENTER',
        properties: {
            phone: {
                'main/padding': '50px 20px 0px',
                'main/max-width': '360px',
                'main/margin': '0px auto',
            },
            tab: {
                'main/max-width': '768px',
                'main/padding': '60px 40px 0px',
            },
            desktop: {
                'main/max-width': '1290px',
                'main/padding': '120px 70px 0px',
            },
        }
    },
    DISPLAY_TABLE: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'none'
            },
            tab: {
                'main/display': 'none',
            },
            desktop: {
                'main/border-radius': '20px',
                'main/padding': '30px 60px 60px',
                'main/display': 'block',
                'main/margin': '40px auto',
                'main/width': '1150px',
                'main/max-width': '1150px',
                'main/background-color': 'rgb(255, 255, 255)',
            },
        }
    },
    DISPLAY_TABLE_PHONE: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'block'
            },
            tab: {
                'main/display': 'block',
            },
            desktop: {
                'main/display': 'block',
            },
        }
    },
    display_flex: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    display_flex_gap: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/gap': '1rem',
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    card_section: {
        extends: '',
        properties: {
            phone: {
                'main/background': '#DCF3EE',
                'main/border-radius': '15px',
                'main/padding': '20px 30px',
                'main/max-width': '80%',
                'main/margin-top': '40px',
            },
            tab: {
                'main/padding': '40px',
            },
            desktop: {
                'main/padding': '50px 70px',
                'main/border-radius': '40px',
                'main/max-width': '1240px',
                'main/margin-top': '100px',
            },
        }
    },
};

export default sectionVariantStyle;
