import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { PAGE_MAP } from '../constants';
import MobileNumberPage from '../MobileNumberPage';
import MobileNumberVerificaitonPage from '../MobileNumberVerificaitonPage';
import { selectCreditCardEligibilityReducer } from '../selectors';
import LandingPage from '../LandingPage';
import LoadingPage from '../LoadingPage';

const STEP_MODULE_MAPPING = {
    [PAGE_MAP.LANDING_PAGE]: LandingPage,
    [PAGE_MAP.GENERATE_OTP_PAGE]: MobileNumberPage,
    [PAGE_MAP.VERIFY_OTP_PAGE]: MobileNumberVerificaitonPage,
    [PAGE_MAP.LOADING_PAGE]: LoadingPage,
};

const StepModule = () => {
    const { currentStep } = useSelector(
        selectCreditCardEligibilityReducer,
        shallowEqual,
    );

    const StepModuleComponent = STEP_MODULE_MAPPING[currentStep];

    if (!StepModuleComponent) {
        return null;
    }

    return <StepModuleComponent />;
};

export default StepModule;
