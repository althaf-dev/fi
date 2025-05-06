/**
 * @file Credit Card Waitlist reducer
 */

import produce from 'immer';

import {
    PAGE_MAP, MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS,
    MOBILE_GENERATE_OTP_CODE_FAILURE, MOBILE_VERIFY_OTP_CODE, MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE,
    ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE, SET_MODAL_VALUE, ConsentType, SET_INPUT_VALUE_VALID, SET_ERROR_MESSAGES,
} from './constants';
import { ICreditCardEligibilityRootAction } from './actions';

export interface ICreditCardEligibilitytReducer {
    isLoading: boolean;
    currentStep: string;
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
        firstName: string,
        lastName: string,
        dateOfBirth: string;
        panCardNumber: string;
        emailId: string,
        [ConsentType.CONSENT_TYPE_FI_TNC]: boolean,
        [ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]: boolean,
        isExistingUser: boolean,
    },
    isInputValueValid: {
        firstName: boolean,
        lastName: boolean,
        dateOfBirth: boolean,
        panCardNumber: boolean,
        emailId: boolean,
        [ConsentType.CONSENT_TYPE_FI_TNC]: boolean,
        [ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]: boolean,
    },
    errorMessages: {
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        panCardNumber: string,
        emailId: string,
    }
    mobileOtpRetrytime: number;
    errorMessage: string;
    clientReqId: string;
    actorId: string;
    isModalOpen: boolean;
}

const ccEligibilityInitialState: ICreditCardEligibilitytReducer = {
    isLoading: false,
    currentStep: PAGE_MAP.LANDING_PAGE,
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
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        panCardNumber: '',
        emailId: '',
        [ConsentType.CONSENT_TYPE_FI_TNC]: false,
        [ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]: false,
        isExistingUser: false,
    },
    isInputValueValid: {
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        panCardNumber: false,
        emailId: false,
        [ConsentType.CONSENT_TYPE_FI_TNC]: false,
        [ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL]: false,
    },
    errorMessages: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        panCardNumber: '',
        emailId: '',
    },
    mobileOtpRetrytime: 0,
    errorMessage: '',
    clientReqId: '',
    actorId: '',
    isModalOpen: false,
};

// Utility function to map payload values to draft
const mapPayloadToDraft = (draft: any, payload: any) => {
    // Assuming the properties in draft and payload have the same names and types
    const keysToMap = Object.keys(payload);

    keysToMap.forEach((key) => {
        draft[key] = payload[key];
    });
};

const creditCardEligibilityReducer = (
    state = ccEligibilityInitialState,
    action: ICreditCardEligibilityRootAction,
): ICreditCardEligibilitytReducer => produce(state, (draft) => {
    switch (action.type) {
        case MOBILE_GENERATE_OTP_CODE: {
            draft.isLoading = true;
            draft.token.mobileOtpToken = '';
            draft.mobileOtpRetrytime = 0;
            draft.errorMessage = '';
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
            draft.clientReqId = action?.payload?.data?.client_req_id;
            draft.actorId = action?.payload?.data?.actor_id;
            draft.token.mobileOtpToken = '';
            draft.errorMessage = '';
            break;
        }

        case MOBILE_VERIFY_OTP_CODE_FAILURE: {
            draft.errorMessage = action?.payload?.error?.message || action?.payload?.description;
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
            break;
        }

        case SET_INPUT_VALUE_VALID: {
            mapPayloadToDraft(draft.isInputValueValid, action.payload);

            break;
        }

        case SET_ERROR_MESSAGES: {
            mapPayloadToDraft(draft.errorMessages, action.payload);

            break;
        }

        case ON_CHANGE_CREDIT_CARD_ELIGIBILITY_VALUE: {
            const keyValue = action.payload;

            Object.keys(keyValue).forEach((key) => {
                draft[key] = keyValue[key];
            });

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

export default creditCardEligibilityReducer;
