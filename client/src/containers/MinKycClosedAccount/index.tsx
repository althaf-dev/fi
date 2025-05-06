/**
 * @file Min KYC Closed Account flow
 */

import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { MainContainer } from '../../components/Waitlist/styled';
import GreyWhiteContainer from '../../components/GreyWhiteContainer';

import { IstepModuleListItem } from './types';
import {
    NAVIGATE_PAGE,
} from './constants';
import MobileEmailPage from '../Auth/MobileEmailPage';
import OTPVerificationPage from '../Auth/OTPVerificationPage';
import PanInputPage from '../Auth/PanInputPage';
import AccountClosedInfo from './AccountClosedInfo';
import AccountDetailsInput from './AccountDetailsInput';
import DetailedErrorView from './DetailedErrorView';
import FundAcknowledgementScreen from './FundAcknowledgementScreen';
import selectMinKycClosedAccountReducer from './selectors';
import {
    IGenerateOtpCodePayload, IVerifyOtpCodePayload, addAlternateAccount, changePage, generateOtpCode, verifyOtpCode, verifyPan,
} from './actions';

const MinKycClosedAccount = () => {
    const dispatch = useDispatch();
    const {
        currentStep, errorMessage, phoneNumber, emailId, accessToken, screenOptions, accountLastFourDigits, formErrors,
    } = useSelector(
        selectMinKycClosedAccountReducer,
        shallowEqual,
    );
    const [isPhone, setIsPhone] = useState(true);

    /**
     * submitMobileEmail is submit function for generation of OTP on email/mobile for validation
     * @param phoneParam phone number of user
     * @param emailParam email id of user
     */
    const submitMobileEmail = (phoneParam, emailParam) => {
        const payload: IGenerateOtpCodePayload = {
            phoneNumber: phoneParam,
            email: emailParam,
        };
        dispatch(generateOtpCode(payload));
    };

    /**
     * submitVerifyOtp is used to submit otp for verification
     * @param payload contains otp, email, phone
     */
    const submitVerifyOtp = (payload: IVerifyOtpCodePayload) => {
        const modifiedPayload = {
            ...payload,
            emailId,
            phoneNumber,
            token: accessToken,
        };
        dispatch(verifyOtpCode(modifiedPayload));
    };

    /**
     * resendOtp is used to resend the otp to the user
     */
    const resendOtp = () => {
        const payload: IGenerateOtpCodePayload = {
            phoneNumber,
            email: emailId,
        };
        dispatch(generateOtpCode(payload));
    };

    /**
     * goBackToEmailMobileInputPage Go back to mobile email input page
     */
    const goBackToEmailMobileInputPage = () => {
        dispatch(changePage({ page: NAVIGATE_PAGE.MOBILE_EMAIL_INPUT_PAGE }));
    };

    /**
     * submitPanInfo submit PAN card information for verification
     * @param pan Pan Card number
     */
    const submitPanInfo = (pan: string) => {
        const payload = {
            pan,
            accessToken,
        };
        dispatch(verifyPan(payload));
    };

    /**
     * submitAlternateAccountInfo submit alternate account details
     * @param ifsc IFSC Code
     * @param accountNumber Account number of user
     * @param accountHolderName Account Holder name
     */
    const submitAlternateAccountInfo = (ifsc: string, accountNumber: string, accountHolderName: string) => {
        dispatch(addAlternateAccount({
            ifsc, accountNumber, accountHolderName, accessToken,
        }));
    };

    const StepModuleList: IstepModuleListItem = {
        [NAVIGATE_PAGE.MOBILE_EMAIL_INPUT_PAGE]: {
            Component: <MobileEmailPage
                isPhone={isPhone}
                setIsPhone={setIsPhone}
                handleSubmit={submitMobileEmail}
                errorMessage={errorMessage}
            />,
        },
        [NAVIGATE_PAGE.VERIFY_OTP_PAGE]: {
            Component: <OTPVerificationPage
                goBack={goBackToEmailMobileInputPage}
                resendOtp={resendOtp}
                onSubmit={submitVerifyOtp}
                otpVerifyError={errorMessage}
                emailId={emailId}
                phoneNumber={phoneNumber}
            />,
        },
        [NAVIGATE_PAGE.PAN_INPUT_PAGE]: {
            Component: <PanInputPage
                onSubmit={submitPanInfo}
                errorMessage={errorMessage}
            />,
        },
        [NAVIGATE_PAGE.ACCOUNT_CLOSED_INFO]: {
            Component: <AccountClosedInfo
                title={screenOptions?.title || ''}
                description={screenOptions?.subtitle || ''}
                accountLastFourDigits={accountLastFourDigits}
                ctas={(screenOptions?.ctas || []) as Array<Object>}
            />,
        },
        [NAVIGATE_PAGE.ACCOUNT_DETAILS_INFO]: {
            Component: <AccountDetailsInput
                onSubmit={submitAlternateAccountInfo}
                errorMessage={errorMessage}
                formErrors={formErrors}
            />,
        },
        [NAVIGATE_PAGE.DETAILED_ERROR_VIEW_SCREEN]: {
            Component: <DetailedErrorView
                title={screenOptions?.title || ''}
                description={screenOptions?.subtitle || ''}
                accountLastFourDigits={accountLastFourDigits}
                faliureReason={screenOptions?.failure_reason || ''}
                screenIdentifier={screenOptions?.screen_identifier || ''}
            />,
        },
        [NAVIGATE_PAGE.ACCOUNT_CLOSURE_TRANSFER_INITIATED]: {
            Component: <FundAcknowledgementScreen
                title={screenOptions?.title || ''}
                description={screenOptions?.subtitle || ''}
                accountInfo={`${screenOptions?.account_details?.line1?.text || ''}<br/>${screenOptions?.account_details?.line2?.text || ''}<br/>` || ''}
            />,
        },
    };

    return (
        <MainContainer>
            <GreyWhiteContainer>
                {StepModuleList[currentStep]?.Component}
            </GreyWhiteContainer>
        </MainContainer>
    );
};

export default MinKycClosedAccount;
