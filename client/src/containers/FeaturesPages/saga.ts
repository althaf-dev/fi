/**
 * @file FeaturePage Saga
 */
import {
    all, call, put, takeLatest, select, delay,
} from 'redux-saga/effects';

import { USS_DETAILS_ENDPOINT, USS_COLLECTIONS_ENDPOINT } from '../../Api/ApiRoutes';

import { clientApiWrapper } from '../../utils';

import { selectCollectionCache } from './selectors';
import {
    GET_US_STOCKS_DETAILS, UPDATE_US_STOCKS_DETAILS, GET_US_STOCKS_COLLECTION_LIST, UPDATE_US_STOCKS_COLLECTION_LIST,
    GET_US_STOCKS_COLLECTION_DETAILS, UPDATE_US_STOCKS_COLLECTION_DETAILS, UPDATE_COLLECTION_CACHE,
} from './constants';

function* getUSStocksDetailsSaga(action: any) {
    const { collectionId } = action.payload;

    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${USS_DETAILS_ENDPOINT}?collectionId=${collectionId}`,
        );

        yield put({ type: UPDATE_US_STOCKS_DETAILS, payload: { ...response.data, collectionId } });
    } catch (e) {
        yield put({ type: UPDATE_US_STOCKS_DETAILS, payload: {} });
    }
}

function* getUSStocksCollectionListSaga() {
    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${USS_COLLECTIONS_ENDPOINT}`,
        );

        yield put({ type: UPDATE_US_STOCKS_COLLECTION_LIST, payload: response.data });
    } catch (e) {
        yield put({ type: UPDATE_US_STOCKS_COLLECTION_LIST, payload: [] });
    }
}

function* getUSStocksCollectionDetailsSaga(action: any) {
    const { collectionId } = action.payload;

    try {
        const cache = yield select(selectCollectionCache);

        const cacheKey = `${USS_DETAILS_ENDPOINT}?collectionId=${collectionId}`;

        let response = cache[cacheKey];

        if (!response) {
            // to show progress loader on collection screen
            yield delay(500);

            response = yield call(
                [clientApiWrapper, clientApiWrapper.get],
                `${USS_DETAILS_ENDPOINT}?collectionId=${collectionId}`,
            );

            yield put({ type: UPDATE_COLLECTION_CACHE, payload: { key: cacheKey, value: response } });
        }

        yield put({ type: UPDATE_US_STOCKS_COLLECTION_DETAILS, payload: { ...response.data, collectionId } });
    } catch (e) {
        yield put({ type: UPDATE_US_STOCKS_COLLECTION_DETAILS, payload: {} });
    }
}

// main US Stocks feature page watcher saga
function* usStocksDetailsWatcherSaga() {
    yield all(
        [
            yield takeLatest(GET_US_STOCKS_DETAILS, getUSStocksDetailsSaga),
            yield takeLatest(GET_US_STOCKS_COLLECTION_LIST, getUSStocksCollectionListSaga),
            yield takeLatest(GET_US_STOCKS_COLLECTION_DETAILS, getUSStocksCollectionDetailsSaga),
        ],
    );
}

export default usStocksDetailsWatcherSaga;
