import Colors from '@/Themes/Colors';

const imageVariant: any = {
    CoverImage: {
        extends: '',
        properties: {
            phone: {
                'main/object-fit': 'cover',
                'main/border-radius': '0px',
            }
        }
    },
    COVERIMAGE_MOBILE: {
        extends: '',
        properties: {
            phone: {
                'main/object-fit': 'cover',
                'main/border-radius': '0px',
            },
            tab: {
                'main/display': 'none',
            },
            desktop: {
                'main/display': 'none',
            },
        }
    },
    COVERIMAGE_DESKTOP: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'none',
            },
            tab: {
                'main/display': 'block',
                'main/object-fit': 'cover',
                'main/border-radius': '0px',
            },
            desktop: {
                'main/display': 'block',
                'main/object-fit': 'cover',
                'main/border-radius': '0px',
            },
        }
    },
    COVER_IMAGE_1: {
        extends: '',
        properties: {
            phone: {
                'main/object-fit': 'cover',
                'main/border-radius': '0px',
                'main/width': '198px',
                'main/margin': '40px auto'
            },
            desktop: {
                'main/width': '300px',
                'main/margin': '40px 0px 0px'
            },
        }
    },
    COVER_IMAGE_2: {
        extends: 'COVER_IMAGE_1',
        properties: {
            phone: {
                'main/object-fit': 'cover',
                'main/border-radius': '0px',
                'main/width': '80px',
                'main/margin': '0px 20px 0px 0px'
            },
            desktop: {
                'main/width': '100px',
                'main/margin': '0px 20px 0px 0px'
            },
        }
    },
    IMAGE_INLINE: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.DARK_GREY,
                'main/height': 'auto',
                'main/display': 'inline',
                'main/width': '97px',
                'main/margin-bottom': '10px'
            },
            tab: {
                'main/margin-bottom': '20px'
            },
            desktop: {
                'main/margin-top': '1px',
                'main/width': '140px',
                'main/margin-bottom': '25px'
            },
        }
    },
    IMAGE_INLINE_1: {
        extends: 'IMAGE_INLINE',
        properties: {
            phone: {
                'main/margin-top': '10px'
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    IMAGE_INLINE_2: {
        extends: 'IMAGE_INLINE',
        properties: {
            phone: {
                'main/margin-top': '10px',
                'main/width': '50px',
            },
            tab: {
                'main/width': '86px',
            },
            desktop: {
                'main/width': '110px',
                'main/margin-bottom': '0px'
            },
        }
    },
    IMAGE_INLINE_3: {
        extends: 'IMAGE_INLINE',
        properties: {
            phone: {
                'main/margin-top': '10px',
                'main/width': '35px',
            },
            tab: {
                'main/width': '51px',
            },
            desktop: {
                'main/margin-top': '6px',
                'main/width': '61px',
                'main/margin-bottom': '0px'
            },
        }
    },
    Feature_Page_Banner_Image: {
        extends: '',
        properties: {
            phone: {
                'main/background-color': Colors.DARK_GREY,
                'main/height': '268px',
                'main/width': 'auto',
                'main/margin': '0 auto'
            },
            tab: {
                'main/height': '350px',
            },
            desktop: {
                'main/height': '525px',
            },
        }
    },
    CAREERS_PAGE_BANNER_IMAGE: {
        extends: 'Feature_Page_Banner_Image',
        properties: {
            phone: {
                'main/background-color': Colors.DARK_GREY,
                'main/height': '268px',
                'main/width': 'auto',
                'main/margin': '0 auto'
            },
            tab: {
                'main/height': '350px',
            },
            desktop: {
                'main/object-fit': 'cover',
                'main/height': '460px',
                'main/width': '820px',
                'main/border-radius': '30px',
                'main/filter': 'drop-shadow(rgba(0, 0, 0, 0.2) 2px 2px 20px)',
                'main/margin-top': '80px',
                'main/margin-bottom': '100px',
                'main/overflow': 'hidden'

            },
        }
    },
    feature_cards_innerwrapper_card_image: {
        extends: '',
        properties: {
            phone: {
                'main/width': '42px',
                'main/height': 'auto',
                'main/margin': '0px 0px 12px'
            },
            tab: {
                'main/margin': '0px 0px 12px',
            },
            desktop: {
                'main/width': '60px',
            },
        }

    },
    FEATURE_CARDS_INNERWRAPPER_CARD_IMAGE_1: {
        extends: 'feature_cards_innerwrapper_card_image',
        properties: {
            phone: {
                'main/margin': '0px 8px 0px'
            },
            tab: {
                'main/margin': '0px',
            },
            desktop: {
                'main/width': '34px',
                'main/margin-right': '10px',
            },
        }

    },
    CAREERS_CARDS_INNERWRAPPER_CARD_IMAGE: {
        extends: 'feature_cards_innerwrapper_card_image',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/width': '40px',
                'main/margin-bottom': '20px'
            },
        }

    },
    CONTACT_CARD: {
        extends: 'feature_cards_innerwrapper_card_image',
        properties: {
            phone: {
                'main/width': '100%',
                'main/margin': '0px',
                'main/position': 'absolute',
                'main/bottom': '0px'
            },
            tab: {
                'main/width': '100%',
                'main/margin': '0px',
            },
            desktop: {
                'main/width': '100%',
                'main/margin': '0px',
            },
        }
    },
    CAREERS_CARD: {
        extends: 'CONTACT_CARD',
        properties: {
            phone: {
                'main/width': '100%',
                'main/margin': '0px',
                'main/position': 'absolute',
                'main/bottom': '40px'
            },
            tab: {
                'main/width': '100%',
                'main/margin': '0px',
            },
            desktop: {
                'main/width': '100%',
                'main/margin': '0px',
                'main/bottom': '40px',
                'main/left': '40px',
                'main/border-radius': '15px'
            },
        }
    },
    CONTACT_CARD_BANNER: {
        extends: 'feature_cards_innerwrapper_card_image',
        properties: {
            phone: {
                'main/width': '36px',
            },
            tab: {
                'main/width': '36px',
            },
            desktop: {
                'main/width': '48px',
            },
        }
    },
    GRID_CARD: {
        properties: {
            phone: {
            },
            tab: {
                'main/object-fit': 'cover'
            },
            desktop: {
            },
        }
    },
    TEAM_CARD: {
        extends: 'feature_cards_innerwrapper_card_image',
        properties: {
            phone: {
                'main/width': '100%',
                'main/margin': '0px',
                'main/border-radius': '15px 15px 0px 0px'
            },
            tab: {
                'main/width': '100%',
                'main/margin': '0px',
                'main/border-radius': '15px 15px 0px 0px',
            },
            desktop: {
                'main/width': '100%',
                'main/margin': '0px',
                'main/border-radius': '15px 15px 0px 0px'
            },
        }
    },
    TEAMS_ARROW_CARD: {
        properties: {
            phone: {
                'main/width': '12px',
                'main/margin-left': '10px',
            },
            tab: {
            },
            desktop: {
                'main/width': '12px',
                'main/margin-left': '10px',
            },
        }
    },
    H_CARD_IMAGE_1: {
        extends: 'feature_cards_innerwrapper_card_image',
        properties: {
            phone: {
                'main/margin': '0px 0px 12px'
            },
            tab: {
                'main/margin': '0px',
                'main/margin-right': '20px',
            },
            desktop: {
                'main/width': '60px',
                'main/margin-right': '20px',
            },
        }

    },
    Digital_Savings_Account_cards_image: {
        extends: '',
        properties: {
            phone: {
                'main/width': '300px',
                'main/height': 'auto',
                'main/margin': '0px 0px 30px'
            },
            tab: {
            },
            desktop: {
                'main/width': '741px',
                'main/margin': '0px 0px 55px'
            },
        }

    },
    IMAGE_INLINE_LOGO: {
        extends: '',
        properties: {
            phone: {
                'main/height': '30px',
                'main/display': 'inline',
                'main/width': '70px',
            },
            tab: {
            },
            desktop: {
                'main/height': '40px',
                'main/width': '140px',
            },
        }
    },
    IMAGE_INLINE_LOGO_2: {
        extends: 'IMAGE_INLINE_LOGO',
        properties: {
            phone: {
            },
            tab: {
            },
            desktop: {
                'main/height': '60px',
            },
        }
    },
    IMAGE_INLINE_LOGO_1: {
        extends: '',
        properties: {
            phone: {
                'main/height': '40px',
                'main/display': 'inline',
                'main/max-width': '80px',
            },
            tab: {
            },
            desktop: {
                'main/height': '60px',
                'main/max-width': '112px',
            },
        }
    },
    IMAGE_INLINE_LOGO_3: {
        extends: 'IMAGE_INLINE_LOGO',
        properties: {
            phone: {
                'main/height': '20px',
            },
            tab: {
            },
            desktop: {
            },
        }
    },
    ARROW: {
        extends: '',
        properties: {
            phone: {
                'main/height': '18px',
                'main/width': '18px',
                'main/display': 'inline',
            },
            tab: {
            },
            desktop: {
                'main/height': '22px',
                'main/width': '22px',
            },
        }
    },
    HIGHLIGHT_CREDIT_CARDS_IMAGE: {
        extends: '',
        properties: {
            phone: {
                'main/margin-bottom': '0px',
                'main/display': 'block',
            },
            tab: {
                'main/display': 'none',
            },
            desktop: {
                'main/display': 'none',
            },
        }
    },
    HIGHLIGHT_CREDIT_CARDS_IMAGE_DESKTOP: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'none',
            },
            tab: {
                'main/display': 'block',
                'main/height': '300px',
                'main/margin-bottom': '40px'
            },
            desktop: {
                'main/display': 'block',
                'main/height': 'auto',
                'main/margin-bottom': '0px',
                'main/padding-top': '40px',
                'main/animation': 'none',
                'main/transform': 'translateY(0)'
            },
        }
    },
    WEEKEND_OFFER_IMAGE: {
        extends: '',
        properties: {
            phone: {
                'main/width': 'auto',
                'main/height': '215px',
                'main/margin-bottom': '20px'
            },
            tab: {
                'main/height': '300px',
                'main/margin-bottom': '20px'
            },
            desktop: {
                'main/width': '487px',
                'main/height': '292px',
                'main/margin-bottom': '30px',
                'main/animation': 'none',
                'main/opacity': '1',
            },
        }
    },
    REWARDS_IMAGE: {
        extends: '',
        properties: {
            phone: {
                'main/width': '238px',
                'main/height': '65px',
                'main/margin-bottom': '15px'
            },
            tab: {
                'main/height': 'auto',
                'main/margin-bottom': '40px'
            },
            desktop: {
                'main/width': '100%',
                'main/height': '100px',
                'main/margin-bottom': '40px'
            },
        }
    },
    CASHBACK_BRAND_IMAGES: {
        extends: '',
        properties: {
            phone: {
                'main/width': '193px',
                'main/margin': '12px 0px 26px'
            },
            tab: {
                'main/margin': '12px 0px 26px'
            },
            desktop: {
                'main/width': '338px',
                'main/height': 'auto',
                'main/margin': '12px 0px 26px'
            },
        }
    },
    SPEND_IMAGE: {
        extends: 'CASHBACK_BRAND_IMAGES',
        properties: {
            phone: {
                'main/width': '100%',
            },
            tab: {
            },
            desktop: {
                'main/width': '100%',
                'main/margin': '0px 0px 26px'
            },
        }
    },
    EMI_IMAGE: {
        extends: 'CASHBACK_BRAND_IMAGES',
        properties: {
            phone: {
                'main/width': '98%',
                'main/position': 'relative',
                'main/bottom': '200px',
                'main/margin-right': '10px',
                'main/backdrop-filter': 'blur(12px)',
                'main/border-radius': '22px',
                'main/background': Colors.BROWN_3,
            },
            tab: {
            },
            desktop: {
                'main/width': '69%',
                'main/margin': '12px 0px 0px',
                'main/border-radius': '24px',
                'main/bottom': '50px',
                'main/opacity': '1',
                'main/animation': 'none',
                'main/transform': 'translateY(0)',
                'main/background': 'transparent',
            },
        }
    },
    FEDERAL_BANK_IMAGE: {
        extends: '',
        properties: {
            phone: {
                'main/width': '79px',
                'main/height': '19.75px',
            },
            tab: {
                'main/height': '20px',
            },
            desktop: {
                'main/width': '80px',
                'main/height': '20px',
            },
        }
    },
    RIGHT_ARROW: {
        extends: '',
        properties: {
            phone: {
                'main/width': '16px',
                'main/height': '16px',
            },
            tab: {
                'main/height': '16px',
            },
            desktop: {
                'main/width': '16px',
                'main/height': '16px',
            },
        }
    },
    OTHER_PRODUCTS_IMAGES: {
        extends: '',
        properties: {
            phone: {
                'main/width': '100%',
                'main/height': 'auto',
            },
            tab: {
            },
            desktop: {
                'main/width': 'auto',
                'main/height': 'auto',
            },
        }
    },
    OTHER_PRODUCTS_IMAGES_MAGNIFI: {
        extends: '',
        properties: {
            phone: {
                'main/width': '100%',
                'main/height': 'auto',
            },
            tab: {
            },
            desktop: {
                'main/width': '100%',
                'main/height': 'auto',
            },
        }
    },
    AMPLIFI_TEXT_IMAGES: {
        extends: 'OTHER_PRODUCTS_IMAGES',
        properties: {
            phone: {
                'main/width': '59px',
                'main/margin-left': '20px'
            },
            tab: {
            },
            desktop: {
                'main/width': '150px',
                'main/height': 'auto',
                'main/margin-left': '55px'
            },
        }
    },
    PARTNER_IMAGES: {
        extends: '',
        properties: {
            phone: {
                'main/width': '100%',
                'main/height': 'auto',
                'main/margin-right': '10px'
            },
            tab: {
            },
            desktop: {
                'main/width': '75px',
                'main/height': 'auto',
                'main/margin-right': '15px',
                'main/margin-top': '60px'
            },
        }
    },
    OTHER_PRODUCTS_IMAGES_SIMPLIFI: {
        extends: 'OTHER_PRODUCTS_IMAGES',
        properties: {
            phone: {
                'main/width': '140px'
            },
            tab: {
            },
            desktop: {
                'main/width': '100%',
                'main/height': 'auto'
            },
        }
    },
    OTHER_DETAILS: {
        extends: '',
        properties: {
            phone: {
                'main/width': '15px'
            },
            tab: {
            },
            desktop: {
                'main/width': 'auto',
                'main/height': '24px',
                'main/padding-top': '2px'
            },
        }
    },
    US_STOCK_ICON: {
        extends: '',
        properties: {
            phone: {
                'main/height': '39px',
                'main/width': '39px'
            },
            tab: {
                'main/height': '56px',
                'main/width': '56px'
            },
            desktop: {
                'main/height': '76px',
                'main/width': '76px'
            },
        }
    },
    US_STOCK_ICON_2: {
        extends: '',
        properties: {
            phone: {
                'main/height': '42px',
                'main/width': '42px'
            },
            tab: {
                'main/height': '40px',
                'main/width': '40px'
            },
            desktop: {
                'main/height': '60px',
                'main/width': '60px'
            },
        }
    },
    US_STOCK_BANNER_IMAGE: {
        extends: '',
        properties: {
            phone: {
                'main/height': '250px',
                'main/width': ' 0 auto'
            },
            tab: {
                'main/height': '400px',
            },
            desktop: {
                'main/display': 'none',
            },
        }
    },
    US_STOCK_BANNER_IMAGE_DESKTOP: {
        extends: '',
        properties: {
            phone: {
                'main/display': 'none',
            },
            tab: {
                'main/display': 'none',
            },
            desktop: {
                'main/display': 'block',
                'main/height': '650px',
                'main/width': '500px'
            },
        }
    },
    IMAGE_INLINE_LOGO_US_STOCK: {
        extends: '',
        properties: {
            phone: {
                'main/width': '212px',
            },
            tab: {
                'main/width': '348px',
            },
            desktop: {
                'main/width': '478px'
            },
        }
    },
    IMAGE_INLINE_LOGO_US_STOCK_2: {
        extends: '',
        properties: {
            phone: {
                'main/width': '150px',
            },
            tab: {
                'main/width': '200px',
            },
            desktop: {
                'main/width': '278px'
            },
        }
    },
};

export default imageVariant;
