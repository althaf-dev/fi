/**
 * @file B2BSalaryAccountHR containers actions.
 */

import { ON_CHANGE_SALARY_ACCOUNT_HR_VALUE, SET_EMPLOYER_DATA_ON_GOOGLE_SHEET, SET_LEAD_DETAILS } from './constant';

export interface ISetDataWithPayload {
    firstName: string;
    lastName: string;
    company: string;
    workEmailId: string;
}

export interface ISetDataWithAction {
    type: typeof SET_EMPLOYER_DATA_ON_GOOGLE_SHEET;
    payload: ISetDataWithPayload;
}

export interface IOnChangeSalaryAccountHRItemPayload {
    [key: string]: any;
}

export interface IOnChangeLeadDetailsItemPayload {
    attribute: string;
    value: string;
}

export interface IOnChangeLeadDetailsItemPayloadArray extends Array<IOnChangeLeadDetailsItemPayload> {}

export interface IOnChangeSalaryAccountHRAction {
    type: typeof ON_CHANGE_SALARY_ACCOUNT_HR_VALUE;
    payload: IOnChangeSalaryAccountHRItemPayload;
}

export interface IOnChangeLeadDetailsItemAction {
    type: typeof SET_LEAD_DETAILS;
    payload: IOnChangeLeadDetailsItemPayloadArray;
}

const onChangeSalaryAccountHRValue = (payload: IOnChangeSalaryAccountHRItemPayload): IOnChangeSalaryAccountHRAction => ({
    type: ON_CHANGE_SALARY_ACCOUNT_HR_VALUE,
    payload,
});

const setLeadDetails = (payload:IOnChangeLeadDetailsItemPayloadArray):IOnChangeLeadDetailsItemAction => ({
    type: SET_LEAD_DETAILS,
    payload,
});

//  All Action types
type SalaryAccountHRRootAction =
    | ISetDataWithAction
    | IOnChangeSalaryAccountHRAction
    | IOnChangeLeadDetailsItemAction;

export {
    // Root Action Type
    SalaryAccountHRRootAction,
    // Action Name
    onChangeSalaryAccountHRValue,
    setLeadDetails,
};
