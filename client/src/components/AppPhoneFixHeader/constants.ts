import { LOGOS_URL_MAP } from '../../constants/AssetConstants';

const NAV_LINK_DATA = [
    { name: 'Home', menuLabel: 'home', url: '/' },
    { name: 'What’s Fi', menuLabel: 'about', url: '/about' },
    { name: 'Team', menuLabel: 'our team', url: '/teams' },
    { name: 'Careers', menuLabel: 'careers', url: '/careers' },
    { name: 'Contact Us', menuLabel: 'contact us', url: '/contact-us' },
    { name: 'Salary Account', menuLabel: 'salary account', url: '/open-salary-account-online' },
    { name: 'All Features', menuLabel: 'features', url: '/features' },
    { name: 'Mutual Funds', menuLabel: 'mutual funds', url: '/features/mutual-funds' },
    { name: 'Jump', menuLabel: 'jump', url: '/features/jump' },
    { name: 'Connected Accounts', menuLabel: 'connected accounts', url: '/features/connect-all-your-bank-accounts' },
    { name: 'Payments', menuLabel: 'payments', url: '/features/pay-with-fi' },
    { name: 'Ask Fi', menuLabel: 'ask fi', url: '/features/ask-fi' },
    { name: 'Fees', menuLabel: 'fees', url: '/fees' },
    {
        name: 'Guides', menuLabel: 'blog', external: true, url: '/blog',
    },
    // { name: 'Calculators', menuLabel: 'calculators', url: '/calculators' },
    // { name: 'FAQ', menuLabel: 'faq', url: '/FAQs' },
];

const SOCIAL_MEDIA_LINK_DATA = [
    {
        id: 1,
        name: 'instagram',
        icon: LOGOS_URL_MAP.INSTAGRAM_WHITE,
        link: 'https://www.instagram.com/bankonfi',
    },
    {
        id: 2,
        name: 'twitter',
        icon: LOGOS_URL_MAP.TWITTER_WHITE,
        link: 'https://www.twitter.com/Bank_on_Fi',
    },
    {
        id: 3,
        name: 'linkedin',
        icon: LOGOS_URL_MAP.LINKEDIN_WHITE,
        link: 'https://www.linkedin.com/company/epifi',
    },
];

export {
    NAV_LINK_DATA,
    SOCIAL_MEDIA_LINK_DATA,
};
