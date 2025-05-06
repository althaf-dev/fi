import { NAVIGATION_URLS } from '../constants/AppConstant';

const filterUrlFromDynamicConfig = (item: any, dynamicConfigInfo: any) => {
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

    if (item === NAVIGATION_URLS.CREDIT_CARD_WAITLIST.label && dynamicPageProps.hideCreditCardWaitlistPageItem) return true;
    return false;
};

export default filterUrlFromDynamicConfig;
