import Colors from '@/Themes/Colors';

const rowVariantStyle: any = {
    DISPLAY__TEXT_ALIGN_CENTER: {
        extends: '',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
            },
            tab: {

            },
            desktop: {

            }
        },
    },
    DISPLAY_GRID: {
        extends: '',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
            },
            tab: {

            },
            desktop: {
                'main/margin': 'auto',
                'main/width': '100%',
                'main/display': 'flex',

            }
        },
    },
    DISPLAY__TEXT_ALIGN_DYNAMIC: {
        extends: '',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
            },
            tab: {

            },
            desktop: {
                'main/display': 'flex',
                'main/justify-content': 'left'
            }
        },
    },
    DISPLAY__TEXT_ALIGN_CENTER_1: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/margin': 'auto',
            },
            tab: {

            },
            desktop: {
                'main/margin': '0 auto',
            }
        },
    },
    DISPLAY__TEXT_ALIGN_CENTER_2: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/margin-bottom': '120px',
            },
            tab: {

            },
            desktop: {
                'main/margin': '60px auto 0px',
            }
        },
    },
    DISPLAY__TEXT_ALIGN_CENTER_3: {
        extends: '',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
                'main/flex-direction': 'column'
            },
            tab: {

            },
            desktop: {
                'main/flex-direction': 'column'
            }
        },
    },
    DISPLAY__TEXT_ALIGN_CENTER_4: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/align-items': 'center',
            },
            tab: {

            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/align-items': 'center',
                'main/margin-bottom': '25px',
            }
        },
    },
    DISPLAY__TEXT_ALIGN_CENTER_5: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/padding-top': '50px',
            },
            tab: {
                'main/padding-top': '120px',

            },
            desktop: {
                'main/padding-top': '120px',
            }
        },
    },
    DISPLAY__TEXT_ALIGN_CENTER_6: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/padding': '40px 0px 116px',
            },
            tab: {
                'main/padding': '90px 0px 200px',

            },
            desktop: {
                'main/padding': '0px 0px 288px',
            }
        },
    },
    DISPLAY__TEXT_ALIGN_LEFT: {
        extends: '',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
                'main/cursor': 'pointer'
            },
            tab: {
                'main/justify-content': 'left',
            },
            desktop: {
                'main/justify-content': 'left',
            }
        },
    },
    TEXT_WITH_BACKGROUND: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/width': '90%',
                'main/margin': '40px auto',
                'main/border-radius': '20px',
                'main/padding': '40px 15px',
                'main/background': 'rgb(236, 238, 240)',
            },
            tab: {
                'main/width': '708px',
                'main/margin': '80px 40px 0px',
                'main/border-radius': '40px',
                'main/padding': '40px 15px',
                'main/background': 'rgb(236, 238, 240)',

            },
            desktop: {
                'main/margin': '80px 40px 0px',
                'main/border-radius': '60px',
                'main/padding': '40px 15px',
                'main/background': 'rgb(236, 238, 240)',
                'main/width': '1360px'
            }
        },
    },
    DISCLAIMER_TEXT: {
        properties: {
            phone: {
                'main/display': 'flex',
                'main/align-items': 'center',
                'main/background': Colors.PORCELAIN,
                'main/padding': '10px',
                'main/border-radius': '20px',
                'main/margin': '50px 20px 0px'
            },
            tab: {
            },
            desktop: {
                'main/margin': '80px 20px 0px'
            }
        },
    },
    DISPLAY_TABLE: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'none',
            },
            tab: {
            },
            desktop: {
                'main/display': 'grid',
                'main/grid-template-columns': 'repeat(3, 1fr)',
                'main/gap': '60px 20px',
                'main/width': '100%',
                'main/position': 'relative'
            }
        },
    },
    DISPLAY_TABLE_PHONE: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'grid',
                'main/grid-template-columns': 'repeat(2, 1fr)',
                'main/overflow': 'auto hidden',
                'main/background-color': 'rgb(255, 255, 255)',
                'main/border-radius': '20px',
                'main/padding': '0px 10px',
                'main/width': '100%'
            },
            tab: {
            },
            desktop: {
                'main/display': 'none',
            }
        },
    },
    DISPLAY_TABLE_PHONE_ACCOUNTS: {
        extends: 'DISPLAY_TABLE_PHONE',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/grid-template-columns': 'repeat(2, 1fr)',
                'main/overflow': 'auto hidden',
                'main/background-color': 'rgb(255, 255, 255)',
                'main/border-radius': '20px',
                'main/padding': '0px 10px',
                'main/width': '310px'
            },
            tab: {
                'main/width': '100%'
            },
            desktop: {
                'main/display': 'flex',
                'main/grid-template-columns': 'repeat(2, 1fr)',
                'main/overflow': 'auto hidden',
                'main/background-color': 'rgb(255, 255, 255)',
                'main/border-radius': '20px',
                'main/padding': '30px 60px 60px',
                'main/width': '1150px'
            }
        },
    },
    REWARDS_ROW: {
        extends: '',
        properties: {
            phone: {
                'main/justify-content': 'center',
                'main/display': 'flex'
            },
            tab: {

            },
            desktop: {
                'main/display': 'flex',
                'main/justify-content': 'left',
                'main/animation': 'none',
                'main/opacity': '1',
            }
        },
    },
    BANNER__GOLDEN: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row'
            },
        }
    },
    BANNER__GOLDEN_SPEND: {
        extends: 'BANNER__GOLDEN',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column',
                'main/margin': 'auto'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'main/max-width': '1440px',
                'main/margin': '0px 160px'
            },
        }
    },
    OTHER_PRODUCTS: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'row'
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/justify-content': 'space-between'
            },
        }
    },
    FOOTER_PRODUCTS: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'column'
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/ max-width': '1440px',
                'main/margin': 'auto',
                'main/padding': '0px 85px'
            },
        }
    },
    FOOTER_PARTNER_IMAGES: {
        extends: 'OTHER_PRODUCTS',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/width': '90px',
                'main/margin-top': '30px'
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/justify-content': 'normal'
            },
        }
    },
    BANNER__GOLDEN_PADDING: {
        extends: '',
        properties: {
            phone: {
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
                'main/margin': 'auto'
            },
        }
    },
    BANNER__GOLDEN_CASHBACK: {
        extends: '',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'column',
                'main/margin': 'auto'
            },
            tab: {
            },
            desktop: {
                'main/height': 'auto',
                'main/width': 'auto',
                'main/flex-direction': 'row',
                'main/max-width': '1440px',
                'main/padding-bottom': '150px'
            },
        }
    },
    DISPLAY__TEXT_ALIGN_DYNAMIC_1: {
        extends: 'DISPLAY__TEXT_ALIGN_DYNAMIC',
        properties: {
            phone: {
                'main/margin': 'auto',
                'main/justify-content': 'center',
                'main/display': 'flex',
            },
            tab: {

            },
            desktop: {
            }
        },
    },
    FEATURE_PAGE_CARDS: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/width': '100%',
                'main/margin': '16px 0px',
                'main/flex-flow': 'column',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center'
            },
            tab: {
                'main/align-items': 'center',
                'main/flex-flow': 'row wrap',
                'main/width': '100%',
                'main/margin': '24px 0px'
            },
            desktop: {
                'main/width': '1290px',
            }
        }
    },
    FEATURE_PAGE_CARDS_1: {
        extends: 'FEATURE_PAGE_CARDS',
        properties: {
            desktop: {
                'main/width': '720px',
            }
        }
    },
    FEATURE_PAGE_CARDS_2: {
        extends: 'FEATURE_PAGE_CARDS',
        properties: {
            desktop: {
                'main/width': 'auto',
            }
        }
    },
    FEATURE_PAGE_CARDS_3: {
        extends: 'FEATURE_PAGE_CARDS',
        properties: {
            desktop: {
                'main/margin': '120px 0px 40px'
            }
        }
    },
    FEATURE_PAGE_CARDS_4: {
        extends: 'FEATURE_PAGE_CARDS',
        properties: {
            phone: {
                'main/margin': '-86px auto 0px',
            },
            tab: {
                'main/width': 'auto',
                'main/max-width': '530px',
                'main/margin': '-140px auto 0px',
                'main/justify-content': 'flex-start'
            },
            desktop: {
                'main/max-width': '1030px',
                'main/margin': '-208px auto 0px',
                'main/justify-content': 'flex-start'
            }
        }
    },
    FEATURE_PAGE_CARDS_5: {
        extends: 'FEATURE_PAGE_CARDS',
        properties: {
            desktop: {
                'main/display': 'flex',
                'main/justify-content': 'space-evenly',
                'main/margin': '16px 0px'
            }
        }
    },
    FEATURE_PAGE_BUTTON_PRIMARY: {
        extends: '',
        properties: {
            phone: {
                'main/margin': '50px auto 0px',
                'main/width': '280px',
                'main/text-align': 'center'
            },
            tab: {
                'main/margin': '60px auto 0px',
                'main/width': '420px'
            },
            desktop: {
                'main/margin': '80px auto 0px',
                'main/width': '452px'
            }
        }
    },
    FEATURE_PAGE_DESCRIPTION: {
        extends: 'FEATURE_PAGE_BUTTON_PRIMARY',
        properties: {
            phone: {
                'main/width': 'auto',
                'main/padding': '0px 20px'
            },
            tab: {
            },
            desktop: {
                'main/margin': '80px auto 0px',
                'main/width': '1150px'
            }
        }
    },
    CARD_LAYOUT: {
        extends: '',
        properties: {
            phone: {
                'main/border-radius': '32px 32px 0px 0px',
                'main/border': `1px solid ${Colors.BROWN}`,
                'main/width': '100%',
                'main/height': '180px',
                'main/border-bottom': 'none',
                'main/padding': '0px'
            },
            tab: {
                'justify-content': 'space-between',
                'align-items': 'center',
                'main/margin': '10px',
                'main/padding': '0px',
                'main/border-radius': '15px'
            },
            desktop: {
                'main/display': 'none'
            }
        }
    },
    BUTTON_LAYOUT_WITH_ARROW: {
        extends: '',
        properties: {
            phone: {
                'main/background': Colors.BROWN_GRADIENT_1,
                'main/border-radius': '20px',
                'main/font-weight': '600',
                'main/line-height': '16px',
                'main/box-shadow': `0px 2px 0px 0px ${Colors.BROWN}`,
                'main/color': Colors.GOLDEN_3,
                'main/width': 'fit-content',
                'main/display': 'flex',
                'main/padding': '12px 15px',
                'main/cursor': 'pointer',
                'main/margin': 'auto',
                'main/margin-bottom': '5px',
                'main/position': 'relative',
                'main/bottom': '20px'
            },
            tab: {
                'main/font-size': '20px',
            },
            desktop: {
                'main/font-size': '24px',
                'main/display': 'none'
            }
        }
    },
    BUTTON_LAYOUT_WITH_ARROW_1: {
        extends: '',
        properties: {
            phone: {
                'main/background': Colors.BROWN_GRADIENT_1,
                'main/border-radius': '20px',
                'main/font-weight': '600',
                'main/line-height': '16px',
                'main/box-shadow': `0px 2px 0px 0px ${Colors.BROWN}`,
                'main/color': Colors.GOLDEN_3,
                'main/width': 'fit-content',
                'main/display': 'flex',
                'main/padding': '12px 15px',
                'main/cursor': 'pointer',
                'main/margin': 'auto',
                'main/margin-bottom': '12px'
            },
            tab: {
                'main/font-size': '20px',
            },
            desktop: {
                'main/font-size': '24px',
            }
        }
    },
    BUTTON_LAYOUT_WITH_ARROW_2: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'none'
            },
            tab: {
            },
            desktop: {
                'main/background': Colors.BROWN_GRADIENT_1,
                'main/border-radius': '24px',
                'main/font-weight': '600',
                'main/line-height': '19px',
                'main/box-shadow': `0px 2px 0px 0px ${Colors.BROWN}`,
                'main/color': Colors.GOLDEN_3,
                'main/width': 'fit-content',
                'main/display': 'flex',
                'main/padding': '12px 15px',
                'main/cursor': 'pointer',
                'main/margin-bottom': '12px',
                'main/font-size': '16.748px',
                'main/align-items': 'center',
                'main/margin-left': '7.5%'
            }
        }
    },
    BUTTON_LAYOUT_WITH_ARROW_3: {
        extends: 'BUTTON_LAYOUT_WITH_ARROW',
        properties: {
            phone: {
                'main/bottom': '40px'
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    BUTTON_LAYOUT_WITH_ARROW_STICKY: {
        extends: '',
        properties: {
            phone: {
                'main/background': Colors.BROWN_GRADIENT_1,
                'main/border-radius': '20px',
                'main/font-weight': '600',
                'main/line-height': '16px',
                'main/box-shadow': `0px 2px 0px 0px ${Colors.BROWN}`,
                'main/color': Colors.GOLDEN_3,
                'main/width': 'fit-content',
                'main/display': 'flex',
                'main/padding': '12px 15px',
                'main/cursor': 'pointer',
                'main/margin': 'auto',
                'main/margin-bottom': '12px'
            },
            tab: {
                'main/font-size': '20px',
            },
            desktop: {
                'main/font-size': '24px',
            }
        }
    },
    PARTNERS_IMAGE_TEXT: {
        extends: '',
        properties: {
            phone: {
                'main/padding': '50px 20px 0px',
                'main/width': '340px',
                'main/margin': '0px auto',
                'main/display': 'flex',
                'main/flex-direction': 'column',
            },
            tab: {
                'main/width': '768px',
                'main/padding': '60px 40px 0px',
                'main/flex-direction': 'column',
                'main/-webkit-box-pack': 'justify',
                'main/justify-content': 'space-between',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
            },
            desktop: {
                'main/width': '1290px',
                'main/padding': '120px 70px 0px',
                'main/flex-direction': 'row',
            }
        },
    },
    ImageTextDescription: {
        extends: '',
        properties: {
            phone: {
                'main/padding': '50px 20px 0px',
                'main/width': '360px',
                'main/margin': '0px auto',
                'main/display': 'flex',
                'main/flex-direction': 'column',
            },
            tab: {
                'main/width': '768px',
                'main/padding': '60px 40px 0px',
                'main/flex-direction': 'row',
                'main/-webkit-box-pack': 'justify',
                'main/justify-content': 'space-between',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
            },
            desktop: {
                'main/width': '1290px',
                'main/padding': '120px 70px 0px',
            }
        },
    },
    ImageTextDescription_1: {
        extends: 'ImageTextDescription',
        properties: {
            phone: {
            },
            tab: {
                'main/flex-direction': 'column',
            },
            desktop: {
            }
        },
    },
    IMAGETEXTDESCRIPTION_2: {
        extends: 'ImageTextDescription',
        properties: {
            phone: {
            },
            tab: {
                'main/flex-direction': 'column',
            },
            desktop: {
                'main/flex-direction': 'row',
            }
        },
    },
    IMAGETEXTDESCRIPTION_3: {
        extends: 'ImageTextDescription',
        properties: {
            phone: {
                'main/padding-top': '60px',
                'main/flex-direction': 'column-reverse',
            },
            tab: {
                'main/padding-top': '60px'
            },
            desktop: {
                'main/padding-top': '60px'
            }
        },
    },
    ImageTextDescription__reverse: {
        extends: 'ImageTextDescription',
        properties: {
            phone: {
                'main/flex-direction': 'column-reverse',
            },
        }
    },
    IMAGETEXTDESCRIPTION__REVERSE_1: {
        extends: 'ImageTextDescription__reverse',
        properties: {
            phone: {
                'main/padding-top': '60px',
                'main/flex-direction': 'column',
            },
            tab: {
                'main/padding-top': '60px'
            },
            desktop: {
                'main/padding-top': '60px'
            }
        }
    },
    POWERED_BY_IMAGE: {
        extends: 'ImageTextDescription',
        properties: {
            phone: {
                'main/justify-content': 'center',
            },
            tab: {
                'main/justify-content': 'center',
            },
            desktop: {
                'main/justify-content': 'center',
            }
        }
    },
    display__BlogPosts: {
        extends: '',
        properties: {
            phone: {
                'main/width': '100%',
                'main/margin': '10px auto 0px',
            },
            tab: {
                'main/margin': '40px 0px 0px',
            },
            desktop: {
                'main/width': '1070px',
            },
        }
    },
    FEATURE_PAGE_LOGOS: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/width': '100%',
                'main/margin': '0px',
                'main/flex-wrap': 'wrap',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/gap': '1rem',

            },
            tab: {
                'main/align-items': 'center',
                'main/flex-flow': 'row wrap',
                'main/margin': '24px 0px',
                'main/gap': '0.5rem',
            },
            desktop: {
                'main/width': '1290px',
            }
        }
    },
    FEATURE_PAGE_LOGOS_FOOTER: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/width': 'auto',
                'main/margin': ' 2rem 0',
                'main/flex-wrap': 'wrap',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/gap': '0rem',

            },
            tab: {
                'main/-webkit-box-align': 'start',
                'main/align-items': 'start',
                'main/-webkit-box-pack': 'start',
                'main/justify-content': 'start',
            },
            desktop: {
            }
        }
    },
    FEATURE_PAGE_LOGOS_NUMBERED: {
        extends: 'FEATURE_PAGE_LOGOS',
        properties: {
            phone: {

            },
            tab: {
                'main/justify-content': 'space-around',
            },
            desktop: {
            }
        }
    },
    FEATURE_PAGE_LOGOS_3: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/width': 'auto',
                'main/margin': ' 1rem 0',
                'main/flex-wrap': 'no-wrap',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/gap': '0.5rem',

            },
            tab: {
                'main/margin': ' 2rem 0',
            },
            desktop: {
                'main/gap': '1rem',
            }
        }
    },
    FEATURE_PAGE_LOGOS_4: {
        extends: 'FEATURE_PAGE_LOGOS_3',
        properties: {
            phone: {
            },
            tab: {
                'main/justify-content': 'start',
            },
            desktop: {
            }
        }
    },

    FEATURE_PAGE_LOGOS_5: {
        extends: 'FEATURE_PAGE_LOGOS_3',
        properties: {
            phone: {
                'main/gap': '0',
                'main/margin': '0',
            },
            tab: {
                'main/margin': '0',
            },
            desktop: {
                'main/gap': '0',
                'main/margin': '0',
            }
        }
    },
    US_STOCK_PAGE_BANNER_ROW: {
        extends: 'FEATURE_PAGE_LOGOS_3',
        properties: {
            phone: {
                'main/gap': '0.5rem',
                'main/margin': '0.5rem',
            },
            tab: {
                'main/margin': ' 0.5rem 0',
                'main/gap': '1rem',
            },
            desktop: {
                'main/margin': '1rem 0',
            }
        }
    },
    US_STOCK_PAGE_BANNER_ROW_2: {
        extends: 'US_STOCK_PAGE_BANNER_ROW',
        properties: {
            phone: {
                'main/gap': '0.5rem',
                'main/margin': '0.5rem 0',
            },
            tab: {
                'main/margin': '2rem 0',
                'main/gap': '1rem',
            },
            desktop: {
                'main/margin': '3rem 0',
            }
        }
    },
    US_STOCK_PAGE_NUMBERED_ROW: {
        extends: 'US_STOCK_PAGE_BANNER_ROW_2',
        properties: {
            phone: {
                'main/gap': '2rem',
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    FEATURE_PAGE_LOGOS_6: {
        extends: 'FEATURE_PAGE_LOGOS_5',
        properties: {
            phone: {
                'main/justify-content': 'center',
                'main/text-decoration': 'underline',
                'main/margin-top': '1rem',
                'main/align-items': 'center',
                'main/margin-bottom': '0.5rem',
            },
            tab: {
                'main/justify-content': 'start',
            },
            desktop: {
                'main/margin-top': '1rem',

            }
        }
    },
    COLLECTION_ROW: {
        extends: 'FEATURE_PAGE_LOGOS_6',
        properties: {
            phone: {
                'main/margin-top': '2rem',
                'main/margin-bottom': '1rem',
            },
            tab: {
                'main/justify-content': 'center',
            },
            desktop: {
                'main/margin-top': '4rem',
                'main/margin-bottom': '0rem',

            }
        }
    },
    OTHER_DETAILS: {
        extends: '',
        properties: {
            phone: {
                'main/margin': '0 auto',
                'main/max-width': '1400px'
            },
            tab: {
                'main/display': 'flex',
            },
            desktop: {
                'main/display': 'flex',
            },
        }
    },
    US_STOCK_BANNER: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/gap': '15px',
                'main/align-items': 'start',
                'main/flex-direction': 'column',
            },
            tab: {
                'main/gap': '34px',
            },
            desktop: {
                'main/align-items': 'center',
                'main/flex-direction': 'row'

            },
        }
    },
    ImageTextDescription_3: {
        extends: 'ImageTextDescription',
        properties: {
            phone: {
                'main/align-items': 'center',
                'main/gap': '1rem',
            },
            tab: {
                'main/flex-direction': 'column',
            },
            desktop: {
                'main/flex-direction': 'row',
            }
        },

    },
    GRID_CARD: {
        properties: {
            phone: {
                'main/display': 'none',
            },
            tab: {
                'main/margin': '80px auto 50px',
                'main/filter': 'drop-shadow(rgba(0, 0, 0, 0.1) 4px 4px 12px)',
                'main/border-radius': '20px',
                'main/overflow': 'hidden',
                'main/height': '400px',
                'main/width': '600px',
                'main/display': 'grid',
                'main/grid-template-columns': '1fr 1fr'
            },
            desktop: {
                'main/margin': '80px auto',
                'main/margin-top': '100px',
                'main/filter': 'drop-shadow(rgba(0, 0, 0, 0.1) 4px 4px 12px)',
                'main/border-radius': '20px',
                'main/overflow': 'hidden',
                'main/height': '715px',
                'main/width': '1290px',
                'main/display': 'grid',
                'main/grid-template-columns': '1fr 1fr'
            },
        }

    },
    ABOUT_INFO_ROW: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'column'
            },
            tab: {
                'main/display': 'flex',
                'main/flex-direction': 'column',
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/gap': '100px',
                'main/margin': '135px'
            },
        }
    },
    ABOUT_CARDS_ROW: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
            },
            tab: {
                'main/display': 'grid',
                'main/width': '100%',
                'main/grid-template-columns': 'repeat(3, 400px)',
                'main/grid-gap': '40px',
                'main/overflow-x': 'auto',
                'main/margin-bottom': '40px',
                'main/border': '1px solid red'
            },
            desktop: {
                'main/display': 'grid',
                'main/width': '100%',
                'main/grid-template-columns': 'repeat(3, 400px)',
                'main/grid-gap': '40px',
                'main/justify-content': 'center',
                'main/overflow-x': 'auto',
                'main/margin-bottom': '40px',
                'main/border': '1px solid red',
                'main/padding': '10px'
            },
        }
    },
};

export default rowVariantStyle;
