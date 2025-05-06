import { all, call, takeLatest } from 'redux-saga/effects';

import { clientApiWrapper } from '../../utils';
import { GOOGLE_SHEET_URL } from '../../Api';

import { SET_HOUSING_DATA_ON_GOOGLE_SHEET } from './constant';

function* setHousingDataOnGoogleSheet(action) {
    const { data } = action.payload;

    try {
        yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${GOOGLE_SHEET_URL}/housing-data`, data,
        );
    } catch (error) {
        // TODO: need to add toast here
        console.error(error);
    }
}

function* HousingProjectWatcherSaga() {
    yield all(
        [
            yield takeLatest(SET_HOUSING_DATA_ON_GOOGLE_SHEET, setHousingDataOnGoogleSheet),
        ],
    );
}

export default HousingProjectWatcherSaga;
