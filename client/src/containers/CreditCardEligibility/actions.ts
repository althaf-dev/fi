/* eslint-disable camelcase */
/**
 * @file Credit Card Waitlist actions.
 */

import {
    MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS, MOBILE_GENERATE_OTP_CODE_FAILURE,
    MOBILE_VERIFY_OTP_CODE, MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE, ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE,
    SET_MODAL_VALUE, SET_INPUT_VALUE_VALID, SET_ERROR_MESSAGES,
} from './constants';
import { IErrorResponse } from './types';

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
        client_req_id: string;
        actor_id: string;
        next_screen?: {
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

// On common value change in reducer
export interface IOnChangeCreditCardEligibilityItemPayload {
    [key: string]: any;
}

export interface IOnChangeCreditCardWaitlistAction {
    type: typeof ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE;
    payload: IOnChangeCreditCardEligibilityItemPayload;
}

const onChangeCreditCardEligibilityValue = (
    payload: IOnChangeCreditCardEligibilityItemPayload,
): IOnChangeCreditCardWaitlistAction => ({
    type: ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE,
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

// Action creator function to set isInputValueValid
export interface ISetInputValueValidAction {
    type: typeof SET_INPUT_VALUE_VALID;
    payload: any;
}

const setInputValueValidAction = (payload): ISetInputValueValidAction => ({
    type: SET_INPUT_VALUE_VALID,
    payload,
});

// Action creator function to set isInputValueValid
export interface ISetErrorMessagesAction {
    type: typeof SET_ERROR_MESSAGES;
    payload: any;
}

const setErrorMessagesAction = (payload): ISetErrorMessagesAction => ({
    type: SET_ERROR_MESSAGES,
    payload,
});

//  All Action types
type ICreditCardEligibilityRootAction =
    | IMobileGenerateOtpCodeAction
    | IMobileGenerateOtpCodeSuccessAction
    | IMobileGenerateOtpCodeFailedAction
    | IMobileVerifyOtpCodeAction
    | IMobileVerifyOtpCodeSuccessAction
    | IMobileVerifyOtpCodeFailedAction
    | IOnChangeCreditCardWaitlistAction
    | ISetModalValue
    | ISetInputValueValidAction
    | ISetErrorMessagesAction;

export {
    // Root Action Type
    ICreditCardEligibilityRootAction,
    // Action Name
    onChangeCreditCardEligibilityValue,
    // Mobile Page Action
    mobileGenerateOtpCodeAction,
    mobileGenerateOtpCodeSuccessAction,
    mobileGenerateOtpCodeFailedAction,
    mobileVerifyOtpCodeAction,
    mobileVerifyOtpCodeSuccessAction,
    mobileVerifyOtpCodeFailedAction,
    setModalValue,
    setInputValueValidAction,
    setErrorMessagesAction,
};
