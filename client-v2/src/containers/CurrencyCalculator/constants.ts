/**
 * This file contains constants for various financial calculators URLs.
 * Each constant represents the URL for a specific calculator.
 *
 */

type Currency = {
    code: string;
    name: string;
    flag: string;
    country: string;
};

export const currencies: Currency[] = [
    {
        code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', country: 'Singapore'
    },
    {
        code: 'AED', name: 'United Arab Emirates Dirham', flag: '🇦🇪', country: 'United Arab Emirates'
    },
    {
        code: 'USD', name: 'United States Dollar', flag: '🇺🇸', country: 'United States'
    },
    {
        code: 'EUR', name: 'Euro', flag: '🇪🇺', country: 'Eurozone'
    },
    {
        code: 'GBP', name: 'British Pound Sterling', flag: '🇬🇧', country: 'United Kingdom'
    },
    {
        code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', country: 'India'
    },
    {
        code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', country: 'Japan'
    },
    {
        code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', country: 'China'
    },
    {
        code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', country: 'Australia'
    },
    {
        code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', country: 'Canada'
    },
    {
        code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', country: 'Switzerland'
    },
    {
        code: 'ZAR', name: 'South African Rand', flag: '🇿🇦', country: 'South Africa'
    },
    {
        code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', country: 'Brazil'
    },
    {
        code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺', country: 'Russia'
    },
    {
        code: 'KRW', name: 'South Korean Won', flag: '🇰🇷', country: 'South Korea'
    },
    {
        code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', country: 'Mexico'
    },
    {
        code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', country: 'New Zealand'
    },
    {
        code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪', country: 'Sweden'
    },
    {
        code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴', country: 'Norway'
    },
    {
        code: 'DKK', name: 'Danish Krone', flag: '🇩🇰', country: 'Denmark'
    },
    {
        code: 'THB', name: 'Thai Baht', flag: '🇹🇭', country: 'Thailand'
    },
    {
        code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', country: 'Malaysia'
    },
    {
        code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', country: 'Philippines'
    },
    {
        code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩', country: 'Indonesia'
    },
    {
        code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', country: 'Saudi Arabia'
    }
];

export const popularCurrencies = [
    {
        code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', country: 'Singapore'
    },
    {
        code: 'AED', name: 'United Arab Emirates Dirham', flag: '🇦🇪', country: 'United Arab Emirates'
    },
    {
        code: 'USD', name: 'United States Dollar', flag: '🇺🇸', country: 'United States'
    },
    {
        code: 'EUR', name: 'Euro', flag: '🇪🇺', country: 'Eurozone'
    },
    {
        code: 'GBP', name: 'British Pound Sterling', flag: '🇬🇧', country: 'United Kingdom'
    },
    {
        code: 'DKK', name: 'Danish Krone', flag: '🇩🇰', country: 'Denmark'
    },
    {
        code: 'THB', name: 'Thai Baht', flag: '🇹🇭', country: 'Thailand'
    },
    {
        code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', country: 'Malaysia'
    },
];

export const content = {
    atmLimit: ['A PPF has a lot going for it. It’s a great investment tool, if you’re looking for a predictable way to stay on top of inflation over the years. But it also comes at a cost - your money is locked away for 15 years before you can actually get your hands on it.', 'This calculator is one way to know if the time investment is worth it. 15 years is a lifetime, after all. Interest rate aside, you make up to ₹1,50,000 of your income exempt from tax each year.'],
    calcUsage: ['For one, the PPF has been around for over 50 years now, and doesn’t look like it will be irrelevant anytime soon. But I guess we can never be sure. Here are some facts, though:', 'A majority of investors who rely on the Public Provident Fund as an investment option do so for its predictable nature of returns. Your returns are risk-free - this means it’s not subject to whatever state the stock market is in. ', 'You could literally open a PPF account in minutes from any of the major banks, and claim ₹1,50,000 of it as tax savings. Also, you could invest as little as ₹100 to begin with, and ₹500 each year to keep the investment going over 15 years.']
};
