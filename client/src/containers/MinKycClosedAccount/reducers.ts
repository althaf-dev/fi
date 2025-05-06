/**
 * @file Min Kyc Closed account reducer
 */

import produce from 'immer';

import {
    ADD_ALTERNATE_ACCOUNT,
    ADD_ALTERNATE_ACCOUNT_FAILED,
    ADD_ALTERNATE_ACCOUNT_SUCCESS,
    CHANGE_PAGE,
    GENERATE_OTP_CODE,
    GENERATE_OTP_CODE_FAILED,
    GENERATE_OTP_CODE_SUCCESS,
    NAVIGATE_PAGE,
    VERIFY_OTP_CODE,
    VERIFY_OTP_CODE_FAILED,
    VERIFY_OTP_CODE_SUCCESS,
    VERIFY_PAN,
    VERIFY_PAN_FAILED,
    VERIFY_PAN_SUCCESS,
} from './constants';
import { MinKycAccountClosureRootAction } from './actions';
import { FormError } from './AccountDetailsInput';

export interface IminKycClosedAccountReducer {
    isLoading: boolean;
    currentStep: string;
    screenOptions: Object;
    phoneNumber: string;
    emailId: string;
    pan: string;
    accountLastFourDigits: string;
    accessToken: string;
    mobileOtpRetrytime: number;
    emailOtpRetrytime: number;
    formErrors: Array<FormError>;
    errorMessage: string;
}

const minKycClosedAccount: IminKycClosedAccountReducer = {
    isLoading: false,
    currentStep: NAVIGATE_PAGE.MOBILE_EMAIL_INPUT_PAGE,
    screenOptions: {},
    phoneNumber: '',
    emailId: '',
    pan: '',
    accountLastFourDigits: '',
    accessToken: '',
    mobileOtpRetrytime: 0,
    emailOtpRetrytime: 0,
    formErrors: [],
    errorMessage: '',
};

const minKycClosedAccountReducer = (
    state = minKycClosedAccount,
    action: MinKycAccountClosureRootAction,
): IminKycClosedAccountReducer => produce(state, (draft) => {
    switch (action.type) {
        case GENERATE_OTP_CODE: {
            draft.isLoading = true;
            draft.emailId = action.payload?.email || '';
            draft.phoneNumber = action.payload?.phoneNumber || '';
            draft.mobileOtpRetrytime = 0;
            draft.emailOtpRetrytime = 0;
            draft.errorMessage = '';
            draft.accessToken = '';
            break;
        }

        case GENERATE_OTP_CODE_SUCCESS: {
            draft.isLoading = false;
            draft.currentStep = NAVIGATE_PAGE.VERIFY_OTP_PAGE;
            draft.mobileOtpRetrytime = (action.payload.data.retry_timer_seconds || 0);
            draft.accessToken = (action.payload?.data?.token || '');
            draft.errorMessage = '';
            break;
        }

        case GENERATE_OTP_CODE_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            draft.isLoading = false;
            break;
        }

        case VERIFY_OTP_CODE: {
            draft.isLoading = true;
            break;
        }

        case VERIFY_OTP_CODE_SUCCESS: {
            draft.currentStep = NAVIGATE_PAGE.PAN_INPUT_PAGE;
            draft.accessToken = action.payload.data.auth_token;
            draft.errorMessage = '';
            break;
        }

        case VERIFY_OTP_CODE_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            break;
        }

        case VERIFY_PAN: {
            draft.isLoading = true;
            draft.pan = action?.payload?.pan || '';
            break;
        }

        case VERIFY_PAN_SUCCESS: {
            draft.currentStep = action?.payload?.data?.nextScreen?.name || NAVIGATE_PAGE.MOBILE_EMAIL_INPUT_PAGE;
            draft.accountLastFourDigits = action?.payload?.data?.accountLastFourDigits || '';
            draft.screenOptions = action?.payload?.data?.nextScreen;
            draft.accessToken = action?.payload?.data?.accessToken || draft.accessToken;
            draft.errorMessage = '';
            break;
        }

        case VERIFY_PAN_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            break;
        }

        case ADD_ALTERNATE_ACCOUNT: {
            draft.isLoading = true;
            break;
        }

        case ADD_ALTERNATE_ACCOUNT_SUCCESS: {
            draft.currentStep = action?.payload?.data?.nextScreen?.name || state.currentStep;
            draft.screenOptions = action?.payload?.data?.nextScreen || state.screenOptions;
            draft.formErrors = action?.payload?.data?.formErrors;
            draft.errorMessage = '';
            break;
        }

        case ADD_ALTERNATE_ACCOUNT_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            break;
        }

        case CHANGE_PAGE: {
            draft.errorMessage = '';
            draft.isLoading = false;
            draft.currentStep = action?.payload.page;
            break;
        }

        default:
            break;
    }
});

export default minKycClosedAccountReducer;
