// TODO: need to add a logic to load s3 icons in local & cdn url in non-prod/prod instances
const EPIFI_ICONS_S3_URL = 'https://epifi-icons.s3.ap-south-1.amazonaws.com/web';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NON_PROD_CDN_URL = 'https://dviqqotdqrydv.cloudfront.net';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PROD_CDN_URL = 'https://dza2kd7rioahk.cloudfront.net';

// please change this URL for development purpose
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

const LOTTIES_URL_MAP = {
    ASK_FI_MOBILE: `${LOTTIES_URL}search_responsive.json`,
    ASK_FI_DESKTOP: `${LOTTIES_URL}search_desktop.json`,
    CHAT_MOBILE: `${LOTTIES_URL}jargon_combined.json`,
    CHAT_DESKTOP: `${LOTTIES_URL}jargon_desktop.json`,
    CONNECTED_ACCOUNTS: `${LOTTIES_URL}connected_account.json`,
    FIT_RULES: `${LOTTIES_URL}fit_rules.json`,
    EMOTICONS: `${LOTTIES_URL}emoticons.json`,
    FI_AUDIO: `${LOTTIES_URL}fi_audio.json`,
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
};

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
    ABFL_LOGO: `${LOGOS_URL}abfl-logo.png`,
};

const FI_MINUTES_URL_MAP = {
    PLATE_WITH_HEART: `${FI_MINUTES_URL}plate-with-heart.png`,
    ERROR_BOUNDARY: `${FI_MINUTES_URL}Error.webp`,
};

const CLOSE_ICON_URL = `${SVGS_URL}close.svg`;

const CALANDER_LINK = 'https://calendar.app.google/4LZBjJk6rcL2LdQZ6';

export {
    EPIFI_ICONS_S3_URL,
    ASSETS_URL,
    LOTTIES_URL_MAP,
    PNGS_URL,
    SVGS_URL,
    WEBP_URL,
    ICONS_URL,
    VIDEOS_URL,
    LOGOS_URL,
    CLOSE_ICON_URL,
    TEAM_URL,
    JPGS_URL,
    ICONS_URL_MAP,
    LOGOS_URL_MAP,
    AUDIOS_URL,
    FI_MINUTES_URL_MAP,
    SALARY_ACCOUNT_URL,
    CALANDER_LINK,
};
