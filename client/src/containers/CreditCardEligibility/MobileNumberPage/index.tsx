/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Generate Mobile Number OTP Page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { ErrorDescription, ErrorWrapper, FooterContainer } from '../../../components/Waitlist/styled';

import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';
import { Device } from '../../../Themes/Device';

import { PrimaryButton } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';

import { selectCreditCardEligibilityReducer, selectPhoneNumber, selectToken } from '../selectors';
import Header from '../Header';
import { Wrapper } from '../styled';
import { mobileGenerateOtpCodeAction, onChangeCreditCardEligibilityValue } from '../actions';
import { PAGE_MAP, REQUIRED_FIELDS } from '../constants';
import UserDetailsPage from '../UserDetailsPage';

const ButtonHolder = styled.div`
    height: 52px;
    min-width: 312px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 5px;
`;

const HeaderContainer = styled.div`
    margin-bottom: 30px;

    @media ${Device.desktop} {
        margin-bottom: 60px;
    }
`;

const MobileNumberPage = () => {
    const dispatch = useDispatch();

    const { countryCode, phoneNumber } = useSelector(selectPhoneNumber, shallowEqual);

    const { mobileOtpToken } = useSelector(selectToken, shallowEqual);
    const { isLoading, errorMessage, isInputValueValid } = useSelector(selectCreditCardEligibilityReducer, shallowEqual);

    const [isNumValid, setIsNumValid] = useState(!!phoneNumber);

    const onChangeReducerValue = useOnChangeReducerValue(onChangeCreditCardEligibilityValue);

    /*
    const resetInputValueValidation = () => {
        const resetValidity = {
            firstName: false,
            lastName: false,
            dateOfBirth: false,
            panCardNumber: false,
            emailId: false,
            [ConsentType.CONSENT_TYPE_FI_TNC]: false,
            [ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]: false,
        };

        dispatch(setInputValueValidAction(resetValidity));
    };
    */

    /*
    const resetErrorState = () => {
        setErrorMessages({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            panCardNumber: '',
            emailId: '',
        });
    };
    */

    const onClickBack = () => {
        onChangeReducerValue({
            token: {
                mobileOtpToken: '',
                accessToken: '',
            },
            otpVerificationStatus: {
                isOtpVerified: false,

            },
            currentStep: PAGE_MAP.LANDING_PAGE,
        });
    };

    const areAllFieldsValid = () => REQUIRED_FIELDS.every((field) => isInputValueValid[field]);

    const onSubmit = () => {
        const payload = {
            countryCode,
            phoneNumber,
        };

        dispatch(mobileGenerateOtpCodeAction(payload));
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
            <HeaderContainer>
                <Header
                    title='Give us a few quick details'
                    onClickPrevButton={onClickBack}
                    icon={LOGOS_URL_MAP.FI_FEDERAL}
                    ctaCssId='cc-waitlist-back-btn'
                />
            </HeaderContainer>
            <UserDetailsPage
                isNumValid={isNumValid}
                setIsNumValid={setIsNumValid}
            />
            <FooterContainer>
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label='CONTINUE'
                        disabled={(!(areAllFieldsValid() && isNumValid) || isLoading)}
                        borderRadius='12px'
                        disableTransForm
                        disableBgColor='GREEN_PEA'
                        disableFontColor='BOMBAY'
                        testId='cc-waitlist-mobile-number-btn'
                        onClick={onSubmit}
                    />
                </ButtonHolder>
            </FooterContainer>
            {errorMessage ? (
                <ErrorWrapper textAlignment='start' noPadding>
                    <ErrorDescription
                        font='labelVariantOne'
                        color='ERROR_RED'
                        tagType='label'
                    >
                        {errorMessage}
                    </ErrorDescription>
                </ErrorWrapper>
            ) : null}
        </Wrapper>
    );
};

export default MobileNumberPage;
