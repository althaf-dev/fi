import { combineReducers } from 'redux';

import appReducer from '../../containers/App/reducers';
import faqReducer from '../../containers/Faq/reducers';
import insightReducer from '../../containers/Insights/reducers';
import customerAuthReducer from '../../containers/CustomerAuth/reducers';
import wealthTncReducer from '../../containers/WealthTnC/reducers';
import calculatorsReducer from '../../containers/Calculators/reducers';
import cxSupportReducer from '../../containers/CxSupport/reducers';
import salaryAccountSignUpReducer from '../../containers/SalaryAccountSignUp/reducers';
import minKycClosedAccountReducer from '../../containers/MinKycClosedAccount/reducers';
import creditCardWaitlistReducer from '../../containers/CreditCardWaitlist/reducers';
import usStockReducer from '../../containers/FeaturesPages/reducers';
import salaryAccountHRReducer from '../../containers/B2BSalaryAccountHR/reducers';
import creditCardEligibilityReducer from '../../containers/CreditCardEligibility/reducers';

import { CALCULATORS_KEY } from '../../containers/Calculators/constants';
import { SALARY_ACCOUNT_SIGNUP_KEY } from '../../containers/SalaryAccountSignUp/constants';
import { CREDIT_CARD_WAITLIST_KEY } from '../../containers/CreditCardWaitlist/constants';
import { US_STOCKS_KEY } from '../../containers/FeaturesPages/constants';
import { SALARY_ACCOUNT_B2B_KEY } from '../../containers/B2BSalaryAccountHR/constant';
import { MIN_KYC_CLOSED_ACCOUNT_KEY } from '../../containers/MinKycClosedAccount/constants';
import { CREDIT_CARD_ELIGIBILITY_KEY } from '../../containers/CreditCardEligibility/constants';

const rootReducer = combineReducers({
    appReducer,
    faqReducer,
    insightReducer,
    customerAuthReducer,
    wealthTncReducer,
    cxSupportReducer,
    [CALCULATORS_KEY]: calculatorsReducer,
    [SALARY_ACCOUNT_SIGNUP_KEY]: salaryAccountSignUpReducer,
    [CREDIT_CARD_WAITLIST_KEY]: creditCardWaitlistReducer,
    [US_STOCKS_KEY]: usStockReducer,
    [SALARY_ACCOUNT_B2B_KEY]: salaryAccountHRReducer,
    [CREDIT_CARD_ELIGIBILITY_KEY]: creditCardEligibilityReducer,
    [MIN_KYC_CLOSED_ACCOUNT_KEY]: minKycClosedAccountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
