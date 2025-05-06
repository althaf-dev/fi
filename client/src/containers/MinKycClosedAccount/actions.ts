/* eslint-disable camelcase */
/**
 * @file MinKycAccountClosure containers actions.
 */

import {
    GENERATE_OTP_CODE,
    GENERATE_OTP_CODE_SUCCESS,
    GENERATE_OTP_CODE_FAILED,
    VERIFY_OTP_CODE,
    VERIFY_OTP_CODE_SUCCESS,
    VERIFY_OTP_CODE_FAILED,
    VERIFY_PAN,
    VERIFY_PAN_SUCCESS,
    VERIFY_PAN_FAILED,
    CHANGE_PAGE,
    ADD_ALTERNATE_ACCOUNT,
    ADD_ALTERNATE_ACCOUNT_SUCCESS,
    ADD_ALTERNATE_ACCOUNT_FAILED,
} from './constants';
import { ICommonErrorResponsePayload } from './types';

// Otp generation action
export interface IGenerateOtpCodeAction {
    type: typeof GENERATE_OTP_CODE;
    payload: IGenerateOtpCodePayload;
}

export interface IGenerateOtpCodePayload {
    phoneNumber: string;
    email: string;
}

const generateOtpCode = (
    payload: IGenerateOtpCodePayload,
): IGenerateOtpCodeAction => ({
    type: GENERATE_OTP_CODE,
    payload,
});

// Otp generation action success
export interface IGenerateOtpCodeSuccessAction {
    type: typeof GENERATE_OTP_CODE_SUCCESS;
    payload: IGenerateOtpCodeSuccessPayload;
}

export interface IGenerateOtpCodeSuccessPayload {
    message: string;
    data: {
        token: string;
        retry_timer_seconds: number;
    };
}

const generateOtpCodeSuccess = (
    payload: IGenerateOtpCodeSuccessPayload,
): IGenerateOtpCodeSuccessAction => ({
    type: GENERATE_OTP_CODE_SUCCESS,
    payload,
});

// Otp generation action failed
export interface IGenerateOtpCodeFailedAction {
    type: typeof GENERATE_OTP_CODE_FAILED;
    payload: ICommonErrorResponsePayload;
}

const generateOtpCodeFailed = (
    payload: ICommonErrorResponsePayload,
): IGenerateOtpCodeFailedAction => ({
    type: GENERATE_OTP_CODE_FAILED,
    payload,
});

// Otp verify action
export interface IVerifyOtpCodeAction {
    type: typeof VERIFY_OTP_CODE;
    payload;
}

export interface IVerifyOtpCodePayload {
    otp: number;
    emailId: string;
    phoneNumber: string;
}

const verifyOtpCode = (
    payload: IVerifyOtpCodePayload,
): IVerifyOtpCodeAction => ({
    type: VERIFY_OTP_CODE,
    payload,
});

// Otp verification action success
export interface IVerifyOtpCodeSuccessAction {
    type: typeof VERIFY_OTP_CODE_SUCCESS;
    payload: IVerifyOtpCodeSuccessPayload;
}

export interface IVerifyOtpCodeSuccessPayload {
    message: string;
    data: {
        access_token: string;
        next_screen: {
            screen: string;
            screen_options: string;
        };
    };
}

const verifyOtpCodeSuccess = (
    payload: IVerifyOtpCodeSuccessPayload,
): IVerifyOtpCodeSuccessAction => ({
    type: VERIFY_OTP_CODE_SUCCESS,
    payload,
});

//  number otp verification action failed
export interface IVerifyOtpCodeFailedPayload {
    error: {
        message: string;
        isVerifyOtpBlocked: boolean;
    };
    description: string;
}

export interface IVerifyOtpCodeFailedAction {
    type: typeof VERIFY_OTP_CODE_FAILED;
    payload: IVerifyOtpCodeFailedPayload;
}

const verifyOtpCodeFailed = (
    payload: IVerifyOtpCodeFailedPayload,
): IVerifyOtpCodeFailedAction => ({
    type: VERIFY_OTP_CODE_FAILED,
    payload,
});

// PAN verify action
export interface IVerifyPanAction {
    type: typeof VERIFY_PAN;
    payload: IVerifyPanPayload;
}

export interface IVerifyPanPayload {
    pan: string,
}

const verifyPan = (
    payload: IVerifyPanPayload,
): IVerifyPanAction => ({
    type: VERIFY_PAN,
    payload,
});

// Pan verification action success
export interface IVerifyPanSuccessAction {
    type: typeof VERIFY_PAN_SUCCESS;
    payload: IVerifyPanSuccessPayload;
}

export interface IVerifyPanSuccessPayload {
    message: string;
    data: {
        access_token: string;
        last_four_digits: string;
    };
}

const verifyPanSuccess = (
    payload: IVerifyPanSuccessPayload,
): IVerifyPanSuccessAction => ({
    type: VERIFY_PAN_SUCCESS,
    payload,
});

//  Pan verification action failed
export interface IVerifyPanFailedPayload {
    error: {
        message: string;
    };
    description: string;
}

export interface IVerifyPanFailedAction {
    type: typeof VERIFY_PAN_FAILED;
    payload: IVerifyPanFailedPayload;
}

const verifyPanFailed = (
    payload: IVerifyPanFailedPayload,
): IVerifyPanFailedAction => ({
    type: VERIFY_PAN_FAILED,
    payload,
});

// Add alternate account action
export interface IAddAlternateAccountAction {
    type: typeof ADD_ALTERNATE_ACCOUNT;
    payload: IAddAlternateAccountPayload;
}

export interface IAddAlternateAccountPayload {
    ifsc: string;
    accountNumber: string;
    accountHolderName: string;
    accessToken: string;
}

const addAlternateAccount = (
    payload: IAddAlternateAccountPayload,
): IAddAlternateAccountAction => ({
    type: ADD_ALTERNATE_ACCOUNT,
    payload,
});

// Add alternate account action success
export interface IAddAlternateAccountSuccessAction {
    type: typeof ADD_ALTERNATE_ACCOUNT_SUCCESS;
    payload: IAddAlternateAccountSuccessPayload;
}

export interface IAddAlternateAccountSuccessPayload {
    message: string;
    data: {
        access_token: string;
    };
}

const addAlternateAccountSuccess = (
    payload: IAddAlternateAccountSuccessPayload,
): IAddAlternateAccountSuccessAction => ({
    type: ADD_ALTERNATE_ACCOUNT_SUCCESS,
    payload,
});

//  Add alternate account action failed
export interface IAddAlternateAccountFailedPayload {
    error: {
        message: string;
    };
    description: string;
}

export interface IAddAlternateAccountFailedAction {
    type: typeof ADD_ALTERNATE_ACCOUNT_FAILED;
    payload: IAddAlternateAccountFailedPayload;
}

const addAlternateAccountFailed = (
    payload: IAddAlternateAccountFailedPayload,
): IAddAlternateAccountFailedAction => ({
    type: ADD_ALTERNATE_ACCOUNT_FAILED,
    payload,
});

export interface IChangePagePayload {
    page: string
}

export interface IChangePageAction {
    type: typeof CHANGE_PAGE;
    payload: IChangePagePayload;
}

const changePage = (
    payload,
): IChangePageAction => ({
    type: CHANGE_PAGE,
    payload,
});

//  All Action types
type MinKycAccountClosureRootAction =
    | IGenerateOtpCodeAction
    | IGenerateOtpCodeSuccessAction
    | IGenerateOtpCodeFailedAction
    | IVerifyOtpCodeAction
    | IVerifyOtpCodeSuccessAction
    | IVerifyOtpCodeFailedAction
    | IVerifyPanAction
    | IVerifyPanSuccessAction
    | IVerifyPanFailedAction;

export {
    // Root Action Type
    MinKycAccountClosureRootAction,
    //  Page Action
    generateOtpCode,
    generateOtpCodeSuccess,
    generateOtpCodeFailed,
    verifyOtpCode,
    verifyOtpCodeSuccess,
    verifyOtpCodeFailed,
    verifyPan,
    verifyPanSuccess,
    verifyPanFailed,
    addAlternateAccount,
    addAlternateAccountSuccess,
    addAlternateAccountFailed,
    changePage,
};
