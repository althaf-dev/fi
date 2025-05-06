/**
 * Credit Card Waitlist sagas
 */

import {
    all, call, put, takeLatest, delay,
} from 'redux-saga/effects';

import { CREDIT_CARD_WAITLIST_URL } from '../../Api/ApiRoutes';
import { clientApiWrapper } from '../../utils';

import {
    ICreateUserAction, IMobileGenerateOtpCodeAction, IMobileVerifyOtpCodeAction, IGetUserDetailsAction,
    IUpdateUserDetailsAction,
} from './actions';
import {
    CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, MOBILE_GENERATE_OTP_CODE, MOBILE_GENERATE_OTP_CODE_SUCCESS,
    MOBILE_GENERATE_OTP_CODE_FAILURE, MOBILE_VERIFY_OTP_CODE, MOBILE_VERIFY_OTP_CODE_SUCCESS, MOBILE_VERIFY_OTP_CODE_FAILURE,
    GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE, UPDATE_USER_DETAILS, UPDATE_USER_DETAILS_SUCCESS,
    UPDATE_USER_DETAILS_FAILURE, URL_MAP,
} from './constants';
import { constructPayloadWithCommonInfo } from './utils';

function* mobileGenerateOTP(action: IMobileGenerateOtpCodeAction) {
    const { payload } = action;
    try {
        const generateOtpResponse = yield call([clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_WAITLIST_URL}/${URL_MAP.GENERATE_OTP}`,
            constructPayloadWithCommonInfo(payload));
        yield put({ type: MOBILE_GENERATE_OTP_CODE_SUCCESS, payload: generateOtpResponse });
    } catch (error) {
        yield put({ type: MOBILE_GENERATE_OTP_CODE_FAILURE, payload: error });
    }
}

/**
* Create user saga based on mobile no. that will be used on later step to decide
* if it is existing user or not
*/
function* createUser(action: ICreateUserAction) {
    const { payload } = action;

    try {
        const response = yield call([clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_WAITLIST_URL}/${URL_MAP.CREATE_USER}`,
            constructPayloadWithCommonInfo(payload));
        yield put({ type: CREATE_USER_SUCCESS, payload: response });
        yield call(mobileGenerateOTP, action);
    } catch (error) {
        yield put({ type: CREATE_USER_FAILURE, payload: error });
    }
}

function* mobileVerifyOTP(action: IMobileVerifyOtpCodeAction) {
    const { payload } = action;

    // to show progress loader on otp verfication screen
    yield delay(1000);

    try {
        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_WAITLIST_URL}/${URL_MAP.VERIFY_OTP}`,
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

function* getUserDetails(action: IGetUserDetailsAction) {
    const { payload } = action;

    try {
        const data = yield call([clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_WAITLIST_URL}/${URL_MAP.GET_USER_DETAILS}`,
            constructPayloadWithCommonInfo(payload));
        yield put({ type: GET_USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: GET_USER_DETAILS_FAILURE, payload: error });
    }
}

function* updateUserDetails(action: IUpdateUserDetailsAction) {
    const { payload } = action;
    try {
        const data = yield call([clientApiWrapper, clientApiWrapper.post],
            `${CREDIT_CARD_WAITLIST_URL}/${URL_MAP.UPDATE_USER_DETAILS}`,
            constructPayloadWithCommonInfo(payload));
        yield put({ type: UPDATE_USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: UPDATE_USER_DETAILS_FAILURE, payload: error });
    }
}

function* creditCardWaitlistSaga() {
    yield all([
        takeLatest(CREATE_USER, createUser),
        takeLatest(MOBILE_GENERATE_OTP_CODE, mobileGenerateOTP),
        takeLatest(MOBILE_VERIFY_OTP_CODE, mobileVerifyOTP),
        takeLatest(GET_USER_DETAILS, getUserDetails),
        takeLatest(UPDATE_USER_DETAILS, updateUserDetails),

    ]);
}

export default creditCardWaitlistSaga;
