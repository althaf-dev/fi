/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Verify Otp Page
 */

import React, { useState, useEffect } from 'react';

import { Link, PrimaryButton } from '../../../components/Abstract';
import { ErrorDescription, ErrorWrapper } from '../../../components/Waitlist/styled';

import Header from '../Header';

import {
    CodeInput,
    Footer,
    InfoFont,
    InputWrapperOne,
    WrapperOne,
    CodeInputWrapper,
    ButtonHolder,
} from './StyledOtpPage';
import UnableToVerify from '../UnableToVerify';

interface VerifyOtpPageProps {
    otpRetryTime: number;
    otpVerifyError?: string;
    isEntering?: boolean;
    apiInProgress?: boolean;
    onNextStep?: (payload) => void;
    title: string | React.ReactElement;
    description?: string | React.ReactElement;
    onPrevStep?: () => void;
    showFacingNetworkIssue?: boolean;
    resetOtpVerifyError: () => void;
    resendOtp: ()=> void;
    otpVerifyInprocess: boolean;
    showQRCodeModal?: boolean;
    isVerifyOtpBlocked?: boolean;
    onVerifyAnotherWayClick?: () => void;
    logoImage?: boolean;
    length?: number;
    workBenifitListIcon?: boolean;
}

const VerifyOtpPage = (props: VerifyOtpPageProps) => {
    const {
        otpRetryTime,
        isEntering: propsIsEntering,
        apiInProgress,
        title,
        description,
        otpVerifyError,
        onNextStep,
        onPrevStep,
        showFacingNetworkIssue,
        resetOtpVerifyError,
        resendOtp,
        otpVerifyInprocess,
        showQRCodeModal,
        isVerifyOtpBlocked,
        onVerifyAnotherWayClick,
        logoImage,
        length,
        workBenifitListIcon,
    } = props;

    const [code, setCode] = useState('');
    const [counter, setCounter] = useState(otpRetryTime);
    const [isEntering, setIsEntering] = useState(false);

    const onResendClick = () => {
        resetOtpVerifyError();
        setCode('');
        resendOtp();
    };

    const onChangeOTP = (otp) => {
        if (otp.length === length) {
            const payload = {
                otp,
            };

            setCode(otp);
            onNextStep(payload);
        }

        if (otp.length > 0) {
            resetOtpVerifyError();
        }
    };

    useEffect(() => {
        if (otpVerifyError) {
            setTimeout(() => setCode(''), 700);
        }
    }, [otpVerifyError]);

    useEffect(() => {
        if (!apiInProgress && counter === 0) {
            setCounter(otpRetryTime);
        }
    }, [apiInProgress]);

    useEffect(() => {
        setIsEntering(true);
        setCode('');
    }, []);

    useEffect(() => {
        let timer;
        if (counter > 0) {
            timer = setInterval(() => setCounter(counter - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <WrapperOne className='scrollbar-hide WrapperOneB2b'>
            <Header
                title={title}
                description={description}
                isEntering={isEntering}
                onClickPrevButton={onPrevStep}
                logoImage={logoImage}
                workBenifitListIcon={workBenifitListIcon}
            />

            <InputWrapperOne
                className={`InputWrapperOneB2b ${!isEntering
                    ? 'transition transition-start-initial-top opacity-initial'
                    : 'transition transition-start-final opacity-final'}`}
            >
                <div className={otpVerifyError ? 'animation' : null}>
                    <CodeInputWrapper className='InputB2bWrapper'>
                        <CodeInput
                            className='color'
                            value={code}
                            autoFocus={propsIsEntering}
                            isNumberInput
                            color=''
                            length={length}
                            onChangeOTP={onChangeOTP}
                            disabled={otpVerifyInprocess || isVerifyOtpBlocked}
                        />
                        {otpVerifyError ? (
                            <ErrorWrapper>
                                <ErrorDescription
                                    font='labelVariantOne'
                                    color='ERROR_RED'
                                    tagType='label'
                                >
                                    {otpVerifyError}
                                </ErrorDescription>
                            </ErrorWrapper>
                        ) : null}
                    </CodeInputWrapper>
                </div>

                {(counter === 0 && !otpVerifyInprocess && !isVerifyOtpBlocked) ? (
                    <Footer
                        font='titleVariantThree'
                        tagType='text'
                        color='GREY_3'
                    >
                        <span>
                            Didn&apos;t receive the OTP?
                            {' '}
                            <Link linkType='inline' font='titleVariantThree' onClick={onResendClick}>
                                Resend
                            </Link>
                        </span>
                    </Footer>
                ) : (
                    (!otpVerifyInprocess && !isVerifyOtpBlocked) && (
                        <Footer font='titleVariantThree' tagType='text' color='GREY_3'>
                            Resend OTP in
                            {' '}
                            {counter}
                            {' '}
                            {counter === 1 ? ' second' : ' seconds'}
                        </Footer>
                    )
                )}
                {
                    (showFacingNetworkIssue && !otpVerifyInprocess)
                        ? (
                            <UnableToVerify
                                contentText='Facing network issues?'
                                linkText='Try it on the app'
                                showQRCodeModal={showQRCodeModal}
                            />
                        ) : null
                }
            </InputWrapperOne>

            {(isVerifyOtpBlocked && !showFacingNetworkIssue) ? (
                <ButtonHolder className='ButtonHolderB2b'>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        disableTransForm
                        label='Verify another way'
                        borderRadius='19px'
                        onClick={onVerifyAnotherWayClick}
                        enableBoxShadow
                    />
                </ButtonHolder>
            ) : null}

            {otpVerifyInprocess ? (
                <InfoFont
                    className='InfoFontB2b'
                    font='input'
                    tagType='text'
                    color='TEXT_GREY_1'
                    showVisibility={!!(isEntering && otpVerifyInprocess)}
                >
                    Verifying OTP...
                </InfoFont>
            ) : null}
        </WrapperOne>
    );
};

VerifyOtpPage.defaultProps = {
    otpVerifyError: '',
    isEntering: true,
    apiInProgress: false,
    onNextStep: null,
    onPrevStep: null,
    showFacingNetworkIssue: false,
    showQRCodeModal: false,
    isVerifyOtpBlocked: false,
    onVerifyAnotherWayClick: false,
    logoImage: true,
    length: 6,
    description: '',
    workBenifitListIcon: false,

};

export default VerifyOtpPage;
