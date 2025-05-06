'use client';

/* eslint-disable react/require-default-props */
/**
 * @file number input with flag design
 */
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../Abstract';

import { Device } from '../../Themes/Device';
import { SVGS_URL } from '../../constants/AssetConstants';
import { REGEX_ALLOW_NUMERIC_VALUE } from '../../utils/RegexPattern';

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled(Font)`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }
    color: ${(props) => props.theme.color.SHUTTLE_GRAY} !important;
`;

const Input = styled(Text)`
    background-color: ${(props) => props.theme.color.TRANSPARENT};
    border: none;
    margin-left: 10px;
    outline: none;
    width: 150px;
    color: ${(props) => props.theme.color.SHARK1} !important;

    @media ${Device.tab} {
        width: 220px;
    }

    &::placeholder {
        color: ${(props) => props.theme.color.BOMBAY} !important;
        font-weight: 100;
    }
    caret-color: ${(props) => props.theme.color.FOREST_GREEN};
`;

const Flag = styled.div`
    min-width: 24px;
    height: 15px;
    margin-right: 10px;

    @media ${Device.desktop} {
        min-width: 40px;
        height: 25px;
        margin-right: 20px;
    }
`;

export interface numInputProps {
    value?: string;
    autoFocus?: boolean;
    maxAllowedLength?: number;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onEnterClick?: () => void;
    testId?: string;
    className?: string;
}

const NumberInput = (props: numInputProps) => {
    const {
        value: propsValue = '',
        autoFocus = false,
        maxAllowedLength = 0,
        disabled = false,
        onChange: propsOnChange = null,
        onEnterClick = null,
        testId,
        className = '',
    } = props;

    const [value, setValue] = useState(propsValue || '');
    const [isPasted, setIsPasted] = useState(false);

    // Mobile number formatting
    const mobileNumberFormatValue = useMemo(() => (
        value?.length > 5
            ? `${value.substring(0, 5)} ${value.substring(5)}`
            : value
    ), [value]);

    const onChange = (inputValue: any) => {
        if (maxAllowedLength) {
            if (
                inputValue.length <= maxAllowedLength
                && (inputValue[0] === '6'
                    || inputValue[0] === '7'
                    || inputValue[0] === '8'
                    || inputValue[0] === '9'
                    || inputValue === '')
            ) {
                setValue(inputValue);
                propsOnChange!(inputValue);
            }
        } else {
            // no condition for length
            setValue(inputValue);
            propsOnChange!(inputValue);
        }
    };

    const onInputChange = (event: any) => {
        let currentValue: string = event.target.value;

        if (currentValue) {
            currentValue = currentValue.replace(REGEX_ALLOW_NUMERIC_VALUE, '');
        }

        if (!isPasted) {
            onChange(currentValue);
        }

        setIsPasted(false);
    };

    const onPasteChange = (event: any) => {
        const pastedValue = event.clipboardData.getData('Text');

        if (!pastedValue) {
            event.preventDefault();
            return;
        }

        setIsPasted(true);
        onChange(pastedValue);
    };

    // Handle key down event for input value
    const onKeyDownValue = (event: any) => {
        const { key, ctrlKey, metaKey } = event;

        // Allow copy and paste shortcuts
        if ((ctrlKey || metaKey) && (key === 'c' || key === 'v')) {
            return;
        }

        // Prevent entering leading zero if value is empty
        if (value.length === 0 && ['0', '1', '2', '3', '4', '5'].includes(key)) {
            event.preventDefault();
        }

        // Prevent entering alphabets
        if (key >= 'a' && key <= 'z') {
            event.preventDefault();
        }

        // Prevent entering special characters
        if ([';', '=', ',', '-', '.', '/', '`', '[', ']', '\'', ' '].includes(key)) {
            event.preventDefault();
        }

        // Prevent arrow up and arrow down keys
        if (['ArrowUp', 'ArrowDown'].includes(key)) {
            event.preventDefault();
        }

        // Handle enter key press
        if (key === 'Enter' && event.target.value) {
            event.preventDefault();
            event.stopPropagation();
            if (onEnterClick) onEnterClick();
        }
    };

    return (
        <InputWrapper>
            <Flag>
                <Image icon={`${SVGS_URL}india.svg`} alt='Flag' />
            </Flag>

            <Text tagType='span' font='h4VariantEight'>
                +91
            </Text>
            <Input
                disabled={disabled}
                value={mobileNumberFormatValue}
                tagType='input'
                type='tel'
                font='h4VariantEight'
                autoFocus={autoFocus}
                placeholder='mobile number'
                onChange={onInputChange}
                onPaste={onPasteChange}
                onKeyDown={onKeyDownValue}
                id={testId}
                className={className}
            />
        </InputWrapper>
    );
};

export default NumberInput;
