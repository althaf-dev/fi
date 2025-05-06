/* eslint-disable camelcase */
/**
 * @file UserDetailsPage
 * Shows details of user like name and email if the user is already registered for the waitlist
 * If the user is not registred, name and email is added to the user  detail
 */

'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { riskFormEvents } from '../../../events/EventName';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';
import { onChangeCreditCardEligibilityValue, setErrorMessage, fireEvent } from '@/rtk/components/riskForm/reducer';
import { NumberInputDark } from '../styled';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';

const InputWrapper = styled.div`
    max-width: 100%;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 5rem;
`;

const NumberWrapper = styled.div`
    margin-bottom: 20px;

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

const CheckBoxWrapper = styled.div`
    margin-top: 10px;
    text-align: center;
    max-width: 100%;
`;

const Wrapper = styled.div`
    background: transparent;
    width: 100%;
`;

const CheckBoxText = styled.span`
    ${MIXINS.FontMixin({
        font: 'Inter',
        weight: 500,
        size: '10px',
        lineHeight: '14px',
    })};
    color: ${(props) => props.theme.color.TEXT_GREY_1};
    position: relative;
    text-align: start;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '16px',
        lineHeight: '22px',
    })};
        
    }
`;

interface GenerateOtpProps {
    onSubmit: () => void,
}

const GenerateOtp = ({ onSubmit } : GenerateOtpProps) => {
    const dispatch = useAppDispatch();

    const { phone, errorMessage } = useAppSelector((state) => state.riskForm);

    const { countryCode, phoneNumber } = phone;

    const onMobileInputChange = (inputValue: string) => {
        if (errorMessage) dispatch(setErrorMessage(''));
        dispatch(onChangeCreditCardEligibilityValue({ phone: { countryCode, phoneNumber: inputValue } }));
    };

    useEffect(() => {
        dispatch(fireEvent({ eventName: riskFormEvents.RISK_FORM_LANDING_PAGE }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <InputWrapper>
                <NumberWrapper>
                    <NumberInputDark
                        maxAllowedLength={10}
                        value={phoneNumber}
                        onChange={onMobileInputChange}
                        onEnterClick={() => { onSubmit(); }}
                        autoFocus
                    />
                </NumberWrapper>
            </InputWrapper>
            <CheckBoxWrapper>
                <CheckBoxText className='text'>
                    We&apos;ll send an OTP for verification
                </CheckBoxText>
            </CheckBoxWrapper>
        </Wrapper>
    );
};

export default GenerateOtp;
