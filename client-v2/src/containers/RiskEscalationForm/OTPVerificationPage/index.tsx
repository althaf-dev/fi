/* eslint-disable react/require-default-props */
/**
 * @file OTP Verification Page
 */

'use client';

import React from 'react';

import VerifyOtpPage from './VerifyOtpPage';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { setErrorMessage, stepChangeAction, fireEvent } from '@/rtk/components/riskForm/reducer';
import { PAGE_MAP } from '../constants';
import { riskFormEvents } from '@/events/EventName';

type OTPVerificationPageProps = {
    resendOtp: () => void,
    otpVerifyError: string,
    phoneNumber?: string,
    onChange?: any
    mobileOtpToken: string,
    length: number,
    otpValueArray?: Array<string>;
    handleSetOptValueArray?: any;
    onEnterClick?: () => void;
}

const OTPVerificationPage = (props: OTPVerificationPageProps) => {
    const {
        resendOtp, otpVerifyError, phoneNumber = '', mobileOtpToken,
        onChange, length, otpValueArray, handleSetOptValueArray, onEnterClick
    } = props;

    const dispatch = useAppDispatch();
    const { otpVerificationStatus: { isOtpVerified }, errorMessage, isLoading } = useAppSelector((state) => state.riskForm);

    const nextPage = () => {
        dispatch(stepChangeAction(PAGE_MAP.INTRO_SCREEN));
        dispatch(fireEvent({ eventName: riskFormEvents.RISK_FORM_LAND_OTP_VERIFICATION_PAGE }));
    };

    const resetOtpVerifyError = () => {
        dispatch(setErrorMessage(''));
    };

    return (
        <>
            <VerifyOtpPage
                isEntering
                otpRetryTime={29}
                otpVerifyError={otpVerifyError}
                apiInProgress={isLoading}
                resendOtp={resendOtp}
                otpVerifyInprocess={isLoading}
                isOtpVerified={isOtpVerified}
                isVerifyOtpBlocked={false}
                onChange={onChange}
                mobileOtpToken={mobileOtpToken}
                phoneNumber={phoneNumber}
                length={length}
                otpValueArray={otpValueArray}
                handleSetOptValueArray={handleSetOptValueArray}
                nextPage={nextPage}
                errorMessage={errorMessage}
                resetOtpVerifyError={resetOtpVerifyError}
                onEnterClick={onEnterClick}
            />
        </>
    );
};

OTPVerificationPage.defaultProps = {
    phoneNumber: '',
};

export default OTPVerificationPage;
