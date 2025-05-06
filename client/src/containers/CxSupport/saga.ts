import {
    all, call, delay, put, takeLatest,
} from 'redux-saga/effects';
import { CX_SUPPORT_URL } from '../../Api/ApiRoutes';

import { clientApiWrapper } from '../../utils';

import {
    GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
    UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
} from './constants';

function* getCxSupportFeedbackVerifyStatus(action: any) {
    try {
        /**
         * delay to show the proper loader for sometime incase response is coming in few ms
         * kept it before making the API call so that it happens for both success and error cases
         */
        yield delay(1000);

        const data = yield call(
            [clientApiWrapper, clientApiWrapper.post],
            `${CX_SUPPORT_URL}/verify-feedback`, action.payload,
        );

        yield put({
            type: UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
            payload: { issueResolutionFeedback: 'error' },
        });
    }
}

function* cxSupportSaga() {
    yield all([
        takeLatest(GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS, getCxSupportFeedbackVerifyStatus),
    ]);
}

export default cxSupportSaga;
