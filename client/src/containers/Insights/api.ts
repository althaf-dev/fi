import { callApi } from '../../Api';
import { AUTH_URL, INSIGHTS_URL, WAITLIST_URL } from '../../Api/ApiRoutes';

const INSIGHTS_AUTH_URL = `${AUTH_URL}/auth-url`;
const INSIGHTS_ACCESS_STATUS_URL = `${WAITLIST_URL}/access-status`;
const INSIGHTS_EMAIL_SYNC_STATUS_URL = `${INSIGHTS_URL}/mail-sync`;
const INSIGHTS_SPEND_INFO_URL = `${INSIGHTS_URL}/spend-info`;
const INSIGHTS_EMAIL_URL = `${INSIGHTS_URL}/email`;

const getAuthUrlApi = () => callApi(INSIGHTS_AUTH_URL, 'GET', null, null, {});

const getAccessStatusApi = () => callApi(INSIGHTS_ACCESS_STATUS_URL, 'GET', null, null, {});

const getEmailSyncStatusApi = () => callApi(INSIGHTS_EMAIL_SYNC_STATUS_URL, 'GET', null, null, {});

const getInsightSpendInfoApi = (payload) => callApi(INSIGHTS_SPEND_INFO_URL, 'GET', null, null, payload);

const getInsightEmailApi = () => callApi(INSIGHTS_EMAIL_URL, 'GET', null, null, {});

const unlinkApi = () => callApi(INSIGHTS_SPEND_INFO_URL, 'DELETE', null, null, {});

export {
    getAuthUrlApi,
    getAccessStatusApi,
    getEmailSyncStatusApi,
    getInsightEmailApi,
    getInsightSpendInfoApi,
    unlinkApi,
};
