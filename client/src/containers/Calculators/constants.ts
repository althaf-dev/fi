/**
 * @file Calculator containers constants
 */

// eslint-disable-next-line no-shadow
export enum ComponentType {
    Input = 'input',
    Slider = 'slider',
    SliderWithInput = 'slider_and_input',
    DropDown = 'dropdown',
    DropDownWithSearch = 'dropdown_and_input',
    TextLabelWithIcon = 'text_label_with_icon',
    MultiRangeSlider = 'multi_range_slider',
    Checkbox = 'checkbox',
    Accordion = 'accordion'
}

// eslint-disable-next-line no-shadow
export enum VisualType {
    Graph = 'graph',
    Table = 'table',
}

// Value
export const ONE_CRORE = 10000000;
export const ONE_LAKH = 100000;

// Component key
export const CALCULATORS_KEY = 'Calculators';

// Actions
export const SET_INPUT_VALUE = `app/${CALCULATORS_KEY}/SET_INPUT_VALUE`;
export const GET_SINGLE_CALCULATOR_DATA = `app/${CALCULATORS_KEY}/GET_SINGLE_CALCULATOR_DATA`;
export const SET_OUTPUT_VALUE = `app/${CALCULATORS_KEY}/SET_OUTPUT_VALUE`;

export const CALCULATOR_URL = '/calculators';

// TODO: Need to add all calculator urls here and update accordingly into the CALCULATOR_FUNC_MAPPING object
export const CALCULATOR_URLS_MAPPING = {
    FIRE_CALCULATOR: 'fire-calculator',
    CREDIT_CARD_INTEREST_RATE_CALCULATOR: 'credit-card-interest-rate-calculator',
    CREDIT_CARD_VALUEBACK_CALCULATOR: 'points',
};

export const LIST_OF_MOBILE_DESIGN_V1_CALCULATORS = [
    CALCULATOR_URLS_MAPPING.FIRE_CALCULATOR,
];
