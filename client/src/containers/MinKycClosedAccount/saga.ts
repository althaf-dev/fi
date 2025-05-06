/**
 * @file Min Kyc Account Closure saga
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import { MIN_KYC_CLOSED_ACCOUNT_URL } from '../../Api/ApiRoutes';
import { clientApiWrapper } from '../../utils';
import {
    ADD_ALTERNATE_ACCOUNT,
    ADD_ALTERNATE_ACCOUNT_FAILED,
    ADD_ALTERNATE_ACCOUNT_SUCCESS,
    GENERATE_OTP_CODE,
    GENERATE_OTP_CODE_FAILED,
    GENERATE_OTP_CODE_SUCCESS,
    VERIFY_OTP_CODE,
    VERIFY_OTP_CODE_FAILED,
    VERIFY_OTP_CODE_SUCCESS,
    VERIFY_PAN,
    VERIFY_PAN_FAILED,
    VERIFY_PAN_SUCCESS,
} from './constants';
import { IAddAlternateAccountAction, IGenerateOtpCodeAction, IVerifyOtpCodeAction } from './actions';
import { constructPayloadWithCommonInfo } from './utils';

// generate otp code
function* generateOTP(action: IGenerateOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${MIN_KYC_CLOSED_ACCOUNT_URL}/generate-otp`,
            constructPayloadWithCommonInfo(action.payload),
        );
        yield put({
            type: GENERATE_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: GENERATE_OTP_CODE_FAILED,
            payload: error,
        });
    }
}

// verify otp
function* verifyOTP(action: IVerifyOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${MIN_KYC_CLOSED_ACCOUNT_URL}/verify-otp`,
            constructPayloadWithCommonInfo(action.payload),
        );

        yield put({
            type: VERIFY_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: VERIFY_OTP_CODE_FAILED,
            payload: error,
        });
    }
}

// verify pan
function* verifyPan(action: IVerifyOtpCodeAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${MIN_KYC_CLOSED_ACCOUNT_URL}/verify-pan`,
            constructPayloadWithCommonInfo(action.payload),
        );

        yield put({
            type: VERIFY_PAN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: VERIFY_PAN_FAILED,
            payload: error,
        });
    }
}

// add alternate account
function* addAlternateAccount(action: IAddAlternateAccountAction) {
    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${MIN_KYC_CLOSED_ACCOUNT_URL}/add-alternate-account`,
            constructPayloadWithCommonInfo(action.payload),
        );

        yield put({
            type: ADD_ALTERNATE_ACCOUNT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: ADD_ALTERNATE_ACCOUNT_FAILED,
            payload: error,
        });
    }
}

function* minKycAccountClosureSaga() {
    yield all([
        takeLatest(GENERATE_OTP_CODE, generateOTP),
        takeLatest(VERIFY_OTP_CODE, verifyOTP),
        takeLatest(VERIFY_PAN, verifyPan),
        takeLatest(ADD_ALTERNATE_ACCOUNT, addAlternateAccount),
    ]);
}

export default minKycAccountClosureSaga;
