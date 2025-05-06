/**
 * @file Salary Account SignUp reducer
 */

import produce from 'immer';

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
    ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE,
    RESET_SALARY_ACCOUNT_SIGNUP_STATE,
    NAVIGATE_PAGE,
} from './constants';
import { SalaryAccountSignUpRootAction } from './actions';

export interface IsaSignUpReducer {
    isLoading: boolean;
    currentStep: string;
    countryCode: number;
    phoneNumber: string;
    whatsappPreference: boolean;
    emailId: string;
    showWorkBenefitSection: boolean;
    mobileOtpToken: string;
    accessToken: string;
    emailOtpToken: string;
    mobileOtpRetrytime: number;
    emailOtpRetrytime: number;
    errorMessage: string;
    otpVerifyInprocess: boolean;
    isVerifyOtpBlocked: boolean;
    clientReqId: string;
}

const saSignUpInitialState: IsaSignUpReducer = {
    isLoading: false,
    currentStep: NAVIGATE_PAGE.MOBILE_GENERATE_OTP_PAGE,
    phoneNumber: '',
    countryCode: 91,
    whatsappPreference: true,
    emailId: '',
    showWorkBenefitSection: false,
    mobileOtpToken: '',
    emailOtpToken: '',
    accessToken: '',
    mobileOtpRetrytime: 0,
    emailOtpRetrytime: 0,
    errorMessage: '',
    otpVerifyInprocess: false,
    isVerifyOtpBlocked: false,
    clientReqId: '',
};

const salaryAccountSignUpReducer = (
    state = saSignUpInitialState,
    action: SalaryAccountSignUpRootAction,
): IsaSignUpReducer => produce(state, (draft) => {
    switch (action.type) {
        case MOBILE_GENERATE_OTP_CODE: {
            draft.isLoading = true;
            draft.mobileOtpToken = '';
            draft.mobileOtpRetrytime = 0;
            draft.emailOtpToken = '';
            draft.emailOtpRetrytime = 0;
            draft.errorMessage = '';
            draft.emailId = '';
            draft.clientReqId = '';
            draft.accessToken = '';
            draft.isVerifyOtpBlocked = false;
            draft.otpVerifyInprocess = false;
            break;
        }

        case MOBILE_GENERATE_OTP_CODE_SUCCESS: {
            draft.isLoading = false;
            draft.mobileOtpToken = action.payload.data.token;
            draft.mobileOtpRetrytime = (action.payload.data.retry_timer_seconds || 0);
            draft.errorMessage = '';
            break;
        }

        case MOBILE_GENERATE_OTP_CODE_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            draft.isLoading = false;
            break;
        }

        case MOBILE_VERIFY_OTP_CODE: {
            draft.otpVerifyInprocess = true;
            break;
        }

        case MOBILE_VERIFY_OTP_CODE_SUCCESS: {
            const screenOptions = action.payload?.data?.next_screen?.screen_options;
            let currentStep = NAVIGATE_PAGE.EMAIL_GENERATE_OTP_PAGE;

            if (action.payload?.data?.next_screen?.screen === 'WEB_APP_DOWNLOAD') {
                currentStep = NAVIGATE_PAGE.FINISH_SIGNUP_PAGE;
            }

            draft.currentStep = currentStep;
            draft.otpVerifyInprocess = false;
            draft.isVerifyOtpBlocked = false;
            draft.accessToken = action.payload.data.access_token;
            draft.mobileOtpToken = '';
            draft.errorMessage = '';
            draft.clientReqId = action.payload?.data?.next_screen?.[screenOptions]?.client_req_id;
            break;
        }

        case MOBILE_VERIFY_OTP_CODE_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            draft.isVerifyOtpBlocked = (action?.payload?.error?.isVerifyOtpBlocked);
            draft.otpVerifyInprocess = false;
            break;
        }

        case EMAIL_GENERATE_OTP_CODE: {
            draft.isLoading = true;
            draft.emailOtpToken = '';
            draft.emailOtpRetrytime = 0;
            draft.isVerifyOtpBlocked = false;
            draft.otpVerifyInprocess = false;
            break;
        }

        case EMAIL_GENERATE_OTP_CODE_SUCCESS: {
            draft.isLoading = false;
            draft.emailOtpToken = action.payload.data.token;
            draft.emailOtpRetrytime = (action.payload.data.retry_timer_seconds || 0);
            draft.isVerifyOtpBlocked = false;
            break;
        }

        case EMAIL_GENERATE_OTP_CODE_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            draft.isLoading = false;
            break;
        }

        case EMAIL_VERIFY_OTP_CODE: {
            draft.otpVerifyInprocess = true;
            break;
        }

        case EMAIL_VERIFY_OTP_CODE_SUCCESS: {
            draft.otpVerifyInprocess = false;
            draft.currentStep = NAVIGATE_PAGE.FINISH_SIGNUP_PAGE;
            draft.emailOtpToken = '';
            break;
        }

        case EMAIL_VERIFY_OTP_CODE_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            draft.isVerifyOtpBlocked = (action?.payload?.error?.isVerifyOtpBlocked);
            draft.otpVerifyInprocess = false;
            break;
        }

        case SEND_FI_APP_LINK_TO_WHATSAPP: {
            draft.isLoading = true;
            break;
        }

        case SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS: {
            draft.currentStep = NAVIGATE_PAGE.WHATSAPP_LINK_PAGE;
            break;
        }

        case SEND_FI_APP_LINK_TO_WHATSAPP_FAILED: {
            draft.errorMessage = (action?.payload?.error?.message ?? action?.payload?.description) || '';
            draft.isLoading = false;
            break;
        }

        case ON_CHANGE_SALARY_ACCOUNT_SIGNUP_VALUE: {
            const kvPair = action.payload;

            Object.keys(kvPair).forEach((key) => {
                draft[key] = kvPair[key];
            });

            break;
        }

        case RESET_SALARY_ACCOUNT_SIGNUP_STATE: {
            Object.assign(draft, saSignUpInitialState);
            break;
        }

        default:
            break;
    }
});

export default salaryAccountSignUpReducer;
