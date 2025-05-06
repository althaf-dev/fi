import React, { useEffect, memo, useState, useCallback } from 'react';
import { debounce } from '../../utils';

import Colors from '../../Themes/Colors';

import { IDropDown } from '../DropDownVariantOne';
import { RangeLabelSection } from '../styled';

import { Container, Range } from './styled';

export interface IRangeSlider {
    minValue: IDropDown;
    maxValue: IDropDown;
    value: any;
    stepValue: number;
    debounceTime: number;
}

interface IRangeSliderProps {
    item: IRangeSlider;
    setNewInputValue: (newValue) => void;
    setOutputValue: (newValue) => void;
    showComponentInsideStickyGraph?: boolean;
}

const RangeSlider = (props: IRangeSliderProps) => {
    const {
        item, setNewInputValue, setOutputValue, showComponentInsideStickyGraph,
    } = props;

    const {
        minValue, maxValue, value, debounceTime, stepValue,
    } = item;

    const [sliderValue, setSliderValue] = useState(null);

    /**
     * Calculate the total value to fill in range slider
     */
    const fillSliderValue = (inputValue) => {
        const sliderFillValue = ((inputValue - minValue.value) / (maxValue.value - minValue.value)) * 100;
        return sliderFillValue;
    };

    /**
     * Calculate the range slider color fill value
     */
    const computeAndSetSlider = (newValue: number) => {
        const computedValue = fillSliderValue(newValue);

        // set slider value
        setSliderValue(computedValue);
    };

    const onChangeFillSlider = (newValue: number) => {
        computeAndSetSlider(newValue);
    };

    const debounceInputChange = useCallback(debounce((newValue: number) => {
        setOutputValue(newValue);
    }, debounceTime), []);

    /**
     * Run on slider value change
     * Set the slider value on state
     * Run the function to calculate the slider color fill value
     */
    const onSliderChange = (event) => {
        const newValue = Number(parseFloat(event.target.value).toFixed(2));

        // Set input value instantly
        setNewInputValue(newValue);
        // Debounce action so that output is only calculated after debounce time
        debounceInputChange(newValue);

        // Change slider values so that user can see input value changing
        onChangeFillSlider(newValue);
    };

    useEffect(() => {
        computeAndSetSlider(value);
    }, [value, minValue.value, maxValue.value]);

    return (
        <Container showComponentInsideStickyGraph={showComponentInsideStickyGraph}>
            <Range
                min={minValue.value}
                max={maxValue.value}
                // if value is empty than we need to set slider value to zero
                value={value || 0}
                step={stepValue || 1}
                onInput={onSliderChange}
                sliderValue={sliderValue}
                bgColor={Colors.FOREST_GREEN}
            />
            <RangeLabelSection>
                <span>{minValue.label}</span>
                <span>{maxValue.label}</span>
            </RangeLabelSection>
        </Container>
    );
};

RangeSlider.defaultProps = {
    showComponentInsideStickyGraph: false,
};

export default memo(RangeSlider);
