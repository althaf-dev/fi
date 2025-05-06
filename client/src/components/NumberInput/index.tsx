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

type numInputProps = {
    value?: string;
    autoFocus?: boolean;
    maxAllowedLength?: number;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onEnterClick?: () => void;
    testId?: string;
    className?: string;
};

const NumberInput = (props: numInputProps) => {
    const {
        value: propsValue,
        autoFocus,
        maxAllowedLength,
        disabled,
        onChange: propsOnChange,
        onEnterClick,
        testId,
        className,
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
                propsOnChange(inputValue);
            }
        } else {
            // no condition for length
            setValue(inputValue);
            propsOnChange(inputValue);
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

    const onKeyDownValue = (event: any) => {
        const { keyCode, ctrlKey, metaKey } = event;

        // ctrl/cmd + c & ctrl/cmd + v, allow copy/paste
        if (
            (ctrlKey || metaKey)
            && (keyCode === 67 || keyCode === 86)
        ) {
            return;
        }

        if (value.length === 0) {
            // restrict 0, 1, 2, 3, 4, 5 as first digit of mobile number
            if ([48, 49, 50, 51, 52, 53].includes(keyCode)) {
                event.preventDefault();
            }
        }

        // restrict alphabets
        if (keyCode >= 65 && keyCode <= 90) {
            event.preventDefault();
        }

        // restrcit ; = , - . / ` [ ] '
        if (
            [
                186, 187, 188, 189, 190, 191, 192, 219, 221, 222, 32,
            ].includes(keyCode)
        ) {
            event.preventDefault();
        }

        // up & down arrow keys which increases, decreases focused number
        if ([38, 40].includes(keyCode)) {
            event.preventDefault();
        }

        // enter key
        if (keyCode === 13 && event.target.value) {
            event.preventDefault();
            event.stopPropagation();
            onEnterClick();
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

NumberInput.defaultProps = {
    value: '',
    autoFocus: false,
    maxAllowedLength: null,
    disabled: false,
    onChange: null,
    onEnterClick: null,
    testId: null,
    className: '',
};

export default NumberInput;
