/* eslint-disable react/require-default-props */
/**
 * @file OTP Verification Page
 */

import React from 'react';

import VerifyOtpPage from './VerifyOtpPage';

type HeaderDescriptionProps = {
    emailId: string
    phoneNumber: string,
}

// Header Description component
const HeaderDescription = (props: HeaderDescriptionProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { emailId, phoneNumber } = props;
    return (
        <div>SubDescription</div>
    );
};

type OTPVerificationPageProps = {
    goBack: () => void,
    resendOtp: () => void,
    onSubmit?: (payload: Record<string, any>) => void,
    otpVerifyError: string,
    emailId?: string,
    phoneNumber?: string,
    onChange?: any
    mobileOtpToken: string,
    length: number,
    otpValueArray?: Array<string>;
    handleSetOptValueArray?: any;
    pageType: string;
}

const OTPVerificationPage = (props: OTPVerificationPageProps) => {
    const {
        goBack, resendOtp, onSubmit, otpVerifyError, emailId = '', phoneNumber = '',
        onChange, mobileOtpToken, length, otpValueArray, handleSetOptValueArray, pageType
    } = props;

    const resetOtpVerifyError = () => {
    };

    const onVerifyAnotherWayClick = () => {
    };

    return (
        <VerifyOtpPage
            isEntering
            otpRetryTime={30}
            title='Verify with OTP'
            description={<HeaderDescription emailId={emailId} phoneNumber={phoneNumber} />}
            onPrevStep={goBack}
            onNextStep={onSubmit}
            otpVerifyError={otpVerifyError}
            apiInProgress={false}
            resetOtpVerifyError={resetOtpVerifyError}
            resendOtp={resendOtp}
            otpVerifyInprocess={false}
            isVerifyOtpBlocked={false}
            onVerifyAnotherWayClick={onVerifyAnotherWayClick}
            onChange={onChange}
            mobileOtpToken={mobileOtpToken}
            phoneNumber={phoneNumber}
            length={length}
            otpValueArray={otpValueArray}
            handleSetOptValueArray={handleSetOptValueArray}
            pageType={pageType}
        />
    );
};

OTPVerificationPage.defaultProps = {
    emailId: '',
    phoneNumber: '',
};

export default OTPVerificationPage;
