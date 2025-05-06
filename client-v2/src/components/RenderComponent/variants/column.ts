import Colors from '@/Themes/Colors';

const columnVariantStyle: any = {
    DISPLAY__TEXT_ALIGN_CENTER: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/padding-top': '40px',
                'main/overflow': 'hidden',
                'main/height': 'auto',
                'main/margin': 'auto'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/width': '750px'
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_MAGNIFI_CARD: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/width': 'auto',
                'main/padding-top': '0px',
            },
            tab: {
            },
            desktop: {
                'main/transform': 'scale(1)'
            }
        }
    },
    BACKGROUND_TEXT: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'column',
                'main/width': 'auto',
                'main/padding-top': '0px',
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'column',
                'main/width': '780px',
                'main/padding-top': '0px',
            }
        }
    },
    BACKGROUND_TEXT_1: {
        extends: 'BACKGROUND_TEXT',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/width': '1290px'
            }
        }
    },
    BACKGROUND_TEXT_2: {
        extends: 'BACKGROUND_TEXT',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/width': '1000px'
            }
        }
    },
    DISPLAY_TABLE: {
        properties: {
            phone: {
                'main/margin': '20px 0px',
                'main/padding': '5px 0px',
            },
            tab: {
            },
            desktop: {
                'main/margin': '0px',
                'main/padding': '0px',
            }
        }
    },
    DISPLAY_TABLE_ACCOUNTS: {
        properties: {
            phone: {
                'main/display': 'none',
            },
            tab: {
            },
            desktop: {
                'main/margin': '0px',
                'main/padding': '0px',
                'main/display': 'block',
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_CAREERS: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/padding-top': '40px',
                'main/overflow': 'hidden',
                'main/height': 'auto',
                'main/margin': 'auto'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/width': '100%',
            }
        }
    },
    DISPLAY_SECONDARY_TABLE: {
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/overflow': 'auto hidden',
                'main/width': '670px'
            }
        }
    },
    DISPLAY_TABLE_CHILD_PHONE: {
        properties: {
            phone: {
                'main/background-color': 'rgb(247, 249, 250)',
                'main/padding': '5px',
                'main/margin': '0px 20px',
                'main/display': 'flex',
                'main/flex-direction': 'column',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/border-radius': '19px',
                'main/width': '130px'
            },
            tab: {
            },
            desktop: {
                'main/display': 'block',
                'main/width': 'auto'
            }
        }
    },
    DISPLAY_TABLE_CHILD_PHONE_1: {
        properties: {
            phone: {
                'main/background-color': 'rgb(217, 242, 204)',
                'main/padding': '5px',
                'main/margin': '0px 10px',
                'main/display': 'flex',
                'main/flex-direction': 'column',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/border-radius': '19px',
                'main/width': '130px'
            },
            tab: {
            },
            desktop: {
                'main/display': 'block',
                'main/width': 'auto'
            }
        }
    },
    DISPLAY_TABLE_CHILD: {
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/width': 'auto',
                'main/background-color': 'rgb(247, 249, 250)',
                'main/border-radius': '20px'
            }
        }
    },
    OTHER_PRODUCT_SECTION: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/padding-top': '40px',
                'main/overflow': 'hidden',
                'main/height': 'auto',
                'main/margin': 'auto',
                'main/padding-bottom': '50px'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/width': '1140px',
            }
        }
    },
    FOOTER_PRODUCT_SECTION: {
        extends: 'OTHER_PRODUCT_SECTION',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/padding-top': '0px'
            }
        }
    },
    US_STOCK_POSTER_SECTION: {
        extends: 'OTHER_PRODUCT_SECTION',
        properties: {
            phone: {
                'main/align-items': 'start',
                'main/margin': '0',
                'main/padding-bottom': '0'
            },
            tab: {
            },
            desktop: {
                'main/padding-top': '0px'
            }
        }
    },
    PARTNERS_SECTION: {
        extends: 'OTHER_PRODUCT_SECTION',
        properties: {
            phone: {
                'main/margin': 'auto',
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/margin': '0px',
                'main/padding-top': '15px',
                'main/padding-left': '100px'
            }
        }
    },
    DISPLAY__TITLEANDDESCRIPTION_1: {
        extends: '',
        properties: {
            phone: {
                'main/max-width': '320px',
                'main/text-align': 'center',
                'main/margin-top': '10px'
            },
            tab: {
                'main/text-align': 'left',
            },
            desktop: {
                'main/max-width': '550px',
            },
        }
    },
    FOOTER_TEXT_IMAGE: {
        extends: 'display__TitleAndDescription',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-wrap': 'wrap',
                'main/max-width': '320px',
                'main/align-items': 'center',
                'main/justify-content': 'center'
            },
            tab: {
                'main/text-align': 'left',
            },
            desktop: {
                'main/max-width': '550px',
                'main/justify-content': 'normal'
            },
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_3: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/padding-bottom': '40px',
                'main/padding-top': '0px',
                'main/display': 'none'
            },
            tab: {
            },
            desktop: {
                'main/padding-top': '0px',
                'main/display': 'block'
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_4: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/flex-direction': 'row',
                'main/justify-content': 'center'
            },
            tab: {
            },
            desktop: {
                'main/display': 'flex',
                'main/flex-direction': 'row'
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_5: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/padding-top': '0px',
            },
            tab: {
            },
            desktop: {
                'main/padding-top': '0px',
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_6: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
                'main/padding-top': '0px',
            },
            tab: {
            },
            desktop: {
                'main/padding-top': '0px',
                'main/width': '900px',
            }
        }
    },
    REWARDS_CONTAINER: {
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
                'main/width': 'auto'
            },
        }
    },
    CASHBACK_CONTAINER: {
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
                'main/width': '1440px',
                'main/padding-left': '110px'
            },
        }
    },
    CASHBACK_CONTAINER_1: {
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
                'main/justify-content': 'left'
            },
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_1: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/height': 'auto',
                'main/margin': 'auto'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/width': '750px',
                'main/align-items': 'left',
                'main/text-align': 'left',
                'main/margin': '0px'
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_WITH_MARGIN: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/height': 'auto',
                'main/margin': 'auto',
                'main/margin-top': '60px'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/width': '750px',
                'main/align-items': 'left',
                'main/text-align': 'left',
                'main/margin': '0px'
            }
        }
    },
    DISPLAY__TEXT_ALIGN_CENTER_2: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'left',
                'main/text-align': 'left',
                'main/height': 'auto',
                'main/margin': 'auto'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/width': '750px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/margin': '0px'
            }
        }
    },
    CAREERS_BANNER: {
        extends: 'DISPLAY__TEXT_ALIGN_CENTER',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/width': '990px',
            }
        }
    },
    DISPLAY__TEXT_ALIGN_DYNAMIC: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/align-items': 'center',
                'main/text-align': 'center',
                'main/height': 'auto',
                'main/margin': 'auto'
            },
            tab: {
                'main/width': '529px',
            },
            desktop: {
                'main/padding-top': '60px',
                'main/margin': '0px'
            }
        }
    },
    display__TitleAndDescription: {
        extends: '',
        properties: {
            phone: {
                'main/max-width': '320px',
                'main/text-align': 'center'
            },
            tab: {
                'main/text-align': 'left',
            },
            desktop: {
                'main/max-width': '550px',
            },
        }
    },
    PARTNERS_IMAGE_TEXT: {
        extends: '',
        properties: {
            phone: {
                'main/width': 'auto',
                'main/margin': 'auto',
            },
            tab: {
                'main/width': '312px',
                'main/margin': 'auto 0px',
            },
            desktop: {
                'main/width': '478px',
            }
        }
    },
    PARTNERS_IMAGE_TEXT_1: {
        extends: '',
        properties: {
            phone: {
                'main/max-width': '320px',
                'main/text-align': 'center'
            },
            tab: {
                'main/max-width': '370px',
                'main/text-align': 'left',
            },
            desktop: {
                'main/max-width': '550px',
            },
        }
    },
    display__TitleAndDescriptionImage: {
        extends: '',
        properties: {
            phone: {
                'main/width': '320px',
                'main/margin': 'auto',
            },
            tab: {
                'main/width': '312px',
                'main/margin': 'auto 0px',
            },
            desktop: {
                'main/width': '478px',
            }
        }
    },
    display__BlogPosts: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'grid',
                'main/grid-gap': '24px',
            },
            tab: {
                'main/grid-template-columns': '1fr 1fr 1fr',
                'main/grid-gap': '30px',
                'main/margin': '0px -30px',
                'main/padding': '0px 30px',
                'main/overflow-x': 'scroll',
                'main/-ms-overflow-style': 'none', /* IE and Edge */
                'main/scrollbar-width': 'none', /* Firefox */

                'main/css': `&::-webkit-scrollbar {
                    display: none;
                }`,
            },
            desktop: {
                'main/padding': '0px',
                'main/margin': '0px',
                'main/grid-gap': '55px',
            },
        }
    },
    FEATURE_CARDS_ITEM_WRAPPER: {
        extends: '',
        properties: {
            phone: {
                'main/width': '240px',
                'main/height': '148px',
                'main/margin': '10px',
                'main/padding': '24px',
                'main/border-radius': '15px',
                'main/white-space': 'pre-wrap',
                'main/display': 'flex',
                'main/-webkit-box-align': 'center',
                'main/align-items': 'center',
                'main/-webkit-box-pack': 'center',
                'main/justify-content': 'center',
                'main/flex-direction': 'column',
                'main/text-align': 'center',
                'main/position': 'relative',
                'main/background-color': 'white',
            },
            tab: {
                'justify-content': 'space-between',
                'align-items': 'center',
                'main/margin': '10px',
                'main/padding': '24px',
                'main/border-radius': '15px'
            },
            desktop: {
                'main/width': '320px',
                'main/height': '202px',
                'main/margin': '20px',
                'main/padding': '30px',
            }
        }
    },
    CAREERS_CARDS_ITEM_WRAPPER: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/width': '240px',
                'main/height': '148px',
                'main/margin': '10px',
                'main/padding': '24px',
                'main/border-radius': '15px',
                'main/white-space': 'pre-wrap',
                'main/display': 'flex',
                'main/-webkit-box-align': 'normal',
                'main/align-items': 'normal',
                'main/-webkit-box-pack': 'normal',
                'main/justify-content': 'normal',
                'main/flex-direction': 'column',
                'main/text-align': 'normal',
                'main/position': 'relative',
                'main/background-color': 'white',
            },
            tab: {
                'justify-content': 'space-between',
                'align-items': 'normal',
                'main/margin': '10px',
                'main/padding': '24px',
                'main/border-radius': '15px'
            },
            desktop: {
                'main/width': '320px',
                'main/height': '275px',
                'main/margin': '20px',
                'main/padding': '30px',
            }
        }
    },
    FEATURE_CARDS_ITEM_WRAPPER_1: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/height': '194px',
            },
            tab: {
                'main/height': '194px',
            },
            desktop: {
                'main/height': '264px',
            }
        }
    },
    FEATURE_HORIZONTAL_CARDS: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': '320px',
                'main/margin': '0px auto 20px'
            },
            tab: {
                'main/height': 'auto',
                'main/width': '100%',
                'main/flex-direction': 'row',
                'main/justify-content': 'left',
                'main/margin': '10px 10px 20px'
            },
            desktop: {
                'main/height': 'auto',
                'main/width': '100%',
                'main/flex-direction': 'row',
                'main/justify-content': 'left',
                'main/margin': '10px 10px 20px'
            }
        }
    },
    CARD_LAYOUT_ISSUED_BY: {
        extends: 'CARD_LAYOUT',
        properties: {
            phone: {
                'main/padding': '20px',
                'main/width': '300px',
                'main/height': '200px',
                'main/text-align': 'center',
                'main/margin': 'auto',
                'main/border-radius': '32px 32px 0px 0px',
                'main/border-bottom': 'none',
                'main/position': 'fixed',
                'main/right': '40px'
            },
            tab: {
            },
            desktop: {
                'main/display': 'none'
            }
        }
    },
    CARD_LAYOUT_ISSUED_BY_PARENT: {
        extends: '',
        properties: {
            phone: {
                'main/padding': '20px',
                'main/margin-bottom': '140px'
            },
            tab: {
            },
            desktop: {
                'main/display': 'none'
            }
        }
    },
    CARD_LAYOUT: {
        extends: '',
        properties: {
            phone: {
                'main/padding': '20px',
                'main/border-radius': '32px',
                'main/text-align': 'left',
                'main/border': `1px solid ${Colors.BROWN}`,
                'main/background': Colors.BROWN_GRADIENT_2,
                'main/margin-right': '10px',
                'main/margin-bottom': '70px',
                'main/width': '160px'
            },
            tab: {
                'justify-content': 'space-between',
                'align-items': 'center',
                'main/margin': '10px',
                'main/padding': '24px',
                'main/border-radius': '32px',
                'main/width': 'auto'
            },
            desktop: {
                'main/width': '320px',
                'main/height': '292px',
                'main/margin': '0px 0px 20px 20px',
                'main/padding': '30px',
                'main/border-radius': '58px'
            }
        }
    },
    CARD_LAYOUT_1: {
        extends: 'CARD_LAYOUT',
        properties: {
            phone: {
                'main/padding': '30px',
                'main/background': Colors.GOLDEN_GRADIENT_3,
                'main/backdrop-filter': 'blur(200px)',
                'main/margin-bottom': '0px',
                'main/width': 'auto'
            },
            tab: {
                'main/border-radius': '32px'
            },
            desktop: {
                'main/width': '530px',
                'main/height': '575px',
                'main/border-radius': '38px',
                'main/margin': '10px 0px 0px 20px',
                'main/opacity': '1',
                'main/transform': 'translateY(0)',
                'main/animation': 'none'
            }
        }
    },
    CARD_LAYOUT_2: {
        extends: 'CARD_LAYOUT_1',
        properties: {
            phone: {
                'main/padding': '30px',
                'main/background': Colors.BROWN_3,
                'main/backdrop-filter': 'blur(200px)',
                'main/margin-bottom': '0px',
                'main/position': 'relative',
                'main/bottom': '150px',
                'main/border-radius': '32px',
                'main/width': 'auto'
            },
            tab: {
            },
            desktop: {
                'main/height': '200px',
                'main/border-radius': '24px',
                'main/opacity': '1',
                'main/animation': 'none',
                'main/transform': 'translateY(0)',
                'main/margin': '0px',
                'main/width': '450px',
                'main/bottom': '50px',
                'main/background': Colors.GOLDEN_GRADIENT_3,
            }
        }
    },
    CARD_LAYOUT_3: {
        extends: 'CARD_LAYOUT_1',
        properties: {
            phone: {
                'main/padding': '30px',
                'main/background': Colors.GOLDEN_GRADIENT_3,
                'main/backdrop-filter': 'blur(200px)',
                'main/margin-bottom': '0px',
                'main/position': 'relative',
                'main/bottom': '80px',
                'main/border-radius': '32px'
            },
            tab: {
            },
            desktop: {
            }
        }
    },
    CARD_LAYOUT_5: {
        extends: '',
        properties: {
            phone: {
                'main/padding': '30px',
                'main/background': Colors.PATTERNS_BLUE_TWO,
                'main/backdrop-filter': 'blur(200px)',
                'main/margin-bottom': '0px',
                'main/width': 'auto'
            },
            tab: {
                'main/border-radius': '32px'
            },
            desktop: {
                'main/width': '530px',
                'main/height': '575px',
                'main/border-radius': '20px',
                'main/margin': '10px 0px 0px 20px',
                'main/opacity': '1',
                'main/transform': 'translateY(0)',
                'main/animation': 'none'
            }
        }
    },
    STICKY_FOOTER: {
        extends: '',
        properties: {
            phone: {
                'main/position': 'fixed',
                'main/left': '0',
                'main/bottom': '0px',
                'main/text-align': 'center',
                'main/z-index': '5',
                'main/width': '100%',
                'main/padding-bottom': '92px',
            },
            tab: {
                'main/display': 'none'
            },
            desktop: {
                'main/display': 'none'
            }
        }
    },
    REWARDS_CARD_LAYOUT: {
        extends: '',
        properties: {
            phone: {
                'main/padding': '80px 28px',
                'main/border-radius': '24px',
                'main/text-align': 'left',
                'main/border': `1px solid ${Colors.BROWN}`,
                'main/background': Colors.BROWN_GRADIENT_2,
                'main/margin-left': '16px',
                'main/margin-bottom': '70px'
            },
            tab: {
                'justify-content': 'space-between',
                'align-items': 'center',
                'main/margin': '10px',
                'main/padding': '24px',
                'main/border-radius': '15px'
            },
            desktop: {
                'main/width': '320px',
                'main/height': '202px',
                'main/margin': '20px',
                'main/padding': '30px',
            }
        }
    },
    OTHER_PRODUCTS_CARD: {
        extends: '',
        properties: {
            phone: {
                'main/width': 'auto',
                'main/border-radius': '12px',
                'main/background': Colors.BLACK_GRADIENT,
                'main/margin-right': '20px',
                'main/height': '165px'
            },
            tab: {
            },
            desktop: {
                'main/width': '70%',
                'main/height': '410px',
                'main/border-radius': '42.283px',
                'main/background': Colors.BLACK_GRADIENT
            }
        }
    },
    CONTACT_CARD: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/height': '320px',
                'main/width': '260px',
                'main/display': 'block',
                'main/padding': '30px 0px 0px',
                'main/margin': '20px',
            },
            tab: {
                'main/height': '350px',
                'main/display': 'block',
                'main/width': '295px',
                'main/padding': '40px 0px 0px'
            },
            desktop: {
                'main/padding': '40px 0px 0px',
                'main/height': '460px',
                'main/width': '340px',
                'main/display': 'block'
            }
        }
    },
    CONTACT_CARD_MOB: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': '100%',
                'main/display': 'block',
                'main/padding': '40px 20px',
                'main/margin': '20px',
                'main/background': Colors.PATTERNS_BLUE_TWO,
                'main/border-radius': 'none',
            },
            tab: {
                'main/display': 'none'
            },
            desktop: {
                'main/display': 'none',
            }
        }
    },
    CAREERS_CARD: {
        extends: 'CONTACT_CARD',
        properties: {
            phone: {
                'main/height': '320px',
                'main/width': '260px',
                'main/display': 'block',
                'main/padding': '30px 0px 0px',
                'main/margin': '20px',
            },
            tab: {
                'main/height': '350px',
                'main/display': 'block',
                'main/width': '295px',
                'main/padding': '40px 0px 0px'
            },
            desktop: {
                'main/padding': '40px 0px 0px',
                'main/height': '570px',
                'main/width': '340px',
                'main/display': 'block'
            }
        }
    },
    TEAMS_PHOTO: {
        properties: {
            phone: {
                'main/display': 'block',
            },
            tab: {
                'main/display': 'block',
                'main/background': Colors.PATTERNS_BLUE_TWO,
                'main/height': 'auto',
                'main/padding': '40px 25px'
            },
            desktop: {
                'main/display': 'block',
                'main/padding': '95px 80px',
            }
        }
    },
    CONTACT_CARD_1: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/height': 'auto',
                'main/padding': '20px',
            },
            tab: {
                'main/background': Colors.MINE_SHAFT,
                'main/height': 'auto',
                'main/padding': '30px 0px',
            },
            desktop: {
                'main/background': Colors.MINE_SHAFT,
                'main/height': 'auto',
                'main/padding': '60px',
            }
        }
    },
    CONTACT_CARD_2: {
        extends: 'CONTACT_CARD',
        properties: {
            phone: {
                'main/background': Colors.MINE_SHAFT,
                'main/height': 'auto',
                'main/padding': '20px',
            },
            tab: {
                'main/background': Colors.MINE_SHAFT,
                'main/height': 'auto',
                'main/padding': '30px 0px',
            },
            desktop: {
                'main/background': Colors.MINE_SHAFT,
                'main/height': 'auto',
                'main/padding': '60px',
                'main/margin': '0px',
            }
        }
    },
    TEAM_CARD: {
        extends: 'FEATURE_CARDS_ITEM_WRAPPER',
        properties: {
            phone: {
                'main/height': 'auto',
                'main/width': '240px',
                'main/display': 'block',
                'main/padding': '0px',
                'main/margin': '20px',
            },
            tab: {
                'main/height': 'auto',
                'main/display': 'block',
                'main/width': '240px',
                'main/padding': '0px',
                'main/border-radius': '15px',
            },
            desktop: {
                'main/padding': '0px',
                'main/height': 'auto',
                'main/width': '300px',
                'main/display': 'block',
                'main/border-radius': '15px',
            }
        }
    },
    TEAM_INNER_COLUMN: {
        properties: {
            phone: {
                'main/padding': '20px',
            },
            tab: {
                'main/padding': '20px',
            },
            desktop: {
                'main/padding': '30px',
            }
        }
    },
    US_STOCK_BANNER_COLUMN: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/align-items': 'start',
                'main/flex-direction': 'column',
                'main/gap': '0.5rem;',
                'main/position': 'relative;',
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    US_STOCK_BANNER_COLUMN_2: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'flex',
                'main/align-items': 'center',
                'main/flex-direction': 'column',
                'main/gap': '1rem;',
                'main/margin-left': '1rem;',
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    feature_numbered_card: {
        extends: 'US_STOCK_BANNER_COLUMN_2',
        properties: {
            phone: {
                'main/margin-left': '0rem;',
            },
            tab: {
            },
            desktop: {
            }
        }
    },
};

export default columnVariantStyle;
