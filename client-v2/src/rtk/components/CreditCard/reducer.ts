/* eslint-disable camelcase */
/**
 * @file Credit Card eligibility reducer
 */

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    PAGE_MAP, MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS,
    MOBILE_GENERATE_OTP_CODE_FAILURE, MOBILE_VERIFY_OTP_CODE, MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE,
    SET_MODAL_VALUE, ConsentType, SET_INPUT_VALUE_VALID, SET_ERROR_MESSAGES,
} from '@/containers/CreditCardEligibility/constants';
import ClientAPIWrapper from '@/utils/clientAPIWrapper';
import { trackGTMEvent } from '@/events';
import { CREDIT_CARD_MAP } from '@/events/EventName';
import { CREDIT_CARD_BASE_URL } from '@/Api/ApiRoutes';

export const URL_MAP = {
    GENERATE_OTP: 'generate-mobile-otp',
    VERIFY_OTP: 'verify-mobile-otp',
    GET_WAITLIST_FLOW_STATUS: 'get-waitlist-flow-status',
    CREDIT_CARD_ELIGIBILITY: 'eligibility',
    CHECK_ELIGIBILITY: 'check-credit-card-eligibility'
};

export enum VERIFY_OTP_STATUS {
    CC_WEB_ELIGIBILITY_USER_DETAILS_SCREEN = 'CC_WEB_ELIGIBILITY_USER_DETAILS_SCREEN',
    CC_WEB_ELIGIBILITY_CHECK_STATUS_SCREEN = 'CC_WEB_ELIGIBILITY_CHECK_STATUS_SCREEN'
}

export interface ICreditCardEligibilitytReducer {
    isLoading: boolean;
    currentStep: string;
    has_whatsapp_consent: boolean;
    token: {
        mobileOtpToken:string;
        accessToken: string;
        headerAccessToken?: string;
    },
    otpVerificationStatus: {
        isVerifyOtpInProcess: boolean,
        isOtpVerified: boolean,
    },
    otpVerificationDetails: {
        screenTitle: string,
        screenMessage: string,
        screenImage: string,
        ctaText: string,
        additionalText: string,
        bottomText: string,
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
    },
    eligibilityStatus: any;
    mobileOtpRetrytime: number;
    errorMessage: string;
    clientReqId: string;
    actorId: string;
    isModalOpen: boolean;
    otpValueArray: Array<string>;
    pageType: string,
}

const initialState: ICreditCardEligibilitytReducer = {
    isLoading: false,
    currentStep: PAGE_MAP.LANDING_PAGE,
    has_whatsapp_consent: true,
    token: {
        mobileOtpToken: '',
        accessToken: '',
        headerAccessToken: '',
    },
    otpVerificationStatus: {
        isVerifyOtpInProcess: false,
        isOtpVerified: false,
    },
    otpVerificationDetails: {
        screenTitle: '',
        screenMessage: '',
        screenImage: '',
        ctaText: '',
        additionalText: '',
        bottomText: '',
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
    eligibilityStatus: {
        displayInfo: {
            headerIcon: '',
            screenTitle: '',
            screenMessage: '',
            screenImage: '',
            ctaText: '',
            additionalText: '',
            bottomText: ''
        },
        requestStatus: ''
    },
    mobileOtpRetrytime: 0,
    errorMessage: '',
    clientReqId: '',
    actorId: '',
    isModalOpen: false,
    otpValueArray: Array<string>(6).fill(''),
    pageType: '',
};

// Utility function to map payload values to draft
const mapPayloadToDraft = (draft: any, payload: any) => {
    // Assuming the properties in draft and payload have the same names and types
    const keysToMap = Object.keys(payload);

    keysToMap.forEach((key) => {
        draft[key] = payload[key];
    });
};

const creditCardEligbilityUrl = (path: string) => `${CREDIT_CARD_BASE_URL}/${path}`;

const mobileGenerateOTP = createAsyncThunk(
    'generate/otp',
    async (payload: any, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.post(creditCardEligbilityUrl(URL_MAP.GENERATE_OTP), payload);
            return thunkAPI.fulfillWithValue({
                token: response.data.token
            });
        } catch (error: any) {
            let errorMessage = 'Unable to Process the request please try again';
            if (error && error.error && error.error.message) errorMessage = error.error.message;
            throw thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const verifyOtp = createAsyncThunk(
    'verify/otp',
    async (payload: any, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.post(creditCardEligbilityUrl(URL_MAP.VERIFY_OTP), payload);
            const {
                access_token, client_req_id, actor_id, next_screen
            } = response.data;
            return thunkAPI.fulfillWithValue({
                access_token, clientReqId: client_req_id, actorId: actor_id, next_screen
            });
        } catch (error: any) {
            let errorMessage = 'Unable to Process the request please try again';
            if (error && error.error && error.error.message) errorMessage = error.error.message;
            throw thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const checkEligibility = createAsyncThunk(
    'check/eligibility',
    async (payload: any, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.post(creditCardEligbilityUrl(URL_MAP.CHECK_ELIGIBILITY), payload);
            return thunkAPI.fulfillWithValue(response.data.client_req_id);
        } catch (error: any) {
            let errorMessage = 'Unable to Process the request please try again';
            if (error && error.error && error.error.message) errorMessage = error.error.message;
            throw thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const getEligibiityStatus = createAsyncThunk(
    'check/eligibilityStatus',
    async (payload: any, thunkAPI) => {
        try {
            const modifiedPayload = { ...payload, webflow: 'WEB_FLOW_OFF_APP_CC_ELIGIBILITY_CHECK' };
            const response = await ClientAPIWrapper.post(creditCardEligbilityUrl(URL_MAP.GET_WAITLIST_FLOW_STATUS), modifiedPayload);
            const { displayInfo, requestStatus } = response.data;
            return thunkAPI.fulfillWithValue({ displayInfo, requestStatus });
        } catch (error: any) {
            let errorMessage = 'Unable to Process the request please try again';
            if (error && error.error && error.error.message) errorMessage = error.error.message;
            throw thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const creditCard = createSlice({
    name: 'creditCardEligibilityReducer',
    initialState,
    reducers: {
        [MOBILE_GENERATE_OTP_CODE]: (draft: any) => {
            draft.isLoading = true;
            draft.token.mobileOtpToken = '';
            draft.mobileOtpRetrytime = 0;
            draft.errorMessage = '';
            draft.clientReqId = '';
            draft.token.accessToken = '';
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
        },
        [MOBILE_GENERATE_OTP_CODE_SUCCESS]: (draft: any, action: any) => {
            draft.isLoading = false;
            draft.token.mobileOtpToken = action.payload.data.token;
            draft.mobileOtpRetrytime = (action.payload.data.retry_timer_seconds || 0);
            draft.errorMessage = '';
        },
        [MOBILE_GENERATE_OTP_CODE_FAILURE]: (draft: any, action: any) => {
            draft.errorMessage = action?.payload?.message || action?.payload?.description;
            draft.isLoading = false;
        },
        [MOBILE_VERIFY_OTP_CODE]: (draft: any) => {
            draft.otpVerificationStatus.isVerifyOtpInProcess = true;
            draft.otpVerificationStatus.isOtpVerified = false;
        },
        [MOBILE_VERIFY_OTP_CODE_SUCCESS]: (draft: any, action: any) => {
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
            draft.otpVerificationStatus.isOtpVerified = true;
            draft.token.accessToken = action?.payload?.data?.access_token;
            draft.clientReqId = action?.payload?.data?.client_req_id;
            draft.actorId = action?.payload?.data?.actor_id;
            draft.token.mobileOtpToken = '';
            draft.errorMessage = '';
        },
        [MOBILE_VERIFY_OTP_CODE_FAILURE]: (draft: any, action: any) => {
            draft.errorMessage = action?.payload?.error?.message || action?.payload?.description;
            draft.otpVerificationStatus.isVerifyOtpInProcess = false;
        },
        [SET_INPUT_VALUE_VALID]: (draft: any, action: any) => {
            mapPayloadToDraft(draft.isInputValueValid, action.payload);
        },
        [SET_ERROR_MESSAGES]: (draft: any, action: any) => {
            mapPayloadToDraft(draft.errorMessages, action.payload);
        },
        onChangeCreditCardEligibilityValue: (draft: any, action: PayloadAction<any>) => {
            const keyValue = action.payload;
            Object.keys(keyValue).forEach((key: string) => {
                draft[key] = keyValue[key];
            });
        },
        [SET_MODAL_VALUE]: (draft: any, action: any) => {
            draft.isModalOpen = action.payload.isModalOpen;
        },
        updateOtp: (state, action: PayloadAction<any>) => {
            state.token.mobileOtpToken = action.payload;
        },
        stepChangeAction: (state, action: PayloadAction<any>) => {
            state.currentStep = action.payload;
        },
        updatedUserDetailsAction: (state, action: PayloadAction<any>) => {
            state.userDetails = action.payload.userDetails;
        },
        setErrorMessagesAction: (state, action: PayloadAction<any>) => {
            mapPayloadToDraft(state.errorMessages, action.payload);
        },
        setInputValueValidAction: (state: any, action: PayloadAction<any>) => {
            mapPayloadToDraft(state.isInputValueValid, action.payload);
        },
        setErrorMessage: (state: any, action: PayloadAction<any>) => {
            state.errorMessage = action.payload;
        },
        setOtpValueArray: (state: any, action: PayloadAction<any>) => {
            state.otpValueArray = action.payload;
        },
        updateCCState: (state: any, action: PayloadAction<any>) => {
            Object.keys(action.payload).forEach((key: string) => {
                state[key] = action.payload[key];
            });
        },
        updatePageType: (state: any, action: PayloadAction<any>) => {
            state.pageType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(mobileGenerateOTP.pending, (state) => {
            state.isLoading = true;
            state.errorMessage = '';
        })
            .addCase(mobileGenerateOTP.fulfilled, (state, action) => {
                state.token.accessToken = action.payload.token;
                state.currentStep = PAGE_MAP.VERIFY_OTP_PAGE;
                state.isLoading = false;
            })
            .addCase(mobileGenerateOTP.rejected, (state, action: any) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = '';
            })
            .addCase(verifyOtp.fulfilled, (state, action: any) => {
                const { access_token, actorId, next_screen } = action.payload;

                state.token.headerAccessToken = access_token;
                state.isLoading = false;
                state.actorId = actorId;
                const { screen, credit_card_web_eligibility_check_status_screen_options } = next_screen;

                if (screen === VERIFY_OTP_STATUS.CC_WEB_ELIGIBILITY_USER_DETAILS_SCREEN) {
                    state.currentStep = PAGE_MAP.USER_DETAILS_PAGE;
                } else if (credit_card_web_eligibility_check_status_screen_options) {
                    const { client_req_id } = credit_card_web_eligibility_check_status_screen_options;
                    state.currentStep = PAGE_MAP.CREDIT_CARD_POLLING_STATUS;
                    state.clientReqId = client_req_id;
                } else {
                    state.errorMessage = 'Internal Server Error';
                }
                if (CREDIT_CARD_MAP[state.pageType].VERIFY_OTP_WLCC) trackGTMEvent(CREDIT_CARD_MAP[state.pageType].VERIFY_OTP_WLCC);
            })
            .addCase(verifyOtp.rejected, (state, action: any) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            })
            .addCase(checkEligibility.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = '';
            })
            .addCase(checkEligibility.fulfilled, (state, action) => {
                state.currentStep = PAGE_MAP.CREDIT_CARD_POLLING_STATUS;
                state.clientReqId = action.payload;
                state.isLoading = false;
            })
            .addCase(checkEligibility.rejected, (state, action: any) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            })
            .addCase(getEligibiityStatus.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = '';
            })
            .addCase(getEligibiityStatus.fulfilled, (state, action) => {
                state.eligibilityStatus = action.payload;
                state.isLoading = false;
            })
            .addCase(getEligibiityStatus.rejected, (state, action:any) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            });
    }
});

const {
    stepChangeAction, onChangeCreditCardEligibilityValue,
    updatedUserDetailsAction, setErrorMessagesAction, setInputValueValidAction,
    updateOtp, setErrorMessage, setOtpValueArray, updateCCState, updatePageType,
} = creditCard.actions;

export {
    stepChangeAction, onChangeCreditCardEligibilityValue,
    updatedUserDetailsAction, mobileGenerateOTP, verifyOtp, checkEligibility,
    setErrorMessagesAction, setInputValueValidAction, updateOtp,
    getEligibiityStatus, setErrorMessage, setOtpValueArray, updateCCState, updatePageType
};

export default creditCard.reducer;
