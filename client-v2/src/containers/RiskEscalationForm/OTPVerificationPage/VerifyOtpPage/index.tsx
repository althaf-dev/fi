/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Verify Otp Page
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from '@/components/Abstract';
import {
    Footer,
    WrapperOne,
} from './StyledOtpPage';
import OTPInputContainer from './OtpInput';
import { SVGS_URL } from '@/constants/AssetConstants';
import Image from '@/components/Abstract/Image/Image';
import { ErrorDescription, ErrorWrapper } from '@/components/Waitlist/styled';

const VerificationSuccessWrapper = styled.div`
    display: contents;
    .text {
        color : #333333;
        font-family: Inter;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
    }

    .logo {
        text-align: center;
        padding: 10px;
    }

    .logo img {
        height: 30px;
        width: 30px;
        object-fit: contain;
    }
`;

interface VerifyOtpPageProps {
    otpRetryTime: number;
    otpVerifyError?: string;
    apiInProgress?: boolean;
    resendOtp: ()=> void;
    otpVerifyInprocess: boolean;
    // eslint-disable-next-line react/no-unused-prop-types
    showQRCodeModal?: boolean;
    isVerifyOtpBlocked?: boolean;
    length: number;
    onChange?:any,
    mobileOtpToken: any;
    otpValueArray?: Array<string>;
    handleSetOptValueArray?: any;
    isOtpVerified: boolean;
    nextPage?: () => void;
    errorMessage: string;
    resetOtpVerifyError: () => void;
    onEnterClick?: () => void;
}

const VerifyOtpPage = (props: VerifyOtpPageProps) => {
    const {
        otpRetryTime = 29,
        apiInProgress,
        otpVerifyError,
        resendOtp,
        otpVerifyInprocess,
        isVerifyOtpBlocked,
        length,
        onChange,
        mobileOtpToken,
        otpValueArray,
        handleSetOptValueArray,
        isOtpVerified,
        nextPage,
        errorMessage,
        resetOtpVerifyError,
        onEnterClick,
    } = props;

    const [counter, setCounter] = useState<any>(5);
    const [isEntering, setIsEntering] = useState(false);
    const [resendCounter, setResendCounter] = useState<any>(otpRetryTime);

    const counterRef = useRef<any>(null);
    const onResendClick = () => {
        resetOtpVerifyError();
        resendOtp();
        setResendCounter(otpRetryTime);
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
        let timer: any;
        if (!timer) {
            timer = setInterval(() => {
                setResendCounter((prev: number) => {
                    if (prev > 1) return prev - 1;
                    clearInterval(timer);
                    return 0;
                });
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [apiInProgress]);

    useEffect(() => {
        let nextPageCounterRef: any;
        if (isOtpVerified && typeof nextPage === 'function') {
            if (!nextPageCounterRef) {
                nextPageCounterRef = setTimeout(() => {
                    clearInterval(counterRef.current);
                    nextPage();
                }, 5000);
            }

            counterRef.current = setInterval(() => {
                setCounter((prev: number) => prev - 1);
            }, 1000);
        }
        return () => {
            clearInterval(counterRef.current);
            clearTimeout(nextPageCounterRef);
        };
    }, [isOtpVerified]);

    const getFooterContent = (): any => {
        if (otpVerifyInprocess) {
            return 'Verifing Otp';
        } if (isOtpVerified) {
            return (
                <div>
                    Loading the next screen in 5 sec.
                    <div>
                        <a className='link-proceed' onClick={nextPage}>Proceed now</a>
                    </div>
                </div>
            );
        }
        if (resendCounter === 0 && !otpVerifyInprocess && !isVerifyOtpBlocked) {
            return (
                <span>
                    Didn&apos;t receive the OTP?
                    <span className='link-text'>
                        <Link linkType='inline' font='titleVariantThree' onClick={onResendClick}>
                            Resend
                        </Link>
                    </span>
                </span>
            );
        }
        return (
            <span>
                Resend OTP in
                {' '}
                {resendCounter}
                {' '}
                {resendCounter === 0 ? ' second' : ' seconds'}
            </span>
        );
    };

    return (
        <WrapperOne className='scrollbar-hide WrapperOneB2b'>
            <OTPInputContainer
                isEntering={isEntering}
                otpVerifyError={otpVerifyError}
                mobileOtpToken={mobileOtpToken}
                isVerifyOtpBlocked={isVerifyOtpBlocked}
                otpValueArray={otpValueArray}
                handleSetOptValueArray={handleSetOptValueArray}
                onChange={onChange}
                otpVerifyInprocess={false}
                resetOtpVerifyError={resetOtpVerifyError}
                length={length}
                onEnterClick={onEnterClick}
            />
            {
                isOtpVerified && (
                    <VerificationSuccessWrapper>
                        <div className='logo'>
                            <Image icon={`${SVGS_URL}check-icon.svg`} />
                        </div>
                        <div className='text'>Verified</div>
                    </VerificationSuccessWrapper>
                )
            }
            <Footer font='titleVariantThree' tagType='text' color='OSLO_GRAY' className='footer'>
                <div>
                    {errorMessage ? (
                        <ErrorWrapper textAlignment='center' noPadding>
                            <ErrorDescription
                                font='labelVariantOne'
                                color='ERROR_RED'
                                tagType='label'
                            >
                                {errorMessage}
                            </ErrorDescription>
                        </ErrorWrapper>
                    ) : null}
                </div>
                <div>
                    {getFooterContent()}
                </div>

            </Footer>
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
