/**
 * @file UserDetailsPage
 * Shows details of user like name and email if the user is already registered for the waitlist
 * If the user is not registred, name and email is added to the user  detail
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { PrimaryButton } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';
import { REGEX_EMAIL, REGEX_NAME } from '../../../utils/RegexPattern';
import { FooterContainer, ErrorDescription, ErrorWrapper } from '../../../components/Waitlist/styled';
import { trackGTMEvent } from '../../../events';
import { ENTERED_NAME_WL_CC_EVENT, SECURED_SPOT_ON_WL_CC_EVENT, VERIFY_EMAIL_WL_CC_EVENT } from '../../../events/EventName';

import { selectCreditCardWaitlistReducer, selectToken, selectUserDetails } from '../selectors';
import Header from '../Header';
import ConfirmationModal from '../ConfirmationModal';
import { Wrapper, InfoContainer, InfoDescription, InputDark } from '../styled';
import { onChangeCreditCardWaitlistValue, updateUserDetailsAction, getUserDetailsAction, setModalValue } from '../actions';
import { KeyCode, PAGE_MAP } from '../constants';

const ButtonHolder = styled.div`
    max-width: 312px;
    width: 100%;
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    margin-bottom: 10px;
`;

const NameInputContainer = styled.div`
    margin-bottom: 20px;
`;

const UserDetailsPage = () => {
    const dispatch = useDispatch();

    const { name, emailId, isExistingUser } = useSelector(selectUserDetails, shallowEqual);
    const { accessToken } = useSelector(selectToken, shallowEqual);
    const { isModalOpen, isUserDetailsUpdated, errorMessage } = useSelector(selectCreditCardWaitlistReducer, shallowEqual);

    const [isInputValueValid, setIsInputValueValid] = useState({
        name: false,
        emailId: false,
    });
    const [triggeredNameGTMEvent, setTriggeredNameGTMEvent] = useState(false);
    const [triggeredEmailGTMEvent, setTriggeredEmailGTMEvent] = useState(false);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeCreditCardWaitlistValue,
    );

    const isValid = (fieldName: string, value: string) => {
        let fieldValue = value;

        if (fieldValue !== '' && !fieldValue) {
            fieldValue = '';
        }

        let isInputValid = false;
        if (fieldName === 'name') {
            isInputValid = REGEX_NAME.test(fieldValue) && fieldValue?.length >= 3;
            setIsInputValueValid((state) => ({ ...state, name: isInputValid }));
        } else if (fieldName === 'emailId') {
            isInputValid = REGEX_EMAIL.test(fieldValue);
            setIsInputValueValid((state) => ({ ...state, emailId: isInputValid }));
        }
    };

    const onInputChange = (fieldName: string, value: string) => {
        if (value && value[0] === ' ') {
            return;
        }

        if (fieldName === 'name') {
            onChangeReducerValue({
                userDetails: {
                    name: value ?? '',
                    emailId,
                    isExistingUser,
                },
            });
            isValid(fieldName, value);

            if (!triggeredNameGTMEvent) {
                trackGTMEvent(ENTERED_NAME_WL_CC_EVENT);
                setTriggeredNameGTMEvent(true);
            }
        } else if (fieldName === 'emailId') {
            onChangeReducerValue({
                userDetails: {
                    name,
                    emailId: value ?? '',
                    isExistingUser,
                },
            });
            isValid(fieldName, value);

            if (!triggeredEmailGTMEvent) {
                trackGTMEvent(VERIFY_EMAIL_WL_CC_EVENT);
                setTriggeredEmailGTMEvent(true);
            }
        }

        if (errorMessage) {
            onChangeReducerValue({ errorMessage: '' });
        }
    };

    const onKeyDown = (event: any) => {
        const { keyCode } = event;
        // restrict numbers
        if (keyCode >= KeyCode.KEY_0 && keyCode <= KeyCode.KEY_9) {
            event.preventDefault();
        }
        // allow backspace key (keyCode = 8)
        if (name && name.length >= 80 && keyCode !== KeyCode.BACKSPACE) {
            event.preventDefault();
        }
    };

    const onClickBack = () => {
        onChangeReducerValue({
            token: {
                mobileOtpToken: '',
                accessToken: '',
            },
            otpVerificationStatus: {
                isOtpVerified: false,

            },
            errorMessage: '',
            currentStep: PAGE_MAP.GENERATE_OTP_PAGE,
        });
    };

    const onConfirm = () => {
        dispatch(setModalValue({ isModalOpen: true }));
        trackGTMEvent(SECURED_SPOT_ON_WL_CC_EVENT);
    };

    const onSubmit = () => {
        if (!(isInputValueValid.name || isInputValueValid.emailId)) {
            return;
        }

        const payload = {
            name,
            emailId,
            accessToken,
        };
        dispatch(updateUserDetailsAction(payload));

        dispatch(setModalValue({ isModalOpen: true }));
        trackGTMEvent(SECURED_SPOT_ON_WL_CC_EVENT);
    };

    useEffect(() => {
        if (accessToken) {
            dispatch(getUserDetailsAction({ accessToken }));
        }
    }, [accessToken]);

    return (
        <Wrapper>
            <Header
                title={isExistingUser ? 'Confirm your details? 🖖' : 'Tell us more about you? 🖖'}
                description=''
                onClickPrevButton={onClickBack}
            />
            <InputWrapper>
                <NameInputContainer>
                    <InputDark
                        fieldName='name'
                        label='YOUR NAME'
                        font='inputVariantThree'
                        labelFont='labelVariantFourteen'
                        value={name}
                        autoFocus={!isExistingUser}
                        pattern={REGEX_NAME}
                        errorMessage='Invalid Name'
                        placeholder='John Doe'
                        disabled={isExistingUser}
                        clicked={false}
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
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
                </NameInputContainer>
                <InputDark
                    fieldName='emailId'
                    label='EMAIL ADDRESS'
                    font='inputVariantThree'
                    labelFont='labelVariantFourteen'
                    value={emailId}
                    placeholder='john.doe@email.com'
                    disabled={isExistingUser}
                    pattern={REGEX_EMAIL}
                    clicked={false}
                    onChange={onInputChange}
                    extra={{
                        allowPersonalEmail: true,
                        showLabelAlways: true,
                        checkType: 'EMAIL',
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
                <InfoContainer>
                    <InfoDescription
                        font='labelVariantOne'
                        tagType='text'
                        color='SUVA_GREY'
                        textAlign='left'
                    >
                        No spamming. We promise 🤝&nbsp;
                    </InfoDescription>
                </InfoContainer>
            </InputWrapper>
            <FooterContainer>
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label={isExistingUser ? 'CONFIRM' : 'SUBMIT'}
                        onClick={isExistingUser ? onConfirm : onSubmit}
                        disabled={!isExistingUser && !(isInputValueValid.name && isInputValueValid.emailId)}
                        borderRadius='12px'
                        disableTransForm
                        disableBgColor='GREEN_PEA'
                        disableFontColor='BOMBAY'
                        testId='cc-waitlist-confirm-btn'
                    />
                </ButtonHolder>
                <InfoContainer>
                    <InfoDescription
                        font='labelVariantOne'
                        tagType='text'
                        color='SUVA_GREY'
                        textAlign='left'
                    >
                        Your personal information is secure with us and will never be shared with anyone else.
                    </InfoDescription>
                </InfoContainer>
            </FooterContainer>
            {(isUserDetailsUpdated || isModalOpen) ? <ConfirmationModal /> : null}
        </Wrapper>
    );
};

export default UserDetailsPage;
