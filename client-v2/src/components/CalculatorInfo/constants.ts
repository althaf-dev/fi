import { CALCULATOR_IMG_URL_MAP } from '@/constants/AssetConstants';

export const BUDGET_CALCULATOR = 'https://fi.money/calculators/ppf-calculator';
export const RENT_VS_BUY_CALCULATOR = 'https://fi.money/calculators/rent-vs-buy-calculator';
export const FIXED_DEPOSIT_CALCULATOR = 'https://fi.money/calculators/fixed-deposit-calculator';
export const MUTUAL_FUND_GOAL_CALCULATOR = 'https://fi.money/calculators/mutual-fund-goal-calculator';
export const MUTUAL_FUND_SIP_CALCULATOR = 'https://fi.money/calculators/mutual-fund-sip-calculator';
export const PERSONAL_LOAN_EMI_CALCULATOR = 'https://fi.money/calculators/personal-loan-emi-calculator';
export const NPS_CALCULATOR = 'https://fi.money/calculators/nps-calculator';
export const HRA_CALCULATOR = 'https://fi.money/calculators/hra-calculator';
export const GRATUITY_CALCULATOR = 'https://fi.money/calculators/gratuity-calculator';
export const EPF_CALCULATOR = 'https://fi.money/calculators/epf-calculator';
export const CAGR_CALCULATOR = 'https://fi.money/calculators/cagr-calculator';
export const INFLATION_CALCULATOR = 'https://fi.money/calculators/inflation-calculator';
export const CREDIT_CARD_INTEREST_RATE_CALCULATOR = 'https://fi.money/calculators/credit-card-interest-rate-calculator';
export const DEBIT_CARD = 'https://fi.onelink.me/GvZH/p8lgp5wy';

export type Calculator = {
    href: string;
    imgSrc: string;
    name: string;
};

export const calculators: Calculator[] = [
    { href: BUDGET_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.BANK_IMG, name: 'Budget calculator' },
    { href: RENT_VS_BUY_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.RENT_BUY_IMG, name: 'Rent vs Buy Calculator' },
    { href: FIXED_DEPOSIT_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.FIXED_DEPOSIT_IMG, name: 'Fixed Deposit Calculator' },
    { href: MUTUAL_FUND_GOAL_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.MUTUAL_FUND_GOAL_IMG, name: 'Mutual Fund Goal Calculator' },
    { href: MUTUAL_FUND_SIP_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.MUTUAL_FUND_SIP_IMG, name: 'Mutual Fund SIP Calculator' },
    { href: PERSONAL_LOAN_EMI_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.PERSONAL_LOAN_EMI_IMG, name: 'Personal Loan EMI Calculator' },
    { href: NPS_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.NPS_IMG, name: 'NPS Calculator' },
    { href: HRA_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.HRA_IMG, name: 'HRA Calculator' },
    { href: GRATUITY_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.GRATUITY_IMG, name: 'Gratuity Calculator' },
    { href: EPF_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.EPF_IMG, name: 'EPF Calculator' },
    { href: CAGR_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.CAGR_IMG, name: 'CAGR Calculator' },
    { href: INFLATION_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.INFLATION_IMG, name: 'Inflation Calculator' },
    { href: CREDIT_CARD_INTEREST_RATE_CALCULATOR, imgSrc: CALCULATOR_IMG_URL_MAP.CREDIT_CARD_IMG, name: 'Credit Card Interest Rate Calculator' },
];
