/**
 * @file B2BSalaryAccountHR containers sagas.
 */

import { all, call, takeLatest } from 'redux-saga/effects';

import { clientApiWrapper } from '../../utils';
import { GOOGLE_SHEET_URL } from '../../Api';

import { SET_EMPLOYER_DATA_ON_GOOGLE_SHEET } from './constant';

function* setEmployerDataOnGoogleSheet(action) {
    const { payload } = action;

    try {
        yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${GOOGLE_SHEET_URL}/salary-b2b-data`, payload,
        );
    } catch (error) {
        console.error(error);
    }
}

function* salaryAccountHRWatcherSaga() {
    yield all(
        [
            yield takeLatest(SET_EMPLOYER_DATA_ON_GOOGLE_SHEET, setEmployerDataOnGoogleSheet),
        ],
    );
}

export default salaryAccountHRWatcherSaga;
