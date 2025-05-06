/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { memo, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Flex from '../Abstract/Flex/Flex';
import SingleInput from './SingleInput';

export interface OTPInputProps extends React.HTMLAttributes<HTMLElement> {
    value?: string;
    length: number;
    onChangeOTP: (otp: string) => any;
    autoFocus?: boolean;
    isNumberInput?: boolean;
    disabled?: boolean;
    color?: string;
    name?: string;
    InputColor? : string;
    onBlur?: () => void;
    otpValueArray?: Array<string>;
    handleSetOptValueArray?: any;
    onEnterClick?: () => void;
}

const OTPWrapper = styled(Flex)`
    justify-content: space-between;
`;

const OTPInputComponent = (props: OTPInputProps) => {
    const {
        length,
        isNumberInput,
        autoFocus,
        disabled,
        onChangeOTP,
        color,
        value,
        otpValueArray,
        handleSetOptValueArray,
        onEnterClick,
        ...rest
    } = props;

    const [activeInput, setActiveInput] = useState(0);

    const resetInputValues = () => {
        const updatedOTPValues = [...(otpValueArray as string[])];
        updatedOTPValues.fill('');
        handleSetOptValueArray(updatedOTPValues);
    };

    // Focus `inputIndex` input
    const focusInput = useCallback(
        (inputIndex: number) => {
            const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
            setActiveInput(selectedIndex);
        },
        [length]
    );

    // Helper to return OTP from inputs
    useEffect(() => {
        if (!value) {
            resetInputValues();
            focusInput(0);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleOtpChange = useCallback(
        (otp: string[]) => {
            const otpValue = otp.join('');
            if (typeof onChangeOTP === 'function') onChangeOTP(otpValue);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onChangeOTP, otpValueArray]
    );

    // Helper to return value with the right type: 'text' or 'number'
    const getRightValue = useCallback(
        (str: string) => {
            const changedValue = str;
            if (!isNumberInput) {
                return changedValue;
            }
            return !changedValue || /\d/.test(changedValue) ? changedValue : '';
        },
        [isNumberInput]
    );

    // Change OTP value at focussing input
    const changeCodeAtFocus = useCallback(
        (str: string) => {
            const updatedOTPValues = [...(otpValueArray as string[])];
            updatedOTPValues[activeInput] = str[0] || '';
            handleSetOptValueArray(updatedOTPValues);
            handleOtpChange(updatedOTPValues);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [activeInput, handleSetOptValueArray, otpValueArray]
    );

    const focusPrevInput = useCallback(() => {
        focusInput(activeInput - 1);
    }, [activeInput, focusInput]);

    const focusNextInput = useCallback(() => {
        focusInput(activeInput + 1);
    }, [activeInput, focusInput]);

    // Handle onFocus input
    const handleOnFocus = (index: number) => () => {
        const newValue = [...otpValueArray as string[]];
        newValue[index] = '';
        handleSetOptValueArray(newValue);
        focusInput(index);
        handleOtpChange(newValue);
    };

    // Handle onChange value for each input
    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = getRightValue(e.currentTarget.value);

            if (!val) {
                e.preventDefault();
                return;
            }
            changeCodeAtFocus(val);
            focusNextInput();
        },
        [changeCodeAtFocus, focusNextInput, getRightValue]
    );

    // Handle onKeyDown input
    const handleOnKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            switch (e.key) {
                case 'Backspace':
                case 'Delete': {
                    e.preventDefault();
                    if ((otpValueArray as string[])[activeInput]) {
                        changeCodeAtFocus('');
                    } else {
                        focusPrevInput();
                    }
                    break;
                }
                case 'ArrowLeft': {
                    e.preventDefault();
                    focusPrevInput();
                    break;
                }
                case 'ArrowRight': {
                    e.preventDefault();
                    focusNextInput();
                    break;
                }
                case ' ': {
                    e.preventDefault();
                    break;
                }
                case 'Enter': {
                    e.preventDefault();
                    e.stopPropagation();
                    if (onEnterClick) onEnterClick();
                    break;
                }
                default:
                    break;
            }

            // Allow only 0 to 9 => ios bug fix
            if (
                !['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(
                    e.key
                )
            ) {
                e.preventDefault();
            }
        },
        [
            activeInput,
            changeCodeAtFocus,
            focusNextInput,
            focusPrevInput,
            otpValueArray,
        ]
    );

    const handleOnPaste = (
        e: React.ClipboardEvent<HTMLInputElement>,
        index: number
    ) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').trim();

        if (pastedData && !Number.isNaN(+pastedData)) {
            const optArray = pastedData.split('');
            if (optArray.length === length) {
                handleSetOptValueArray(optArray);
                onChangeOTP(optArray.join(''));
            } else if (optArray.length + index === length) {
                const oldValues = [...(otpValueArray as string[])];
                for (let i = 0; i < optArray.length; i += 1) {
                    oldValues[index + i] = optArray[i];
                }
                handleSetOptValueArray(oldValues);
                onChangeOTP(oldValues.join(''));
            } else {
                return false;
            }
        }
        return false;
    };

    return (
        <OTPWrapper {...rest}>
            {(otpValueArray as string[]).map((optValue, index) => (
                <SingleInput
                    key={`SingleInput-${index}`}
                    focus={activeInput === index}
                    value={optValue}
                    autoFocus={autoFocus}
                    onFocus={handleOnFocus(index)}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                    disabled={disabled}
                    color={color}
                    onPaste={(e) => handleOnPaste(e, index)}
                    name={props.name}
                    InputColor={props.InputColor}
                    onBlur={props.onBlur}
                />
            ))}
        </OTPWrapper>
    );
};

const OTPInput = memo(OTPInputComponent);
export default OTPInput;
