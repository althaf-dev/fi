const jwt = require('jsonwebtoken');
const { getMatchingPublicKey } = require('./cognito');
const { base64ToAscii } = require('./helpers');
const { logger } = require('./logger');

const HOUR_IN_SECONDS = 3600;
// const HOUR_IN_MILLISECONDS = 3600000;

const TOKEN_ERRORS = {
    TOKEN_MISSING: 'token_missing',
    CLIENT_ID_MISMATCH: 'client_id_mismatch',
    TOKEN_EXPIRED: 'token_expired',
    TOKEN_INVALID: 'token_invalid',
    STRUCTURE_MISMATCH: 'structure_mismatch',
    TOKEN_TYPE_INVALID: 'token_type_invalid',
};

const verifyAndDecodeJwtToken = (token, options, cognitoCreds) => {
    const jwtParts = token.split('.');
    const header = JSON.parse(base64ToAscii(jwtParts[0]));
    const { kid } = header;
    const publicKey = getMatchingPublicKey(kid, cognitoCreds);
    return jwt.verify(token, publicKey, { algorithms: ['RS256'], ...options });
};

// https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html
const verifyIdToken = (idToken, cognitoCreds) => {
    if (idToken === undefined || idToken === 'undefined') {
        throw new Error(TOKEN_ERRORS.TOKEN_MISSING);
    }
    const splitToken = idToken.split('.');
    // If JWT does not have 3 sections, consider it invalid
    if (splitToken.length !== 3) {
        throw new Error(TOKEN_ERRORS.STRUCTURE_MISMATCH);
    }
    const verificationOptions = {
        issuer: `${cognitoCreds.COGNITO_ISSUER_URL}/${cognitoCreds.COGNITO_USER_POOL_ID}`,
        audience: cognitoCreds.COGNITO_WEB_CLIENT_ID,
        maxAge: HOUR_IN_SECONDS,
    };
    let decodedToken;
    try {
        decodedToken = verifyAndDecodeJwtToken(idToken, verificationOptions, cognitoCreds);
        // check if token type is ID token
        if (decodedToken.token_use !== 'id') {
            throw new Error(TOKEN_ERRORS.TOKEN_TYPE_INVALID);
        }
    } catch (err) {
        logger.log('error', 'error in verifyIdToken', { error: err, method: 'verifyIdToken' });
        if (err.name === jwt.TokenExpiredError.name) {
            throw new Error(TOKEN_ERRORS.TOKEN_EXPIRED);
        } else if (err.message in TOKEN_ERRORS) {
            throw new Error(err.message);
        } else {
            throw new Error(TOKEN_ERRORS.TOKEN_INVALID);
        }
    }
    return decodedToken;
};

const verifyAccessToken = (accessToken, cognitoCreds) => {
    if (accessToken === undefined || accessToken === 'undefined') {
        throw new Error(TOKEN_ERRORS.TOKEN_MISSING);
    }
    const verificationOptions = {
        issuer: `${cognitoCreds.COGNITO_ISSUER_URL}/${cognitoCreds.COGNITO_USER_POOL_ID}`,
        maxAge: HOUR_IN_SECONDS,
    };
    let decodedToken;
    try {
        decodedToken = verifyAndDecodeJwtToken(accessToken, verificationOptions, cognitoCreds);
        // verify client_id in the ticket
        if (decodedToken.client_id !== cognitoCreds.COGNITO_CLIENT_ID) {
            throw TOKEN_ERRORS.CLIENT_ID_MISMATCH;
        }
    } catch (err) {
        logger.log('error', 'error in token helper', { error: err, method: 'verifyAccessToken' });
        if (err.name === jwt.TokenExpiredError.name) {
            throw TOKEN_ERRORS.TOKEN_EXPIRED;
        } else {
            throw TOKEN_ERRORS.TOKEN_INVALID;
        }
    }
    return decodedToken;
};

module.exports = {
    verifyAccessToken,
    verifyIdToken,
    TOKEN_ERRORS,
};
