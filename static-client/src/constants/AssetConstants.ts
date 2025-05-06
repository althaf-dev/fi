// TODO: need to add a logic to load s3 icons in local & cdn url in non-prod/prod instances
const EPIFI_ICONS_S3_URL = 'https://epifi-icons.s3.ap-south-1.amazonaws.com/web';
const NON_PROD_CDN_URL = 'https://dviqqotdqrydv.cloudfront.net';
const PROD_CDN_URL = 'https://dza2kd7rioahk.cloudfront.net';

// Please change this URL for development purpose
// Eg: https://dza2kd7rioahk.cloudfront.net/assets/loan-template/webp/no_hidden.webp

const DEV_URL = PROD_CDN_URL;

const ASSETS_URL = `${DEV_URL}/assets`;
const LOTTIES_URL = `${ASSETS_URL}/lotties/`;
const PNGS_URL = `${ASSETS_URL}/pngs/`;
const SVGS_URL = `${ASSETS_URL}/svgs/`;
const WEBP_URL = `${ASSETS_URL}/webp/`;
const ICONS_URL = `${ASSETS_URL}/icons/`;
const VIDEOS_URL = `${ASSETS_URL}/videos/`;
const LOGOS_URL = `${ASSETS_URL}/logos/`;
const TEAM_URL = `${ASSETS_URL}/team/`;
const JPGS_URL = `${ASSETS_URL}/jpgs/`;
const AUDIOS_URL = `${ASSETS_URL}/audios/`;
const FI_MINUTES_URL = `${ASSETS_URL}/fi-minutes/`;
const SALARY_ACCOUNT_URL = `${ASSETS_URL}/salary-account/`;
const DEBIT_CARD_URL = `${ASSETS_URL}/debit-card/`;
const LOAN_TEMPLATE = `${ASSETS_URL}/loan-template/`;
const ATM_LIMIT = `${DEBIT_CARD_URL}atm-limit/`;
const TRAVEL_FEST = `${DEBIT_CARD_URL}travel-fest/`;
const CALCULATOR_URL = `${ASSETS_URL}/calculators/`;
const SEARCH_BAR_URL = `${DEBIT_CARD_URL}travel/`;
const NRE_ACCOUNT_URL = `${ASSETS_URL}/nre-account/`;

const LOTTIES_URL_MAP = {
};

const ICONS_URL_MAP = {
    RIGHT_ARROW: `${SVGS_URL}arrow-right.svg`,
    RIGHT_ARROW_V2: `${ICONS_URL}right-arrow.svg`,
    ACTIVE_RIGHT_ARROW: `${SVGS_URL}arrow-right-active.svg`,
    TOP_RIGHT_ARROW: `${SVGS_URL}top-right-arrow.svg`,
    GREY_TOP_RIGHT_ARROW: `${SVGS_URL}top-right-arrow-dark.svg`,
    GREY_RIGHT_ARROW: `${SVGS_URL}right-arrow_grey.svg`,
    FADE_RIGHT_ARROW: `${SVGS_URL}fade-right_arrow.svg`,
    WHITE_RIGHT_ARROW: `${ICONS_URL}right-arrow_white.svg`,
    WHITE_RIGHT_ARROW_V2: `${SVGS_URL}right-arrow_white_v2.svg`,
    GREEN_RIGHT_ARROW: `${SVGS_URL}green-right-arrow.svg`,
    LEFT_ARROW: `${SVGS_URL}arrow-left.svg`,
    WHITE_LEFT_ARROW: `${SVGS_URL}left-arrow_white.svg`,
    LEFT_SCROLL_ARROW: `${SVGS_URL}left-green-scroll.svg`,
    ACTIVE_LEFT_ARROW: `${SVGS_URL}arrow-left-active.svg`,
    GREY_LEFT_ARROW: `${SVGS_URL}left-arrow_grey.svg`,
    UP_ARROW: `${ICONS_URL}up-arrow.svg`,
    UP_ARROW_V2: `${SVGS_URL}arrow-up.svg`,
    WHITE_UP_ARROW: `${SVGS_URL}arrow-white-up.svg`,
    DOWN_ARROW: `${ICONS_URL}down-arrow.svg`,
    DOWN_ARROW_V2: `${SVGS_URL}arrow-down.svg`,
    WHITE_DOWN_ARROW: `${SVGS_URL}arrow-white-down.svg`,
    BOTTOM_ARROW: `${SVGS_URL}arrow-bottom.svg`,
    BOTTOM_ARROW_V2: `${ICONS_URL}bottom-arrow.svg`,
    DROPDOWN_BOTTOM_ARROW: `${SVGS_URL}dropdown-bottom_arrow.svg`,
    GREY_BOTTOM_ARROW: `${ICONS_URL}bottom-arrow_grey.svg`,
    TOP_ARROW_V2: `${ICONS_URL}top-arrow.svg`,
    CHECK: `${ICONS_URL}check.svg`,
    CLOSE: `${SVGS_URL}close.svg`,
    EXTERNAL_LINK: `${SVGS_URL}external-link.svg`,
    CLOSE_CROSS_WHITE: `${SVGS_URL}cross-button.svg`,
    SHARE_WHITE: `${SVGS_URL}share-icon.svg`,
    TOP_RIGHT_ARROW_GREEN: `${SVGS_URL}top-right-arrow-green.svg`,
    TOOLTIP: `${SVGS_URL}tooltip.svg`,
    GREEN_UP_ARROW: `${SVGS_URL}up-arrow_green.svg`,
    GREEN_DOWN_ARROW: `${SVGS_URL}down-arrow_green.svg`,
    TIMER_ICON: `${SVGS_URL}Timer.svg`,
    GREEN_CHECK_ICON: `${SVGS_URL}check-green.svg`,
    GREEN_SHARE_LINK: `${SVGS_URL}share-link-green-icon.svg`,
    PCI_ICON_V2: `${SVGS_URL}pci-v2.svg`,
    BHIM_LOGO: `${SVGS_URL}bhim-logo.svg`,
    SECURE_LOGO: `${SVGS_URL}secure.svg`,
    LIQUILOAN_V2: `${SVGS_URL}liquilogo-v2.svg`,
    LOCK_LOGO: `${SVGS_URL}lock.svg`,
    GREEN_UP_ARROW_V2: `${SVGS_URL}green-up-arrow.svg`,
    SOLID_LOGO: `${SVGS_URL}solid.svg`,
    X_LOGO_V2: `${SVGS_URL}x-logo-border.svg`,
    GREEN_UP_ARROW_V3: `${SVGS_URL}green-up-arrow-2.svg`,
    SHARE_ICON: `${SVGS_URL}share-link-border.svg`,
    EPIFI_WEALTH_LOGO_V2: `${SVGS_URL}epifi-wealth-logo-2.svg`,
    FINVU_LOGO: `${SVGS_URL}finvu.svg`,
    LINKEDIN_LOGO_V2: `${SVGS_URL}linkedin-logo-border.svg`,
    ONEMONEY_LOGO: `${SVGS_URL}onemoney-logo.svg`,
    VISA_LOGO_2: `${SVGS_URL}visa-2.svg`,
    CHEVRON_LEFT_BLUE: `${SVGS_URL}chevron-left-blue.svg`,

};

const NOT_FOUND_IMG = `${WEBP_URL}not-found.webp`;

const LOGOS_URL_MAP = {
    FI_LOGO: `${SVGS_URL}logo.svg`,
    FI_LOGO_V2: `${SVGS_URL}fi-logo.svg`,
    FI_LOGO_FOOTER: `${SVGS_URL}logo-footer.svg`,
    PLAY_STORE_BLACK: `${LOGOS_URL}play-store_black.png`,
    PLAY_STORE_WHITE: `${LOGOS_URL}play-store_white.png`,
    APP_STORE_BLACK: `${LOGOS_URL}app-store_black.png`,
    APP_STORE_WHITE: `${LOGOS_URL}app-store_white.png`,
    INSTAGRAM_WHITE: `${SVGS_URL}instagram-white.svg`,
    INSTAGRAM_GREY: `${SVGS_URL}instagram-logo.svg`,
    TWITTER_WHITE: `${SVGS_URL}twitter-white.svg`,
    TWITTER_GREY: `${SVGS_URL}twitter-logo.svg`,
    TWITTER_BLUE: `${PNGS_URL}twitter-blue.png`,
    LINKEDIN_WHITE: `${SVGS_URL}linkedin-white.svg`,
    LINKEDIN_GREY: `${SVGS_URL}linkedin-logo.svg`,
    LINKEDIN_BLUE: `${PNGS_URL}linkedin-blue.png`,
    HEADPHONE: `${PNGS_URL}headphone.png`,
    FEDERAL: `${LOGOS_URL}federal.png`,
    FEDERAL_SHORT: `${LOGOS_URL}federal-short.png`,
    VISA: `${LOGOS_URL}visa.png`,
    NPCI: `${LOGOS_URL}npci.png`,
    PCI: `${LOGOS_URL}pci.png`,
    EPIFI_WEALTH: `${LOGOS_URL}epifi-wealth.png`,
    PCI_ISO_LOGO: `${LOGOS_URL}pci-iso.png`,
    ALPACA_LOGO: `${LOGOS_URL}alpaca-logo.png`,
    LIQUI_LOANS_LOGO: `${LOGOS_URL}liqui-loans-logo.png`,
    FI_FEDERAL: `${LOGOS_URL}fi-federal.png`,
    FI_VISA: `${LOGOS_URL}fi-visa.png`,
    FI_PCI: `${LOGOS_URL}fi-pci.png`,
    VALUEBACK_STAR: `${LOGOS_URL}valueback-star.png`,
    IDFC_LOGO: `${SVGS_URL}idfc.svg`,
};

const DEBIT_CARD_IMG_URL_MAP = {
    STAR_WITHOUT_BG: `${DEBIT_CARD_URL}svgs/star-without-bg.svg`,
    GLOBE_COINS_FULL: `${DEBIT_CARD_URL}webp/globe-coins-full.webp`,
    PASSPORT_DEBIT_CARD: `${DEBIT_CARD_URL}gif/passport-debit-card.gif`,
    DEBIT_CARD_PAYMENT: `${DEBIT_CARD_URL}webp/debit-card-payment.webp`,
    CASH_CARD: `${DEBIT_CARD_URL}webp/cash-card.webp`,
    ONLINE_PAYMENT: `${DEBIT_CARD_URL}webp/online-payment.webp`,
    MONEY_SAVED: `${DEBIT_CARD_URL}webp/money-saved.webp`,
    MONEY_SAVED_MOBILE: `${DEBIT_CARD_URL}webp/money-saved-mob.webp`,
    MONEY_BAG: `${DEBIT_CARD_URL}svgs/money-bag.svg`,
    CROSS: `${DEBIT_CARD_URL}svgs/cross.svg`,
    TOP_RIGHT_ARROW: `${DEBIT_CARD_URL}svgs/top-right-arrow.svg`,
    DEBIT_CARD_COMPARISON: `${DEBIT_CARD_URL}webp/debit-card-comparison.webp`,
    DEBIT_CARD_COMPARISON_MOBILE: `${DEBIT_CARD_URL}webp/debit-card-comparison-mob.webp`,
    OFFERS_ICON: `${DEBIT_CARD_URL}svgs/offers-icon.svg`,
    WIFI_ICON: `${DEBIT_CARD_URL}svgs/wifi-icon.svg`,
    LOGIN_ICON: `${DEBIT_CARD_URL}svgs/login-icon.svg`,
    GLOBE_ICON: `${DEBIT_CARD_URL}svgs/globe-icon.svg`,
    TELEPHONE_ICON: `${DEBIT_CARD_URL}webp/telephone.webp`,
    ATM_IMAGE: `${DEBIT_CARD_URL}webp/atm.webp`,
    CARD_CUSTOMIZATION: `${DEBIT_CARD_URL}webp/card-customization.webp`,
    CARD_OFFERS: `${DEBIT_CARD_URL}webp/card-offers.webp`,
    FOUR_X: `${DEBIT_CARD_URL}webp/four-x.webp`,
    TWO_PERCENT: `${DEBIT_CARD_URL}webp/two-percent.webp`,
    TRUCK_ICON: `${DEBIT_CARD_URL}webp/truck.webp`,
    ZERO_IMAGE: `${DEBIT_CARD_URL}webp/zero.webp`,
    GEAR_ICON: `${DEBIT_CARD_URL}svgs/gear.svg`,
    INVERTED_COMMA: `${DEBIT_CARD_URL}svgs/inverted-comma.svg`,
    SHIELD_ICON: `${DEBIT_CARD_URL}svgs/shield.svg`,
    THUMBS_UP_ICON: `${DEBIT_CARD_URL}svgs/thumbs-up.svg`,
    TICK_ICON: `${DEBIT_CARD_URL}svgs/tick.svg`,
    MESSAGE_ICON: `${DEBIT_CARD_URL}webp/telephone-receiver.webp`,
}

const LOAN_TEMPLATE_URL_MAP = {
    ADJUST_INTEREST: `${LOAN_TEMPLATE}webp/adjust_interest.webp`,
    SAVE_MORE: `${LOAN_TEMPLATE}webp/save_more.webp`,
    REDUCE_INTEREST: `${LOAN_TEMPLATE}webp/reduce_interest.webp`,
    NO_CATCH: `${LOAN_TEMPLATE}webp/no_catch.webp`,
    ONE_MIN: `${LOAN_TEMPLATE}webp/one_min_mob.webp`,
    NO_HIDDEN: `${LOAN_TEMPLATE}webp/no_hidden.webp`,
    CHOOSE_LOAN: `${LOAN_TEMPLATE}webp/choose_loan.webp`,
    INTEREST_FREE: `${LOAN_TEMPLATE}webp/interest_free.webp`,
    ZERO_INTEREST: `${LOAN_TEMPLATE}webp/zero_interest_mob.webp`,
    SAY_HELLO: `${LOAN_TEMPLATE}webp/say_hello_mob.webp`,
}

const DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP = {
    POWERED_BY_ICON: `${TRAVEL_FEST}webp/powered-by.webp`,
    DATE_RANGE_IMG: `${TRAVEL_FEST}webp/date-validation.webp`,
    SUN_VISA_IMG: `${TRAVEL_FEST}webp/sunvisa.webp`,
    INTERNATIONAL_DEALS: `${TRAVEL_FEST}webp/international-deals.webp`,
    CASHBACK_100_IMG: `${TRAVEL_FEST}webp/cashback-100-percent.webp`,
    CASHBACK_ATM_IMG: `${TRAVEL_FEST}webp/caskback-atm-machine.webp`,
    CASHBACK_DESKTOP_IMG: `${TRAVEL_FEST}webp/cashback-old-desktop.webp`,
    BEACH_HOUSE_IMG: `${TRAVEL_FEST}webp/beach-house.webp`,
    TRAVEL_DEALS_IMG: `${TRAVEL_FEST}webp/travel-deals.webp`,
    TAXI_OFFERS_IMG: `${TRAVEL_FEST}webp/tax-35-percent.webp`,
    DUTY_FREE_OFFERS_IMG: `${TRAVEL_FEST}webp/duty-free-5-percent.webp`,
    FI_ICON: `${TRAVEL_FEST}webp/fi.webp`,
    FEDERAL_ICON: `${TRAVEL_FEST}webp/federal.webp`,
    KICK_STARTER_DEALS: `${TRAVEL_FEST}webp/kick-start-deals.webp`,
    MILESTONE_DEALS: `${TRAVEL_FEST}webp/milestone-deals.webp`,
    LINE_STAR_ICON: `${TRAVEL_FEST}webp/line-star.webp`,
    ARROW_ICON: `${TRAVEL_FEST}webp/arrow-icon.webp`,
    FLIGHT_OFFERS: `${TRAVEL_FEST}webp/flight-offers.webp`,
    TOURIST_ATTRACTION_OFFERS: `${TRAVEL_FEST}webp/tourist-offers.webp`,
    CARD_USAGE_SETTING: `${TRAVEL_FEST}webp/usage-setting.webp`,
    ATM_USAGE_SETTING: `${TRAVEL_FEST}webp/exchange-rate-iphone.webp`,
    TRAVEL_BENEFITS: `${TRAVEL_FEST}webp/limit-setting-iphone.webp`,
    ONE_ICON: `${TRAVEL_FEST}webp/one-icon.webp`,
    TWO_ICON: `${TRAVEL_FEST}webp/two-icon.webp`,
    THREE_ICON: `${TRAVEL_FEST}webp/three-icon.webp`,
    HOTEL_OFFERS: `${TRAVEL_FEST}webp/hotels-offer.webp`,
    DESKTOP_CASKBACK_IMG: `${TRAVEL_FEST}webp/desktop-cashback.webp`,
    DESKTOP_INTERNATIONAL_DEALS: `${TRAVEL_FEST}webp/desktop-international-deal.webp`,
    DESKTOP_KICK_STARTER_DEALS: `${TRAVEL_FEST}webp/desktop-kick-starter-deals.webp`,
    DESKTOP_MILESTONE_DEALS: `${TRAVEL_FEST}webp/desktop-milestone-deals.webp`,
    DESKTOP_OFFER_PERCENTAGE: `${TRAVEL_FEST}webp/desktop-offer-percentage.webp`,
    DESKTOP_ATM_USAGE: `${TRAVEL_FEST}webp/desktop-phone-atm-usage.webp`,
    DESKTOP_TRAVEL_DEALS_IMG: `${TRAVEL_FEST}webp/desktop-travel-deals-beach.webp`,
    DESKTOP_GIFT_BOX_ICON: `${TRAVEL_FEST}webp/gift-box.webp`,
}

const ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP = {
    ZERO_FOREX_CARD_IMG: `${ATM_LIMIT}webp/zeroFeroxCard.webp`,
    VISA_CARD_IMG: `${ATM_LIMIT}webp/debit-visa.webp`,
    ARROW_RIGHT: `${ATM_LIMIT}svgs/arrow-right.svg`,
    SEARCH_MAGNIFYING_GLASS: `${SEARCH_BAR_URL}svgs/magnifing-glass.svg`,
}

const CALCULATOR_IMG_URL_MAP = {
    BANK_IMG: `${CALCULATOR_URL}ppf-calculator/icon.png`,
    RENT_BUY_IMG: `${CALCULATOR_URL}rent-vs-buy-calculator/icon.png`,
    FIXED_DEPOSIT_IMG: `${CALCULATOR_URL}fixed-deposit-calculator/icon.png`,
    MUTUAL_FUND_GOAL_IMG: `${CALCULATOR_URL}mutual-fund-goal-calculator/icon.png`,
    MUTUAL_FUND_SIP_IMG: `${CALCULATOR_URL}mutual-fund-sip-calculator/icon.png`,
    PERSONAL_LOAN_EMI_IMG: `${CALCULATOR_URL}personal-loan-emi-calculator/icon.png`,
    NPS_IMG: `${CALCULATOR_URL}nps-calculator/icon.png`,
    HRA_IMG: `${CALCULATOR_URL}hra-calculator/icon.png`,
    GRATUITY_IMG: `${CALCULATOR_URL}gratutiy-calculator/icon.png`,
    EPF_IMG: `${CALCULATOR_URL}epf-calculator/icon.png`,
    CAGR_IMG: `${CALCULATOR_URL}cagr-calculator/icon.webp`,
    INFLATION_IMG: `${CALCULATOR_URL}inflation-calculator/icon.webp`,
    CREDIT_CARD_IMG: `${CALCULATOR_URL}credit-card-calculator/icon.webp`,
}

const NRE_ACCOUNT_IMG_URL_MAP = {
    BANK_ICON: `${NRE_ACCOUNT_URL}svgs/bank-icon.svg`,
    RUPEE_ICON: `${NRE_ACCOUNT_URL}svgs/rupee-icon.svg`,
    CARD_ICON: `${NRE_ACCOUNT_URL}svgs/card-icon.svg`,
    TAX_ICON: `${NRE_ACCOUNT_URL}svgs/tax-icon.svg`,
    STAR_ICON: `${NRE_ACCOUNT_URL}svgs/star-icon.svg`,
    STAR: `${NRE_ACCOUNT_URL}webp/star.webp`,
    SELFIE_VIDEO: `${NRE_ACCOUNT_URL}webp/selfie-video.webp`,
    FI_APP: `${NRE_ACCOUNT_URL}webp/fi-app.webp`,
    PHONE_PASSPORT: `${NRE_ACCOUNT_URL}webp/phone-passport.webp`,
    VKYC: `${NRE_ACCOUNT_URL}webp/vkyc.webp`,
    PHONE_PAN: `${NRE_ACCOUNT_URL}webp/phone-pan.webp`,
}

export {
    EPIFI_ICONS_S3_URL,
    ASSETS_URL,
    LOTTIES_URL_MAP,
    PNGS_URL,
    SVGS_URL,
    WEBP_URL,
    ICONS_URL,
    LOGOS_URL,
    JPGS_URL,
    ICONS_URL_MAP,
    LOGOS_URL_MAP,
    LOTTIES_URL,
    VIDEOS_URL,
    TEAM_URL,
    AUDIOS_URL,
    FI_MINUTES_URL,
    SALARY_ACCOUNT_URL,
    DEBIT_CARD_IMG_URL_MAP,
    LOAN_TEMPLATE_URL_MAP,
    DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP,
    NOT_FOUND_IMG,
    ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP,
    CALCULATOR_IMG_URL_MAP,
    NRE_ACCOUNT_IMG_URL_MAP,
};