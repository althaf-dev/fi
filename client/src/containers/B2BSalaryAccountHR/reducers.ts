/**
 * @file B2B Salary Account HR reducer
 */

import produce from 'immer';

import { SalaryAccountHRRootAction } from './actions';
import { ON_CHANGE_SALARY_ACCOUNT_HR_VALUE, SET_LEAD_DETAILS } from './constant';

export interface ISalaryAccountHRReducer {
    isLoading: boolean;
    currentForm: string;
    firstName: string;
    lastName: string;
    companyName: string;
    workEmailId: string;
    leadDetails: Array<Object>;
}

const salartAccountHRInitialState: ISalaryAccountHRReducer = {
    isLoading: false,
    currentForm: 'FORM',
    firstName: '',
    lastName: '',
    companyName: '',
    workEmailId: '',
    leadDetails: null,

};

const salaryAccountHRReducer = (
    state = salartAccountHRInitialState,
    action: any,
): ISalaryAccountHRReducer => produce(state, (draft) => {
    switch (action.type) {
        case ON_CHANGE_SALARY_ACCOUNT_HR_VALUE: {
            const kvPair = action.payload;

            Object.keys(kvPair).forEach((key) => {
                draft[key] = kvPair[key];
            });

            break;
        }

        case SET_LEAD_DETAILS: {
            const leadDetails = action.payload;

            draft.leadDetails = leadDetails;

            break;
        }

        default:
            break;
    }
});

export default salaryAccountHRReducer;
