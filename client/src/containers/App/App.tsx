/* eslint-disable import/prefer-default-export, arrow-body-style */
import React, {
    // lazy,
    Suspense,
    useEffect,
} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import loadable from '@loadable/component';

import { Loader } from '../../components';

import { APP_URLS } from '../../constants/AppConstant';

import { MetaInfoContextProvider } from '../../context';

import { getAppAssistanceData, getDynamicConsulData } from './actions';
import { CONSUL_META_INFO_PATH_NAME, PATH_MAP } from './constants';
import IndividualStockDirectory from '../USStock/IndividualStockDirectory';

// common variable for lazy loading method.
// Can be switched to React.lazy when needed to experiment
const lazyLoadingFn = loadable;

const HomePage = lazyLoadingFn(() => import('../Home'));
const PrivacyPolicy = lazyLoadingFn(() => import('../PrivacyPolicy'));
const EpifiTnC = lazyLoadingFn(() => import('../EpifiTnC'));
const Security = lazyLoadingFn(() => import('../Security'));
const Fees = lazyLoadingFn(() => import('../Fees'));
const About = lazyLoadingFn(() => import('../About'));
const Teams = lazyLoadingFn(() => import('../Teams'));
const Careers = lazyLoadingFn(() => import('../Careers'));
const ContactUs = lazyLoadingFn(() => import('../ContactUs'));
const SalaryAccount = lazyLoadingFn(() => import('../SalaryAccount'));
const RenderB2BSalaryAccount = lazyLoadingFn(() => import('../B2BSalaryAccount'));
const FAQ = lazyLoadingFn(() => import('../Faq'));
const FeaturesPages = lazyLoadingFn(() => import('../FeaturesPages'));
const Calculators = lazyLoadingFn(() => import('../Calculators'));
const QRCodeScanner = lazyLoadingFn(() => import('../QRCodeScanner'));
const Insights = lazyLoadingFn(() => import('../Insights'));
const RewardsTnC = lazyLoadingFn(() => import('../RewardsTnC'));
const WealthTnC = lazyLoadingFn(() => import('../WealthTnC'));
const FitRulesTnc = lazyLoadingFn(() => import('../FitRulesTnc'));
const P2pLenderRegistrationAgreement = lazyLoadingFn(() => import('../P2pLenderRegistrationAgreement'));
const WealthAadhaarESign = lazyLoadingFn(() => import('../WealthAadhaarESign'));
const CustomerAuth = lazyLoadingFn(() => import('../CustomerAuth'));
const CxSupport = lazyLoadingFn(() => import('../CxSupport'));
const NotFound = lazyLoadingFn(() => import('../404Page'));
const HousingProject = lazyLoadingFn(() => import('../HousingProject'));
const SalaryAccountSignUp = lazyLoadingFn(() => import('../SalaryAccountSignUp'));
const FiMinutes = lazyLoadingFn(() => import('../FiMinutes'));
const CreditCardWaitlist = lazyLoadingFn(() => import('../CreditCardWaitlist'));
const LoadableFinancialCharts = lazyLoadingFn(() => import('../FinancialCharts'), { ssr: false });
const CalculatorVOne = lazyLoadingFn(() => import('../CalculatorVOne'));
// const USStock = lazyLoadingFn(() => import('../USStock'));
const B2BSalaryAccountHR = lazyLoadingFn(() => import('../B2BSalaryAccountHR'));
const CreditCardEligibility = lazyLoadingFn(() => import('../CreditCardEligibility'));
const MinKycClosedAccount = lazyLoadingFn(() => import('../MinKycClosedAccount'));

const RenderRoutes = () => (
    <Routes>
        <Route path='/open-savings-account-online' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/features/*' element={<FeaturesPages />} />
        <Route path='/*' element={<FeaturesPages />} />
        <Route path='/open-salary-account-online' element={<SalaryAccount />} />
        <Route path='/corporate-salary-accounts' element={<B2BSalaryAccountHR />} />
        <Route path='/salary-account/*' element={<RenderB2BSalaryAccount />} />
        <Route path='/calculators/*' element={<Calculators />} />
        <Route path='/FAQs/*' element={<FAQ />} />
        <Route path='/fees' element={<Fees />} />
        <Route path='/app/invite' element={<QRCodeScanner />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/customer-auth/*' element={<CustomerAuth />} />
        <Route path='/fi-care/*' element={<CxSupport />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/T&C' element={<EpifiTnC />} />
        <Route path='/Fi-Secure' element={<Security />} />
        <Route path='/rewards/TnC' element={<RewardsTnC />} />
        <Route path='/wealth/TnC' element={<WealthTnC />} />
        <Route path='/fsl-tnc' element={<FitRulesTnc />} />
        <Route path='/housing-offers' element={<HousingProject />} />
        <Route path='/cDJwLWxlbmRlci1yZWdpc3RyYXRpb24tYWdyZWVtZW50' element={<P2pLenderRegistrationAgreement />} />
        <Route path='/d2VhbHRoLWFhZGhhYXItZS1zaWdu' element={<WealthAadhaarESign />} />
        <Route path='/fin-charts/*' element={<LoadableFinancialCharts />} />
        <Route path='/app/fi-minutes' element={<FiMinutes />} />
        <Route path='/signup' element={<SalaryAccountSignUp />} />
        <Route path='/min-kyc-closed-account' element={<MinKycClosedAccount />} />
        <Route path={PATH_MAP.CREDIT_CARD_WAITLIST_SIGNUP} element={<CreditCardWaitlist />} />
        <Route path={PATH_MAP.CREDIT_CARD_WAITLIST_ELIGIBILITY} element={<CreditCardEligibility />} />
        <Route path={PATH_MAP.SALARY_ACCOUNT_B2B} element={<B2BSalaryAccountHR />} />
        {/* TODO: Need to remove this url once iframe issue resolved in webflow */}
        <Route path={`${APP_URLS.CREDIT_CARD_PAGE}/:name`} element={<CalculatorVOne />} />
        {/* <Route path={`${APP_URLS.US_STOCKS}/:symbol`} element={<USStock />} /> */}
        <Route path={`${APP_URLS.US_STOCKS}${APP_URLS.STOCK_DIRECTORY}/:symbol`} element={<IndividualStockDirectory />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
);

// this is not getting used currently due to SSR restrictions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RenderRoutesWithDynamicImports = () => (
    <Routes>
        {/* home page variants */}
        <Route
            path='/open-savings-account-online'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <HomePage />
                </Suspense>
            )}
        />

        {/* comment out to disable neobank/banking related changes
        <Route exact path='/digital-banking-in-india'>
            <HomePage />
        </Route>

        <Route exact path='/best-neobank-in-india'>
            <HomePage />
        </Route>
        */}

        <Route
            path='/about'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <About />
                </Suspense>
            )}
        />

        <Route
            path='/teams'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Teams />
                </Suspense>
            )}
        />

        <Route
            path='/careers'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Careers />
                </Suspense>
            )}
        />

        <Route
            path='/contact-us'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <ContactUs />
                </Suspense>
            )}
        />

        <Route
            path={`${APP_URLS.FEATURES_PAGE}/*`}
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <FeaturesPages />
                </Suspense>
            )}
        />

        <Route
            path='/open-salary-account-online'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <SalaryAccount />
                </Suspense>
            )}
        />

        <Route
            path={`${APP_URLS.CALCULATORS_PAGE}/*`}
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Calculators />
                </Suspense>
            )}
        />

        <Route
            path='/FAQs/*'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <FAQ />
                </Suspense>
            )}
        />

        <Route
            path='/fees'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Fees />
                </Suspense>
            )}
        />

        <Route
            path='/app/invite'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <QRCodeScanner />
                </Suspense>
            )}
        />

        <Route
            path='/insights'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Insights />
                </Suspense>
            )}
        />

        <Route
            path='/customer-auth/*'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <CustomerAuth />
                </Suspense>
            )}
        />

        <Route
            path='/fi-care/*'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <CxSupport />
                </Suspense>
            )}
        />

        <Route
            path='/privacy'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <PrivacyPolicy />
                </Suspense>
            )}
        />

        <Route
            path='/T&C'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <EpifiTnC />
                </Suspense>
            )}
        />

        <Route
            path='/Fi-Secure'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Security />
                </Suspense>
            )}
        />

        <Route
            path='/rewards/TnC'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <RewardsTnC />
                </Suspense>
            )}
        />

        <Route
            path='/wealth/TnC'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <WealthTnC />
                </Suspense>
            )}
        />

        <Route
            path='/fsl-tnc'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <FitRulesTnc />
                </Suspense>
            )}
        />

        {/* https://fi.money/cDJwLWxlbmRlci1yZWdpc3RyYXRpb24tYWdyZWVtZW50 this url comes from btoa('p2p-lender-registration-agreement') */}
        <Route
            path='/cDJwLWxlbmRlci1yZWdpc3RyYXRpb24tYWdyZWVtZW50'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <P2pLenderRegistrationAgreement />
                </Suspense>
            )}
        />

        {/* https://fi.money/d2VhbHRoLWFhZGhhYXItZS1zaWdu this url comes from btoa('wealth-aadhaar-e-sign') */}
        <Route
            path='/d2VhbHRoLWFhZGhhYXItZS1zaWdu'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <WealthAadhaarESign />
                </Suspense>
            )}
        />

        <Route
            path='/'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <HomePage />
                </Suspense>
            )}
        />

        <Route path='*' element={<Navigate to='/' />} />

        {/* disabled routes
        <Route exact path='/redeem-referral'>
            <GiftedAccessPage />
        </Route>

        <Route exact path='/waitlist/finite-code'>
            <FiniteCodeSection />
        </Route>

        <Route exact path='/waitlist/T&C'>
            <TnCHome />
        </Route>

        <Route exact path='/waitlist/login'>
            <LoginExistingUser />
        </Route>

        <Route exact path='/waitlist/ios'>
            <WaitlistSectionIOS />
        </Route>

        <Route exact path='/waitlist'>
            <WaitlistHome />
        </Route>

        <Route
            path='/cbo'
            render={({ match }) => {
                return (
                    <Suspense fallback={<Loader isLoading />}>
                        <CBOHome match={match} />
                    </Suspense>
                );
            }}
        />

        <Route
            path='/community/*'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Community />
                </Suspense>
            )}
        />

        <Route
            path='/invite/*'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Influencer />
                </Suspense>
            )}
        />
        end disabled routes */}
    </Routes>
);

const App = () => {
    const dispatch = useDispatch();

    const appAssistanceData = useSelector(
        (state: any) => state.appReducer.appAssistanceData,
    );

    useEffect(() => {
        dispatch(getAppAssistanceData());
        dispatch(getDynamicConsulData({ path: CONSUL_META_INFO_PATH_NAME }));
    }, [dispatch]);

    return (
        <MetaInfoContextProvider value={{ appAssistanceData }}>
            {RenderRoutes()}
        </MetaInfoContextProvider>
    );
};

export default App;
