/**
 * @file Email OTP Verification Page
 */

import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { useOnChangeReducerValue } from '../../../hooks';
import {
    trackGTMEvent,
    ENTERED_OTP_ON_WORK_EMAIL_WEB,
    CLICKED_RESEND_OTP_ON_WORK_EMAIL_WEB,
    CLICKED_VERIFY_ANOTHER_WAY,
} from '../../../events';
import { HighlightText } from '../../../components/Waitlist/styled';

import VerifyOtpPage from '../VerifyOtpPage';
import selectSalaryAccountSignUpReducer from '../selectors';
import {
    onChangeSalaryAccountSignUpValue,
    emailGenerateOtpCode,
    emailVerifyOtpCode,
} from '../actions';
import { SubDescription } from '../styled';
import { NAVIGATE_PAGE, OTP_RETRY_TIME } from '../constants';

type HeaderDescriptionProps = {
    emailId: string
}

// Header Description component
const HeaderDescription = (props: HeaderDescriptionProps) => {
    const { emailId } = props;
    return (
        <SubDescription>
            Sent to
            {' '}
            <HighlightText>{emailId}</HighlightText>
            . Can&apos;t find
            it? Maybe check your spam folder.
        </SubDescription>
    );
};

const EmailVerificationPage = () => {
    const dispatch = useDispatch();

    const {
        emailId,
        accessToken,
        emailOtpToken,
        errorMessage,
        isLoading,
        emailOtpRetrytime,
        otpVerifyInprocess,
        isVerifyOtpBlocked,
        clientReqId,
    } = useSelector(selectSalaryAccountSignUpReducer, shallowEqual);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountSignUpValue,
    );

    const goBack = () => {
        onChangeReducerValue({
            errorMessage: '',
            emailOtpToken: '',
            emailOtpRetrytime: 0,
            currentStep: NAVIGATE_PAGE.EMAIL_GENERATE_OTP_PAGE,
        });
    };

    const onNextStep = (payload) => {
        const verifyOtpReq = {
            ...payload,
            accessToken,
            email: emailId,
            token: emailOtpToken,
            clientReqId,
        };
        dispatch(emailVerifyOtpCode(verifyOtpReq));
        trackGTMEvent(ENTERED_OTP_ON_WORK_EMAIL_WEB);
    };

    const resetOtpVerifyError = () => {
        onChangeReducerValue({
            errorMessage: '',
        });
    };

    const resendOtp = () => {
        const payload = {
            email: emailId,
            accessToken,
            clientReqId,
        };
        dispatch(emailGenerateOtpCode(payload));
        trackGTMEvent(CLICKED_RESEND_OTP_ON_WORK_EMAIL_WEB);
    };

    const onVerifyAnotherWayClick = () => {
        trackGTMEvent(CLICKED_VERIFY_ANOTHER_WAY);
        onChangeReducerValue({
            currentStep: NAVIGATE_PAGE.FINISH_SIGNUP_PAGE,
        });
    };

    return (
        <VerifyOtpPage
            isEntering
            otpRetryTime={OTP_RETRY_TIME + emailOtpRetrytime}
            title='Verify with OTP'
            description={<HeaderDescription emailId={emailId} />}
            onPrevStep={goBack}
            onNextStep={onNextStep}
            otpVerifyError={errorMessage}
            apiInProgress={isLoading}
            resetOtpVerifyError={resetOtpVerifyError}
            resendOtp={resendOtp}
            otpVerifyInprocess={otpVerifyInprocess}
            isVerifyOtpBlocked={isVerifyOtpBlocked}
            onVerifyAnotherWayClick={onVerifyAnotherWayClick}
        />
    );
};

export default EmailVerificationPage;
