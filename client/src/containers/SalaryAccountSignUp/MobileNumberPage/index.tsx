/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Generate Mobile Number OTP Page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
    trackGTMEvent,
    CLCIKED_SEND_UPDATED_ONWAWEB,
    CLICKED_NEXT_ON_MOBILE_NO_WEB,
    ENTER_NUMBER_ON_WEB,
} from '../../../events';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { Font, PrimaryButton, NumberInput } from '../../../components';
import { useWindowDimensions, useOnChangeReducerValue } from '../../../hooks';
import { REGEX_MOBILE } from '../../../utils/RegexPattern';
import { ErrorDescription, ErrorWrapper, FooterContainer } from '../../../components/Waitlist/styled';

import selectSalaryAccountSignUpReducer from '../selectors';
import Header from '../Header';
import { WrapperOne, SubDescription } from '../styled';
import {
    onChangeSalaryAccountSignUpValue,
    mobileGenerateOtpCode,
} from '../actions';
import { NAVIGATE_PAGE } from '../constants';

const FooterDescription = styled(Font)<{ marginBottom?: boolean }>`
    margin: ${(props) => (props.marginBottom ? '23px !important' : '23px 23px 0px !important')};
    text-align: center;
    position: relative;
`;

const WhatsappPreferenceContainer = styled(Font)`
    margin: 23px !important;
    text-align: center;
    position: relative;

    @media ${Device.desktop} {
        margin: 23px auto !important;
        max-width: 300px;
    }
`;

const ButtonHolder = styled.div`
    height: 52px;
    width: 312px;
`;

const LinkContainer = styled.div`
    text-align: center;
    padding-bottom: 8px;

    @media ${Device.tab} {
        padding-bottom: 14px;
    }

    @media ${Device.desktop} {
        padding-bottom: 16px;
    }
`;

const LinkLabel = styled.a`
    text-decoration: none;
`;

const WhatsappPreferenceCheckBox = styled.span<{ whatsappPreference: boolean }>`
    background-color: ${(props) => (props.whatsappPreference
        ? props.theme.color.FOREST_GREEN
        : props.theme.color.WHITE)};
    border: ${(props) => (props.whatsappPreference ? '' : '1px solid')};
    border-radius: 3px;
    cursor: pointer;
    height: 15px;
    width: 15px;
    position: absolute;
    top: 0;
    left: -22px;
    &:after {
        content: "";
        border: 1px solid white;
        border-width: 0 2px 2px 0;
        height: 9px;
        width: 4px;
        position: absolute;
        bottom: 3px;
        left: 4px;
        transform: rotate(45deg);
    }

    @media ${Device.desktop} {
        left: -28px;
        top: -1px;
        height: 18px;
        width: 18px;
        &:after {
            height: 12px;
            left: 6px;
        }
    }
`;

const InputWrapper = styled.div``;

type HeaderDescriptionProps = {
    content: string;
    highlightContent: string;
};

// Header Description component
const HeaderDescription = (props: HeaderDescriptionProps) => {
    const { content, highlightContent } = props;
    return (
        <SubDescription>
            {content}
            {' '}
            <b>{highlightContent}</b>
        </SubDescription>
    );
};

const PhoneNumberPage = () => {
    const dispatch = useDispatch();

    const {
        phoneNumber,
        countryCode,
        whatsappPreference,
        isLoading,
        mobileOtpToken,
        errorMessage,
    } = useSelector(selectSalaryAccountSignUpReducer, shallowEqual);

    const [isNumValid, setIsNumValid] = useState(!!phoneNumber);
    const [isEntering, setIsEntering] = useState(false);

    const { width } = useWindowDimensions();

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountSignUpValue,
    );

    const onInputChange = (inputValue: string) => {
        const checkValidInput = new RegExp(REGEX_MOBILE);
        if (
            inputValue
            && inputValue.length >= 1
            && !checkValidInput.test(inputValue)
        ) {
            setIsNumValid(false);
            return;
        }

        if (inputValue && inputValue.length === 10) {
            setIsNumValid(true);
            onChangeReducerValue({ phoneNumber: inputValue });
            trackGTMEvent(ENTER_NUMBER_ON_WEB);
        } else if (isNumValid) {
            setIsNumValid(false);
        }

        if (errorMessage) {
            onChangeReducerValue({ errorMessage: '' });
        }
    };

    const generateOTP = () => {
        if (isNumValid && !isLoading) {
            const payload = {
                countryCode,
                phoneNumber,
            };
            trackGTMEvent(CLICKED_NEXT_ON_MOBILE_NO_WEB);
            dispatch(mobileGenerateOtpCode(payload));
        }
    };

    const onChangeWhatsAppPreference = () => {
        if (!whatsappPreference) {
            trackGTMEvent(CLCIKED_SEND_UPDATED_ONWAWEB);
        }
        onChangeReducerValue({ whatsappPreference: !whatsappPreference });
    };

    useEffect(() => {
        setIsEntering(true);
        onChangeReducerValue({ clientReqId: '' });
    }, []);

    useEffect(() => {
        if (mobileOtpToken && mobileOtpToken.length > 0) {
            onChangeReducerValue({
                currentStep: NAVIGATE_PAGE.MOBILE_VERIFY_OTP_PAGE,
            });
        }
    }, [mobileOtpToken]);

    return (
        <WrapperOne
            className={
                !isEntering
                    ? 'transition transition-start-initial-bottom opacity-initial scrollbar-hide'
                    : 'transition transition-start-final opacity-final scrollbar-hide'
            }
        >
            <Header
                isEntering
                title='Enter your mobile number'
                description={(
                    <HeaderDescription
                        content={
                            width < WINDOW_SIZE.TAB
                                ? 'Make sure you use the same number that is present'
                                : 'Make sure you use the same number that is present'
                        }
                        highlightContent={
                            width < WINDOW_SIZE.TAB
                                ? 'on this phone'
                                : 'on your phone'
                        }
                    />
                )}
            />
            <InputWrapper>
                <NumberInput
                    maxAllowedLength={10}
                    value={phoneNumber}
                    onChange={onInputChange}
                    onEnterClick={generateOTP}
                    autoFocus
                />
                {errorMessage ? (
                    <ErrorWrapper>
                        <ErrorDescription
                            font='labelVariantOne'
                            color='ERROR_RED'
                            tagType='label'
                        >
                            {errorMessage}
                        </ErrorDescription>
                    </ErrorWrapper>
                ) : null}
            </InputWrapper>
            <FooterContainer>
                <WhatsappPreferenceContainer
                    font='labelVariantOne'
                    tagType='text'
                    color='SUVA_GREY'
                >
                    <WhatsappPreferenceCheckBox
                        whatsappPreference={whatsappPreference}
                        onClick={onChangeWhatsAppPreference}
                    />
                    Send me important updates on WhatsApp
                </WhatsappPreferenceContainer>
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label='Next'
                        onClick={generateOTP}
                        disabled={!isNumValid || isLoading}
                        enableBoxShadow={!(!isNumValid || isLoading)}
                        borderRadius='19px'
                        disableTransForm
                        disableBgColor='WHITE_LILAC'
                        disableFontColor='BOMBAY'
                    />
                </ButtonHolder>
                <LinkContainer>
                    <FooterDescription
                        font='labelVariantOne'
                        tagType='text'
                        color='SUVA_GREY'
                    >
                        By continuing, I agree to Fi’s&nbsp;
                        <LinkLabel href='/privacy' target='_blank'>
                            <Font
                                color='FOREST_GREEN'
                                tagType='span'
                                font='labelVariantOne'
                            >
                                Privacy Policy
                            </Font>
                        </LinkLabel>
                        &nbsp;and&nbsp;
                        <LinkLabel href='/T&C' target='_blank'>
                            <Font
                                style={{ wordBreak: 'keep-all' }}
                                color='FOREST_GREEN'
                                tagType='span'
                                font='labelVariantOne'
                            >
                                TnC&apos;s
                            </Font>
                        </LinkLabel>
                    </FooterDescription>
                </LinkContainer>
            </FooterContainer>
        </WrapperOne>
    );
};

export default PhoneNumberPage;
