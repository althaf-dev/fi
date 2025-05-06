/**
 * @file Calculator containers actions
 */

import { IDropDown } from '../../components/DropDownVariantOne';

import { SET_INPUT_VALUE, GET_SINGLE_CALCULATOR_DATA, SET_OUTPUT_VALUE } from './constants';
import { ICalculatorInputField } from './types';

interface InputValuePayload {
    item: ICalculatorInputField;
    value: string | number | IDropDown;
}

interface ISetInputValueAction {
    type: typeof SET_INPUT_VALUE;
    payload: InputValuePayload;
}

const setInputValueAction = (payload: InputValuePayload): ISetInputValueAction => ({
    type: SET_INPUT_VALUE,
    payload,
});

interface SetSingleCalculatorPayload {
    value: string;
}

interface IGetSingleCalculatorDataAction {
    type: typeof GET_SINGLE_CALCULATOR_DATA;
    payload: any;
}

const getSingleCalculatorDataAction = (payload: SetSingleCalculatorPayload): IGetSingleCalculatorDataAction => ({
    type: GET_SINGLE_CALCULATOR_DATA,
    payload,
});

// SET_OUTPUT_VALUE
interface ISetOutputValueAction {
    type: typeof SET_OUTPUT_VALUE;
    payload: InputValuePayload;
}

const setOutputValueAction = (payload: InputValuePayload): ISetOutputValueAction => ({
    type: SET_OUTPUT_VALUE,
    payload,
});

type CalculatorRootActions = ISetInputValueAction | IGetSingleCalculatorDataAction | ISetOutputValueAction;

export {
    // Root Action Type
    CalculatorRootActions,
    // Action Name
    setInputValueAction,
    getSingleCalculatorDataAction,
    setOutputValueAction,
};
