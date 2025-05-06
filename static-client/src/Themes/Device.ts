export const size = {
    phone: '360px',
    high_res_phone: '820px',
    // tab: '610px',
    tab: '768px',
    desktop: '1290px',
    medium: '1440px',
    big: '1760px',
};

// Adding height for height-based device changes.
const height = {
    phone: '740px',
};

export const DEVICE_HEIGHT = {
    phone: `(max-height: ${height.phone})`,
};

export const Device = {
    phone: `(min-width: ${size.phone})`,
    high_res_phone: `(min-width: ${size.high_res_phone})`,
    tab: `(min-width: ${size.tab})`,
    desktop: `(min-width: ${size.desktop})`,
    medium: `(min-width: ${size.medium})`,
    big: `(min-width: ${size.big})`,
};

export const MAX_WIDTH_MEDIA_SCREENS = {
    phone: `(max-width: ${size.tab})`,
    high_res_phone: `(max-width: ${size.high_res_phone})`,
    tab: `(max-width: ${size.desktop})`,
    desktop: `(max-width: ${size.medium})`,
    medium: `(max-width: ${size.big})`,
};

export const WINDOW_SIZE = {
    PHONE: 360,
    // TAB: 610,
    TAB: 768,
    HIGH_RES_PHONE: 820,
    DESKTOP: 1290,
    MEDIUM: 1440,
    BIG: 1760,
};
