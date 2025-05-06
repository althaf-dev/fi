/**
 * @file RenderComponentBasedOnComponentType
 *
 * @summary This component is used to render a different compoent like input, slider based on the type of component
 *
 * @description It has been designed for use in a credit card rewards calculator.
 *
 * @returns {JSX.Element}
 *
 * TODO: Need to Remove this code once decoupling of calculator will complete.
 */

import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import InputVariantOneVOne from '../../../components/InputVariantOne/InputVariantOneVOne';

import {
    SliderVariantOne,
    InputLabelVariantOneVOne,
} from '../../../components';

import { ComponentType } from '../../Calculators/constants';

import {
    ErrorContainer,
    ContentSectionVOne,
} from '../../Calculators/styled';

import { setInputValueAction, setOutputValueAction } from '../../Calculators/actions';

// eslint-disable-next-line no-var
declare var window: any;

const RenderComponentBasedOnComponentType = (itemComponent) => {
    const { item } = itemComponent;

    const [errorInfo, setErrorInfo] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
     * add onKeyDown event listener on page load
     * run closeModal function if event key is Enter or NumpadEnter
     */
    useEffect(() => {
        const listener = (event) => {
            const keyValue = event.key;
            if (keyValue === 'Enter' || keyValue === 'NumpadEnter') {
                event.preventDefault();
            }
        };
        document.addEventListener('keydown', listener);
        return () => document.removeEventListener('keydown', listener);
    }, []);

    const getInputLabelComponent = (item1) => {
        const { label, more_info: moreInfo } = item1;

        return (
            <InputLabelVariantOneVOne
                label={label}
                additionalInfo={moreInfo}
            />
        );
    };

    // Reducer action functions
    const setNewInputValue = (newItem) => (newValue): void => {
        dispatch(setInputValueAction({ item: newItem, value: newValue }));
    };

    const setOutputValue = (newItem) => (newValue): void => {
        dispatch(setOutputValueAction({ item: newItem, value: newValue }));
    };

    const getInputComponent = (item1, hasMultiInput?: boolean) => {
        const {
            input_id: inputId, min_value: minValue, max_value: maxValue, prefix_text: prefixText,
            suffix_text: suffixText, allow_decimal: allowDecimal, debounce_time: debounceTime, value,
            input_mapping: inputMapping, readable_only: readableOnly, min_gap_between_two_inputs: minGapBetweenTwoInputs,
            is_input_inside_another_component: isInputInsideAnotherComponent,
        } = item1;

        const inputInfo = {
            inputId, minValue, maxValue, prefixText, suffixText, allowDecimal, debounceTime, value, inputMapping, readableOnly,
        };

        return (
            <InputVariantOneVOne
                item={inputInfo}
                setNewInputValue={setNewInputValue(item1)}
                setOutputValue={setOutputValue(item1)}
                errorInfo={errorInfo}
                setErrorInfo={setErrorInfo}
                isModalOpen
                hasMultiInput={hasMultiInput}
                minGapBetweenTwoInputs={minGapBetweenTwoInputs}
                isInputInsideAnotherComponent={isInputInsideAnotherComponent}
            />
        );
    };

    const getSliderComponent = (item1) => {
        const {
            min_value: minValue, max_value: maxValue, value, debounce_time: debounceTime, step_value: stepValue,
        } = item1;
        const sliderInfo = {
            minValue, maxValue, value, debounceTime, stepValue,
        };

        return (
            <SliderVariantOne
                item={sliderInfo}
                setNewInputValue={setNewInputValue(item1)}
                setOutputValue={setOutputValue(item1)}
            />
        );
    };

    const getErrorText = (error, item1) => {
        const { first_input_label: firstInputLabel, second_input_label: secondInputLabel } = item1 || {};

        let errorText = 'Minimum value should be';

        if (error?.firstInputErrorValue) {
            errorText = `${firstInputLabel} should be less than or equal to`;
        } else if (error?.secondInputErrorValue) {
            errorText = `${secondInputLabel} should be greator than or equal to`;
        }

        return errorText;
    };

    const getErrorValue = (error, item1) => {
        let errorValue;

        if (error?.firstInputErrorValue) {
            errorValue = error.firstInputErrorValue;
        } else if (error?.secondInputErrorValue) {
            errorValue = error.secondInputErrorValue;
        } else {
            errorValue = item1?.min_value?.value;
        }

        return errorValue;
    };

    const getErrorComponent = (item1) => (
        errorInfo.map((error) => (
            error.errorState && error.errorInputId === item1.input_id ? (
                <ErrorContainer>
                    {getErrorText(error, item1)}
                    &nbsp;
                    {getErrorValue(error, item1)}
                </ErrorContainer>
            ) : null
        ))
    );

    let component;
    let componentOne;

    switch (item.type) {
        case ComponentType.SliderWithInput: {
            component = getInputComponent(item, false);
            componentOne = getSliderComponent(item);
            break;
        }
        default:
            return null;
    }

    return (
        <>
            <ContentSectionVOne>
                {getInputLabelComponent(item)}
                {component}
            </ContentSectionVOne>
            {componentOne}
            {getErrorComponent(item)}
        </>
    );
};

export default memo(RenderComponentBasedOnComponentType);
