/**
 * @file Credit Card eligibility reducer
 */

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    PAGE_MAP, ConsentType
} from '@/containers/RiskEscalationForm/constants';
import ClientAPIWrapper from '@/utils/clientAPIWrapper';
import { API_URL } from '@/Api/ApiRoutes';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';
import { riskFormEvents } from '@/events/EventName';
import EventCreator from '@/utils/event';
import { trackGTMEvent } from '@/events/TrackingService';

const eventCreator = new EventCreator(trackGTMEvent);

const LOGIN_BASE_URL = `${API_URL}/min-kyc-closed-account`;

const ESCATION_GET_FORM = `${API_URL}/risk-escalation`;

export const URL_MAP = {
    GENERATE_OTP: `${LOGIN_BASE_URL}/generate-otp`,
    VERIFY_OTP: `${LOGIN_BASE_URL}/verify-otp`,
    CHECK_ELIGIBILITY: 'check-credit-card-eligibility',
    GET_ESCALATION_FORM: `${ESCATION_GET_FORM}/form`,
    SUBMIT_ESCALATION_FORM: `${ESCATION_GET_FORM}/submit`,
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
        authToken?: string
    },
    otpVerificationStatus: {
        isVerifyOtpInProcess: boolean,
        isOtpVerified: boolean,
    },
    phone: {
        countryCode: number,
        phoneNumber: string,
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
    mobileOtpRetrytime: number;
    errorMessage: string;
    clientReqId: string;
    actorId: string;
    isModalOpen: boolean;
    otpValueArray: Array<string>;
    showSubmitButton: {
        visible: boolean;
        content: string;
    };
    formId: string;
    questions: any;
    screens: {
        questionnaireScreen: any;
        introScreen: any;
        outroScreen: any;
        errorScreen: any
    },
    questionValidationState: any;
    isFormValid: boolean;
}

const initialState: ICreditCardEligibilitytReducer = {
    isLoading: false,
    currentStep: '',
    has_whatsapp_consent: true,
    token: {
        mobileOtpToken: '',
        accessToken: '',
        headerAccessToken: '',
        authToken: '',
    },
    otpVerificationStatus: {
        isVerifyOtpInProcess: false,
        isOtpVerified: false,
    },
    phone: {
        countryCode: 91,
        phoneNumber: '',
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
    otpValueArray: Array<string>(6).fill(''),
    showSubmitButton: { visible: false, content: '' },
    formId: '',
    questions: {},
    screens: {
        questionnaireScreen: null,
        introScreen: null,
        outroScreen: null,
        errorScreen: null,
    },
    questionValidationState: {},
    isFormValid: false
};

const fireEventAction = (eventName: string) => ({
    type: 'riskEscalationForm/fireEvent',
    payload: {
        eventName
    }
});

const mobileGenerateOTP = createAsyncThunk(
    'generate-mobile/otp',
    async (requestPayload: any, thunkAPI) => {
        try {
            // thunkAPI.dispatch(riskForm.actions.fireEvent({ eventName: riskFormEvents.RISK_FORM_ENTERED_PHONE_NUMBER }));
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_ENTERED_PHONE_NUMBER));
            const response = await ClientAPIWrapper.post(URL_MAP.GENERATE_OTP, requestPayload);
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
    'verify-mobile/otp',
    async (payload: any, thunkAPI) => {
        try {
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_ENTERED_OTP));
            const response = await ClientAPIWrapper.post(URL_MAP.VERIFY_OTP, { ...payload });
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_LAND_OTP_VERIFICATION_SUCCESS));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error: any) {
            let errorMessage = 'Unable to Process the request please try again';
            if (error && error.error && error.error.message) errorMessage = error.error.message;
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_LAND_OTP_VERIFICATION_FAILED));
            throw thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const getRiskEscaltionForm = createAsyncThunk(
    'escaltion/get-form',
    async (payload: any, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.post(URL_MAP.GET_ESCALATION_FORM,
                constructPayloadWithCommonInfo(payload));
            const { form_screens: formScreens, error_screen: errorScreen } = response.data;

            if (formScreens) {
                thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_FORM_REQUEST_SUCCESS));
                return thunkAPI.fulfillWithValue(formScreens);
            }
            throw errorScreen;
        } catch (error: any) {
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_FORM_REQUEST_FAILED));
            const { message, title } = error || {
                message: [
                    'Please Try after some time',
                ],
                title: 'Internal Server Error',
                bottom_cta: null
            };
            throw thunkAPI.rejectWithValue({
                error_screen: {
                    message,
                    title,
                    bottom_cta: null
                }
            });
        }
    }
);

enum FieldType {
    FIELD_TYPE_UNSPECIFIED = 'FIELD_TYPE_UNSPECIFIED',
    FIELD_TYPE_TEXT_BOX = 'FIELD_TYPE_TEXT_BOX',
    FIELD_TYPE_DROPDOWN= 'FIELD_TYPE_DROPDOWN',
    FIELD_TYPE_FILE= 'FIELD_TYPE_FILE',
    FIELD_TYPE_CHECK_BOX= 'FIELD_TYPE_CHECK_BOX',
    FIELD_TYPE_RADIO_BUTTON= 'FIELD_TYPE_RADIO_BUTTON'
  }

function convertFileToBinary(file: any) {
    return new Promise((resolve, reject) => {
        const fileReader: any = new FileReader();

        fileReader.onload = () => {
            const arrayBuffer = fileReader.result;

            const contentBase64 = btoa(
                new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''),
            );
            resolve(contentBase64);
        };

        fileReader.onerror = () => {
            reject(new Error('Failed to read the file'));
        };

        // Read the file into array buffer.
        fileReader.readAsArrayBuffer(file);
    });
}

const formatQuestionPayload = async (fieldResponse: any) => {
    const responseMap = Object.entries(fieldResponse).map(async ([questionkey, value]: any) => {
        const {
            fieldType, response, is_multi_select: isMultiSelect
        } = value;

        const responseValue: any = {
            key: questionkey,
        };

        if (fieldType === FieldType.FIELD_TYPE_FILE) {
            const file: any = await convertFileToBinary(response);
            responseValue['file'] = {
                file_content: file,
                file_type: response.type,
            };
        } if (fieldType === FieldType.FIELD_TYPE_DROPDOWN) {
            responseValue['value'] = response;
        } if (fieldType === FieldType.FIELD_TYPE_CHECK_BOX) {
            if (isMultiSelect) {
                responseValue['values'] = {
                    values: response,
                };
            } else {
                responseValue['value'] = Array.isArray(response) && response.length > 0 ? response[0] : '';
            }
        } if (fieldType === FieldType.FIELD_TYPE_TEXT_BOX) {
            responseValue.value = response;
        }
        return responseValue;
    });
    const result = await Promise.all(responseMap);

    return result;
};

const submitEscaltionForm = createAsyncThunk(
    'escaltion/submit-form',
    async (payload: any, thunkAPI) => {
        try {
            const {
                form_id: formId, questionResponse, accessToken
            } = payload;
            const formattedRequestBody = await formatQuestionPayload(questionResponse);
            const requestBody = {
                form_id: formId,
                accessToken,
                field_responses: Array.isArray(Object.entries(questionResponse)) ? formattedRequestBody : []
            };

            // payload should have form_id and customerResponse
            const response = await ClientAPIWrapper.post(URL_MAP.SUBMIT_ESCALATION_FORM,
                constructPayloadWithCommonInfo(requestBody));
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_FORM_REQUEST_SUCCESS));
            return thunkAPI.fulfillWithValue(response);
        } catch (error: any) {
            thunkAPI.dispatch(fireEventAction(riskFormEvents.RISK_FORM_SUBMISSION_FAILURE));
            let errorMessage = 'Unable to Process the request please try again';
            if (error && error.error && error.error.message) errorMessage = error.error.message;
            throw thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const riskForm = createSlice({
    name: 'riskEscalationForm',
    initialState,
    reducers: {
        onChangeCreditCardEligibilityValue: (draft: any, action: PayloadAction<any>) => {
            const keyValue = action.payload;
            Object.keys(keyValue).forEach((key: string) => {
                draft[key] = keyValue[key];
            });
        },
        updateOtp: (state, action: PayloadAction<any>) => {
            state.token.mobileOtpToken = action.payload;
        },
        stepChangeAction: (state, action: PayloadAction<any>) => {
            state.currentStep = action.payload;
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
        updateQuestionSolutions: (state: any, action: PayloadAction<any>) => {
            const {
                key, ...rest
            } = action.payload;

            state.questions = {
                ...state.questions,
                [key]: {
                    ...rest
                }
            };
        },
        updateAllResponses: (state: any, action: PayloadAction<any>) => {
            state.questions = action.payload;
        },
        updateValidationField: (state: any, action: PayloadAction<any>) => {
            const {
                isFormValid, validatedField
            } = action.payload;
            state.isFormValid = isFormValid;
            state.questionValidationState = validatedField;
        },
        updateFormId: (state: any, action: PayloadAction<any>) => {
            state.formId = action.payload;
        },
        validateQuestionFields: (state: any, action: PayloadAction<any>) => {
            const { isFormValid, questionValidationState } = action.payload;

            state.questionValidationState = questionValidationState;
            state.isFormValid = isFormValid;
        },
        removeQuestionResponse: (state: any, action: PayloadAction<any>) => {
            const { updatedQuestionState } = action.payload;
            state.questions = { ...updatedQuestionState };
        },
        fireEvent: (state: any, action: PayloadAction<any>) => {
            const { eventName } = action.payload || {};
            eventCreator?.fireEvent(eventName);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(mobileGenerateOTP.pending, (state) => {
            state.isLoading = true;
            state.errorMessage = '';
            // thunkAPI.dispatch(riskForm.actions.fireEvent({ payload: riskFormEvents.RISK_FORM_ENTERED_OTP }));
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
                state.otpVerificationStatus.isVerifyOtpInProcess = true;
                state.errorMessage = '';
            })
            .addCase(verifyOtp.fulfilled, (state, action: any) => {
                const response = action.payload;
                if (response) {
                    state.isLoading = false;
                    state.otpVerificationStatus.isVerifyOtpInProcess = false;
                    state.otpVerificationStatus.isOtpVerified = true;
                    state.token.authToken = response.auth_token;
                }
            })
            .addCase(verifyOtp.rejected, (state, action: any) => {
                state.isLoading = false;
                state.errorMessage = typeof action.payload === 'string' ? action.payload : 'Unable to process';
            })
            .addCase(getRiskEscaltionForm.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRiskEscaltionForm.fulfilled, (state, action:any) => {
                const {
                    questionnaire_screen: questionnaireScreen,
                    intro_screen: introScreen,
                    outro_screen: outroScreen
                } = action.payload as {
                    questionnaire_screen: any;
                    intro_screen: any;
                    outro_screen: any;
                };
                state.isLoading = false;

                state.screens = {
                    questionnaireScreen,
                    introScreen,
                    outroScreen,
                    errorScreen: null,
                };
            })
            .addCase(getRiskEscaltionForm.rejected, (state, action:any) => {
                const { error_screen: errorScreen } = action.payload;
                state.isLoading = false;
                state.screens.errorScreen = errorScreen;
            })
            .addCase(submitEscaltionForm.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(submitEscaltionForm.fulfilled, (state) => {
                state.isLoading = false;
                state.currentStep = 'FINAL_SCREEN';
            })
            .addCase(submitEscaltionForm.rejected, (state, action:any) => {
                state.isLoading = false;
                state.errorMessage = typeof action.payload === 'string' ? action.payload : 'Unable to process request';
            });
    }
});

const {
    onChangeCreditCardEligibilityValue,
    stepChangeAction,
    updateOtp, setErrorMessage, setOtpValueArray, updateCCState, updateQuestionSolutions, updateValidationField, updateFormId, validateQuestionFields,
    removeQuestionResponse, updateAllResponses, fireEvent
} = riskForm.actions;

export {
    onChangeCreditCardEligibilityValue,
    stepChangeAction,
    mobileGenerateOTP, verifyOtp, updateOtp, setErrorMessage, setOtpValueArray, updateCCState,
    getRiskEscaltionForm, updateQuestionSolutions, submitEscaltionForm, updateValidationField, updateFormId, validateQuestionFields,
    removeQuestionResponse, updateAllResponses, fireEvent
};

export default riskForm.reducer;
