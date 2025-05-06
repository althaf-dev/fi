const { google } = require('googleapis');

const { getSecret } = require('../secretManager/aws');
const { logger } = require('../utils/logger');

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

const getGmailAuthUrl = async (callback) => {
    let credentials;

    try {
        if (process.env.APP_ENV === 'development') {
            credentials = {
                web: {
                    client_id: process.env.OAUTH_CLIENT_ID,
                    project_id: process.env.OAUTH_PROJECT_ID,
                    auth_uri: process.env.OAUTH_AUTH_URI,
                    token_uri: process.env.OAUTH_TOKEN_URI,
                    auth_provider_x509_cert_url: process.env.OAUTH_CERTS,
                    client_secret: process.env.OAUTH_CLIENT_SECRET,
                    redirect_uris: JSON.parse(process.env.OAUTH_REDIRECT_URIS),
                },
            };
        } else {
            const secretName = process.env.GMAIL_OAUTH_CREDS_SECRET;

            // secretString will be of the form {"web":{}}
            const secretString = await getSecret(secretName);
            credentials = JSON.parse(secretString);
        }

        const { client_secret, client_id, redirect_uris } = credentials.web;
        const oAuth2Client = new google.auth.OAuth2(
            client_id,
            client_secret,
            redirect_uris[0],
        );
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
            prompt: 'consent',
        });

        callback(authUrl);
    } catch (err) {
        logger.log('error', `error while fetching gmail auth url ${err}`, {
            method: 'getGmailAuthUrl',
        });

        callback(null);
    }
};

module.exports = {
    getGmailAuthUrl,
};
