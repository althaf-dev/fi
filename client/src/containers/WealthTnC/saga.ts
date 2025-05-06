import { all, call, put, takeLatest } from 'redux-saga/effects';

import { clientApiWrapper } from '../../utils';
import { META_INFO_URL } from '../../Api';

import {
    GET_WEALTH_DATA, UPDATE_WEALTH_DATA,
} from './constants';

function* getWealthTncComplaintsData() {
    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${META_INFO_URL}/wealth/tnc/complaints`,
        );

        yield put({ type: UPDATE_WEALTH_DATA, payload: response });
    } catch (e) {
        yield put({ type: UPDATE_WEALTH_DATA, payload: {} });
    }
}

// main wealth tnc watcher saga
function* wealthTncWatcherSaga() {
    yield all(
        [
            yield takeLatest(GET_WEALTH_DATA, getWealthTncComplaintsData),
        ],
    );
}

export default wealthTncWatcherSaga;
