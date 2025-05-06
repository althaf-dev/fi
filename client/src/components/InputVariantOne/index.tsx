import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useWindowDimensions } from '../../hooks';
import { WINDOW_SIZE } from '../../Themes/Device';
import { debounce, validateInputtedNumber } from '../../utils';
import { IDropDown } from '../DropDownVariantOne';

import { StyledContainer } from '../styled';

import NumberInputWrapper from './NumberInputWrapper';
import {
    NumberInputContainer, SliderLabelContainer, MultipleInputSection,
} from './styled';

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

const NumberInput = (props: INumberInputProps) => {
    const {
        item, setNewInputValue, setOutputValue, setErrorInfo, isModalOpen, errorInfo, hasMultiInput,
        minGapBetweenTwoInputs, hasMobileDesignV1, isInputInsideAnotherComponent,
    } = props;

    const {
        inputId, minValue, maxValue, prefixText, suffixText, allowDecimal, debounceTime, value, inputMapping, readableOnly,
    } = item;

    const { valueOne: firstInputValue, valueTwo: secondInputValue } = value || {};

    const { width } = useWindowDimensions();

    const [inputWidth, setInputWidth] = useState(0);
    const [firstInputWidth, setFirstInputWidth] = useState(0);
    const [secondInputWidth, setSecondInputWidth] = useState(0);
    const [mobileInputWidth, setMobileInputWidth] = useState(0);

    const widthRef = useRef(null);
    const inputRef = useRef(null);
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);

    // const setDebounceValue = (inputValue: number) => {
    //     setNewInputValue(inputValue);
    // };

    // const debounceInputChange = (inputValue: number) => {
    //     setNewInputValue(inputValue);
    // };

    // Debounce action so that output is only calculated after debounce time
    const debounceInputChange = useCallback(debounce((inputValue: number) => {
        setOutputValue(inputValue);
    }, debounceTime), []);

    // this function run when input value is less than minimum value and user focus out from the input box
    /*
    const onBlurChange = (event) => {
        const newValue = parseFloat(event.target.value);

        if (newValue <= minValue.value) {
            setNewInputValue(minValue.value);
        }
    };
    */

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

    const checkIfErrorInFirstInputValue = (inputValue: number): void => {
        const differenceBetweenInputs = secondInputValue - inputValue;
        const firstInputErrorValue = secondInputValue - minGapBetweenTwoInputs;

        if (differenceBetweenInputs < minGapBetweenTwoInputs) { // for multiple input
            setErrorState(true, firstInputErrorValue);
        } else if (inputValue < minValue?.value) {
            setErrorState(true);
        } else {
            setErrorState(false);
        }
    };

    const checkIfErrorInSecondInputValue = (inputValue: number): void => {
        const differenceBetweenInputs = inputValue - firstInputValue;
        const secondInputErrorValue = firstInputValue + minGapBetweenTwoInputs;

        if (differenceBetweenInputs < minGapBetweenTwoInputs) { // for multiple input
            setErrorState(true, null, secondInputErrorValue);
        } else {
            setErrorState(false);
        }
    };

    const onMultipleInputChange = (newValue: number, inputChange?: string) => {
        let updatedValue = newValue;

        if (newValue >= maxValue?.value) {
            updatedValue = maxValue?.value;
        }

        if (InputChangeType.FIRST_INPUT_CHANGE === inputChange) {
            setNewInputValue({ ...value, valueOne: updatedValue });
            debounceInputChange({ ...value, valueOne: updatedValue });
            checkIfErrorInFirstInputValue(updatedValue);
        }

        if (InputChangeType.SECOND_INPUT_CHANGE === inputChange) {
            setNewInputValue({ ...value, valueTwo: updatedValue });
            debounceInputChange({ ...value, valueTwo: updatedValue });
            checkIfErrorInSecondInputValue(updatedValue);
        }
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

        if (hasMultiInput) {
            onMultipleInputChange(newValue, inputChange);
        } else {
            onValueChange(newValue);
        }
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
        if (hasMultiInput) {
            // Get the length of chars in the input value
            const firstInputLength = `${firstInputValue}`.length;
            const SecondInputLength = `${secondInputValue}`.length;

            setFirstInputWidth(firstInputLength);
            setSecondInputWidth(SecondInputLength);
        } else {
            // Get the length of chars in the input value
            const valueLen = `${value}`.length;

            /**
             * if hasMobileDesignV1 true then need to set width of input box on value change
             * add the length of prefixText, suffixText and input value and add extra 1ch in the total length
             */
            if (hasMobileDesignV1) {
                let prefixTextLength = 1;
                let suffixTextLength = 1;

                if (prefixText) {
                    prefixTextLength = prefixText.length;
                }

                if (suffixText) {
                    suffixTextLength = suffixText.length;
                }

                const mobileInputElementsWidth = (prefixTextLength + suffixTextLength + (valueLen || 1)) + 1;

                setMobileInputWidth(mobileInputElementsWidth);
            }

            if (!valueLen) { // if no value, set the width to 1ch
                setInputWidth(1);
            } else { // else set the width to number of chars + 'ch'
                setInputWidth(valueLen);
            }

            checkIfErrorInValue(value);
        }
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
        <NumberInputWrapper
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
            hasMobileDesignV1={hasMobileDesignV1}
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

    if (hasMultiInput) {
        const multipleInputSectionData = [
            {
                value: firstInputValue,
                ref: firstInputRef,
                inputWidth: firstInputWidth,
                inputChange: InputChangeType.FIRST_INPUT_CHANGE,
            },
            {
                value: secondInputValue,
                ref: secondInputRef,
                inputWidth: secondInputWidth,
                inputChange: InputChangeType.SECOND_INPUT_CHANGE,
            },
        ];

        const multipleInputSection = multipleInputSectionData.map((data) => (
            <StyledContainer
                onClick={focusInputElement(data.inputChange)}
                onKeyDown={focusInputElement(data.inputChange)}
                role='button'
                tabIndex={0}
            >
                {readableOnly ? (
                    <NumberInputContainer hasMobileDesignV1={hasMobileDesignV1}>
                        {prefixText ? <span>{prefixText}</span> : null}
                        {data.value}
                        {suffixText ? <span>{suffixText}</span> : null}
                    </NumberInputContainer>
                ) : (
                    <NumberInputWrapper
                        inputChange={data.inputChange}
                        prefixText={prefixText}
                        suffixText={suffixText}
                        focusInputElement={focusInputElement}
                        onInputChange={onInputChange}
                        onkeyPress={onkeyPress}
                        onMouseWheel={onMouseWheel}
                        inputValue={data.value}
                        inputWidth={data.inputWidth}
                        widthRef={widthRef}
                        inputRef={data.ref}
                        hasMobileDesignV1={hasMobileDesignV1}
                    />
                )}
            </StyledContainer>
        ));

        return (
            <MultipleInputSection>
                {multipleInputSection}
            </MultipleInputSection>
        );
    }

    if (hasMobileDesignV1) {
        return (
            <>
                <StyledContainer
                    mobileInputWidth={mobileInputWidth}
                    hasMobileDesignV1={hasMobileDesignV1}
                    isInputInsideAnotherComponent={isInputInsideAnotherComponent}
                >
                    {numberInput}
                </StyledContainer>
            </>
        );
    }

    return (
        width >= WINDOW_SIZE.TAB
            ? (
                <StyledContainer
                    onClick={focusInputElement(InputChangeType.SINGLE_INPUT_CHANGE)}
                    onKeyDown={focusInputElement(InputChangeType.SINGLE_INPUT_CHANGE)}
                    role='button'
                    tabIndex={0}
                >
                    {numberInput}
                </StyledContainer>
            )
            : (
                <StyledContainer isMobileView isModalOpen={isModalOpen}>
                    {numberInput}
                </StyledContainer>
            )
    );
};

export default NumberInput;
