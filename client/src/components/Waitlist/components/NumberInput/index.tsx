// moved this from Waitlist container
import React, { useState } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../Abstract';
import { Device } from '../../../../Themes/Device';
import { SVGS_URL } from '../../../../constants/AssetConstants';

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
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;

const Input = styled(Text)`
    background-color: ${(props) => props.theme.color.TRANSPARENT};
    border: none;
    margin-left: 10px;
    outline: none;
    width: 185px;

    @media ${Device.desktop} {
        width: 220px;
    }
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
};

const NumberInput = (props: numInputProps) => {
    const [value, setValue] = useState(props.value || '');
    const [isPasted, setIsPasted] = useState(false);

    const onChange = (value: any) => {
        if (props.maxAllowedLength) {
            if (
                value.length <= props.maxAllowedLength
                && (
                    value[0] === '6'
                    || value[0] === '7'
                    || value[0] === '8'
                    || value[0] === '9'
                    || value === ''
                )
            ) {
                setValue(value);
                props.onChange(value);
            }
        } else { // no condition for length
            setValue(value);
            props.onChange(value);
        }
    }

    const onInputChange = (event: any) => {
        const currentValue = event.target.value;

        if (!isPasted) {
            onChange(currentValue);
        }

        setIsPasted(false);
    };

    const onPasteChange = (event: any) => {
        const pastedValue = event.clipboardData.getData('Text');

        if (isNaN(pastedValue)) {
            event.preventDefault();
            return;
        }

        setIsPasted(true);
        onChange(pastedValue);
    };

    return (
        <InputWrapper>
            <Flag>
                <Image icon={`${SVGS_URL}india.svg`} alt='Flag' />
            </Flag>

            <Text tagType='span' font='h4'>
                +91
            </Text>
            <Input
                disabled={props.disabled}
                value={value}
                tagType='input'
                type='number'
                font='h4'
                autoFocus={props.autoFocus}
                placeholder='mobile no.'
                onChange={onInputChange}
                onPaste={onPasteChange}
                onKeyDown={(event) => {
                    const keyCode = event.keyCode;
                    const ctrlKey = event.ctrlKey;
                    const metaKey = event.metaKey;

                    // ctrl/cmd + c & ctrl/cmd + v, allow copy/paste
                    if ((ctrlKey || metaKey) && (keyCode === 67 || keyCode === 86)) {
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
                    if ([186, 187, 188, 189, 190, 191, 192, 219, 221, 222].includes(keyCode)) {
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
                        props.onEnterClick();
                    }
                }}
                id={props.testId}
            />
        </InputWrapper>
    );
};

export default NumberInput;
