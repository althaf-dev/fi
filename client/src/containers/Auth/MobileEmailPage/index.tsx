/**
 * @file Generate Mobile Number & Email Page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import {
    PrimaryButton, NumberInput, CenterText, Link, Input,
} from '../../../components';
import { REGEX_EMAIL, REGEX_MOBILE } from '../../../utils/RegexPattern';
import { ErrorDescription, ErrorWrapper, FooterContainer } from '../../../components/Waitlist/styled';

import Header from '../../WebForm/Header';
import { WrapperOne, SubDescription } from '../../MinKycClosedAccount/styled';
import { ButtonHolder } from '../OTPVerificationPage/VerifyOtpPage/StyledOtpPage';

const FacingIssueFooter = styled(CenterText)`
    position: relative;
    margin-top: 12px;
    margin-bottom: 10px;
    font-size: 12px;

    @media ${Device.desktop} {
        margin-bottom: 0px;
    }
`;

const OTPForVerification = styled(CenterText)`
    position: relative;
    margin-top: 12px;
    margin-bottom: 10px;
    font-size: 12px;

    @media ${Device.desktop} {
        margin-bottom: 0px;
    }
`;

const InputWrapper = styled.div`
    padding-bottom: 80px;
    
    @media ${Device.phone} {
        width: 80%;
    }

    @media ${Device.tab} {
        width: 60%;
    }

    @media ${Device.desktop} {
        width: 30%;
    }
`;

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

interface MobileEmailPageInterface {
    theme?: any;
    isPhone: boolean;
    setIsPhone: (p: boolean) => void;
    handleSubmit?: (phone: string, email: string) => void;
    errorMessage?: string;
}

const MobileEmailPage = (props: MobileEmailPageInterface) => {
    const {
        theme, isPhone, setIsPhone, handleSubmit, errorMessage,
    } = props;
    const [isNumValid, setIsNumValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEntering, setIsEntering] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onPhoneNumberChange = (inputNumber) => {
        setPhone(inputNumber);
        const checkValidInput = new RegExp(REGEX_MOBILE);
        if (
            inputNumber
            && inputNumber.length >= 1
            && !checkValidInput.test(inputNumber)
        ) {
            setIsNumValid(false);
            return;
        }

        if (inputNumber && inputNumber.length === 10) {
            setIsNumValid(true);
        } else if (isNumValid) {
            setIsNumValid(false);
        }
    };

    const onEmailChange = (inputField, inputEmail) => {
        setEmail(inputEmail);
        const checkValidInput = new RegExp(REGEX_EMAIL);
        const isValidEmail = inputEmail && checkValidInput.test(inputEmail);
        setIsEmailValid(isValidEmail);
    };

    const generateOTP = () => {
        handleSubmit(phone, email);
    };

    useEffect(() => {
        setIsEntering(true);
    }, []);

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
                        content='Make sure you use the same one that is linked with your account'
                        highlightContent=''
                    />
                )}
            />
            <InputWrapper>
                {isPhone
                    ? (
                        <>
                            <NumberInput
                                maxAllowedLength={10}
                                value={phone}
                                onChange={onPhoneNumberChange}
                                onEnterClick={generateOTP}
                                autoFocus
                            />
                        </>
                    )
                    : (
                        <Input
                            fieldName='Email Id'
                            font='inputVariantThree'
                            labelFont='labelVariantFourteen'
                            caretColor={theme?.color?.FOREST_GREEN}
                            label='EMAIL ID'
                            value={email}
                            autoFocus
                            placeholder='e.g. abhishek@gmail.com'
                            pattern={REGEX_EMAIL}
                            // isValid={isEmailValid}
                            clicked={false}
                            onChange={onEmailChange}
                            onEnterClick={generateOTP}
                            extra={{
                                allowPersonalEmail: true,
                                showLabelAlways: true,
                                checkType: 'EMAIL',
                            }}
                        />
                    )}
                <OTPForVerification font='pSmall' tagType='text' color='TEXT_GREY_1'>We&apos;ll send an OTP for verification</OTPForVerification>
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
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label='Next'
                        onClick={generateOTP}
                        disabled={!((isPhone && isNumValid) || (!isPhone && isEmailValid))}
                        enableBoxShadow={((isPhone && isNumValid) || (!isPhone && isEmailValid))} // isloading
                        borderRadius='19px'
                        disableTransForm
                        disableBgColor='WHITE_LILAC'
                        disableFontColor='BOMBAY'
                    />
                </ButtonHolder>

                <FacingIssueFooter font='pSmallVariantSix' tagType='text' color='GREY_3'>
                    <Link
                        style={{ position: 'relative' }}
                        linkType='inline'
                        font='pSmallVariantSix'
                        onClick={() => {
                            setIsPhone(!isPhone);
                        }}
                    >
                        Verify with
                        {' '}
                        {isPhone ? 'Email' : 'Phone'}
                    </Link>
                </FacingIssueFooter>
            </FooterContainer>
        </WrapperOne>
    );
};

MobileEmailPage.defaultProps = {
    theme: null,
    handleSubmit: () => {},
    errorMessage: '',
};

export default MobileEmailPage;
