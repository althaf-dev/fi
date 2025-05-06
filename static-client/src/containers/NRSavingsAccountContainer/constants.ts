import { LOGOS_URL_MAP, NRE_ACCOUNT_IMG_URL_MAP } from "@/constants/AssetConstants";

export const NR_SAVINGS_ACCOUNT_TRACKING_PAYLOAD = {
    channel: 'website',
    page_name: 'NRE NRO Savings Account Opening',
};

export const ACCOUNT_FEATURES = [
    {
      description: "Zero Balance Savings Account"
    },
    {
      description: "Free Internet & Mobile Banking"
    },
    {
      description: "RTGS / NEFT facility available"
    },
    {
      description: "Free unlimited clearing, collection and transfer"
    },
    {
      description: "Visa Signet Platinum International Debit card with ₹ 50000 daily limit for ATM withdrawal and ₹ 300000 daily limit for POS/ Shopping"
    },
    {
      description: "Free daily cash withdrawal up to Rs 20,000 through any branch."
    },
    {
      description: "40 Free cheque leaves every year"
    },
];

export const STEPS_DATA = [
    {
      title: "Download the Fi App",
      imageSrc: NRE_ACCOUNT_IMG_URL_MAP.FI_APP,
    },
    {
      title: "Add your PAN number",
      imageSrc: NRE_ACCOUNT_IMG_URL_MAP.PHONE_PAN,
    },
    {
      title: "Scan your Passport and Emirates ID",
      imageSrc: NRE_ACCOUNT_IMG_URL_MAP.PHONE_PASSPORT,
    },
    {
      title: 'Record a 15-sec selfie video',
      imageSrc: NRE_ACCOUNT_IMG_URL_MAP.SELFIE_VIDEO,
      description: 'It ensures no one is impersonating you.',
    },
    {
      title: 'Complete Video KYC with a Federal Agent',
      imageSrc: NRE_ACCOUNT_IMG_URL_MAP.VKYC,
      description: 'Keep important documents ready during video KYC verification',
    },
];

interface BenefitProps {
    icon: string;
    description: string;
  }
  
export const ACCOUNT_BENEFITS: BenefitProps[] = [
    {
      icon: NRE_ACCOUNT_IMG_URL_MAP.BANK_ICON,
      description: "Zero Balance Account",
    },
    {
      icon: NRE_ACCOUNT_IMG_URL_MAP.RUPEE_ICON,
      description: "Free daily cash withdrawal up to ₹20,000 at any branch",
    },
    {
      icon: NRE_ACCOUNT_IMG_URL_MAP.CARD_ICON,
      description: "Instant virtual debit card, UPI & payments within India"
    },
    {
      icon: NRE_ACCOUNT_IMG_URL_MAP.TAX_ICON,
      description: "Tax-free interest on NRE savings account",
    },
];

interface PartnerLogo {
    src?: string;
    alt?: string;
    width?: number;
    aspectRatio?: number;
    text?: string;
  }
  
export const PARTNER_LOGOS: PartnerLogo[] = [
    {
      src: LOGOS_URL_MAP.FEDERAL,
      alt: "Federal Bank Logo",
      width: 112,
      aspectRatio: 1.87,
    },
    {
      src: LOGOS_URL_MAP.VISA,
      alt: "Visa Logo",
      width: 72,
      aspectRatio: 1.2,
    },
    {
      src: LOGOS_URL_MAP.NPCI,
      alt: "NPCI Logo",
      width: 85,
      aspectRatio: 1.42,
    },
    {
      src: LOGOS_URL_MAP.FI_PCI,
      alt: "PCI Logo",
      width: 75,
      aspectRatio: 1.25,
    },
    {
      src: LOGOS_URL_MAP.EPIFI_WEALTH,
      alt: "Epifi Wealth Logo",
      width: 112,
      aspectRatio: 1.883,
    },
    {
      text: "ISO 27001:2013",
    }
];

export const CLICKED_NRE_NRO_SAVINGS_ACCOUNT_OPENING_BUTTON = 'ClickedNreNroSavingsAccountOpeningButton';
