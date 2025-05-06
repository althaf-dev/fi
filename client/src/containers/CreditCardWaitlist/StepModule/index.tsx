import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { PAGE_MAP } from '../constants';
import MobileNumberPage from '../MobileNumberPage';
import MobileNumberVerificaitonPage from '../MobileNumberVerificaitonPage';
import { selectCreditCardWaitlistReducer } from '../selectors';
import UserDetailsPage from '../UserDetailsPage';

const StepModule = () => {
    const { currentStep } = useSelector(
        selectCreditCardWaitlistReducer,
        shallowEqual,
    );

    switch (currentStep) {
        case PAGE_MAP.GENERATE_OTP_PAGE:
            return <MobileNumberPage />;

        case PAGE_MAP.VERIFY_OTP_PAGE:
            return <MobileNumberVerificaitonPage />;

        case PAGE_MAP.USER_DETAILS_PAGE:
            return <UserDetailsPage />;

        default:
            return null;
    }
};

export default StepModule;
