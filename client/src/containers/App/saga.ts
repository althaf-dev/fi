import { all, call, put, takeLatest } from 'redux-saga/effects';

import { clientApiWrapper } from '../../utils';
import { META_INFO_URL, CONSUL_URL } from '../../Api';

import {
    GET_APP_ASSISTANCE_DATA, SET_APP_ASSISTANCE_DATA, GET_DYNAMIC_CONSUL_DATA, SET_DYNAMIC_CONSUL_DATA,
} from './constants';

const setCSRFMetaTag = (csrfToken) => {
    const meta = document.createElement('meta');
    meta.name = 'csrf-token';
    meta.content = csrfToken;

    document.getElementsByTagName('head')[0].appendChild(meta);
};

function* getAppAssistanceData() {
    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${META_INFO_URL}/app/assistance`,
        );

        /**
         * only for development set up, we need to set csrf token manually in the HTML
         * for prod set up, HTML is served directly from server and hence token is set at server side
         */
        const { csrfToken } = response.data;
        if (csrfToken) {
            setCSRFMetaTag(csrfToken);
        }

        yield put({ type: SET_APP_ASSISTANCE_DATA, payload: response });
    } catch (e) {
        yield put({ type: SET_APP_ASSISTANCE_DATA, payload: {} });

        // only for development,  handled from server side for prod
        if (e.csrfToken) {
            setCSRFMetaTag(e.csrfToken);
        }
    }
}

function* getDynamicConsulData(action) {
    const { path } = action.payload;

    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${CONSUL_URL}?path=${path}`,
        );

        yield put({ type: SET_DYNAMIC_CONSUL_DATA, payload: { path, data: response } });
    } catch (e) {
        yield put({ type: SET_DYNAMIC_CONSUL_DATA, payload: {} });
    }
}

// main app saga
function* appSaga() {
    yield all(
        [
            yield takeLatest(GET_APP_ASSISTANCE_DATA, getAppAssistanceData),
            yield takeLatest(GET_DYNAMIC_CONSUL_DATA, getDynamicConsulData),
        ],
    );
}

export default appSaga;
