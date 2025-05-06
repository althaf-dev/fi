/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Verify Otp Page
 */

import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { ErrorDescription, ErrorWrapper } from '../../../components/Waitlist/styled';
import { ENTERED_OTP_WL_CC_EVENT } from '../../../events/EventName';
import { Font, Image, Link } from '../../../components/Abstract';
import { PNGS_URL, LOGOS_URL } from '../../../constants/AssetConstants';
import { CenterText } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';
import { trackGTMEvent } from '../../../events';
import { htmlSanitization } from '../../../utils';

import Header from '../Header';
import { Wrapper, LabelWithImage, LogoWrapper } from '../styled';
import { selecOtpVerificationStatus, selectCreditCardWaitlistReducer, selectPhoneNumber, selectToken } from '../selectors';
import { mobileGenerateOtpCodeAction, mobileVerifyOtpCodeAction, onChangeCreditCardWaitlistValue } from '../actions';
import { OTP_RETRY_TIME } from '../constants';

import {
    CodeInput, InputWrapperOne, CodeInputWrapper, RocketImageHolder, VerifiedImageHolder,
    OtpVerificationHolder,
} from './styled';

interface VerifyOtpPageProps {
    otpVerifyError?: string;
    isOtpVerified?: boolean;
    onPrevStep?: () => void;
}

const VerifyOtpPage = (props: VerifyOtpPageProps) => {
    const {
        isOtpVerified,
        otpVerifyError,
        onPrevStep,
    } = props;

    const dispatch = useDispatch();

    const { countryCode, phoneNumber } = useSelector(selectPhoneNumber, shallowEqual);
    const { mobileOtpToken } = useSelector(selectToken, shallowEqual);
    const { isVerifyOtpInProcess } = useSelector(selecOtpVerificationStatus, shallowEqual);
    const { mobileOtpRetrytime: otpRetryTime, isLoading } = useSelector(selectCreditCardWaitlistReducer, shallowEqual);

    const [isEntering, setIsEntering] = useState(false);
    const [code, setCode] = useState('');
    const [counter, setCounter] = useState(otpRetryTime || OTP_RETRY_TIME);
    const [triggeredGTMEvent, setTriggeredGTMEvent] = useState(false);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeCreditCardWaitlistValue,
    );

    const resetOtpVerifyError = () => {
        onChangeReducerValue({ errorMessage: '' });
    };

    const resendOtp = () => {
        const payload = {
            countryCode,
            phoneNumber,
        };
        dispatch(mobileGenerateOtpCodeAction(payload));
    };

    const onResendClick = () => {
        resetOtpVerifyError();
        setCode('');
        resendOtp();
    };

    const onNextStep = (payload) => {
        const verifyOtpReq = {
            ...payload,
            countryCode,
            phoneNumber,
            token: mobileOtpToken,
        };
        dispatch(mobileVerifyOtpCodeAction(verifyOtpReq));
    };

    const onChangeOTP = (otp) => {
        if (otp.length === 6) {
            const payload = {
                otp,
            };

            setCode(otp);
            onNextStep(payload);
        }

        if (otp.length > 0) {
            resetOtpVerifyError();
        }

        if (otp.length === 1) {
            if (triggeredGTMEvent) {
                return;
            }

            trackGTMEvent(ENTERED_OTP_WL_CC_EVENT);
            setTriggeredGTMEvent(true);
        }
    };

    useEffect(() => {
        let timer;

        if (otpVerifyError) {
            timer = setTimeout(() => setCode(''), 700);
        }

        return () => clearTimeout(timer);
    }, [otpVerifyError]);

    useEffect(() => {
        if (!isLoading && counter === 0) {
            setCounter(otpRetryTime);
        }
    }, [isLoading]);

    useEffect(() => {
        let timer;

        if (counter > 0) {
            timer = setInterval(() => setCounter(counter - 1), 1000);
        }

        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        setIsEntering(true);
    }, []);

    return (
        <Wrapper className='scrollbar-hide'>
            <Header
                title='Enter your OTP'
                description={`Sent to +${countryCode}-${phoneNumber}`}
                onClickPrevButton={onPrevStep}
            />
            <InputWrapperOne>
                <div className={otpVerifyError ? 'animation' : null}>
                    <CodeInputWrapper>
                        <CodeInput
                            className='color'
                            value={code}
                            autoFocus={isEntering}
                            isNumberInput
                            color=''
                            length={6}
                            onChangeOTP={onChangeOTP}
                            disabled={isVerifyOtpInProcess}
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

                {(counter === 0 && !isVerifyOtpInProcess) ? (
                    <CenterText
                        font='input'
                        tagType='text'
                        color='GREY_3'
                    >
                        <span>
                            Didn&apos;t receive the OTP?
                            {' '}
                            <Link linkType='inline' onClick={onResendClick} id='cc-waitlist-resend-otp-btn'>
                                Resend
                            </Link>
                        </span>
                    </CenterText>
                ) : (
                    <CenterText font='titleVariantThree' tagType='text' color='GREY_3'>
                        Resend OTP in
                        {' '}
                        {counter}
                        {' '}
                        {counter === 1 ? ' second' : ' seconds'}
                    </CenterText>
                )}
            </InputWrapperOne>

            {!(isVerifyOtpInProcess || isOtpVerified) ? (
                <LabelWithImage>
                    <LogoWrapper>
                        <Image icon={`${LOGOS_URL}fi-logo-bg.png`} alt='Fi logo' width='32px' height='32px' />
                    </LogoWrapper>
                    <Font font='labelVariantTwo' tagType='label' color='GREY_3'>
                        <p
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization('OTP from <b>FiMony</b> may take up to 30 seconds to arrive') }}
                        />
                    </Font>
                </LabelWithImage>
            ) : null}

            {isVerifyOtpInProcess ? (
                <OtpVerificationHolder>
                    <RocketImageHolder>
                        <Image icon={`${PNGS_URL}rocket-emoji.png`} alt='rocket emoji' />
                    </RocketImageHolder>
                    <Font font='labelVariantTwo' tagType='label' color='GREY_3'>
                        Verifying OTP...
                    </Font>
                </OtpVerificationHolder>
            ) : null}

            {isOtpVerified ? (
                <OtpVerificationHolder>
                    <VerifiedImageHolder>
                        <Image icon={`${PNGS_URL}checked-icon-round.png`} alt='checked icon' />
                    </VerifiedImageHolder>
                    <Font font='labelVariantTwo' tagType='label' color='GREY_3'>
                        Verified
                    </Font>
                </OtpVerificationHolder>
            ) : null}
        </Wrapper>
    );
};

VerifyOtpPage.defaultProps = {
    otpVerifyError: '',
    isOtpVerified: false,
    onPrevStep: null,
};

export default VerifyOtpPage;
