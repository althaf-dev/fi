/**
 * @file NumberInputWrapperVOne
 *
 * @summary This component is used to render a input credit card rewards calculator.
 *
 * @description This is a modified version of NumberInputWrapper, which was originally designed for a generic input field.
 * It has been styled specifically for use in a credit card rewards calculator.
*/
import React from 'react';

import { InputWidthSection, NumberInputContainerVOne, NumberInputSectionVOne } from '../styled';

interface INumberInputSectionProps {
    inputChange: string;
    prefixText: string;
    suffixText: string;
    focusInputElement: (value: string) => any;
    onInputChange: (value: string) => any;
    onkeyPress: (event: any) => void;
    onMouseWheel: (event: any) => void;
    inputValue: number;
    inputWidth: number;
    widthRef: any;
    inputRef: any;
}

const NumberInputWrapperVOne = (props: INumberInputSectionProps) => {
    const {
        inputChange, prefixText, suffixText, focusInputElement, onInputChange, inputValue, inputWidth, widthRef,
        inputRef, onkeyPress, onMouseWheel,
    } = props;

    return (
        <NumberInputContainerVOne
            onClick={focusInputElement(inputChange)}
            onKeyDown={focusInputElement(inputChange)}
            role='button'
            tabIndex={0}
        >
            {prefixText ? <span>{prefixText}</span> : null}
            <InputWidthSection ref={widthRef}>{inputValue}</InputWidthSection>
            <NumberInputSectionVOne
                type='number'
                style={{ width: `${inputWidth}ch` }}
                onChange={onInputChange(inputChange)}
                value={inputValue}
                onKeyPress={onkeyPress}
                ref={inputRef}
                inputMode='decimal'
                pattern='[0-9]*'
                placeholder='0'
                onWheel={onMouseWheel}
            />
            {suffixText ? <span>{suffixText}</span> : null}
        </NumberInputContainerVOne>
    );
};

export default NumberInputWrapperVOne;
