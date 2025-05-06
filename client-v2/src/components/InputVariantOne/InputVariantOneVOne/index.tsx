/**
 * @file InputVariantOneVOne
 *
 * @summary This component is used to render a input box for a credit card rewards calculator.
 *
 * @description This is a modified version of InputVariantOne, which was originally designed for a generic input field.
 * It has been styled specifically for use in a credit card rewards calculator.
*/

import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useWindowDimensions } from '../../../hooks';
import { WINDOW_SIZE } from '../../../Themes/Device';
import { debounce, validateInputtedNumber } from '../../../utils';
import { IDropDown } from '../../DropDownVariantOne';

import { StyledContainerVOne } from '../../styled';

import {
    NumberInputContainer, SliderLabelContainer,
} from '../styled';
import NumberInputWrapperVOne from '../NumberInputWrapperVOne';

export interface IInputInfo {
    inputId: string;
    prefixText: string;
    suffixText: string;
    minValue: IDropDown;
    maxValue: IDropDown;
    value: any;
    allowDecimal: boolean;
    debounceTime: number;
    inputMapping: object;
    readableOnly: boolean;
}

export interface INumberInputProps {
    item: IInputInfo;
    errorInfo: any;
    setNewInputValue: (newValue) => void;
    setOutputValue: (newValue) => void;
    setErrorInfo: (value) => void;
    isModalOpen?: boolean;
    hasMultiInput?: boolean;
    minGapBetweenTwoInputs?: number;
    hasMobileDesignV1?: boolean;
    isInputInsideAnotherComponent?: boolean;
}

// eslint-disable-next-line no-shadow
export enum InputChangeType {
    FIRST_INPUT_CHANGE = 'FIRST_INPUT_CHANGE',
    SECOND_INPUT_CHANGE = 'SECOND_INPUT_CHANGE',
    SINGLE_INPUT_CHANGE = 'SINGLE_INPUT_CHANGE',
}

const InputVariantOneVOne = (props: INumberInputProps) => {
    const {
        item, setNewInputValue, setOutputValue, setErrorInfo, errorInfo, hasMobileDesignV1,
    } = props;

    const {
        inputId, minValue, maxValue, prefixText, suffixText, allowDecimal, debounceTime, value, inputMapping, readableOnly,
    } = item;

    const { width } = useWindowDimensions();

    const [inputWidth, setInputWidth] = useState(0);

    const widthRef = useRef(null);
    const inputRef = useRef(null);
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);

    // Debounce action so that output is only calculated after debounce time
    const debounceInputChange = useCallback(debounce((inputValue: number) => {
        setOutputValue(inputValue);
    }, debounceTime), []);

    const setErrorState = (errorState: boolean, firstInputErrorValue?: number, secondInputErrorValue?: number) => {
        const index = errorInfo?.findIndex((ele) => ele.errorInputId === inputId);

        /**
         * find the index of errorInfo
         * if index is not found than create a new object and push that into errorInfo
         * else change the value of errorState in existing object
         */
        if (index !== -1) {
            errorInfo[index].errorState = errorState;
            errorInfo[index].firstInputErrorValue = firstInputErrorValue;
            errorInfo[index].secondInputErrorValue = secondInputErrorValue;
        } else {
            errorInfo.push({
                errorState, errorInputId: inputId, firstInputErrorValue, secondInputErrorValue,
            });
        }

        setErrorInfo([].concat(errorInfo));
    };

    const checkIfErrorInValue = (newValue: number): void => {
        if (newValue < minValue?.value || newValue > maxValue?.value) { // for single input
            setErrorState(true);
        } else {
            setErrorState(false);
        }
    };

    const onValueChange = (newValue: number) => {
        let updatedValue = newValue;

        if (newValue >= maxValue?.value) {
            updatedValue = maxValue?.value;
        }

        setNewInputValue(updatedValue);
        debounceInputChange(updatedValue);
        checkIfErrorInValue(updatedValue);
    };

    /**
     * check if the value is a number or not
     * if the value is greater than the maximum value then reset input value to max value
     * if allowDecimalValue is false then prevent typing decimal value
     */
    const onkeyPress = (event) => {
        validateInputtedNumber(event, allowDecimal);
    };

    /**
     * function is called when the user scrolls the mouse wheel over an element
     */
    const onMouseWheel = (event) => {
        // prevent the input value from changing when the user scrolls
        event.target.blur();

        // prevent the page or container from scrolling
        event.stopPropagation();
    };

    /**
     * if input value is greater than max value than set input value to max value
     * if input value is less than min value than run the debounce function
     * that debounce function check if the input value is less than min value than set input value to min value
     * otherwise set the input value in the state
     */
    const onInputChange = (inputChange?: string) => (event) => {
        let newValue;

        if (event.target.value) {
            newValue = parseFloat(event.target.value);
        } else {
            newValue = '';
        }

        onValueChange(newValue);
    };

    /**
     * apply focus on inputDiv
     */
    const focusInputElement = (inputChange: string) => () => {
        if (InputChangeType.FIRST_INPUT_CHANGE === inputChange) {
            firstInputRef?.current?.focus();
            firstInputRef.current.style.textAlign = 'right';
        }

        if (InputChangeType.SECOND_INPUT_CHANGE === inputChange) {
            secondInputRef?.current?.focus();
            secondInputRef.current.style.textAlign = 'right';
        }

        if (InputChangeType.SINGLE_INPUT_CHANGE === inputChange) {
            inputRef?.current?.focus();
            inputRef.current.style.textAlign = 'right';
        }
    };

    /**
     * apply hack here to grow the input box on value change
     * check the width of input value using ref and set that width value into the NumberInputSection
     */
    useEffect(() => {
        const valueLen = `${value}`.length;

        if (!valueLen) { // if no value, set the width to 1ch
            setInputWidth(1);
        } else { // else set the width to number of chars + 'ch'
            setInputWidth(valueLen);
        }

        checkIfErrorInValue(value);
    }, [value, width]);

    /**
     * apply focus on input filed
     * If hasMobileDesignV1 is true then no need to set foucs on input element
     */
    useEffect(() => {
        if (width < WINDOW_SIZE.DESKTOP && !hasMobileDesignV1) {
            inputRef?.current?.focus();
        }
    }, []);

    let numberInput = (
        <NumberInputWrapperVOne
            inputChange={InputChangeType.SINGLE_INPUT_CHANGE}
            prefixText={prefixText}
            suffixText={suffixText}
            focusInputElement={focusInputElement}
            onInputChange={onInputChange}
            onkeyPress={onkeyPress}
            onMouseWheel={onMouseWheel}
            inputValue={value}
            inputWidth={inputWidth}
            widthRef={widthRef}
            inputRef={inputRef}
        />
    );

    if (inputMapping) {
        numberInput = (
            <NumberInputContainer hasMobileDesignV1={hasMobileDesignV1}>
                <SliderLabelContainer>{inputMapping[value]?.label || ''}</SliderLabelContainer>
            </NumberInputContainer>
        );
    }

    if (readableOnly) {
        numberInput = (
            <NumberInputContainer hasMobileDesignV1={hasMobileDesignV1}>
                {prefixText ? <span>{prefixText}</span> : null}
                {value}
                {suffixText ? <span>{suffixText}</span> : null}
            </NumberInputContainer>
        );
    }

    return (
        <StyledContainerVOne
            onClick={focusInputElement(InputChangeType.SINGLE_INPUT_CHANGE)}
            onKeyDown={focusInputElement(InputChangeType.SINGLE_INPUT_CHANGE)}
            role='button'
            tabIndex={0}
        >
            {numberInput}
        </StyledContainerVOne>
    );
};

export default InputVariantOneVOne;
