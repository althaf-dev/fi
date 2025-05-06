/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Generate Mobile Number OTP Page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { WINDOW_SIZE } from '../../../Themes/Device';
import { Font, PrimaryButton } from '../../../components';
import { useWindowDimensions, useOnChangeReducerValue } from '../../../hooks';
import { REGEX_MOBILE } from '../../../utils/RegexPattern';
import { FooterContainer, ErrorDescription, ErrorWrapper } from '../../../components/Waitlist/styled';
import { NAVIGATION_URLS } from '../../../constants/AppConstant';

import { selectCreditCardWaitlistReducer, selectPhoneNumber, selectToken } from '../selectors';
import Header from '../Header';
import {
    Wrapper, SubDescription, InfoContainer, InfoDescription, NumberInputDark,
} from '../styled';
import { createUserAction, onChangeCreditCardWaitlistValue } from '../actions';
import { PAGE_MAP } from '../constants';

const ButtonHolder = styled.div`
    height: 52px;
    max-width: 312px;
    width: 100%;
`;

const LinkLabel = styled.a`
    text-decoration: none;
`;

type HeaderDescriptionProps = {
    content: string;
};

// Header Description component
const HeaderDescription = (props: HeaderDescriptionProps) => {
    const { content } = props;
    return (
        <SubDescription>
            {content}
        </SubDescription>
    );
};

const MobileNumberPage = () => {
    const dispatch = useDispatch();

    const { countryCode, phoneNumber } = useSelector(selectPhoneNumber, shallowEqual);
    const { mobileOtpToken } = useSelector(selectToken, shallowEqual);
    const { isLoading, errorMessage } = useSelector(selectCreditCardWaitlistReducer, shallowEqual);

    const [isNumValid, setIsNumValid] = useState(!!phoneNumber);

    const { width } = useWindowDimensions();

    const onChangeReducerValue = useOnChangeReducerValue(onChangeCreditCardWaitlistValue);

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
            onChangeReducerValue({ phone: { countryCode, phoneNumber: inputValue } });
        } else if (isNumValid) {
            setIsNumValid(false);
        }

        if (errorMessage) {
            onChangeReducerValue({ errorMessage: '' });
        }
    };

    const onClickBack = () => {
        window.location.href = NAVIGATION_URLS.CREDIT_CARD_WAITLIST.url;
    };

    const generateOTP = () => {
        if (isNumValid && !isLoading) {
            const payload = {
                countryCode,
                phoneNumber,
            };
            dispatch(createUserAction(payload));
        }
    };

    useEffect(() => {
        if (mobileOtpToken && mobileOtpToken.length > 0) {
            onChangeReducerValue({
                currentStep: PAGE_MAP.VERIFY_OTP_PAGE,
            });
        }
    }, [mobileOtpToken]);

    return (
        <Wrapper>
            <Header
                title='Get your waitlist spot'
                description={(
                    <HeaderDescription
                        content='Earn 5% value back on your new credit card. Drop your number here and we’ll get in touch when it’s ready👇'
                    />
                )}
                onClickPrevButton={onClickBack}
                ctaCssId='cc-waitlist-back-btn'
            />
            <div>
                <NumberInputDark
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
            </div>
            <FooterContainer>
                <InfoContainer>
                    <InfoDescription
                        font='labelVariantOne'
                        tagType='text'
                        color='SUVA_GREY'
                    >
                        By clicking verify, I consent to Fi’s&nbsp;
                        <LinkLabel href='/privacy' target='_blank'>
                            <Font
                                color='FOREST_GREEN'
                                tagType='span'
                                font='labelVariantOne'
                            >
                                Privacy Policy
                            </Font>
                        </LinkLabel>
                        {' and '}
                        <LinkLabel href='/T&C' target='_blank'>
                            <Font
                                style={{ wordBreak: 'keep-all' }}
                                color='FOREST_GREEN'
                                tagType='span'
                                font='labelVariantOne'
                            >
                                Terms of Use
                            </Font>
                        </LinkLabel>
                    </InfoDescription>
                </InfoContainer>
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label={width < WINDOW_SIZE.TAB
                            ? 'CONTINUE'
                            : 'NEXT: VERIFY WITH OTP'}
                        onClick={generateOTP}
                        disabled={!isNumValid || isLoading}
                        borderRadius='12px'
                        disableTransForm
                        disableBgColor='GREEN_PEA'
                        disableFontColor='BOMBAY'
                        testId='cc-waitlist-mobile-number-btn'
                    />
                </ButtonHolder>
            </FooterContainer>
        </Wrapper>
    );
};

export default MobileNumberPage;
