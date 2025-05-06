const axios = require('axios');

const { success, error } = require('../../utils/ResponseWrapper');

const API_DOMAIN = process.env.VENDOR_NOTIFICATION_GATEWAY_SERVICE_PATH;
const UNSUBSCRIBE_ENDPOINT = `${API_DOMAIN}/email/unsubscribe`;
const GET_PREFERENCES_ENDPOINT = `${UNSUBSCRIBE_ENDPOINT}/areas`;

const postPreferences = async (req, res, next) => {
    // console.log(req);
    const { user_id, source, areas } = req.body;

    try {
        axios.post(UNSUBSCRIBE_ENDPOINT,
            {
                user_id,
                source,
                areas,
            }).then((response) => {
            success(res, response.data);
        }).catch(() => {
            error(res,
                null,
                400,
                'An error occurred while trying to unsubscribe. Please try again later.');
        });
    } catch (err) {
        next({
            description: 'An Error occurred while unsubscribing for the user',
            message: 'Failed to unsubscribe user',
            ctrl: 'unsubscribe',
            fn: 'postPreferences',
        });
    }
};

const getPreferences = async (req, res, next) => {
    const { user_id, source } = req.query;

    try {
        axios.get(GET_PREFERENCES_ENDPOINT,
            {
                params: {
                    user_id,
                    source,
                },
            }).then((response) => {
            success(res, response.data);
        }).catch(() => {
            error(res,
                null,
                400,
                'An Error occurred while unsubscribing for the user');
        });
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to unsubscribe user',
            ctrl: 'unsubscribe',
            fn: 'postPreferences',
        });
    }
};

module.exports = {
    postPreferences,
    getPreferences,
};
