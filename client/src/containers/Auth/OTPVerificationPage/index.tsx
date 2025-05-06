/**
 * @file OTP Verification Page
 */

import React from 'react';
import { HighlightText } from '../../../components/Waitlist/styled';

import VerifyOtpPage from './VerifyOtpPage';
import { SubDescription } from '../../MinKycClosedAccount/styled';

type HeaderDescriptionProps = {
    emailId: string
    phoneNumber: string,
}

// Header Description component
const HeaderDescription = (props: HeaderDescriptionProps) => {
    const { emailId, phoneNumber } = props;
    return (
        <SubDescription>
            Sent to
            {' '}
            <HighlightText>{emailId || phoneNumber}</HighlightText>
        </SubDescription>
    );
};

interface OTPVerificationPageProps {
    goBack: () => void,
    resendOtp: () => void,
    onSubmit: (payload: Object) => void,
    otpVerifyError: string,
    emailId?: string,
    phoneNumber?: string,
}

const OTPVerificationPage = ({
    goBack, resendOtp, onSubmit, otpVerifyError, emailId = '', phoneNumber = '',
}: OTPVerificationPageProps) => {
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
        />
    );
};

OTPVerificationPage.defaultProps = {
    emailId: '',
    phoneNumber: '',
};

export default OTPVerificationPage;
