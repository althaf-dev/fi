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
        name,
        ...rest
    } = props;

    const [activeInput, setActiveInput] = useState(0);
    const [otpValues, setOTPValues] = useState(Array<string>(length).fill(''));

    const resetInputValues = () => {
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.fill('');
        setOTPValues(updatedOTPValues);
    };

    // Helper to return OTP from inputs
    useEffect(() => {
        if (!value) {
            resetInputValues();
            focusInput(0);
        }
    }, [value]);

    const handleOtpChange = useCallback(
        (otp: string[]) => {
            const otpValue = otp.join('');
            onChangeOTP(otpValue);
        },
        [onChangeOTP]
    );

    // Helper to return value with the right type: 'text' or 'number'
    const getRightValue = useCallback(
        (str: string) => {
            let changedValue = str;
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
            const updatedOTPValues = [...otpValues];
            updatedOTPValues[activeInput] = str[0] || '';
            setOTPValues(updatedOTPValues);
            handleOtpChange(updatedOTPValues);
        },
        [activeInput, handleOtpChange, otpValues]
    );

    // Focus `inputIndex` input
    const focusInput = useCallback(
        (inputIndex: number) => {
            const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
            setActiveInput(selectedIndex);
        },
        [length]
    );

    const focusPrevInput = useCallback(() => {
        focusInput(activeInput - 1);
    }, [activeInput, focusInput]);

    const focusNextInput = useCallback(() => {
        focusInput(activeInput + 1);
    }, [activeInput, focusInput]);

    // Handle onFocus input
    const handleOnFocus = (index: number) => () => {
        const value = [...otpValues];
        value[index] = '';
        setOTPValues(value);
        focusInput(index);
        handleOtpChange(value);
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
                    if (otpValues[activeInput]) {
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
            otpValues,
        ]
    );

    const handleOnPaste = (
        e: React.ClipboardEvent<HTMLInputElement>,
        index: number
    ) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').trim();

        if (pastedData && !isNaN(+pastedData)) {
            const optArray = pastedData.split('');
            if (optArray.length === length) {
                setOTPValues(optArray);
                onChangeOTP(optArray.join(''));
            } else if (optArray.length + index === length) {
                const oldValues = [...otpValues];
                for (let i = 0; i < optArray.length; i++) {
                    oldValues[index + i] = optArray[i];
                }
                setOTPValues(oldValues);
                onChangeOTP(oldValues.join(''));
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    return (
        <OTPWrapper {...rest}>
            {otpValues.map((value, index) => (
                <SingleInput
                    key={`SingleInput-${index}`}
                    focus={activeInput === index}
                    value={value}
                    autoFocus={autoFocus}
                    onFocus={handleOnFocus(index)}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                    disabled={disabled}
                    color={color}
                    onPaste={(e) => handleOnPaste(e, index)}
                    name={props.name}
                />
            ))}
        </OTPWrapper>
    );
};

const OTPInput = memo(OTPInputComponent);
export default OTPInput;
