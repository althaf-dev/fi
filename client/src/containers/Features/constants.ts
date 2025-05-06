import AskFiPosterDekstopImage from '../../assets/pngs/ask-fi_poster.png';
import FitRulesPosterDektopImage from '../../assets/pngs/fit-rules_poster.png';
import JarsPosterDektopImage from '../../assets/pngs/jars_poster.png';
import RewardsPosterDektopImage from '../../assets/pngs/fi-rewards_poster.png';
import PaymentPosterDektopImage from '../../assets/pngs/payments_poster.png';
import DebitCardPosterDektopImage from '../../assets/pngs/debit-card_poster.png';
import MutualFundPosterDektopImage from '../../assets/pngs/mutual-fund_poster.png';
import ConnectedAccountPosterDektopImage from '../../assets/pngs/connected-account_poster.png';
import SecurityPosterDektopImage from '../../assets/pngs/fi-security_poster.png';

import AskFiPosterPhoneImage from '../../assets/pngs/ask-fi.png';
import FitRulesPosterPhoneImage from '../../assets/pngs/fi-fit_rules.png';
import JarsPosterPhoneImage from '../../assets/pngs/fi-jars.png';
import RewardsPosterPhoneImage from '../../assets/pngs/fi-rewards.png';
import PaymentPosterPhoneImage from '../../assets/pngs/payment.png';
import DebitCardPosterPhoneImage from '../../assets/pngs/fi-card.png';
import MutualFundPosterPhoneImage from '../../assets/pngs/mutual-fund.png';
import ConnectedAccountPosterPhoneImage from '../../assets/pngs/connected-account.png';
import SecurityPosterPhoneImage from '../../assets/pngs/fi-security.png';

import {
    ASK_FI_NO_FRAME_WEBM,
    ASK_FI_FRAME_WEBM,
    ASK_FI_MP4,
    ASK_FI_NO_FRAME_MP4,
    FIT_RULES_NO_FRAME_WEBM,
    FIT_RULES_WEBM,
    FIT_RULES_NO_FRAME_MP4,
    FIT_RULES_MP4,
    SMART_DEPOSIT_NO_FRAME_WEBM,
    SMART_DEPOSIT_WEBM,
    SMART_DEPOSIT_NO_FRAME_MP4,
    SMART_DEPOSIT_MP4,
    REWARDS_NO_FRAME_WEBM,
    REWARDS_WEBM,
    REWARDS_NO_FRAME_MP4,
    REWARDS_MP4,
    PAYMENTS_NO_FRAME_WEBM,
    PAYMENTS_WEBM,
    PAYMENTS_NO_FRAME_MP4,
    PAYMENTS_MP4,
    DEBIT_CARD_NO_FRAME_WEBM,
    DEBIT_CARD_WEBM,
    DEBIT_CARD_NO_FRAME_MP4,
    DEBIT_CARD_MP4,
    SECURITY_NO_FRAME_WEBM,
    SECURITY_WEBM,
    SECURITY_NO_FRAME_MP4,
    SECURITY_MP4,
} from '../../constants/AppConstant';

const VIDEO_SECTION = [
    {
        id: 1,
        mp4NoFrameVideo: ASK_FI_NO_FRAME_MP4,
        mp4FrameVideo: ASK_FI_MP4,
        webmNoFrameVideo: ASK_FI_NO_FRAME_WEBM,
        webmFrameVideo: ASK_FI_FRAME_WEBM,
        posterImage: AskFiPosterDekstopImage,
        posterPhoneImage: AskFiPosterPhoneImage,
    },
    {
        id: 2,
        mp4NoFrameVideo: FIT_RULES_NO_FRAME_MP4,
        mp4FrameVideo: FIT_RULES_MP4,
        webmNoFrameVideo: FIT_RULES_NO_FRAME_WEBM,
        webmFrameVideo: FIT_RULES_WEBM,
        posterImage: FitRulesPosterDektopImage,
        posterPhoneImage: FitRulesPosterPhoneImage,
    },
    {
        id: 3,
        mp4NoFrameVideo: SMART_DEPOSIT_NO_FRAME_MP4,
        mp4FrameVideo: SMART_DEPOSIT_MP4,
        webmNoFrameVideo: SMART_DEPOSIT_NO_FRAME_WEBM,
        webmFrameVideo: SMART_DEPOSIT_WEBM,
        posterImage: JarsPosterDektopImage,
        posterPhoneImage: JarsPosterPhoneImage,
    },
    {
        id: 4,
        mp4NoFrameVideo: REWARDS_NO_FRAME_MP4,
        mp4FrameVideo: REWARDS_MP4,
        webmNoFrameVideo: REWARDS_NO_FRAME_WEBM,
        webmFrameVideo: REWARDS_WEBM,
        posterImage: RewardsPosterDektopImage,
        posterPhoneImage: RewardsPosterPhoneImage,
    },
    {
        id: 5,
        mp4NoFrameVideo: PAYMENTS_NO_FRAME_MP4,
        mp4FrameVideo: PAYMENTS_MP4,
        webmNoFrameVideo: PAYMENTS_NO_FRAME_WEBM,
        webmFrameVideo: PAYMENTS_WEBM,
        posterImage: PaymentPosterDektopImage,
        posterPhoneImage: PaymentPosterPhoneImage,
    },
    {
        id: 6,
        mp4NoFrameVideo: DEBIT_CARD_NO_FRAME_MP4,
        mp4FrameVideo: DEBIT_CARD_MP4,
        webmNoFrameVideo: DEBIT_CARD_NO_FRAME_WEBM,
        webmFrameVideo: DEBIT_CARD_WEBM,
        posterImage: DebitCardPosterDektopImage,
        posterPhoneImage: DebitCardPosterPhoneImage,
    },
    {
        id: 7,
        posterImage: MutualFundPosterDektopImage,
        posterPhoneImage: MutualFundPosterPhoneImage,
    },
    {
        id: 8,
        posterImage: ConnectedAccountPosterDektopImage,
        posterPhoneImage: ConnectedAccountPosterPhoneImage,
    },
    {
        id: 9,
        mp4NoFrameVideo: SECURITY_NO_FRAME_MP4,
        mp4FrameVideo: SECURITY_MP4,
        webmNoFrameVideo: SECURITY_NO_FRAME_WEBM,
        webmFrameVideo: SECURITY_WEBM,
        posterImage: SecurityPosterDektopImage,
        posterPhoneImage: SecurityPosterPhoneImage,
    },
];

const ASK_FI = {
    title: 'Ask.Fi',
    id: '1',
    FI_DATA: [
        {
            id: '1',
            title: 'Know your spends',
            description: 'Get personalised insights into your spends across bank accounts & merchants. Try asking - “What’s my balance across savings accounts?”',
        },
        {
            id: '2',
            title: 'Find your way around Fi',
            description: 'Navigate through the app like a pro. Ask.Fi anything from “Show debit card offers” to “Where can I get my account statement?”',
        },
        {
            id: '3',
            title: 'The devil is in the details',
            description: 'Dive into the fine print. Get answers to “What’s my account number”, “What’s my IFSC code” and more in a jiffy!',
        },
        {
            id: '4',
            title: 'Get stuff done',
            description: 'You can Ask.Fi to “Pay Priyal”, “Open a Smart Deposit”, or “Download Statement”. One command, and you’re sorted!',
        },
    ],
};

const FIT_RULES = {
    title: 'FIT Rules',
    id: '2',
    FI_DATA: [
        {
            id: '1',
            title: 'Move it without knowing it',
            description: 'You know how you want to start saving next month? Well, FIT can help with that procrastination. FIT Rules helps you move money automatically from your savings account to your Jars - you choose how much and how often. Just set up a rule once and watch your savings grow.',
        },
        {
            id: '2',
            title: 'Make saving fun',
            description: 'Save more from day-to-day events. Just make a FIT rule to put aside ₹100 when Kohli hits a 6 or everytime you order in from Zomato.',
        },
        {
            id: '3',
            title: 'Treat yourself for being good',
            description: 'Need a social media detox? It’s easier now with a FIT rule that puts aside ₹50 every time you spend less than an hour on Instagram or Netflix.',
        },
    ],
};

const JARS = {
    title: 'Jars',
    id: '3',
    FI_DATA: [
        {
            id: '1',
            title: 'Save on a whim',
            description: 'Start just about anywhere! Make a Fi Jar by depositing as little as ₹300 and keep adding when you have some cash to spare.',
        },
        {
            id: '2',
            title: 'Save for things that matter',
            description: 'Organise your savings and set clear goals. iPhone, Maldives Vacay, anything goes. Save for them in separate Jars and watch them all grow.',
        },
        {
            id: '3',
            title: 'Easy come, easy grow',
            description: 'Earn more interest than you’d get in a savings account. Choose from flexible Smart Deposit Jars and long-term Fixed Deposits Jars.',
        },
    ],
};

const REWARDS = {
    title: 'Rewards',
    id: '4',
    FI_DATA: [
        {
            id: '1',
            title: 'Get rewards for being good',
            description: 'Save more using FIT rules, make routine payments, and get rewarded for it! Earn much-coveted cash rewards and Fi-Coins.',
        },
        {
            id: '2',
            title: 'Redemption is sweet',
            description: 'Redeem your Fi-Coins to get super cool goodies and gift vouchers. The best part? Choose from a curated catalogue featuring top brands.',
        },
    ],
};

const PAY = {
    title: 'Pay',
    id: '5',
    FI_DATA: [
        {
            id: '1',
            title: 'Pay like you play',
            description: 'Pay using any mode - UPI and QR scanning, debit card, bank transfers that include NEFT, IMPS, and RTGS, at no extra charge.',
        },
        {
            id: '2',
            title: 'We do the math for you',
            description: 'Just add account details of the receiver & the amount to be sent, and we’ll choose the best and most secure method of payment for you.',
        },
        {
            id: '3',
            title: 'Search, filter and export',
            description: 'Looking for transactions doesn’t have to be a mind-bender. Choose, filter, and export transactions in a few steps.',
        },
    ],
};

const DEBIT_CARD = {
    title: 'Debit Card',
    id: '6',
    FI_DATA: [
        {
            id: '1',
            title: 'It’s one loaded card',
            description: 'Who doesn’t like a good offer! Use the debit card to get cool offers on Amazon, Myntra, Zomato, and many more brands.',
        },
        {
            id: '2',
            title: 'EUR, USD, at no extra charge',
            description: 'Make international payments minus the pesky fees. With our debit card there’s no Forex markup on international transactions.',
        },
        {
            id: '3',
            title: 'You control your card',
            description: 'Lost your debit card? Freeze it with just a tap. Found it? Unfreeze it with a tap! Your card’s control is always in your hands.',
        },
    ],
};

const MUTUAL_FUNDS = {
    title: 'Mutual Funds',
    id: '7',
    FI_DATA: [
        {
            id: '1',
            title: 'Up your investing game',
            description: 'Choose from 100s of mutual funds to invest in. Browse and filter through your funds based on risk, growth, fund type and more. That’s not all, automate your investing using FIT Rules and invest based on conditions chosen by you - like investing each time you shop online.',
        },
        {
            id: '2',
            title: 'Filter like pro',
            description: 'Enjoy using filters on pics? Try them on mutual funds. Pick funds based on fund manager, risk, returns and more.',
        },
        {
            id: '3',
            title: 'Collection drops you’ll love',
            description: 'Why should your wardrobe have all the fun? Enjoy collections on mutual funds, browse through a curated list of funds to suit different needs from beginners to advanced investors',
        },
    ],
};

const CONNECTED_ACCOUNTS = {
    title: 'Connected Accounts',
    id: '8',
    FI_DATA: [
        {
            id: '1',
            title: 'Bank accounts, assemble!',
            description: 'You no longer need an app for every savings account you own. Just connect your bank accounts right here on Fi, using RBI’s Account Aggregator. See all your bank balances and transactions on Fi. The data is only yours to share, and is fully encrypted.',
        },
        {
            id: '2',
            title: 'Search across your accounts',
            description: 'Not sure which account you paid from? Use Ask Fi to search across your bank accounts for transactions and find the answers you’ve been looking for.',
        },
        {
            id: '3',
            title: 'Know what you’ve been up to',
            description: 'Get a detailed analysis of how you’ve been spending, saving or investing. See your spending history visualised as graphs, and never be lost for answers again.',
        },
    ],
};

const FI_SECURE = {
    title: 'Fi Secure',
    id: '9',
    FI_DATA: [
        {
            id: '1',
            title: 'As safe as any bank',
            description: 'Your safety is serious business. Fi’s banking partner, Federal Bank, follows all the security standards as per RBI guidelines. Your money is also insured up to ₹5 lakh, and your data is protected by our PCI DSS certified security system.',
        },
        {
            id: '2',
            title: 'Privacy is a priority',
            description: 'We aim for the highest standards of safety, security and confidentiality when using your data to help protect it.',
        },
        {
            id: '3',
            title: 'Only at your fingertips',
            description: 'Your digital bank account with Fi can only be accessed via your smartphone - rest assured only you have access to your money.',
        },
    ],
};

const trackingPayload = {
    flow_name: 'website',
    channel: 'website',
    page_name: 'features page',
};

interface FiDataResponse {
    id: string,
    title: string,
    description: string
}

interface featurePageSectionObjResponse {
    title: string,
    id: string,
    FI_DATA: Array<FiDataResponse>
}

interface ScrollingAnimationObject {
    activeIndex: number;
    transactionValue: number;
}

export {
    ASK_FI,
    FIT_RULES,
    JARS,
    REWARDS,
    PAY,
    DEBIT_CARD,
    MUTUAL_FUNDS,
    CONNECTED_ACCOUNTS,
    FI_SECURE,
    VIDEO_SECTION,
    featurePageSectionObjResponse,
    ScrollingAnimationObject,
    trackingPayload,
};
