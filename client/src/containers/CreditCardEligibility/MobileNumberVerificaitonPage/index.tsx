/**
 * @file Mobile Number Verification page
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { useOnChangeReducerValue } from '../../../hooks';
import { trackGTMEvent } from '../../../events';
import { VERIFY_OTP_WL_CC_EVENT } from '../../../events/EventName';

import VerifyOtpPage from '../VerifyOtpPage';
import { selectCreditCardEligibilityReducer, selecOtpVerificationStatus } from '../selectors';
import { onChangeCreditCardEligibilityValue } from '../actions';
import { PAGE_MAP } from '../constants';

const MobileNumberVerificaitonPage = () => {
    const { isOtpVerified } = useSelector(selecOtpVerificationStatus, shallowEqual);
    const { errorMessage } = useSelector(selectCreditCardEligibilityReducer, shallowEqual);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeCreditCardEligibilityValue,
    );

    const onClickBack = () => {
        onChangeReducerValue({
            token: {
                mobileOtpToken: '',
                accessToken: '',
            },
            errorMessage: '',
            currentStep: PAGE_MAP.GENERATE_OTP_PAGE,
        });
    };

    useEffect(() => {
        if (isOtpVerified) {
            setTimeout(() => {
                onChangeReducerValue({
                    currentStep: PAGE_MAP.LOADING_PAGE,
                });
            }, 1000);

            trackGTMEvent(VERIFY_OTP_WL_CC_EVENT);
        }
    }, [isOtpVerified]);

    return (
        <VerifyOtpPage
            onPrevStep={onClickBack}
            otpVerifyError={errorMessage}
            isOtpVerified={isOtpVerified}
        />
    );
};

export default MobileNumberVerificaitonPage;
