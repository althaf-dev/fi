/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Generate Email OTP Page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Device } from '../../../Themes/Device';
import { EmployerFormData } from '../../../FormData';
import { Font, PrimaryButton, MarginAuto, Input } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';
import {
    trackGTMEvent,
    CLICKED_NEXT_ON_WORK_EMAIL_WEB,
    ENTER_WORK_EMAIL_ON_WEB,
} from '../../../events';
import {
    FooterContainer,
} from '../../../components/Waitlist/styled';

import { WrapperOne } from '../styled';
import Header from '../Header';
import UnableToVerify from '../UnableToVerify';
import selectSalaryAccountSignUpReducer from '../selectors';
import {
    onChangeSalaryAccountSignUpValue,
    emailGenerateOtpCode,
} from '../actions';
import { NAVIGATE_PAGE } from '../constants';

const ButtonHolder = styled.div`
    height: 52px;
    width: 312px;

    @media ${Device.desktop} {
        margin-bottom: 14px;
    }
`;

const InputWrapper = styled(MarginAuto)`
    margin-bottom: 59px;
    max-width: 312px;

    @media ${Device.tab} {
        max-width: 500px;
    }
`;

const InfoDescription = styled(Font)``;

interface EmailPageProps {
    theme?: any;
}

const EmailPage = (props: EmailPageProps) => {
    const { theme } = props;

    const dispatch = useDispatch();

    const {
        emailId,
        emailOtpToken,
        accessToken,
        errorMessage,
        isLoading,
        clientReqId,
    } = useSelector(selectSalaryAccountSignUpReducer, shallowEqual);

    const [isEntering, setIsEntering] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountSignUpValue,
    );

    const onInputChange = (fieldName, value: string) => {
        onChangeReducerValue({
            emailId: value ?? '',
        });

        if (errorMessage) {
            onChangeReducerValue({
                errorMessage: '',
            });
        }
    };

    const onSubmit = () => {
        onChangeReducerValue({
            errorMessage: '',
            currentStep: NAVIGATE_PAGE.EMAIL_VERIFY_OTP_PAGE,
        });
    };

    const onPrevStep = () => {
        onChangeReducerValue({
            errorMessage: '',
            clientReqId: '',
            accessToken: '',
            currentStep: NAVIGATE_PAGE.MOBILE_GENERATE_OTP_PAGE,
        });
    };

    const generateOTP = () => {
        if (isEmailValid) {
            const payload = {
                email: emailId,
                accessToken,
                clientReqId,
            };
            dispatch(emailGenerateOtpCode(payload));
            trackGTMEvent(CLICKED_NEXT_ON_WORK_EMAIL_WEB);
        }
    };

    const isValid = (fieldName, value, valid) => {
        if (valid) {
            trackGTMEvent(ENTER_WORK_EMAIL_ON_WEB);
        }
        setIsEmailValid(valid);
    };

    useEffect(() => {
        setIsEntering(true);
    }, []);

    useEffect(() => {
        if (emailOtpToken && emailOtpToken.length > 0) {
            onSubmit();
        }
    }, [emailOtpToken]);

    return (
        <WrapperOne
            className={
                !isEntering
                    ? 'transition transition-start-initial-bottom opacity-initial scrollbar-hide'
                    : 'transition transition-start-final opacity-final scrollbar-hide'
            }
        >
            <Header
                isEntering={isEntering}
                title='Enter your official work email ID'
                description='To verify you’re a working professional, enter the email that belongs to the company you’re working with'
                onClickPrevButton={onPrevStep}
            />
            <InputWrapper
                className={`${
                    !isEntering
                        ? 'transition transition-start-initial-bottom opacity-initial'
                        : 'transition transition-start-final opacity-final'
                }}
                `}
            >
                <Input
                    fieldName='Emaild Id'
                    font='inputVariantThree'
                    labelFont='labelVariantFourteen'
                    caretColor={theme?.color?.FOREST_GREEN}
                    label='OFFICIAL WORK EMAIL ID'
                    value={emailId}
                    autoFocus
                    placeholder='e.g. anup@epifi.com'
                    pattern={EmployerFormData.pattern}
                    isValid={isValid}
                    clicked={false}
                    onChange={onInputChange}
                    onEnterClick={generateOTP}
                    extra={{
                        allowPersonalEmail: true,
                        showLabelAlways: true,
                        checkType: 'EMAIL',
                    }}
                />

                <InfoDescription
                    font='labelVariantOne'
                    color={errorMessage ? 'ERROR_RED' : 'GREY_3'}
                    tagType='label'
                >
                    {errorMessage
                        || "We'll only send an OTP for verification. Nothing else!"}
                </InfoDescription>
            </InputWrapper>
            <FooterContainer>
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label='Next'
                        onClick={generateOTP}
                        disabled={!isEmailValid || isLoading}
                        enableBoxShadow={!(!isEmailValid || isLoading)}
                        borderRadius='19px'
                        disableTransForm
                        disableBgColor='WHITE_LILAC'
                        disableFontColor='BOMBAY'
                    />
                </ButtonHolder>

                <UnableToVerify
                    contentText='Unable to verify?'
                    linkText='Try it on the app'
                    showQRCodeModal
                />
            </FooterContainer>
        </WrapperOne>
    );
};

EmailPage.defaultProps = {
    theme: null,
};

export default EmailPage;
