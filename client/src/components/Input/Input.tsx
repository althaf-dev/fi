/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Font, Flex } from '../Abstract';
import InputLabel from './InputLabel';
import StyledInput from './StyledInput';
import InputProps from './InputProps';
import DefaultInputProps from './DefaultInputProps';
import {
    NOT_ALLOWED_MARKETING_EMAIL,
    NOT_ALLOW_EMAIL_DOMAIN,
} from '../../utils/Constants';

const ErrorMessage = styled(Font)``;

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 8px;
`;

const ErrorWrapper = styled(Flex)`
    position: absolute;
    left: 15px;
    top: 108%;
    display: flex;
    align-items: baseline;
`;

const Input = (props: InputProps) => {
    const {
        fieldName, fieldType, placeholder, errorMessage, extra, font, type, autoFocus, disabled, required, pattern, value: inputValue, testId,
        caretColor, labelFont, label, clicked, isValid, onChange, setButtonClick, onKeyDown, className,
    } = props;

    const {
        showError, allowAutoComplete, checkType, errorMessage: extraErrorMessage, isEmailErrorVisible, showLabelAlways,
        onFocus, allowPersonalEmail,
    } = extra;

    const [shouldShowError, setShouldShowError] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const [placeholderTxt, setPlaceholderTxt] = useState(placeholder);

    useEffect(() => {
        setErrMessage(errorMessage);
    }, [errorMessage]);

    useEffect(() => {
        setShouldShowError(extra && showError);
    }, [extra]);

    const onInputChange = (event: any) => {
        shouldShowError && setShouldShowError(false);
        clicked && setButtonClick();

        let { target: { value: eventValue } } = event;
        if (
            extra
            && allowAutoComplete
            && inputValue
            && eventValue.length > inputValue.length
        ) {
            const lastChar = eventValue.charAt(eventValue.length - 1);
            if (
                lastChar === '@'
                && !eventValue.slice(0, eventValue.length - 1).includes('@')
            ) {
                eventValue = `${eventValue}gmail.com`;
            }
        }

        onChange(fieldName, eventValue);

        if (required && !!pattern) {
            const isInputValueValid = pattern.test(eventValue);

            if (isInputValueValid) {
                setShouldShowError(false);
                // Please change it carefully
                if (extra && checkType === 'EMAIL') {
                    let isMarketingEmail = false;
                    const comparable = eventValue.slice(0, eventValue.indexOf('@') + 1);
                    for (const domain of NOT_ALLOWED_MARKETING_EMAIL) {
                        if (comparable.toLowerCase() === domain.toLowerCase()) {
                            isMarketingEmail = true;
                            break;
                        }
                    }

                    let isPersonalEmail = false;
                    const personalComparable = eventValue
                        .split('@')[1]
                        .split('.')[0];
                    for (const domain of NOT_ALLOW_EMAIL_DOMAIN) {
                        if (
                            personalComparable.toLowerCase()
                            === domain.toLowerCase()
                        ) {
                            isPersonalEmail = true;
                            break;
                        }
                    }

                    // If its a personal email & we are not allowing personal email, throw error
                    if (
                        isMarketingEmail
                        || (isPersonalEmail && !allowPersonalEmail)
                    ) {
                        const message = extra && extraErrorMessage
                            ? extraErrorMessage
                            : errorMessage;
                        setErrMessage(message);
                        isValid(fieldName, eventValue, false);
                    } else {
                        isValid(fieldName, eventValue, true);
                        if (hasError) {
                            setHasError(false);
                        }
                    }
                } else {
                    if (hasError) {
                        setHasError(false);
                    }
                    isValid(fieldName, eventValue, true);
                }
            } else {
                setErrMessage(errorMessage);
                // Adding this condition only for community username input. But should be done for all inputs.
                // so that users understand why the submit button is disabled
                // if input is invalid then show error message to the user.
                if (extra && checkType === 'COMMUNITY_USERNAME') {
                    setShouldShowError(true);
                }
                if (!hasError) {
                    setHasError(true);
                    isValid(fieldName, eventValue, false);
                }
            }
        }
    };

    const onPasteChange = (event: any) => {
        // only in case of name input field
        if (fieldType === 'name') {
            const pastedValue = event.clipboardData.getData('Text');

            // match the name regex with the pasted value
            if (!pattern.test(pastedValue)) {
                event.preventDefault();
                return;
            }

            onInputChange(event);
            return;
        }

        onInputChange(event);
    };

    useEffect(() => {
        clicked && setShouldShowError(hasError);
    }, [clicked]);

    useEffect(() => {
        if (required && !!pattern) {
            const isInputValueValid = pattern.test(inputValue);
            if (isInputValueValid) {
                isValid(fieldName, inputValue, true);
            } else {
                isValid(fieldName, inputValue, false);
            }
        } else {
            isValid(fieldName, inputValue, true);
        }
    }, []);

    useEffect(() => {
        if (extra && isEmailErrorVisible) {
            isEmailErrorVisible(shouldShowError);
        }
    }, [shouldShowError]);

    return (
        <InputContainer>
            <StyledInput
                font={font || 'input'}
                tagType='input'
                type={type}
                autoFocus={autoFocus}
                placeholder={placeholderTxt}
                disabled={disabled}
                value={inputValue || ''}
                onBlur={() => {
                    if (!extra || !showLabelAlways) {
                        setPlaceholderTxt(' ');
                    }
                }}
                onFocus={() => {
                    if (extra && onFocus) {
                        onFocus();
                    }
                    setPlaceholderTxt(placeholder);
                }}
                onChange={onInputChange}
                onKeyDown={(event) => {
                    if (onKeyDown) {
                        onKeyDown(event);
                    }

                    // enter key
                    if (event.keyCode === 13 && event.target.value) {
                        event.preventDefault();
                        event.stopPropagation();
                        props.onEnterClick(event);
                    }
                }}
                id={testId}
                onPaste={onPasteChange}
                showLabelAlways={extra && showLabelAlways}
                caretColor={caretColor}
                className={className}
            />

            <InputLabel
                font={labelFont || 'label'}
                tagType='label'
                color={shouldShowError ? 'ERROR_RED' : 'MID_GREY'}
            >
                {label}
            </InputLabel>

            {shouldShowError ? (
                <ErrorWrapper>
                    <ErrorMessage
                        font='label'
                        tagType='label'
                        color='ERROR_RED'
                    >
                        {errMessage}
                    </ErrorMessage>
                </ErrorWrapper>
            ) : null}
        </InputContainer>
    );
};

Input.defaultProps = DefaultInputProps;

export default Input;
