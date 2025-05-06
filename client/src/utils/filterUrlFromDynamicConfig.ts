import { NAVIGATION_URLS } from '../constants/AppConstant';

const filterUrlFromDynamicConfig = (item, dynamicConfigInfo) => {
    const dynamicConfigNavigation = dynamicConfigInfo?.navigation || {};

    const dynamicPageProps = {
        hideCalculatorsItem: dynamicConfigNavigation.hideCalculators,
        hideSalaryAccountItem: dynamicConfigNavigation.hideSalaryAccount,
        hideMutualFundsFeaturePageItem: dynamicConfigNavigation.hideMutualFundsFeaturePage,
        hideJumpFeaturePageItem: dynamicConfigNavigation.hideJumpFeaturePage,
        hideConnectedAccountsFeaturePageItem: dynamicConfigNavigation.hideConnectedAccountsFeaturePage,
        hidePaymentsFeaturePageItem: dynamicConfigNavigation.hidePaymentsFeaturePage,
        hideAskFiFeaturePageItem: dynamicConfigNavigation.hideAskFiFeaturePage,
        hideFitRulesFeaturePageItem: dynamicConfigNavigation.hideFitRulesFeaturePage,
        hideRewardsFeaturePageItem: dynamicConfigNavigation.hideRewardsFeaturePage,
        hideDepositsFeaturePageItem: dynamicConfigNavigation.hideDepositsFeaturePage,
        hideInstantLoanFeaturePageItem: dynamicConfigNavigation.hideInstantLoanFeaturePage,
        hideCrashCoursesItem: dynamicConfigNavigation.hideCrashCourses,
        hideUSStocksFeaturePageItem: dynamicConfigNavigation.hideUSStocksFeaturePage,
        hideCreditCardWaitlistPageItem: dynamicConfigNavigation.hideCreditCardWaitlistPage,
    };

    if (item === NAVIGATION_URLS.CALCULATORS.label && dynamicPageProps.hideCalculatorsItem) return true;
    if (item === NAVIGATION_URLS.SALARY_ACCOUNT.label && dynamicPageProps.hideSalaryAccountItem) return true;
    if (item === NAVIGATION_URLS.MUTUAL_FUNDS.label && dynamicPageProps.hideMutualFundsFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.JUMP.label && dynamicPageProps.hideJumpFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.CONNECTED_ACCOUNTS.label && dynamicPageProps.hideConnectedAccountsFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.PAYMENTS.label && dynamicPageProps.hidePaymentsFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.ASK_FI.label && dynamicPageProps.hideAskFiFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.FIT_RULES.label && dynamicPageProps.hideFitRulesFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.REWARDS.label && dynamicPageProps.hideRewardsFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.DEPOSITS.label && dynamicPageProps.hideDepositsFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.INSTANT_LOAN.label && dynamicPageProps.hideInstantLoanFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.CRASH_COURSES.label && dynamicPageProps.hideCrashCoursesItem) return true;
    if (item === NAVIGATION_URLS.US_STOCKS.label && dynamicPageProps.hideUSStocksFeaturePageItem) return true;
    if (item === NAVIGATION_URLS.CREDIT_CARD_WAITLIST.label && dynamicPageProps.hideCreditCardWaitlistPageItem) return true;
    return false;
};

export default filterUrlFromDynamicConfig;
