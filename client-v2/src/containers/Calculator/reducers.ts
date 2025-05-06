/**
 * @file Calculator containers reducer
 */

import produce, { current } from 'immer';

import SingleCalculatorJson from '../../assets/json/single-calculators.json';
import AllCalculatorJson from '../../assets/json/all-calculators.json';
import CityReturnRates from '../../assets/json/city-return-data.json';

import { SET_INPUT_VALUE, GET_SINGLE_CALCULATOR_DATA, SET_OUTPUT_VALUE, CALCULATOR_URLS_MAPPING } from './constants';
import { ICalculatorsReducer } from './types';
import { CalculatorRootActions } from './actions';
import {
    calculateFDOutput, calculateRentVsBuyOutput, calculateMutualFundGoalOutput, calculateSipOutput, calculatePPFOutput,
    calculateEmiOutput, calculateNpsOutput, calculateHraOutput, calculateGratuityOutput, calculateEpfOutput, calcuateCAGROutput,
    calculateInflationRate, calculateFireOutput, calculateCreditCardInterestRateOutput, calculateCCValuebackOutput,
} from './controller';
import { epfInputFn, fireInputFn } from './input-controller';
import { RootState } from '@/rtk/store';
import { Reducer } from '@reduxjs/toolkit';

const SINGLE_CALCULATOR_INFO = {
    ...SingleCalculatorJson,
};

// Set city return rate json data as options value for the input field 'Which city do you live in?' for rent vs buy calc
// SINGLE_CALCULATOR_INFO['rent-vs-buy-calculator']!.input_fields[0]!.options = CityReturnRates;

const initialState: ICalculatorsReducer = {
    allCalculators: AllCalculatorJson,
    singleCalculator: null,
    outputResult: null,
};

// store the keys in a variable and use here instead of hard coded strings
/**
 * TODO: Add a map where we can store urls and then use that everywhere
 * TODO: Keep the functions in controller.ts mapped to the url so if you need to rename the function in controller.ts
 * you need to do it only in that one file
 */
const CALCULATOR_FUNC_MAPPING = {
    'fixed-deposit-calculator': {
        output: calculateFDOutput,
        input: null,
    },
    'rent-vs-buy-calculator': {
        output: calculateRentVsBuyOutput,
        input: null,
    },
    'mutual-fund-goal-calculator': {
        output: calculateMutualFundGoalOutput,
        input: null,
    },
    'mutual-fund-sip-calculator': {
        output: calculateSipOutput,
        input: null,
    },
    'ppf-calculator': {
        output: calculatePPFOutput,
        input: null,
    },
    'personal-loan-emi-calculator': {
        output: calculateEmiOutput,
        input: null,
    },
    'nps-calculator': {
        output: calculateNpsOutput,
        input: null,
    },
    'hra-calculator': {
        output: calculateHraOutput,
        input: null,
    },
    'gratuity-calculator': {
        output: calculateGratuityOutput,
        input: null,
    },
    'epf-calculator': {
        output: calculateEpfOutput,
        input: epfInputFn,
    },
    'cagr-calculator': {
        output: calcuateCAGROutput,
        input: null,
    },
    'inflation-calculator': {
        output: calculateInflationRate,
        input: null,
    },
    [CALCULATOR_URLS_MAPPING.FIRE_CALCULATOR]: {
        output: calculateFireOutput,
        input: fireInputFn,
    },
    [CALCULATOR_URLS_MAPPING.CREDIT_CARD_INTEREST_RATE_CALCULATOR]: {
        output: calculateCreditCardInterestRateOutput,
        input: null,
    },
    [CALCULATOR_URLS_MAPPING.CREDIT_CARD_VALUEBACK_CALCULATOR]: {
        output: calculateCCValuebackOutput,
        input: null,
    },
};

// TODO: change invest to slider from 6 -  12
// TODO: add input logic for house growth rate

const calculateOutputResult = (payload) => {
    const {
        draft, state, item, value,
    } = payload;

    const { url } = draft.singleCalculator.calculator_info;

    /**
     * If we use the draft object then it returns Proxy object {} because of thats how immer works internally
     * Hence we cannot pass draft.singleCalculator.input_fields -> CALCULATOR_FUNC_MAPPING[url](draft.singleCalculator.input_fields);
     * To pass the updated input fields we read the previous state and update the current item
     */

    let updatedInputValues;
    // if item does not exist that means its the initial page load
    if (!item) {
        updatedInputValues = current(draft).singleCalculator.input_fields;
    } else {
        const inputValuesWithoutCurItem = state.singleCalculator.input_fields.filter((arrayItem) => arrayItem.input_id !== item.input_id);
        updatedInputValues = [...inputValuesWithoutCurItem, { ...item, value }];
    }

    // calculate output result
    draft.outputResult = CALCULATOR_FUNC_MAPPING[url].output(updatedInputValues);
};

const calculatorsReducer : Reducer<ICalculatorsReducer, CalculatorRootActions> = (
    state = initialState,
    action: CalculatorRootActions,
): ICalculatorsReducer => produce(state, (draft) => {
    switch (action.type) {
        case SET_INPUT_VALUE: {
            if (!draft.singleCalculator) return;
            // each calc could have an input logic function
            const { item, value } = action.payload;

            const { url } = draft?.singleCalculator.calculator_info;

            const inputFields = draft.singleCalculator.input_fields;

            const parentItemIndex = item?.parent_item_index;
  
          
            if (parentItemIndex) {
                const nestedItems = inputFields[parentItemIndex].nested_items;
                const nestedItemIndex = nestedItems?.findIndex((nestedItem) => (
                    item.input_id === nestedItem.input_id
                ));

                // change nested item input value
                nestedItems[nestedItemIndex].value = value;
            } else {
                const itemIndex = inputFields.findIndex((arrayItem) => item.input_id === arrayItem.input_id);

                // change single item input value
                inputFields[itemIndex].value = value;
            }

            const inputFn = CALCULATOR_FUNC_MAPPING[url].input;
            const inputValuesWithoutCurItem = state.singleCalculator.input_fields.filter((arrayItem) => arrayItem.input_id !== item.input_id);
            const updatedInputValues = [...inputValuesWithoutCurItem, { ...item, value }];

            if (inputFn) {
                inputFn(state, draft, updatedInputValues, item, value);
            }

            break;
        }

        case SET_OUTPUT_VALUE: {
            const { item, value } = action.payload;

            calculateOutputResult({
                draft, state, item, value,
            });
            break;
        }

        case GET_SINGLE_CALCULATOR_DATA: {
            const { value } = action.payload;
            console.log("draft value",SINGLE_CALCULATOR_INFO);
            draft.singleCalculator = SINGLE_CALCULATOR_INFO[value];

            // case of invalid urls
            if (!draft.singleCalculator) break;

            calculateOutputResult({
                draft, state,
            });
            break;
        }

        default:
            break;
    }
});

export default calculatorsReducer;
