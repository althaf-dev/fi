/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Verify Otp Page
 */

import React, { useState, useEffect } from 'react';
import { ErrorDescription, ErrorWrapper } from '@/components/Waitlist/styled';
import {
    CodeInput,
    InputWrapperOne,
    CodeInputWrapper,
} from './StyledOtpPage';
import { trackGTMEvent } from '@/events';
import { LANDED_ON_OTP_SCREEN } from '../../../../events/EventName';

interface VerifyOtpPageProps {
    otpVerifyError?: string;
    isEntering?: boolean;
    resetOtpVerifyError: () => void;
    otpVerifyInprocess: boolean;
    // eslint-disable-next-line react/no-unused-prop-types
    isVerifyOtpBlocked?: boolean;
    length: number;
    onChange?:any,
    mobileOtpToken: any;
    otpValueArray?: Array<string>;
    handleSetOptValueArray?: any;
    onEnterClick?: () => void;
}

const VerifyOtpPage = (props: VerifyOtpPageProps) => {
    const {
        isEntering: propsIsEntering,
        otpVerifyError,
        resetOtpVerifyError,
        otpVerifyInprocess,
        isVerifyOtpBlocked,
        length,
        onChange,
        mobileOtpToken,
        otpValueArray,
        handleSetOptValueArray,
        onEnterClick
    } = props;

    const [isEntering, setIsEntering] = useState(false);

    const onChangeOTP = (otp: any) => {
        if (otp.length > 0) {
            resetOtpVerifyError();
        }

        if (onChange && typeof onChange === 'function') {
            onChange(otp);
        }
    };

    useEffect(() => {
        setIsEntering(true);
        onChange('');
    }, []);

    useEffect(() => {
        trackGTMEvent(LANDED_ON_OTP_SCREEN);
    }, []);

    return (
        <InputWrapperOne
            className={`InputWrapperOneB2b  ${!isEntering
                ? 'transition transition-start-initial-top opacity-initial'
                : 'transition transition-start-final opacity-final'}`}
        >
            <div className={otpVerifyError ? 'animation' : ''}>
                <CodeInputWrapper className='InputB2bWrapper'>
                    <CodeInput
                        className='color'
                        InputColor='#313234'
                        value={mobileOtpToken}
                        autoFocus={propsIsEntering}
                        isNumberInput
                        color='#00B899'
                        length={length}
                        onChangeOTP={onChangeOTP}
                        disabled={otpVerifyInprocess || isVerifyOtpBlocked}
                        otpValueArray={otpValueArray}
                        handleSetOptValueArray={handleSetOptValueArray}
                        onEnterClick={onEnterClick}
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
        </InputWrapperOne>
    );
};

VerifyOtpPage.defaultProps = {
    otpVerifyError: '',
    isEntering: true,
    onNextStep: null,
    onPrevStep: null,
    isVerifyOtpBlocked: false,
    length: 6,
};

export default VerifyOtpPage;
