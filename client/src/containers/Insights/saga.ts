import {
    all, call, put, takeLatest, delay,
} from 'redux-saga/effects';

import {
    GMAIL_GET_STARTED,
    GET_EMAIL_SYNC_STATUS,
    GET_ALREADY_EXIST_EMAIL_SYNC_STATUS,
    GET_INSIGHTS_EMAIL,
    CHECK_ACCESS_STATUS,
    setAuthUrlInsightAction,
    updateEmailSyncStatusAction,
    updateSyncModal,
    updateActiveStateInsightAction,
    updateRedirectUrlAction,
    setInsightsEmail,
    UNLINK_ACCOUNT,
    exhaustedInsightsAction,
} from './actions';
import {
    getAuthUrlApi,
    getAccessStatusApi,
    getEmailSyncStatusApi,
    getInsightEmailApi,
    unlinkApi,
} from './api';
import { isNativeAppFlow } from './utils';

export function* handleGmailGetStarted() {
    try {
        const data = yield call(getAuthUrlApi);

        // If valid auth url received, set url and make exhausted insights false
        if (data && data.authUrl) {
            yield put(setAuthUrlInsightAction(data.authUrl));
            yield put(exhaustedInsightsAction(false));
        }

        // if rate limit exceeded, make exhausted insights true
        if (data && data.description === 'Too many requests, please try again after sometime') {
            yield put(exhaustedInsightsAction(true));
        }
    } catch (error) {
        console.error('*handleGmailGetStarted: ', error);
    }
}

export function* getEmailSyncStatus() {
    try {
        // If user is coming from android or ios app, no need to sync email
        // TODO: Move return code to component level
        if (isNativeAppFlow()) return;

        const email = yield call(getInsightEmailApi);

        if (email.emailId && email.emailId.length) {
            yield put(
                setInsightsEmail({
                    success: true,
                    emailId: email.emailId[email.emailId.length - 1],
                }),
            );
            const data = yield call(getEmailSyncStatusApi);

            /* actual code for WEB platform
            yield put(updateEmailSyncStatusAction(data.progress));
            if (data.progress === 100) {
                yield delay(2000);
                yield put(updateActiveStateInsightAction(1));
            } else {
                yield put(updateSyncModal(true));
            }
            */

            // HACK: to show progress loader on email sync modal
            yield put(updateEmailSyncStatusAction(20));
            yield put(updateSyncModal(true));
            yield delay(1000);
            yield put(updateEmailSyncStatusAction(50));
            yield delay(2000);
            yield put(updateEmailSyncStatusAction(80));
            yield delay(2000);
            yield put(updateEmailSyncStatusAction(data.progress));
            yield delay(1000);
            yield put(updateActiveStateInsightAction(1));
        } else {
            yield put(setInsightsEmail({ success: false }));
            yield put(updateActiveStateInsightAction(null));
        }
    } catch (error) {
        console.error('*getEmailSyncStatus: ', error);
    }
}

export function* getAlreadyExistEmailSyncStatus() {
    try {
        // If user is coming from android or ios app, no need to sync email
        if (isNativeAppFlow()) return;

        const data = yield call(getEmailSyncStatusApi);
        yield put(updateEmailSyncStatusAction(data.progress));
        if (data.progress === 100) {
            yield put(updateActiveStateInsightAction(1));
        } else {
            yield put(updateSyncModal(true));
        }
    } catch (error) {
        console.error('*getAlreadyExistEmailSyncStatus: ', error);
    }
}

export function* getInsightsEmail() {
    try {
        // If user is coming from android or ios app, no need to sync email
        if (isNativeAppFlow()) return;

        const email = yield call(getInsightEmailApi);

        if (email.emailId && email.emailId.length) {
            yield put(
                setInsightsEmail({
                    success: true,
                    emailId: email.emailId[email.emailId.length - 1],
                }),
            );
        } else {
            yield put(setInsightsEmail({ success: false }));
            yield put(updateActiveStateInsightAction(null));
        }
    } catch (error) {
        console.error('*getInsightsEmail: ', error);
    }
}

// this functionality is not getting used
export function* unlinkSpendInfoAccount() {
    try {
        yield call(unlinkApi);
    } catch (error) {
        console.error('*unlinkSpendInfoAccount: ', error);
    }
}

export function* checkAccessStatus() {
    try {
        // If user is coming from android or ios app, no need to check access status
        // TODO: Move return code to component level
        if (isNativeAppFlow()) return;

        const response = yield call(getAccessStatusApi);

        if (response.accessToken && response.accessStatus) {
            switch (response.accessStatus) {
                case 'ACCESS_STATUS_EARLY_ACCESS':
                case 'ACCESS_STATUS_IOS_EARLY_ACCESS':
                case 'ACCESS_STATUS_ONBOARDING_STARTED':
                case 'ACCESS_STATUS_ONBOARDED_WITH_DIFFERENT_PHONE_NUM':
                    // yield put(updateWaitlistUserFlow('EARLY_ACCESS_CLUB'));
                    break;

                case 'ACCESS_STATUS_WAITLIST':
                    // yield put(updateWaitlistUserFlow('WAITLIST_CLUB'));
                    break;

                default:
                    // yield put(updateWaitlistUserFlow('ERROR_CLUB'));
            }

            // yield put(updateAccessToken(response.accessToken));
        } else {
            yield put(updateRedirectUrlAction('/waitlist/login'));
        }
    } catch (error) {
        console.error('*handleGmailGetStarted: ', error);
    }
}

// watcher saga
function* insightsWatcherSaga() {
    yield all([
        takeLatest(GMAIL_GET_STARTED, handleGmailGetStarted),
        takeLatest(GET_EMAIL_SYNC_STATUS, getEmailSyncStatus),
        takeLatest(GET_ALREADY_EXIST_EMAIL_SYNC_STATUS, getAlreadyExistEmailSyncStatus),
        takeLatest(GET_INSIGHTS_EMAIL, getInsightsEmail),
        takeLatest(CHECK_ACCESS_STATUS, checkAccessStatus),
        takeLatest(UNLINK_ACCOUNT, unlinkSpendInfoAccount),
    ]);
}

export default insightsWatcherSaga;
