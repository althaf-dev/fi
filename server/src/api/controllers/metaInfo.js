const { getConsulKVInfo } = require('../../utils/consul');

const getWealthTncComplaintsData = async (_, res, next) => {
    try {
        const data = await getConsulKVInfo('meta-info/wealth/tnc/complaints');

        res.send({ data });
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to fetch wealth tnc complaints data',
            ctrl: 'metaInfo',
            fn: 'getWealthTncComplaintsData',
        });
    }
};

const getAppAssistanceData = async (req, res, next) => {
    // Add csrf token only for development env
    let csrfToken;

    // if (process.env.APP_ENV === 'development') {
    //     csrfToken = req.csrfToken();
    // }

    try {
        const data = await getConsulKVInfo('meta-info/app/assistance');

        res.send({
            data: {
                ...data,
                csrfToken,
            },
        });
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to fetch app assistance data',
            ctrl: 'metaInfo',
            fn: 'getAppAssistanceData',
            extraParams: {
                csrfToken,
            },
        });
    }
};

module.exports = {
    getWealthTncComplaintsData,
    getAppAssistanceData,
};
