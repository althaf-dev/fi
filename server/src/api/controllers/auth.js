const InsightsAccessInfoClient = require('../../grpc/insights/accessInfo/client');
const { getGmailAuthUrl } = require('../../service/GmailService');

const { handleGrpcResponse } = require('../../utils/GrpcHelper');
const { logger } = require('../../utils/logger');
const { stringToBase64 } = require('../../utils/helpers');
const { getPlatformCookie } = require('../../utils/cookies');
const { PLATFORMS } = require('../../utils/constants');

const getAuthUrl = async (_, res, next) => {
    try {
        await getGmailAuthUrl((authUrl) => {
            if (authUrl) {
                const payload = {
                    authUrl,
                };
                res.status(200).send(payload);
            } else {
                res.status(500).send({
                    message: 'Failed to read auth url credential file',
                });
            }
        });
    } catch (err) {
        next({
            description: err,
            message: 'Failed to fetch gmail auth url',
            ctrl: 'auth',
            fn: 'getAuthUrl',
        });
    }
};

const addEmailAccessInfo = async (req, res) => {
    const { error, code } = req.query;
    const { access_token } = req.cookies;

    const platform = getPlatformCookie(req);

    // default redirect url for any platform
    let redirectUri = '/insights';
    let queryParams = '?';

    // redirect url for WEB platform
    if (platform === PLATFORMS.WEB) {
        queryParams += `src=${stringToBase64(platform)}&`;
        redirectUri += queryParams;

        res.redirect(redirectUri);
        return;
    }

    if (!error && !!code) {
        // Need to send same access token that we get from verify otp
        const requestPayload = {
            access_token,
            auth_token: code,
            client: platform,
        };

        logger.log('info', 'addEmailAccessInfo -> request payload in auth controller', {
            method: 'addEmailAccessInfo',
            hasAccessToken: !!access_token,
            hasAuthToken: !!code,
            platform,
        });

        let apiSuccess = true;

        try {
            const response = await InsightsAccessInfoClient.addEmailAccessInfo(requestPayload, handleGrpcResponse);
            logger.log('info', 'addEmailAccessInfo -> response in auth controller', {
                method: 'addEmailAccessInfo',
                response: JSON.stringify(response),
            });
        } catch (err) {
            logger.log('error', 'addEmailAccessInfo -> error in auth controller', {
                method: 'addEmailAccessInfo',
                error: JSON.stringify(err),
            });

            const { code: errCode } = err;
            queryParams += `code=${errCode}&`;

            apiSuccess = false;
        }

        if (platform !== PLATFORMS.WEB) {
            // if platform is android or ios, user is redirected back to app
            // add if email access info api call was successful or not
            queryParams += `platform=${platform}&success=${apiSuccess}&`;
            redirectUri += queryParams;
        }

        res.redirect(redirectUri);
    } else {
        logger.log('error', 'error in auth controller', {
            method: 'addEmailAccessInfo',
            error,
            platform,
            code,
        });

        res.redirect(redirectUri);
    }
};

module.exports = {
    getAuthUrl,
    addEmailAccessInfo,
};
