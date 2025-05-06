/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Verify Otp Page
 */

import React, { useState, useEffect } from 'react';
import { Link, PrimaryButton } from '@/components/Abstract';
import { ErrorDescription, ErrorWrapper } from '@/components/Waitlist/styled';
import {
    CodeInput,
    Footer,
    InfoFont,
    InputWrapperOne,
    WrapperOne,
    CodeInputWrapper,
    ButtonHolder,
} from './StyledOtpPage';
import { creditCardEvents } from '@/events/constants';
import { fireCreditCardEvents } from '../../utils';

interface VerifyOtpPageProps {
    otpRetryTime: number;
    otpVerifyError?: string;
    isEntering?: boolean;
    apiInProgress?: boolean;
    onNextStep?: (payload: any) => void;
    title: string | React.ReactElement;
    description?: string | React.ReactElement;
    onPrevStep?: () => void;
    showFacingNetworkIssue?: boolean;
    resetOtpVerifyError: () => void;
    resendOtp: ()=> void;
    otpVerifyInprocess: boolean;
    // eslint-disable-next-line react/no-unused-prop-types
    showQRCodeModal?: boolean;
    isVerifyOtpBlocked?: boolean;
    onVerifyAnotherWayClick?: () => void;
    logoImage?: boolean;
    length: number;
    onChange?:any,
    phoneNumber: string,
    mobileOtpToken: any;
    onBlur?: () => void;
    otpValueArray?: Array<string>;
    handleSetOptValueArray?: any;
    pageType: string;
}

const VerifyOtpPage = (props: VerifyOtpPageProps) => {
    const {
        otpRetryTime,
        isEntering: propsIsEntering,
        apiInProgress,
        otpVerifyError,
        showFacingNetworkIssue,
        resetOtpVerifyError,
        resendOtp,
        otpVerifyInprocess,
        isVerifyOtpBlocked,
        onVerifyAnotherWayClick,
        length,
        onChange,
        mobileOtpToken,
        otpValueArray,
        handleSetOptValueArray,
        pageType
    } = props;

    const [counter, setCounter] = useState<any>(otpRetryTime);
    const [isEntering, setIsEntering] = useState(false);

    const onResendClick = () => {
        resetOtpVerifyError();
        resendOtp();
        setCounter(otpRetryTime);
    };

    const onChangeOTP = (otp: any) => {
        if (otp.length > 0) {
            resetOtpVerifyError();
        }

        if (onChange && typeof onChange === 'function') {
            onChange(otp);
        }
    };

    useEffect(() => {
        if (otpVerifyError) {
            setTimeout(() => onChange(''), 700);
        }
    }, [otpVerifyError]);

    useEffect(() => {
        if (!apiInProgress && counter === 0) {
            setCounter(otpRetryTime);
        }
    }, [apiInProgress]);

    useEffect(() => {
        setIsEntering(true);
        onChange('');
    }, []);

    useEffect(() => {
        let timer: any;
        if (counter > 0) {
            timer = setInterval(() => setCounter(counter - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        fireCreditCardEvents(pageType, creditCardEvents.LANDED_ON_OTP_SCREEN);
    }, [pageType]);

    return (
        <WrapperOne className='scrollbar-hide WrapperOneB2b'>
            <InputWrapperOne
                className={`InputWrapperOneB2b  ${!isEntering
                    ? 'transition transition-start-initial-top opacity-initial'
                    : 'transition transition-start-final opacity-final'}`}
            >
                <div className={otpVerifyError ? 'animation' : ''}>
                    <CodeInputWrapper className='InputB2bWrapper'>
                        <CodeInput
                            className='color'
                            InputColor='white'
                            value={mobileOtpToken}
                            autoFocus={propsIsEntering}
                            isNumberInput
                            color='white'
                            length={length}
                            onChangeOTP={onChangeOTP}
                            disabled={otpVerifyInprocess || isVerifyOtpBlocked}
                            otpValueArray={otpValueArray}
                            handleSetOptValueArray={handleSetOptValueArray}
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
                        disableFontColor=''
                        bgcolor=''
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
    phoneNumber: '',
};

export default VerifyOtpPage;
