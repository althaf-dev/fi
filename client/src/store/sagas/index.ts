import { all, spawn } from 'redux-saga/effects';

import appSaga from '../../containers/App/saga';
import faqWatcherSaga from '../../containers/Faq/saga';
import insightsWatcherSaga from '../../containers/Insights/saga';
import customerAuthSaga from '../../containers/CustomerAuth/saga';
import wealthTncWatcherSaga from '../../containers/WealthTnC/saga';
import salaryAccountWatcherSaga from '../../containers/SalaryAccount/saga';
import cxSupportWatcherSaga from '../../containers/CxSupport/saga';
import housingProjectWatcherSaga from '../../containers/HousingProject/saga';
import salaryAccountSignUpSaga from '../../containers/SalaryAccountSignUp/saga';
import minKycAccountClosureSaga from '../../containers/MinKycClosedAccount/saga';
import creditCardWaitlistSaga from '../../containers/CreditCardWaitlist/saga';
import creditCardEligibilitySaga from '../../containers/CreditCardEligibility/saga';
import usStocksDetailsWatcherSaga from '../../containers/FeaturesPages/saga';
import salaryAccountHRWatcherSaga from '../../containers/B2BSalaryAccountHR/saga';

// watcher saga
function* rootSaga() {
    yield all([
        spawn(appSaga),
        spawn(faqWatcherSaga),
        spawn(insightsWatcherSaga),
        spawn(customerAuthSaga),
        spawn(wealthTncWatcherSaga),
        spawn(salaryAccountWatcherSaga),
        spawn(cxSupportWatcherSaga),
        spawn(housingProjectWatcherSaga),
        spawn(salaryAccountSignUpSaga),
        spawn(creditCardWaitlistSaga),
        spawn(usStocksDetailsWatcherSaga),
        spawn(salaryAccountHRWatcherSaga),
        spawn(creditCardEligibilitySaga),
        spawn(minKycAccountClosureSaga),
    ]);
}

export default rootSaga;
