/* eslint-disable camelcase */
/**
 * @file Credit Card Waitlist actions.
 */

import {
    CREATE_USER, MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS, MOBILE_GENERATE_OTP_CODE_FAILURE,
    MOBILE_VERIFY_OTP_CODE, MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE, GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS, UPDATE_USER_DETAILS, ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE, RESET_CREDIT_CARD_WAITLIST_STATE,
    SET_MODAL_VALUE,
} from './constants';
import { IErrorResponse } from './types';

// Create user based on mobile no
export interface ICreateUserActionPayload {
    phoneNumber: number;
}
export interface ICreateUserAction {
    type: typeof CREATE_USER;
    payload: ICreateUserActionPayload;
}

const createUserAction = (
    payload: ICreateUserActionPayload,
): ICreateUserAction => ({
    type: CREATE_USER,
    payload,
});

// Mobile number otp generation action
export interface IMobileGenerateOtpCodePayload {
    phoneNumber: number;
}
export interface IMobileGenerateOtpCodeAction {
    type: typeof MOBILE_GENERATE_OTP_CODE;
    payload: IMobileGenerateOtpCodePayload;
}

const mobileGenerateOtpCodeAction = (
    payload: IMobileGenerateOtpCodePayload,
): IMobileGenerateOtpCodeAction => ({
    type: MOBILE_GENERATE_OTP_CODE,
    payload,
});

// Mobile number otp generation action success
export interface IMobileGenerateOtpCodeSuccessPayload {
    message: string;
    data: {
        token: string;
        retry_timer_seconds: number;
    };
}
export interface IMobileGenerateOtpCodeSuccessAction {
    type: typeof MOBILE_GENERATE_OTP_CODE_SUCCESS;
    payload: IMobileGenerateOtpCodeSuccessPayload;
}

const mobileGenerateOtpCodeSuccessAction = (
    payload: IMobileGenerateOtpCodeSuccessPayload,
): IMobileGenerateOtpCodeSuccessAction => ({
    type: MOBILE_GENERATE_OTP_CODE_SUCCESS,
    payload,
});

// Mobile number otp generation action failed
export interface IMobileGenerateOtpCodeFailedAction {
    type: typeof MOBILE_GENERATE_OTP_CODE_FAILURE;
    payload: IErrorResponse;
}

const mobileGenerateOtpCodeFailedAction = (
    payload: IErrorResponse,
): IMobileGenerateOtpCodeFailedAction => ({
    type: MOBILE_GENERATE_OTP_CODE_FAILURE,
    payload,
});

// Mobile number otp verfy action
export interface IMobileVerifyOtpCodePayload {
    otp: number;
}
export interface IMobileVerifyOtpCodeAction {
    type: typeof MOBILE_VERIFY_OTP_CODE;
    payload: IMobileVerifyOtpCodePayload;
}

const mobileVerifyOtpCodeAction = (
    payload: IMobileVerifyOtpCodePayload,
): IMobileVerifyOtpCodeAction => ({
    type: MOBILE_VERIFY_OTP_CODE,
    payload,
});

// Mobile number otp verification action success
export interface IMobileVerifyOtpCodeSuccessPayload {
    message: string;
    data: {
        access_token: string;
        next_screen: {
            screen: string;
            screen_options: string;
            send_work_email_otp_screen_options: {
                client_req_id: string;
            };
        };
    };
}
export interface IMobileVerifyOtpCodeSuccessAction {
    type: typeof MOBILE_VERIFY_OTP_CODE_SUCCESS;
    payload: IMobileVerifyOtpCodeSuccessPayload;
}

const mobileVerifyOtpCodeSuccessAction = (
    payload: IMobileVerifyOtpCodeSuccessPayload,
): IMobileVerifyOtpCodeSuccessAction => ({
    type: MOBILE_VERIFY_OTP_CODE_SUCCESS,
    payload,
});

// Mobile number otp verification action failed
export interface IMobileVerifyOtpCodeFailedPayload {
    error: {
        message: string;
        isVerifyOtpBlocked: boolean;
    };
    description: string;
}

export interface IMobileVerifyOtpCodeFailedAction {
    type: typeof MOBILE_VERIFY_OTP_CODE_FAILURE;
    payload: IMobileVerifyOtpCodeFailedPayload;
}

const mobileVerifyOtpCodeFailedAction = (
    payload: IMobileVerifyOtpCodeFailedPayload,
): IMobileVerifyOtpCodeFailedAction => ({
    type: MOBILE_VERIFY_OTP_CODE_FAILURE,
    payload,
});

// Get user details action
export interface IGetUserDetailsPayload {
    accessToken: string;
}

export interface IGetUserDetailsAction {
    type: typeof GET_USER_DETAILS;
    payload: IGetUserDetailsPayload;
}

const getUserDetailsAction = (
    payload: IGetUserDetailsPayload,
): IGetUserDetailsAction => ({
    type: GET_USER_DETAILS,
    payload,
});

// Get user details success action
export interface IGetUserDetailsSuccessPayload {
    name: {};
    email_id: string;
    is_existing_user: boolean;
 }

export interface IGetUserDetailsSuccessAction {
     type: typeof GET_USER_DETAILS_SUCCESS;
     payload: IGetUserDetailsSuccessPayload;
 }

const getUserDetailsSuccessAction = (
    payload: IGetUserDetailsSuccessPayload,
): IGetUserDetailsSuccessAction => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload,
});

// Add personal details action
export interface IUpdateUserDetailsPayload {
    name: {};
    emailId: string;
}

export interface IUpdateUserDetailsAction {
    type: typeof UPDATE_USER_DETAILS;
    payload: IUpdateUserDetailsPayload;
}

const updateUserDetailsAction = (
    payload: IUpdateUserDetailsPayload,
): IUpdateUserDetailsAction => ({
    type: UPDATE_USER_DETAILS,
    payload,
});

// On common value change in reducer
export interface IOnChangeCreditCardWaitlistItemPayload {
    [key: string]: any;
}

export interface IOnChangeCreditCardWaitlistAction {
    type: typeof ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE;
    payload: IOnChangeCreditCardWaitlistItemPayload;
}

const onChangeCreditCardWaitlistValue = (
    payload: IOnChangeCreditCardWaitlistItemPayload,
): IOnChangeCreditCardWaitlistAction => ({
    type: ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE,
    payload,
});

// reset state action
export interface IOnResetStateAction {
    type: typeof RESET_CREDIT_CARD_WAITLIST_STATE;
    payload: any;
}

const resetCreditCardWaitlistState = (payload): IOnResetStateAction => ({
    type: RESET_CREDIT_CARD_WAITLIST_STATE,
    payload,
});

export interface ISetModalValue {
    type: typeof SET_MODAL_VALUE;
    payload: any;
}

const setModalValue = (payload): ISetModalValue => ({
    type: SET_MODAL_VALUE,
    payload,
});

//  All Action types
type ICreditCardWaitlistRootAction =
    ICreateUserAction
    | IMobileGenerateOtpCodeAction
    | IMobileGenerateOtpCodeSuccessAction
    | IMobileGenerateOtpCodeFailedAction
    | IMobileVerifyOtpCodeAction
    | IMobileVerifyOtpCodeSuccessAction
    | IMobileVerifyOtpCodeFailedAction
    | IUpdateUserDetailsAction
    | IGetUserDetailsAction
    | IOnChangeCreditCardWaitlistAction
    | IOnResetStateAction
    | ISetModalValue;

export {
    // Root Action Type
    ICreditCardWaitlistRootAction,
    // Action Name
    onChangeCreditCardWaitlistValue,
    // create user
    createUserAction,
    // Mobile Page Action
    mobileGenerateOtpCodeAction,
    mobileGenerateOtpCodeSuccessAction,
    mobileGenerateOtpCodeFailedAction,
    mobileVerifyOtpCodeAction,
    mobileVerifyOtpCodeSuccessAction,
    mobileVerifyOtpCodeFailedAction,
    // Personal details actions
    getUserDetailsAction,
    getUserDetailsSuccessAction,
    updateUserDetailsAction,
    // reset state
    resetCreditCardWaitlistState,
    setModalValue,
};
