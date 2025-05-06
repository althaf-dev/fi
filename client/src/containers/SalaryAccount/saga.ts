import { all, call, put, takeLatest } from 'redux-saga/effects';

import { clientApiWrapper } from '../../utils';
import { GOOGLE_SHEET_URL } from '../../Api';

import { SET_EMPLOYER_DATA_ON_GOOGLE_SHEET } from './constant';

function* setEmployerDataOnGoogleSheet(action) {
    const { data } = action.payload;

    try {
        yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${GOOGLE_SHEET_URL}/employer-data`, data,
        );

        // yield put({ type: SET_GOOGLE_SHEET_DATA, payload: response });
    } catch (e) {
        // yield put({ type: SET_GOOGLE_SHEET_DATA, payload: [] });
    }
}

function* salaryAccountWatcherSaga() {
    yield all(
        [
            yield takeLatest(SET_EMPLOYER_DATA_ON_GOOGLE_SHEET, setEmployerDataOnGoogleSheet),
        ],
    );
}

export default salaryAccountWatcherSaga;
