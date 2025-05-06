import React, { memo } from 'react';

import { Image } from '../../../components';
import { StyledContainer } from '../../../components/styled';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

import { ComponentType } from '../constants';

import { Section, Description, ImageHolder } from './styled';

interface SingleCalculatorMobileProps {
    item: any;
    setIsModalOpen: (value: boolean) => void;
    setCalculatorItem: (value: any) => void;
}

const SingleCalculatorMobile = (props: SingleCalculatorMobileProps) => {
    const { item, setIsModalOpen, setCalculatorItem } = props;

    const {
        label, prefix_text: prefixText, suffix_text: suffixText, value, input_mapping: inputMapping,
        // type,
    } = item;

    /**
     * @param calculatorItem
     * open a modal and set calculator single item into the state
     */
    const openModalAndSetCalculatorItem = (calculatorItem:any) => () => {
        setIsModalOpen(true);
        setCalculatorItem(calculatorItem);
    };

    /**
     * Get the value to be shown on the UI for mobile view
     * For slider component, always show 'Select' in the input box
     * For a component whose value is an object, show the label in the input box
     * For any other component show the value or if no value show 0
     *
     * @returns The value to be displayed
     */
    const getValue = () => {
        // 1st check if inputMapping exists and return that value
        if (inputMapping) return inputMapping[value].label || '';

        // 2nd check if value is of object type and return the label
        if (typeof (value) === 'object') return value.label;

        // finally just return the value as it is
        return value || 0;
    };

    if (item.type === ComponentType.TextLabelWithIcon) {
        return null;
    }

    return (
        <>
            <Description onClick={openModalAndSetCalculatorItem(item)}>{label}</Description>
            <Section>
                <StyledContainer onClick={openModalAndSetCalculatorItem(item)} componentType={item.type}>
                    {prefixText ? <span>{prefixText}</span> : null}
                    {getValue()}
                    {suffixText ? <span>{suffixText}</span> : null}
                </StyledContainer>

                <ImageHolder onClick={openModalAndSetCalculatorItem(item)}>
                    <Image icon={ICONS_URL_MAP.GREY_BOTTOM_ARROW} alt='bottom-arrow' loadingType='lazy' />
                </ImageHolder>
            </Section>
        </>
    );
};

export default memo(SingleCalculatorMobile);
