/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file PAN Input Page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import {
    PrimaryButton, Input,
} from '../../../components';
import { REGEX_PAN_CARD_NUMBER } from '../../../utils/RegexPattern';
import { ErrorDescription, ErrorWrapper, FooterContainer } from '../../../components/Waitlist/styled';

import Header from '../../WebForm/Header';
import { WrapperOne, SubDescription } from '../../MinKycClosedAccount/styled';
import { ButtonHolder } from '../OTPVerificationPage/VerifyOtpPage/StyledOtpPage';

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

interface PanInputPageInterface {
    theme?: any,
    onSubmit: (pan: string) => void,
    errorMessage?: string,
}

const PanInputPage = (props: PanInputPageInterface) => {
    const { theme, onSubmit, errorMessage } = props;
    const [isEntering, setIsEntering] = useState(false);
    const [pan, setPan] = useState('');
    const [isPanValid, setIsPanValid] = useState(false);

    const onPANChange = (inputField, inputPAN) => {
        setPan(inputPAN);
        const checkValidInput = new RegExp(REGEX_PAN_CARD_NUMBER);
        const isPanInputValid = !(!inputPAN || !checkValidInput.test(inputPAN))
        setIsPanValid(isPanInputValid);
    };

    const submitPan = () => {
        onSubmit(pan);
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
                title='Enter your PAN Number'
                description={(
                    <HeaderDescription
                        content='These details are required to verify your identity'
                        highlightContent=''
                    />
                )}
            />
            <InputWrapper>
                <Input
                    fieldName='PANNumber'
                    font='inputVariantThree'
                    labelFont='labelVariantFourteen'
                    caretColor={theme?.color?.FOREST_GREEN}
                    label='PAN NUMBER'
                    value={pan}
                    autoFocus
                    placeholder='e.g. AWZBH9122K'
                    pattern={REGEX_PAN_CARD_NUMBER}
                    // isValid={isEmailValid}
                    clicked={false}
                    onChange={onPANChange}
                    onEnterClick={submitPan}
                    extra={{
                        showLabelAlways: true,
                    }}
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
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label='Next'
                        onClick={submitPan}
                        disabled={!isPanValid}
                        enableBoxShadow={isPanValid} // isloading
                        borderRadius='19px'
                        disableTransForm
                        disableBgColor='WHITE_LILAC'
                        disableFontColor='BOMBAY'
                    />
                </ButtonHolder>
            </FooterContainer>
        </WrapperOne>
    );
};

PanInputPage.defaultProps = {
    theme: null,
    errorMessage: '',
};

export default PanInputPage;
