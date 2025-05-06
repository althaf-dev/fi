/**
 * @file UserDetailsPage
 * Shows details of user like name and email if the user is already registered for the waitlist
 * If the user is not registred, name and email is added to the user  detail
 */

import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { ErrorDescription, ErrorWrapper } from '../../../components/Waitlist/styled';

import { isValidDate } from '../../../utils';

import {
    REGEX_DATE_OF_BIRTH, REGEX_EMAIL, REGEX_MOBILE, REGEX_NAME, REGEX_PAN_CARD_NUMBER,
} from '../../../utils/RegexPattern';
import { APP_URLS, CREDIT_CARD_TERMS_AND_CONDITIONS_URL, EXPERIAN_TERMS_AND_CONDITIONS_URL, TERMS_AND_CONDITIONS_URL } from '../../../constants/AppConstant';
import { ENTERED_NAME_WL_CC_EVENT, VERIFY_EMAIL_WL_CC_EVENT } from '../../../events/EventName';
import MIXINS from '../../../Themes/mixins';
import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components/Abstract';
import { PNGS_URL } from '../../../constants/AssetConstants';
import ToolTip from '../../../components/ToolTipVariantOne';
import { useOnChangeReducerValue } from '../../../hooks';
import { trackGTMEvent } from '../../../events';

import {
    Wrapper, InfoContainer, InfoDescription, InputDark, NumberInputDark, CheckboxWrapper,
} from '../styled';
import { onChangeCreditCardEligibilityValue, setErrorMessagesAction, setInputValueValidAction } from '../actions';
import { ConsentType, KeyCode } from '../constants';
import { selectUserDetails, selectPhoneNumber, selectCreditCardEligibilityReducer } from '../selectors';

const InputWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    margin-bottom: 10px;
`;

const InputContainer = styled.div`
    margin-bottom: 20px;
`;

const NumberWrapper = styled.div`
    margin-bottom: 20px;

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

const CheckBoxWrapper = styled.div`
    margin-top: 10px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;

    @media ${Device.desktop} {
        gap: 12px;
    }
`;

const CheckBoxText = styled.div`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '10px', lineHeight: '14px',
    })};
    color: ${(props) => props.theme.color.STEEL};
    position: relative;
    text-align: start;
    width: 100%;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '16px', lineHeight: '24px',
    })};
    }
`;

const ExperainTncImageHolder = styled.div`
    width: 43px;
    height: 14px;
    display: inline-block;
    vertical-align: middle;

    @media ${Device.desktop} {
        width: 73px;
        height: 23px;
    }
`;

const LinkLabel = styled.a`
    text-decoration: none;
`;

interface IUserDetailsPageProps {
    isNumValid: boolean;
    setIsNumValid: any;
}

const UserDetailsPage = (props: IUserDetailsPageProps) => {
    const { isNumValid, setIsNumValid } = props;
    // this date can be modified to change the default DOB on load
    const defaultDateSelectedForDOB = new Date();

    const dispatch = useDispatch();

    const userDetails = useSelector(selectUserDetails, shallowEqual);
    const { isInputValueValid, errorMessages } = useSelector(selectCreditCardEligibilityReducer, shallowEqual);
    const {
        firstName, lastName, dateOfBirth, panCardNumber, emailId, isExistingUser,
    } = userDetails || {};
    const { countryCode, phoneNumber } = useSelector(selectPhoneNumber, shallowEqual);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeCreditCardEligibilityValue,
    );

    const isValid = (fieldName: string, value: string) => {
        let fieldValue = value;

        if (fieldValue !== '' && !fieldValue) {
            fieldValue = '';
        }

        let errorMessage = '';

        let isInputValid = false;

        if (fieldName === 'firstName' || fieldName === 'lastName') {
            isInputValid = REGEX_NAME.test(fieldValue) && fieldValue?.length >= 3;

            if (!isInputValid) {
                errorMessage = 'Name must be at least 3 characters long and contain valid characters.';
            }
        } else if (fieldName === 'emailId') {
            isInputValid = REGEX_EMAIL.test(fieldValue);

            if (!isInputValid) {
                errorMessage = 'Please enter a valid email ID';
            }
        } else if (fieldName === 'dateOfBirth') {
            isInputValid = REGEX_DATE_OF_BIRTH.test(fieldValue);

            if (!isInputValid) {
                errorMessage = 'Please enter a valid date of birth';
            }
        } else if (fieldName === 'panCardNumber') {
            isInputValid = REGEX_PAN_CARD_NUMBER.test(fieldValue);

            if (!isInputValid) {
                errorMessage = 'Please enter a valid PAN number';
            }
        }

        dispatch(setInputValueValidAction({ ...isInputValueValid, [fieldName]: isInputValid }));

        return errorMessage;
    };

    const GTM_EVENT_MAP = {
        firstName: ENTERED_NAME_WL_CC_EVENT,
        emailId: VERIFY_EMAIL_WL_CC_EVENT,
    };

    const onMobileInputChange = (inputValue: string) => {
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
    };

    const onInputChange = (fieldName: string, value: string) => {
        if (value && value[0] === ' ') {
            return;
        }

        const updatedUserDetails = {
            userDetails: {
                firstName: fieldName === 'firstName' ? value : firstName,
                lastName: fieldName === 'lastName' ? value : lastName,
                dateOfBirth: fieldName === 'dateOfBirth' ? value : dateOfBirth,
                panCardNumber: fieldName === 'panCardNumber' ? value : panCardNumber,
                emailId: fieldName === 'emailId' ? value : emailId,
                [ConsentType.CONSENT_TYPE_FI_TNC]: userDetails[ConsentType.CONSENT_TYPE_FI_TNC],
                [ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]: userDetails[ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL],
                isExistingUser,
            },
        };

        onChangeReducerValue(updatedUserDetails);

        const errorMessage = isValid(fieldName, value);

        if (errorMessage) {
            dispatch(setErrorMessagesAction({ ...errorMessages, [fieldName]: errorMessage }));
        } else {
            dispatch(setErrorMessagesAction({ ...errorMessages, [fieldName]: '' }));
        }

        const gtmEvent = GTM_EVENT_MAP[fieldName];
        trackGTMEvent(gtmEvent);
    };

    const onKeyDown = (event: any) => {
        const { keyCode } = event;
        // restrict numbers
        if (keyCode >= KeyCode.KEY_0 && keyCode <= KeyCode.KEY_9) {
            event.preventDefault();
        }
        // allow backspace key (keyCode = 8)
        if (firstName && firstName.length >= 80 && keyCode !== KeyCode.BACKSPACE) {
            event.preventDefault();
        }
    };

    const onCheckboxTick = (value: string) => () => {
        const consentTypeValue = userDetails[value];

        const updatedUserDetails = {
            userDetails: {
                ...userDetails,
                [value]: !consentTypeValue,
            },
        };

        dispatch(setInputValueValidAction({ ...isInputValueValid, [value]: !consentTypeValue }));

        onChangeReducerValue(updatedUserDetails);
    };

    return (
        <Wrapper>
            <InputWrapper>
                <NumberWrapper>
                    <NumberInputDark
                        maxAllowedLength={10}
                        value={phoneNumber}
                        onChange={onMobileInputChange}
                        autoFocus
                    />
                </NumberWrapper>
                <InputContainer>
                    <InputDark
                        fieldName='firstName'
                        label='FIRST NAME'
                        font='input'
                        labelFont='labelVariantFourteen'
                        value={firstName}
                        pattern={REGEX_NAME}
                        errorMessage='Invalid First Name'
                        placeholder='John'
                        clicked={false}
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                        extra={{
                            showLabelAlways: true,
                        }}
                    />
                    {errorMessages?.firstName ? (
                        <ErrorWrapper textAlignment='start' noPadding>
                            <ErrorDescription
                                font='labelVariantOne'
                                color='ERROR_RED'
                                tagType='label'
                            >
                                {errorMessages?.firstName}
                            </ErrorDescription>
                        </ErrorWrapper>
                    ) : null}
                </InputContainer>
                <InputContainer>
                    <InputDark
                        fieldName='lastName'
                        label='LAST NAME'
                        font='input'
                        labelFont='labelVariantFourteen'
                        value={lastName}
                        pattern={REGEX_NAME}
                        errorMessage='Invalid Last Name'
                        placeholder='Doe'
                        clicked={false}
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                        extra={{
                            showLabelAlways: true,
                        }}
                    />
                    {errorMessages?.lastName ? (
                        <ErrorWrapper textAlignment='start' noPadding>
                            <ErrorDescription
                                font='labelVariantOne'
                                color='ERROR_RED'
                                tagType='label'
                            >
                                {errorMessages?.lastName}
                            </ErrorDescription>
                        </ErrorWrapper>
                    ) : null}
                </InputContainer>
                <InputContainer>
                    <InputDark
                        fieldName='dateOfBirth'
                        label='DATE OF BIRTH'
                        font='input'
                        type='date'
                        labelFont='labelVariantFourteen'
                        // uses the current date as the default date selected for the date of birth.
                        value={dateOfBirth || defaultDateSelectedForDOB.toISOString().slice(0, 10)}
                        pattern={REGEX_DATE_OF_BIRTH}
                        errorMessage='Invalid Date of birth'
                        placeholder='01/01/1999'
                        clicked={false}
                        onChange={onInputChange}
                        extra={{
                            showLabelAlways: true,
                        }}
                    />
                    {errorMessages.dateOfBirth ? (
                        <ErrorWrapper textAlignment='start' noPadding>
                            <ErrorDescription
                                font='labelVariantOne'
                                color='ERROR_RED'
                                tagType='label'
                            >
                                {errorMessages.dateOfBirth}
                            </ErrorDescription>
                        </ErrorWrapper>
                    ) : null}
                </InputContainer>
                <InputContainer>
                    <InputDark
                        fieldName='panCardNumber'
                        label='PAN CARD'
                        font='input'
                        labelFont='labelVariantFourteen'
                        value={panCardNumber}
                        pattern={REGEX_PAN_CARD_NUMBER}
                        errorMessage='Invalid Pan Card Number'
                        placeholder='BNZAA2318J'
                        clicked={false}
                        onChange={onInputChange}
                        extra={{
                            showLabelAlways: true,
                        }}
                    />
                    {errorMessages?.panCardNumber ? (
                        <ErrorWrapper textAlignment='start' noPadding>
                            <ErrorDescription
                                font='labelVariantOne'
                                color='ERROR_RED'
                                tagType='label'
                            >
                                {errorMessages?.panCardNumber}
                            </ErrorDescription>
                        </ErrorWrapper>
                    ) : null}
                </InputContainer>
                <InputDark
                    fieldName='emailId'
                    label='EMAIL ADDRESS'
                    font='input'
                    labelFont='labelVariantFourteen'
                    value={emailId}
                    placeholder='john.doe@email.com'
                    pattern={REGEX_EMAIL}
                    clicked={false}
                    onChange={onInputChange}
                    extra={{
                        allowPersonalEmail: true,
                        showLabelAlways: true,
                        checkType: 'EMAIL',
                    }}
                />
                {errorMessages?.emailId ? (
                    <ErrorWrapper textAlignment='start' noPadding>
                        <ErrorDescription
                            font='labelVariantOne'
                            color='ERROR_RED'
                            tagType='label'
                        >
                            {errorMessages?.emailId}
                        </ErrorDescription>
                    </ErrorWrapper>
                ) : null}
                <InfoContainer>
                    <InfoDescription
                        font='labelVariantSeventeen'
                        tagType='text'
                        color='SUVA_GREY'
                        textAlign='left'
                    >
                        We&apos;ll process your credit report & your PAN details to verify and create your profile and check your eligibility
                        for services provided on Fi.
                    </InfoDescription>
                    <CheckBoxWrapper>
                        <CheckboxContainer>
                            <CheckboxWrapper
                                type='checkbox'
                                checked={userDetails[ConsentType.CONSENT_TYPE_FI_TNC]}
                                onChange={onCheckboxTick(ConsentType.CONSENT_TYPE_FI_TNC)}
                                // eslint-disable-next-line no-octal-escape
                                checkMarkCssCode='"\2713"'
                            />
                            <CheckBoxText>
                                <span>
                                    I consent to Fi receiving & processing my credit information from Experian for 6 months. I also agree to
                                    <LinkLabel href={EXPERIAN_TERMS_AND_CONDITIONS_URL} target='_blank'>
                                        <ExperainTncImageHolder>
                                            <Image
                                                icon={`${PNGS_URL}experian-tnc.png`}
                                                fallBackImage={`${PNGS_URL}experian-tnc.webp`}
                                                alt='icon'
                                            />
                                        </ExperainTncImageHolder>
                                        <Font color='FOREST_GREEN' tagType='span' font='labelVariantSeventeen'>T&C</Font>
                                    </LinkLabel>
                                </span>
                                <ToolTip tooltipText='If you want to withdraw your consent please reach out to help@fi.care' isCustomFlag />
                            </CheckBoxText>
                        </CheckboxContainer>
                        <CheckboxContainer>
                            <CheckboxWrapper
                                type='checkbox'
                                checked={userDetails[ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]}
                                onChange={onCheckboxTick(ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL)}
                                // eslint-disable-next-line no-octal-escape
                                checkMarkCssCode='"\2713"'
                            />
                            <CheckBoxText>
                                I agree with’s&nbsp;
                                <LinkLabel href={TERMS_AND_CONDITIONS_URL} target='_blank'>
                                    <Font
                                        color='FOREST_GREEN'
                                        tagType='span'
                                        font='labelVariantSeventeen'
                                    >
                                        epifi technologies T&C
                                    </Font>
                                </LinkLabel>
                                {', '}
                                <LinkLabel href={APP_URLS.PRIVACY_PAGE} target='_blank'>
                                    <Font
                                        color='FOREST_GREEN'
                                        tagType='span'
                                        font='labelVariantSeventeen'
                                    >
                                        Privacy Policy
                                    </Font>
                                </LinkLabel>
                                {' and '}
                                <LinkLabel href={CREDIT_CARD_TERMS_AND_CONDITIONS_URL} target='_blank'>
                                    <Font
                                        style={{ wordBreak: 'keep-all' }}
                                        color='FOREST_GREEN'
                                        tagType='span'
                                        font='labelVariantSeventeen'
                                    >
                                        Federal Bank Credit Card T&Cs
                                    </Font>
                                </LinkLabel>
                            </CheckBoxText>
                        </CheckboxContainer>
                    </CheckBoxWrapper>
                </InfoContainer>
            </InputWrapper>
        </Wrapper>
    );
};

export default UserDetailsPage;
