/* eslint-disable camelcase */
/**
 * @file UserDetailsPage
 * Shows details of user like name and email if the user is already registered for the waitlist
 * If the user is not registred, name and email is added to the user  detail
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LANDED_ON_MOBILE_SCREEN } from '../../../events/EventName';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';
import { onChangeCreditCardEligibilityValue } from '@/rtk/components/CreditCard/reducer';
import { trackGTMEvent } from '../../../events';
import { NumberInputDark, CheckboxWrapper } from '../styled';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';

const InputWrapper = styled.div`
    max-width: 500px;
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
    max-width: 500px;
`;

const CheckboxContainer = styled.div`
    gap: 8px;
    margin-bottom: 10px;
    margin-top: 89px;
    // display: inline;
    diplay: inline-block;
    
    .input {
        display: inline-block;
    }

    .text {
        display: inline-block;
        font-size: 10px;
        line-height: 10px;
        vertical-align: super;
        padding-left: 10px;
    }

    @media ${Device.desktop} {
        .text {
            font-size: 16px;
            line-height: 22px;  
            gap: 12px; 
        }
    };
`;

const Wrapper = styled.div`
    background: transparent;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
    }
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
    // width: 100%;


    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '16px',
        lineHeight: '22px',
    })};
        
    }
`;

const GenerateOtp = (props: any) => {
    const { styleConfig } = props;
    const dispatch = useAppDispatch();

    const { phone, has_whatsapp_consent } = useAppSelector((state) => state.creditCardEligibility);

    const { countryCode, phoneNumber } = phone;

    const onMobileInputChange = (inputValue: string) => {
        dispatch(onChangeCreditCardEligibilityValue({ phone: { countryCode, phoneNumber: inputValue } }));
    };

    const toggleWhatsAppNotification = () => {
        dispatch(onChangeCreditCardEligibilityValue({ has_whatsapp_consent: !has_whatsapp_consent }));
    };

    useEffect(() => {
        trackGTMEvent(LANDED_ON_MOBILE_SCREEN);
    }, []);

    return (
        <Wrapper>
            <InputWrapper>
                <NumberWrapper>
                    <NumberInputDark
                        maxAllowedLength={10}
                        value={phoneNumber}
                        onChange={onMobileInputChange}
                        onEnterClick={() => {}}
                        autoFocus
                    />
                </NumberWrapper>
            </InputWrapper>
            <CheckBoxWrapper>
                <CheckboxContainer>
                    <span className='input'>
                        <CheckboxWrapper
                            style={styleConfig.mobileVerification}
                            type='checkbox'
                            checked={has_whatsapp_consent}
                            onChange={toggleWhatsAppNotification}
                            // eslint-disable-next-line no-octal-escape
                            checkMarkCssCode='"\2713"'
                        />
                    </span>
                    <CheckBoxText className='text'>
                        I agree to get updates via WhatsApp
                    </CheckBoxText>
                </CheckboxContainer>
            </CheckBoxWrapper>
        </Wrapper>
    );
};

export default GenerateOtp;
