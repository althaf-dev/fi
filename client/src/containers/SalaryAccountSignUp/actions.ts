/* eslint-disable camelcase */
/**
 * @file SalaryAccountSignup containers actions.
 */

import {
    MOBILE_GENERATE_OTP_CODE,
    MOBILE_GENERATE_OTP_CODE_SUCCESS,
    MOBILE_GENERATE_OTP_CODE_FAILED,
    MOBILE_VERIFY_OTP_CODE,
    MOBILE_VERIFY_OTP_CODE_SUCCESS,
    MOBILE_VERIFY_OTP_CODE_FAILED,
    EMAIL_GENERATE_OTP_CODE,
    EMAIL_GENERATE_OTP_CODE_SUCCESS,
    EMAIL_GENERATE_OTP_CODE_FAILED,
    EMAIL_VERIFY_OTP_CODE,
    EMAIL_VERIFY_OTP_CODE_SUCCESS,
    EMAIL_VERIFY_OTP_CODE_FAILED,
    SEND_FI_APP_LINK_TO_WHATSAPP,
    SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS,
    SEND_FI_APP_LINK_TO_WHATSAPP_FAILED,
    RESET_SALARY_ACCOUNT_SIGNUP_STATE,
    ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE,
} from './constants';
import { ICommonErrorResponsePayload } from './types';

// Mobile number otp generation action
export interface IMobileGenerateOtpCodeAction {
    type: typeof MOBILE_GENERATE_OTP_CODE;
    payload: IMobileGenerateOtpCodePayload;
}

export interface IMobileGenerateOtpCodePayload {
    phoneNumber: number;
}

const mobileGenerateOtpCode = (
    payload: IMobileGenerateOtpCodePayload,
): IMobileGenerateOtpCodeAction => ({
    type: MOBILE_GENERATE_OTP_CODE,
    payload,
});

// Mobile number otp generation action success
export interface IMobileGenerateOtpCodeSuccessAction {
    type: typeof MOBILE_GENERATE_OTP_CODE_SUCCESS;
    payload: IMobileGenerateOtpCodeSuccessPayload;
}

export interface IMobileGenerateOtpCodeSuccessPayload {
    message: string;
    data: {
        token: string;
        retry_timer_seconds: number;
    };
}

const mobileGenerateOtpCodeSuccess = (
    payload: IMobileGenerateOtpCodeSuccessPayload,
): IMobileGenerateOtpCodeSuccessAction => ({
    type: MOBILE_GENERATE_OTP_CODE_SUCCESS,
    payload,
});

// Mobile number otp generation action failed
export interface IMobileGenerateOtpCodeFailedAction {
    type: typeof MOBILE_GENERATE_OTP_CODE_FAILED;
    payload: ICommonErrorResponsePayload;
}

const mobileGenerateOtpCodeFailed = (
    payload: ICommonErrorResponsePayload,
): IMobileGenerateOtpCodeFailedAction => ({
    type: MOBILE_GENERATE_OTP_CODE_FAILED,
    payload,
});

// Mobile number otp verfy action
export interface IMobileVerifyOtpCodeAction {
    type: typeof MOBILE_VERIFY_OTP_CODE;
    payload: IMobileVerifyOtpCodePayload;
}

export interface IMobileVerifyOtpCodePayload {
    otp: number;
}

const mobileVerifyOtpCode = (
    payload: IMobileVerifyOtpCodePayload,
): IMobileVerifyOtpCodeAction => ({
    type: MOBILE_VERIFY_OTP_CODE,
    payload,
});

// Mobile number otp verification action success
export interface IMobileVerifyOtpCodeSuccessAction {
    type: typeof MOBILE_VERIFY_OTP_CODE_SUCCESS;
    payload: IMobileVerifyOtpCodeSuccessPayload;
}

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

const mobileVerifyOtpCodeSuccess = (
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
    type: typeof MOBILE_VERIFY_OTP_CODE_FAILED;
    payload: IMobileVerifyOtpCodeFailedPayload;
}

const mobileVerifyOtpCodeFailed = (
    payload: IMobileVerifyOtpCodeFailedPayload,
): IMobileVerifyOtpCodeFailedAction => ({
    type: MOBILE_VERIFY_OTP_CODE_FAILED,
    payload,
});

// Email otp generation action
export interface IEmailGenerateOtpCodeAction {
    type: typeof EMAIL_GENERATE_OTP_CODE;
    payload: IEmailGenerateOtpCodePayload;
}

export interface IEmailGenerateOtpCodePayload {
    email: string;
    accessToken: string;
    clientReqId: string;
}

const emailGenerateOtpCode = (
    payload: IEmailGenerateOtpCodePayload,
): IEmailGenerateOtpCodeAction => ({
    type: EMAIL_GENERATE_OTP_CODE,
    payload,
});

// Email otp generation action success
export interface IEmailGenerateOtpCodeSuccessAction {
    type: typeof EMAIL_GENERATE_OTP_CODE_SUCCESS;
    payload: IEmailGenerateOtpCodeSuccessPayload;
}

export interface IEmailGenerateOtpCodeSuccessPayload {
    message: string;
    data: {
        token: string;
        retry_timer_seconds: number;
    };
}

const emailGenerateOtpCodeSuccess = (
    payload: IEmailGenerateOtpCodeSuccessPayload,
): IEmailGenerateOtpCodeSuccessAction => ({
    type: EMAIL_GENERATE_OTP_CODE_SUCCESS,
    payload,
});

// Email otp generation action failed
export interface IEmailGenerateOtpCodeFailedPayload {
    error: {
        message: string;
    };
    description: string;
}
export interface IEmailGenerateOtpCodeFailedAction {
    type: typeof EMAIL_GENERATE_OTP_CODE_FAILED;
    payload: ICommonErrorResponsePayload;
}

const emailGenerateOtpCodeFailed = (
    payload: ICommonErrorResponsePayload,
): IEmailGenerateOtpCodeFailedAction => ({
    type: EMAIL_GENERATE_OTP_CODE_FAILED,
    payload,
});

// Email otp verfy action
export interface IEmailVerifyOtpCodeAction {
    type: typeof EMAIL_VERIFY_OTP_CODE;
    payload: IEmailVerifyOtpCodePayload;
}

export interface IEmailVerifyOtpCodePayload {
    otp: number;
    clientReqId: string;
}

const emailVerifyOtpCode = (
    payload: IEmailVerifyOtpCodePayload,
): IEmailVerifyOtpCodeAction => ({
    type: EMAIL_VERIFY_OTP_CODE,
    payload,
});

// Email otp generation action success
export interface IEmailVerifyOtpCodeSuccessAction {
    type: typeof EMAIL_VERIFY_OTP_CODE_SUCCESS;
    payload: IEmailVerifyOtpCodeSuccessPayload;
}

export interface IEmailVerifyOtpCodeSuccessPayload {
    message: string;
    data: {
        access_token: string;
    };
}

const emailVerifyOtpCodeSuccess = (
    payload: IEmailVerifyOtpCodeSuccessPayload,
): IEmailVerifyOtpCodeSuccessAction => ({
    type: EMAIL_VERIFY_OTP_CODE_SUCCESS,
    payload,
});

// Email otp generation action failed
export interface IEmailVerifyOtpCodeFailedPayload {
    error: {
        message: string;
        isVerifyOtpBlocked: boolean;
    };
    description: string;
}

export interface IEmailVerifyOtpCodeFailedAction {
    type: typeof EMAIL_VERIFY_OTP_CODE_FAILED;
    payload: IEmailVerifyOtpCodeFailedPayload;
}

const emailVerifyOtpCodeFailed = (
    payload: IEmailVerifyOtpCodeFailedPayload,
): IEmailVerifyOtpCodeFailedAction => ({
    type: EMAIL_VERIFY_OTP_CODE_FAILED,
    payload,
});

// Send App Link action
export interface ISendAppLinkToWhatsappAction {
    type: typeof SEND_FI_APP_LINK_TO_WHATSAPP;
    payload: ISendAppLinkToWhatsappPayload;
}

export interface ISendAppLinkToWhatsappPayload {
    accessToken: string;
}

const sendAppLinkToWhatsapp = (
    payload: ISendAppLinkToWhatsappPayload,
): ISendAppLinkToWhatsappAction => ({
    type: SEND_FI_APP_LINK_TO_WHATSAPP,
    payload,
});

// Send App Link action success
export interface ISendAppLinkToWhatsappSuccessAction {
    type: typeof SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS;
    payload: any;
}

const sendAppLinkToWhatsappSuccess = (
    payload,
): ISendAppLinkToWhatsappSuccessAction => ({
    type: SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS,
    payload,
});

// Send App Link action failed
export interface ISendAppLinkToWhatsappFailedAction {
    type: typeof SEND_FI_APP_LINK_TO_WHATSAPP_FAILED;
    payload: ICommonErrorResponsePayload;
}

const sendAppLinkToWhatsappFailed = (
    payload: ICommonErrorResponsePayload,
): ISendAppLinkToWhatsappFailedAction => ({
    type: SEND_FI_APP_LINK_TO_WHATSAPP_FAILED,
    payload,
});

// On common value change in reducer
export interface IOnChangeSalaryAccountSignUpItemPayload {
    [key: string]: any;
}

export interface IOnChangeSalaryAccountSignUpAction {
    type: typeof ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE;
    payload: IOnChangeSalaryAccountSignUpItemPayload;
}

const onChangeSalaryAccountSignUpValue = (
    payload: IOnChangeSalaryAccountSignUpItemPayload,
): IOnChangeSalaryAccountSignUpAction => ({
    type: ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE,
    payload,
});

// reset state action
export interface IOnResetStateAction {
    type: typeof RESET_SALARY_ACCOUNT_SIGNUP_STATE;
    payload: any;
}

const resetSalaryAccountSignupState = (payload): IOnResetStateAction => ({
    type: RESET_SALARY_ACCOUNT_SIGNUP_STATE,
    payload,
});

//  All Action types
type SalaryAccountSignUpRootAction =
    | IMobileGenerateOtpCodeAction
    | IMobileGenerateOtpCodeSuccessAction
    | IMobileGenerateOtpCodeFailedAction
    | IMobileVerifyOtpCodeAction
    | IMobileVerifyOtpCodeSuccessAction
    | IMobileVerifyOtpCodeFailedAction
    | IEmailGenerateOtpCodeAction
    | IEmailGenerateOtpCodeSuccessAction
    | IEmailGenerateOtpCodeFailedAction
    | IEmailVerifyOtpCodeAction
    | IEmailVerifyOtpCodeSuccessAction
    | IEmailVerifyOtpCodeFailedAction
    | ISendAppLinkToWhatsappAction
    | ISendAppLinkToWhatsappSuccessAction
    | ISendAppLinkToWhatsappFailedAction
    | IOnChangeSalaryAccountSignUpAction
    | IOnResetStateAction;

export {
    // Root Action Type
    SalaryAccountSignUpRootAction,
    // Action Name
    onChangeSalaryAccountSignUpValue,
    // Mobile Page Action
    mobileGenerateOtpCode,
    mobileGenerateOtpCodeSuccess,
    mobileGenerateOtpCodeFailed,
    mobileVerifyOtpCode,
    mobileVerifyOtpCodeSuccess,
    mobileVerifyOtpCodeFailed,
    // Email Page Action
    emailGenerateOtpCode,
    emailGenerateOtpCodeSuccess,
    emailGenerateOtpCodeFailed,
    emailVerifyOtpCode,
    emailVerifyOtpCodeSuccess,
    emailVerifyOtpCodeFailed,
    // App link Send Whatsapp action
    sendAppLinkToWhatsapp,
    sendAppLinkToWhatsappSuccess,
    sendAppLinkToWhatsappFailed,
    // reset state
    resetSalaryAccountSignupState,
};
