/**
 * @file UserDetailsPage
 * Shows details of user like name and email if the user is already registered for the waitlist
 * If the user is not registred, name and email is added to the user  detail
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ErrorDescription, ErrorWrapper } from '@/components/Waitlist/styled';
import {
    REGEX_DATE_OF_BIRTH, REGEX_EMAIL, REGEX_NAME, REGEX_PAN_CARD_NUMBER,
} from '@/utils/RegexPattern';
import { APP_URLS, CREDIT_CARD_TERMS_AND_CONDITIONS_URL, EXPERIAN_TERMS_AND_CONDITIONS_URL, TERMS_AND_CONDITIONS_URL } from '../../../constants/AppConstant';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';
import { Image } from '@/components/Abstract';
import { PNGS_URL } from '@/constants/AssetConstants';
import ToolTip from '@/components/ToolTipVariantOne';
import {
    InfoContainer, InfoDescription, InputDark, CheckboxWrapper, FooterSubTitle
} from '../styled';
import { updatedUserDetailsAction, setInputValueValidAction, setErrorMessagesAction } from '@/rtk/components/CreditCard/reducer';
import { ConsentType, KeyCode, PageConfig } from '../constants';
import { creditCardEvents } from '@/events/constants';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import logger from '@/utils/logger';
import { isValidDob, getPrevDateByYear, fireCreditCardEvents } from '../utils';

const InputContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;
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

const CheckBoxText = styled.div<any>`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '10px', lineHeight: '14px',
    })};
    position: relative;
    text-align: start;
    width: 100%;

    .variant {

    }

    .text {
        color: ${(props) => props?.style?.textType1?.color};
    }

    .link-text {
        color: ${(props) => props?.style?.textType2?.color};
        border-bottom : 1px solid ${(props) => props?.style?.textType2?.color};
    }

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

const Wrapper = styled.div`
        height: calc(100% - 200px)
        background: transparent;
        margin-top: 25px;
        @media ${Device.tab} {
        }

        @media ${Device.desktop} {
            max-width: 100%;
        }
`;

const UserDetailsPage = (props: any) => {
    const { styleConfig } = props;
    const defaultDateSelectedForDOB = new Date();

    const dispatch = useAppDispatch();

    const {
        isInputValueValid, userDetails, errorMessages, pageType
    } = useAppSelector((state) => state.creditCardEligibility);

    const {
        firstName, lastName, dateOfBirth, panCardNumber, emailId, isExistingUser,
    } = userDetails || {};

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
            if (!isInputValid || !isValidDob(fieldValue, 18)) {
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
        firstName: creditCardEvents.ENTERED_FIRST_NAME_WLCC,
        lastName: creditCardEvents.ENTERED_LAST_NAME_WLCC,
        emailId: creditCardEvents.ENTER_WORK_EMAIL_WLCC,
        dateOfBirth: creditCardEvents.ENTERED_DOB_WLCC,
        panCardNumber: creditCardEvents.ENTERED_PAN_WLCC,
    };

    const onInputChange = (fieldName: string, value: string) => {
        try {
            if (value && value[0] === ' ') {
                return;
            }

            const errorMessage = isValid(fieldName, value);
            if (errorMessage) {
                dispatch(setErrorMessagesAction({ ...errorMessages, [fieldName]: errorMessage }));
            } else {
                dispatch(setErrorMessagesAction({ ...errorMessages, [fieldName]: '' }));
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
            dispatch(updatedUserDetailsAction(updatedUserDetails));
        } catch (error: any) {
            logger.log('error', error);
        }
    };

    const onBlur = (fieldName: string) => {
        const gtmEvent = GTM_EVENT_MAP[fieldName as keyof typeof GTM_EVENT_MAP];
        fireCreditCardEvents(pageType, gtmEvent);
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

    const onCheckboxTick = (value: ConsentType) => () => {
        const consentTypeValue = (userDetails as any)[value];
        const updatedUserDetails = {
            userDetails: {
                ...userDetails,
                [value]: !consentTypeValue,
            },
        };

        if (value === 'CONSENT_TYPE_FI_TNC') {
            updatedUserDetails.userDetails[ConsentType.CONSENT_TYPE_FI_TNC]
            && fireCreditCardEvents(pageType, creditCardEvents.CLICKED_ON_CONSENT_1_TICK_MARK_WLCC);
        }

        if (value === 'CONSENT_TYPE_CREDIT_REPORT_DATA_PULL') {
            updatedUserDetails.userDetails[ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]
             && fireCreditCardEvents(pageType, creditCardEvents.CLICKED_ON_CONSENT_2_TICK_MARK_WLCC);
        }

        dispatch(updatedUserDetailsAction(updatedUserDetails));
    };

    useEffect(() => {
        fireCreditCardEvents(pageType, creditCardEvents.LANDED_ON_PERSONAL_DETAILS);
    }, [pageType]);

    const { pageStyle } = PageConfig[pageType]?.styleConfig || { pageStyle: { inputBoxStyle: { bgColor: '#55555' } } };

    const inputBoxStyle = pageStyle?.inputBoxStyle;

    return (
        <Wrapper>
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
                    style={inputBoxStyle}
                    onBlur={onBlur}
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
                    style={inputBoxStyle}
                    onBlur={onBlur}
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
                    style={inputBoxStyle}
                    onBlur={onBlur}
                    validation={{
                        max: getPrevDateByYear(18)
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
                    style={inputBoxStyle}
                    onBlur={onBlur}
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
                style={inputBoxStyle}
                onBlur={onBlur}
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
                    style={styleConfig.textType1}
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
                            style={styleConfig.checkbox}
                        />
                        <CheckBoxText
                            style={styleConfig}
                        >
                            <span className='text variant'>I agree with’s&nbsp; </span>
                            <span className='link-text variant'>
                                <LinkLabel href={TERMS_AND_CONDITIONS_URL} target='_blank'>
                                    epifi technologies T&C
                                </LinkLabel>
                            </span>
                            <span className='link-text variant'>
                                <LinkLabel href={APP_URLS.PRIVACY_PAGE} target='_blank'>
                                    Privacy Policy
                                </LinkLabel>
                            </span>
                            <span className='text variant'> and </span>
                            <span className='link-text variant'>
                                <LinkLabel href={CREDIT_CARD_TERMS_AND_CONDITIONS_URL} target='_blank'>
                                    Federal Bank Credit Card T&Cs
                                </LinkLabel>
                            </span>
                            {/* <ToolTip tooltipText='If you want to withdraw your consent please reach out to help@fi.care' isCustomFlag /> */}
                        </CheckBoxText>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxWrapper
                            type='checkbox'
                            checked={userDetails[ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]}
                            onChange={onCheckboxTick(ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL)}
                            // eslint-disable-next-line no-octal-escape
                            checkMarkCssCode='"\2713"'
                            style={styleConfig.checkbox}
                        />
                        <CheckBoxText style={styleConfig}>
                            <span className='text variant'>
                                I also agree to Experian
                            </span>
                            {' '}
                            <span className='link-text variant'>
                                <LinkLabel href={EXPERIAN_TERMS_AND_CONDITIONS_URL} target='_blank'>
                                    T&C
                                </LinkLabel>
                            </span>
                            {' '}
                            <span className='text variant'>
                                consent to Fi receiving & processing my credit information from Experian for 6 months.
                            </span>
                            <ToolTip tooltipText='If you want to withdraw your consent please reach out to help@fi.care' isCustomFlag />
                        </CheckBoxText>
                    </CheckboxContainer>
                </CheckBoxWrapper>
                <div />
                <FooterSubTitle>
                    <span className='text'>Enabled by&nbsp;</span>
                    <LinkLabel href={EXPERIAN_TERMS_AND_CONDITIONS_URL} target='_blank'>
                        <ExperainTncImageHolder>
                            <Image
                                icon={`${PNGS_URL}experian-tnc.png`}
                                fallBackImage={`${PNGS_URL}experian-tnc.webp`}
                                alt='icon'
                            />
                        </ExperainTncImageHolder>
                    </LinkLabel>
                </FooterSubTitle>
            </InfoContainer>
        </Wrapper>
    );
};

export default UserDetailsPage;
