import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';

import { clientApiWrapper } from '../../utils';
import { FAQ_URL } from '../../Api';

import {
    GET_FAQ_DATA, UPDATE_FAQ_DATA, GET_CATEGORIES_DATA, UPDATE_CATEGORIES_DATA,
    GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY, UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY,
    GET_RELATED_FAQS_DATA, UPDATE_RELATED_FAQS_DATA,
} from './constants';

function* getFaqData() {
    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${FAQ_URL}/all`,
        );

        yield put({ type: UPDATE_FAQ_DATA, payload: response.data });
    } catch (e) {
        yield put({ type: UPDATE_FAQ_DATA, payload: {} });
    }
}

function* getCategoriesData() {
    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${FAQ_URL}/categories`,
        );

        // delay to show the proper loader for sometime incase response is coming in few ms
        // comment out to check if we have any page speed improvements
        // yield delay(1000);

        yield put({ type: UPDATE_CATEGORIES_DATA, payload: response });
    } catch (e) {
        yield put({ type: UPDATE_CATEGORIES_DATA, payload: [] });
    }
}

function* getFoldersAndArticlesForCategory(action: any) {
    const { categoryId } = action.payload;

    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${FAQ_URL}/category-details?categoryId=${categoryId}`,
        );

        // delay to show the proper loader for sometime incase response is coming in few ms
        // comment out to check if we have any page speed improvements
        // yield delay(1000);

        yield put({ type: UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY, payload: response });
    } catch (e) {
        yield put({ type: UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY, payload: {} });
    }
}

function* getRelatedFaqsData(action: any) {
    const { faqId } = action.payload;

    try {
        const response = yield call(
            [clientApiWrapper, clientApiWrapper.get],
            `${FAQ_URL}/related-faqs?faqId=${faqId}`,
        );

        // delay to show the proper loader for sometime incase response is coming in few ms
        // comment out to check if we have any page speed improvements
        // yield delay(1000);

        yield put({ type: UPDATE_RELATED_FAQS_DATA, payload: response });
    } catch (e) {
        yield put({ type: UPDATE_RELATED_FAQS_DATA, payload: [] });
    }
}

// main faq watcher saga
function* faqWatcherSaga() {
    yield all(
        [
            yield takeLatest(GET_FAQ_DATA, getFaqData),
            yield takeLatest(GET_CATEGORIES_DATA, getCategoriesData),
            yield takeLatest(GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY, getFoldersAndArticlesForCategory),
            yield takeLatest(GET_RELATED_FAQS_DATA, getRelatedFaqsData),
        ],
    );
}

export default faqWatcherSaga;
