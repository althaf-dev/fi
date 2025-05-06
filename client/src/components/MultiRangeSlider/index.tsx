/**
 * @file MultiRangeSlider: Multi Range Slider Component
 */
import React, { useEffect, useState, useCallback, memo } from 'react';

import { debounce } from '../../utils';

import { IDropDown } from '../DropDownVariantOne';
import { RangeLabelSection } from '../styled';

import { Container, Range, SliderTrack } from './styled';

export interface IMultiRangeSlider {
    minValue: IDropDown;
    maxValue: IDropDown;
    value: any;
    stepValue: number;
    debounceTime: number;
    minGapBetweenTwoInputs: number;
}

interface IMultiRangeSliderProps {
    item: IMultiRangeSlider;
    setNewInputValue: (newValue) => void;
    setOutputValue: (newValue) => void;
}

const MultiRangeSlider = (props: IMultiRangeSliderProps) => {
    const {
        item, setNewInputValue, setOutputValue,
    } = props;

    const {
        minValue, maxValue, value, debounceTime, stepValue, minGapBetweenTwoInputs,
    } = item;

    const { valueOne: sliderOneValue, valueTwo: sliderTwoValue } = value;

    const [SliderOneColorValue, setSliderOneColorValue] = useState(null);
    const [SliderTwoColorValue, setSliderTwoColorValue] = useState(null);

    /**
     * Calculate the percentOne and percentTwo value to fill in multi range slider
     */
    const fillSliderValue = (sliderOneUpdatedValue, sliderTwoUpdatedValue) => {
        const percentOne = ((sliderOneUpdatedValue - minValue.value) / (maxValue.value - minValue.value)) * 100;
        const percentTwo = ((sliderTwoUpdatedValue - minValue.value) / (maxValue.value - minValue.value)) * 100;

        setSliderOneColorValue(percentOne);
        setSliderTwoColorValue(percentTwo);
    };

    const debounceInputChange = useCallback(debounce((newValue: object) => {
        setOutputValue(newValue);
    }, debounceTime), []);

    const onSliderOneChange = (event) => {
        let sliderOneNewValue = parseInt(event.target.value, 10);
        const differenceBetweenBothSliderValues = sliderTwoValue - sliderOneNewValue;

        if (differenceBetweenBothSliderValues <= minGapBetweenTwoInputs) {
            sliderOneNewValue = sliderTwoValue - minGapBetweenTwoInputs;
        }

        // Set input value instantly
        setNewInputValue({ ...value, valueOne: sliderOneNewValue });

        // Debounce action so that output is only calculated after debounce time
        debounceInputChange({ ...value, valueOne: sliderOneNewValue });

        fillSliderValue(sliderOneNewValue, sliderTwoValue);
    };

    const onSliderTwoChange = (event) => {
        let sliderTwoNewValue = parseInt(event.target.value, 10);
        const differenceBetweenBothSliderValues = sliderTwoNewValue - sliderOneValue;

        if (differenceBetweenBothSliderValues <= minGapBetweenTwoInputs) {
            sliderTwoNewValue = sliderOneValue + minGapBetweenTwoInputs;
        }

        // Set input value instantly
        setNewInputValue({ ...value, valueTwo: sliderTwoNewValue });

        // Debounce action so that output is only calculated after debounce time
        debounceInputChange({ ...value, valueTwo: sliderTwoNewValue });

        fillSliderValue(sliderOneValue, sliderTwoNewValue);
    };

    useEffect(() => {
        fillSliderValue(sliderOneValue, sliderTwoValue);
    }, [value, minValue.value, maxValue.value]);

    return (
        <Container>
            <SliderTrack
                SliderOneColorValue={SliderOneColorValue}
                SliderTwoColorValue={SliderTwoColorValue}
            />
            <Range
                min={minValue.value}
                max={maxValue.value}
                // if value is empty than we need to set slider value to zero
                value={sliderOneValue || 0}
                step={stepValue || 1}
                onInput={onSliderOneChange}
            />
            <Range
                min={minValue.value}
                max={maxValue.value}
                // if value is empty than we need to set slider value to zero
                value={sliderTwoValue || 0}
                step={stepValue || 1}
                onInput={onSliderTwoChange}
            />
            <RangeLabelSection>
                <span>{minValue.label}</span>
                <span>{maxValue.label}</span>
            </RangeLabelSection>
        </Container>
    );
};

export default memo(MultiRangeSlider);
