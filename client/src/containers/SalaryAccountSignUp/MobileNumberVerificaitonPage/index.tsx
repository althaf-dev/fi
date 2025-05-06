/**
 * @file Mobile Number Verification page
 */

import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { useOnChangeReducerValue } from '../../../hooks';
import {
    trackGTMEvent,
    CLICKED_RESEND_OTP_ON_MOBILE_NO_WEB,
    ENTERED_OTP_ON_MOBILE_NOWEB,
} from '../../../events';

import VerifyOtpPage from '../VerifyOtpPage';
import {
    onChangeSalaryAccountSignUpValue,
    mobileGenerateOtpCode,
    mobileVerifyOtpCode,
} from '../actions';
import selectSalaryAccountSignUpReducer from '../selectors';
import { NAVIGATE_PAGE, OTP_RETRY_TIME } from '../constants';

const MobileNumberVerificaitonPage = () => {
    const dispatch = useDispatch();

    const {
        phoneNumber,
        countryCode,
        whatsappPreference,
        mobileOtpToken,
        mobileOtpRetrytime,
        errorMessage,
        isLoading,
        otpVerifyInprocess,
        isVerifyOtpBlocked,
    } = useSelector(selectSalaryAccountSignUpReducer, shallowEqual);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountSignUpValue,
    );

    const goBack = () => {
        onChangeReducerValue({
            mobileOtpToken: '',
            errorMessage: '',
            currentStep: NAVIGATE_PAGE.MOBILE_GENERATE_OTP_PAGE,
        });
    };

    const onNextStep = (payload) => {
        const verifyOtpReq = {
            ...payload,
            countryCode,
            phoneNumber,
            whatsappPreference,
            token: mobileOtpToken,
            webUrl: window.location.href,
        };
        dispatch(mobileVerifyOtpCode(verifyOtpReq));
        trackGTMEvent(ENTERED_OTP_ON_MOBILE_NOWEB);
    };

    const resetOtpVerifyError = () => {
        onChangeReducerValue({ errorMessage: '' });
    };

    const resendOtp = () => {
        const payload = {
            countryCode,
            phoneNumber,
        };
        dispatch(mobileGenerateOtpCode(payload));
        trackGTMEvent(CLICKED_RESEND_OTP_ON_MOBILE_NO_WEB);
    };

    return (
        <VerifyOtpPage
            isEntering
            otpRetryTime={OTP_RETRY_TIME + mobileOtpRetrytime}
            onNextStep={onNextStep}
            onPrevStep={goBack}
            title='Verify with OTP'
            description={`Sent to +${countryCode}-${phoneNumber}`}
            otpVerifyError={errorMessage}
            apiInProgress={isLoading}
            resetOtpVerifyError={resetOtpVerifyError}
            resendOtp={resendOtp}
            otpVerifyInprocess={otpVerifyInprocess}
            showFacingNetworkIssue
            isVerifyOtpBlocked={isVerifyOtpBlocked}
        />
    );
};

export default MobileNumberVerificaitonPage;
