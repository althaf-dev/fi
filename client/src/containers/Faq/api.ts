import { callApi, FAQ_URL } from '../../Api';

const getAllFaqUrl = `${FAQ_URL}/all`;

const getAllFaqApi = (params: {}) => {
    return callApi(getAllFaqUrl, 'GET', null, null, params);
};

export { getAllFaqApi };
