import { callApi } from '../../Api';
import { CUSTOMER_AUTH_URL, WAITLIST_URL } from '../../Api/ApiRoutes';

const getEmailVerifyStatusUrl = `${CUSTOMER_AUTH_URL}/verify-email`;
const getNameByUserIdUrl = `${WAITLIST_URL}/user-name`;

const getEmailVerifyStatusApi = (body = {}) => callApi(getEmailVerifyStatusUrl, 'POST', null, body, null);

const getNameByUserIdApi = (params = {}) => callApi(getNameByUserIdUrl, 'GET', null, null, params);

export { getEmailVerifyStatusApi, getNameByUserIdApi };
