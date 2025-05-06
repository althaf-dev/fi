/**
 * @file Salary Account SignUp container saga
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SALARY_ACCOUNT_SIGNUP_URL } from '../../Api/ApiRoutes';
import { clientApiWrapper } from '../../utils';

import {
    IEmailGenerateOtpCodeAction,
    IEmailVerifyOtpCodeAction,
    IMobileGenerateOtpCodeAction,
    IMobileVerifyOtpCodeAction,
} from './actions';
import {
    MOBILE_GENERATE_OTP_CODE,
    MOBILE_GENERATE_OTP_CODE_SUCCESS,
    MOBILE_GENERATE_OTP_CODE_FAILED,
    MOBILE_VERIFY_OTP_CODE,
    MOBILE_VERIFY_OTP_CODE_SUCCESS,
    MOBILE_VERIFY_OTP_CODE_FAILED,
    EMAIL_GENERATE_OTP_CODE_SUCCESS,
    EMAIL_GENERATE_OTP_CODE_FAILED,
    EMAIL_VERIFY_OTP_CODE_SUCCESS,
    EMAIL_VERIFY_OTP_CODE_FAILED,
    EMAIL_VERIFY_OTP_CODE,
    EMAIL_GENERATE_OTP_CODE,
    SEND_FI_APP_LINK_TO_WHATSAPP,
    SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS,
    SEND_FI_APP_LINK_TO_WHATSAPP_FAILED,
} from './constants';
import { constructPayloadWithCommonInfo } from './utils';

// generate mobile otp code
function* mobileGenerateOTP(action: IMobileGenerateOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${SALARY_ACCOUNT_SIGNUP_URL}/generateMobileOtp`,
            constructPayloadWithCommonInfo(action.payload),
        );
        yield put({
            type: MOBILE_GENERATE_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: MOBILE_GENERATE_OTP_CODE_FAILED,
            payload: error,
        });
    }
}

// verify email
function* mobileVerifyOTP(action: IMobileVerifyOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${SALARY_ACCOUNT_SIGNUP_URL}/verifyMobileOtp`,
            constructPayloadWithCommonInfo(action.payload),
        );

        yield put({
            type: MOBILE_VERIFY_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: MOBILE_VERIFY_OTP_CODE_FAILED,
            payload: error,
        });
    }
}

// generate email otp code
function* emailGenerateOTP(action: IEmailGenerateOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${SALARY_ACCOUNT_SIGNUP_URL}/generateEmailOtp`,
            constructPayloadWithCommonInfo(action.payload),
        );
        yield put({
            type: EMAIL_GENERATE_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: EMAIL_GENERATE_OTP_CODE_FAILED,
            payload: error,
        });
    }
}

// verify email
function* emailVerifyOTP(action: IEmailVerifyOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${SALARY_ACCOUNT_SIGNUP_URL}/verifyEmailOtp`,
            constructPayloadWithCommonInfo(action.payload),
        );

        yield put({
            type: EMAIL_VERIFY_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: EMAIL_VERIFY_OTP_CODE_FAILED,
            payload: error,
        });
    }
}

// send app link to whatsapp
function* sendAppLinkToWhatsapp(action: IEmailVerifyOtpCodeAction) {
    try {
        yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${SALARY_ACCOUNT_SIGNUP_URL}/sendAppLinKToUser`,
            constructPayloadWithCommonInfo(action.payload),
        );

        yield put({
            type: SEND_FI_APP_LINK_TO_WHATSAPP_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: SEND_FI_APP_LINK_TO_WHATSAPP_FAILED,
            payload: error,
        });
    }
}

// main salary account signUp watcher saga
function* salaryAccountSignUpSaga() {
    yield all([
        takeLatest(MOBILE_GENERATE_OTP_CODE, mobileGenerateOTP),
        takeLatest(MOBILE_VERIFY_OTP_CODE, mobileVerifyOTP),
        takeLatest(EMAIL_GENERATE_OTP_CODE, emailGenerateOTP),
        takeLatest(EMAIL_VERIFY_OTP_CODE, emailVerifyOTP),
        takeLatest(SEND_FI_APP_LINK_TO_WHATSAPP, sendAppLinkToWhatsapp),
    ]);
}

export default salaryAccountSignUpSaga;
