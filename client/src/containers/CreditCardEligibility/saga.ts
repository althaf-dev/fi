/**
 * Credit Card Waitlist sagas
 */

import {
    all, call, put, takeLatest, delay,
} from 'redux-saga/effects';

import { CREDIT_CARD_ELIGIBILITY_URL } from '../../Api/ApiRoutes';
import { clientApiWrapper } from '../../utils';

import { IMobileGenerateOtpCodeAction, IMobileVerifyOtpCodeAction } from './actions';
import {
    MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS, MOBILE_GENERATE_OTP_CODE_FAILURE, MOBILE_VERIFY_OTP_CODE,
    MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE, URL_MAP,
} from './constants';
import { constructPayloadWithCommonInfo } from './utils';

function* mobileGenerateOTP(action: IMobileGenerateOtpCodeAction) {
    const { payload } = action;

    try {
        const generateOtpResponse = yield call([clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_ELIGIBILITY_URL}/${URL_MAP.GENERATE_OTP}`,
            constructPayloadWithCommonInfo(payload));
        yield put({ type: MOBILE_GENERATE_OTP_CODE_SUCCESS, payload: generateOtpResponse });
    } catch (error) {
        yield put({ type: MOBILE_GENERATE_OTP_CODE_FAILURE, payload: error });
    }
}

function* mobileVerifyOTP(action: IMobileVerifyOtpCodeAction) {
    const { payload } = action;

    // to show progress loader on otp verfication screen
    yield delay(1000);

    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_ELIGIBILITY_URL}/${URL_MAP.VERIFY_OTP}`,
            constructPayloadWithCommonInfo(payload),
        );

        yield put({
            type: MOBILE_VERIFY_OTP_CODE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: MOBILE_VERIFY_OTP_CODE_FAILURE,
            payload: error,
        });
    }
}

function* creditCardEligibilitySaga() {
    yield all([
        takeLatest(MOBILE_GENERATE_OTP_CODE, mobileGenerateOTP),
        takeLatest(MOBILE_VERIFY_OTP_CODE, mobileVerifyOTP),
    ]);
}

export default creditCardEligibilitySaga;
