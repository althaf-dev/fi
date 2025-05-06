import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_EMAIL_VERIFY_STATUS,
    UPDATE_EMAIL_VERIFY_STATUS,
} from './constants';
import { getEmailVerifyStatusApi } from './api';

function* getEmailVerifyStatus(action: any) {
    try {
        const response = yield call(getEmailVerifyStatusApi, action.payload);

        yield put({
            type: UPDATE_EMAIL_VERIFY_STATUS,
            payload: { success: !!response.success },
        });
    } catch (error) {
        console.error('*getEmailVerifyStatus: ', error);
    }
}

function* customerAuthSaga() {
    yield all([
        takeLatest(GET_EMAIL_VERIFY_STATUS, getEmailVerifyStatus),
    ]);
}

export default customerAuthSaga;
