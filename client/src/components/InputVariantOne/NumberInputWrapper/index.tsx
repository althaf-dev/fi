/**
 * @file Number Input Wrapper: Common Component to show number input section
 */

import React from 'react';

import { NumberInputContainer, NumberInputSection, InputWidthSection } from '../styled';

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
    hasMobileDesignV1?: boolean;
}

const NumberInputWrapper = (props: INumberInputSectionProps) => {
    const {
        inputChange, prefixText, suffixText, focusInputElement, onInputChange, inputValue, inputWidth, widthRef,
        inputRef, onkeyPress, onMouseWheel, hasMobileDesignV1,
    } = props;

    return (
        <NumberInputContainer
            onClick={focusInputElement(inputChange)}
            onKeyDown={focusInputElement(inputChange)}
            role='button'
            tabIndex={0}
            hasMobileDesignV1={hasMobileDesignV1}
        >
            {prefixText ? <span>{prefixText}</span> : null}
            <InputWidthSection ref={widthRef}>{inputValue}</InputWidthSection>
            <NumberInputSection
                type='number'
                style={{ width: `${inputWidth}ch` }}
                onChange={onInputChange(inputChange)}
                value={inputValue}
                onKeyPress={onkeyPress}
                ref={inputRef}
                inputMode='decimal'
                pattern='[0-9]*'
                placeholder='0'
                hasMobileDesignV1={hasMobileDesignV1}
                onWheel={onMouseWheel}
            />
            {suffixText ? <span>{suffixText}</span> : null}
        </NumberInputContainer>
    );
};

NumberInputWrapper.defaultProps = {
    hasMobileDesignV1: false,
};

export default NumberInputWrapper;
