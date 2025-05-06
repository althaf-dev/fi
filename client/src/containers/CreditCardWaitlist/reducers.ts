/**
 * @file Credit Card Waitlist reducer
 */

import produce from 'immer';

import {
    PAGE_MAP, CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS,
    MOBILE_GENERATE_OTP_CODE_FAILURE, MOBILE_VERIFY_OTP_CODE, MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE,
    GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE, UPDATE_USER_DETAILS, UPDATE_USER_DETAILS_SUCCESS,
    UPDATE_USER_DETAILS_FAILURE, ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE, RESET_CREDIT_CARD_WAITLIST_STATE, SET_MODAL_VALUE,
} from './constants';
import { ICreditCardWaitlistRootAction } from './actions';

export interface ICreditCardWaitlistReducer {
    isLoading: boolean;
    currentStep: string;
    isUserCreated: boolean;
    token: {
        mobileOtpToken:string;
        accessToken: string;
    },
    otpVerificationStatus: {
        isVerifyOtpInProcess: boolean,
        isOtpVerified: boolean,
    },
    phone: {
        countryCode: number,
        phoneNumber: string,
    },
    userDetails: {
        name: string,
        emailId: string,
        isExistingUser: boolean,
    },
    mobileOtpRetrytime: number;
    errorMessage: string;
    clientReqId: string;
    isUserDetailsUpdated: boolean;
    isModalOpen: boolean;
}

const ccWaitlistInitialState: ICreditCardWaitlistReducer = {
    isLoading: false,
    currentStep: PAGE_MAP.GENERATE_OTP_PAGE,
    isUserCreated: false,
    token: {
        mobileOtpToken: '',
        accessToken: '',
    },
    otpVerificationStatus: {
        isVerifyOtpInProcess: false,
        isOtpVerified: false,
    },
    phone: {
        countryCode: 91,
        phoneNumber: '',
    },
    userDetails: {
        name: '',
        emailId: '',
        isExistingUser: false,
    },
    mobileOtpRetrytime: 0,
    errorMessage: '',
    clientReqId: '',
    isUserDetailsUpdated: false,
    isModalOpen: false,
};

const creditCardWaitlistReducer = (
    state = ccWaitlistInitialState,
    action: ICreditCardWaitlistRootAction,
): ICreditCardWaitlistReducer => produce(state, (draft) => {
    switch (action.type) {
        case CREATE_USER: {
            draft.isUserCreated = false;
            break;
        }

        case CREATE_USER_SUCCESS: {
            draft.isUserCreated = true;
            draft.errorMessage = '';
            break;
        }

        case CREATE_USER_FAILURE: {
            draft.isUserCreated = false;
            draft.errorMessage = action?.payload?.message || action?.payload?.description;
            break;
        }

        case MOBILE_GENERATE_OTP_CODE: {
            draft.isLoading = true;
            draft.token.mobileOtpToken = '';
            draft.mobileOtpRetrytime = 0;
            draft.errorMessage = '';
            draft.userDetails.emailId = '';
            draft.clientReqId = '';
            draft.token.accessToken = '';
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
            break;
        }

        case MOBILE_GENERATE_OTP_CODE_SUCCESS: {
            draft.isLoading = false;
            draft.token.mobileOtpToken = action.payload.data.token;
            draft.mobileOtpRetrytime = (action.payload.data.retry_timer_seconds || 0);
            draft.errorMessage = '';
            break;
        }

        case MOBILE_GENERATE_OTP_CODE_FAILURE: {
            draft.errorMessage = action?.payload?.message || action?.payload?.description;
            draft.isLoading = false;
            break;
        }

        case MOBILE_VERIFY_OTP_CODE: {
            draft.otpVerificationStatus.isVerifyOtpInProcess = true;
            draft.otpVerificationStatus.isOtpVerified = false;
            break;
        }

        case MOBILE_VERIFY_OTP_CODE_SUCCESS: {
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
            draft.otpVerificationStatus.isOtpVerified = true;
            draft.token.accessToken = action?.payload?.data?.access_token;
            draft.token.mobileOtpToken = '';
            draft.errorMessage = '';
            break;
        }

        case MOBILE_VERIFY_OTP_CODE_FAILURE: {
            draft.errorMessage = action?.payload?.message || action?.payload?.description;
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
            break;
        }

        case UPDATE_USER_DETAILS: {
            draft.isLoading = true;
            draft.userDetails.name = action?.payload?.data?.name;
            draft.userDetails.emailId = action?.payload?.data?.email_id;
            draft.userDetails.isExistingUser = action?.payload?.data?.is_existing_user;
            break;
        }

        case UPDATE_USER_DETAILS_SUCCESS: {
            draft.isLoading = false;
            draft.currentStep = PAGE_MAP.USER_DETAILS_PAGE;
            draft.token.accessToken = action.payload.data.access_token;
            draft.isUserDetailsUpdated = true;
            draft.errorMessage = '';
            break;
        }

        case UPDATE_USER_DETAILS_FAILURE: {
            draft.isLoading = false;
            draft.isUserDetailsUpdated = false;
            draft.errorMessage = action?.payload?.message || action?.payload?.description;
            break;
        }

        case GET_USER_DETAILS: {
            draft.isLoading = false;
            break;
        }

        case GET_USER_DETAILS_SUCCESS: {
            draft.isLoading = false;
            draft.userDetails.name = action?.payload?.data?.name;
            draft.userDetails.emailId = action?.payload?.data?.email_id;
            draft.userDetails.isExistingUser = action?.payload?.data?.is_existing_user;
            break;
        }

        case GET_USER_DETAILS_FAILURE: {
            draft.errorMessage = action?.payload?.message || action?.payload?.description;
            draft.isLoading = false;
            break;
        }

        case ON_CHANGE_CREDIT_CARD_WAITLIST_VALUE: {
            const keyValue = action.payload;

            Object.keys(keyValue).forEach((key) => {
                draft[key] = keyValue[key];
            });
            break;
        }

        case RESET_CREDIT_CARD_WAITLIST_STATE: {
            Object.assign(draft, ccWaitlistInitialState);
            break;
        }

        case SET_MODAL_VALUE: {
            draft.isModalOpen = action.payload.isModalOpen;
            break;
        }

        default:
            break;
    }
});

export default creditCardWaitlistReducer;
