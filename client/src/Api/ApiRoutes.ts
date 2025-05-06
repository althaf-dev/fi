const API_URL = '/api/v1';
const API_URL_V2 = '/api/v2';

const WAITLIST_URL = `${API_URL}/waitlist`;
const UTILS_URL = `${API_URL}/utils`;
const FAQ_URL = `${API_URL}/faq`;
const FAQ_URL_V2 = `${API_URL_V2}/faq`;
const AUTH_URL = `${API_URL}/auth`;
const INSIGHTS_URL = `${API_URL}/insights`;
const CUSTOMER_AUTH_URL = `${API_URL}/customer-auth`;
const COMMUNITY_URL = `${API_URL}/community`;
const META_INFO_URL = `${API_URL}/meta-info`;
const CONSUL_URL = `${API_URL}/consul`;
const GOOGLE_SHEET_URL = `${API_URL}/google-sheet`;
const CX_SUPPORT_URL = `${API_URL}/cx-support`;
const SALARY_ACCOUNT_SIGNUP_URL = `${API_URL}/salary-account-signup`;
const CREDIT_CARD_WAITLIST_URL = `${API_URL}/waitlist`;
const CREDIT_CARD_ELIGIBILITY_URL = `${API_URL}/eligibility`;
const MIN_KYC_CLOSED_ACCOUNT_URL = `${API_URL}/min-kyc-closed-account`;

/* b2b page api routes */
const B2B_CREATE_LEAD_URL = `${API_URL}/b2b/create-lead-and-send-otp`;
const B2B_VERIFY_OTP_URL = `${API_URL}/b2b/verify-otp`;
const DOMAIN_DETAILS__URL = `${API_URL}/b2b/get-domain-details`;
const DOMAIN_RECORD_URL = `${API_URL}/b2b/record_domain`;

/* us stocks api routes */
const US_STOCKS_ROOT = `${API_URL}/us-stocks`;
const USS_DETAILS_ENDPOINT = `${US_STOCKS_ROOT}/stocks-details`;
const USS_COLLECTIONS_ENDPOINT = `${US_STOCKS_ROOT}/collections`;
const USS_SYMBOL_HISTORICAL_PRICES_ENDPOINT = `${US_STOCKS_ROOT}/symbol-historical-prices`;
const USS_SYMBOL_UPDATES_ENDPOINT = `${US_STOCKS_ROOT}/symbol-updates`;
const USS_SYMBOL_DECISION_FACTORS_ENDPOINT = `${US_STOCKS_ROOT}/symbol-decision-factors`;
const USS_SYMBOL_VALIDATION_ENDPOINT = `${US_STOCKS_ROOT}/symbol-validation`;

export {
    WAITLIST_URL,
    UTILS_URL,
    FAQ_URL,
    FAQ_URL_V2,
    AUTH_URL,
    INSIGHTS_URL,
    CUSTOMER_AUTH_URL,
    COMMUNITY_URL,
    META_INFO_URL,
    CONSUL_URL,
    GOOGLE_SHEET_URL,
    CX_SUPPORT_URL,
    SALARY_ACCOUNT_SIGNUP_URL,
    CREDIT_CARD_WAITLIST_URL,
    USS_DETAILS_ENDPOINT,
    USS_COLLECTIONS_ENDPOINT,
    USS_SYMBOL_HISTORICAL_PRICES_ENDPOINT,
    USS_SYMBOL_UPDATES_ENDPOINT,
    USS_SYMBOL_DECISION_FACTORS_ENDPOINT,
    USS_SYMBOL_VALIDATION_ENDPOINT,
    B2B_CREATE_LEAD_URL,
    B2B_VERIFY_OTP_URL,
    DOMAIN_DETAILS__URL,
    CREDIT_CARD_ELIGIBILITY_URL,
    MIN_KYC_CLOSED_ACCOUNT_URL,
    DOMAIN_RECORD_URL,
};
