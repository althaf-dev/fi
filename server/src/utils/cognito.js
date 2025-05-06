const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const jwkToPem = require('jwk-to-pem');
const { getSecret } = require('../secretManager/aws');
const { base64ToAscii } = require('./helpers');

const AWS_REGION = 'ap-south-1';
const HOUR_IN_SECONDS = 3600;

const initialiseCognitoCredentials = async (app) => {
    let credentials;

    // if local env
    if (process.env.APP_ENV === 'development') {
        // get cognito credentials from env variables
        credentials = {
            COGNITO_WEB_CLIENT_ID: process.env.COGNITO_WEB_CLIENT_ID,
            COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
            COGNITO_CLIENT_SECRET: process.env.COGNITO_CLIENT_SECRET,
            COGNITO_PUBLIC_KEYS_URL: process.env.COGNITO_PUBLIC_KEYS_URL,
            COGNITO_PUBLIC_KEYS: process.env.COGNITO_PUBLIC_KEYS,
            COGNITO_ISSUER_URL: process.env.COGNITO_ISSUER_URL,
            COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
        };
    } else {
        // get cognito credentials from secret manager
        const secretName = process.env.VANILLA_COGNITO_CREDS_SECRET;
        const secretString = await getSecret(secretName);
        credentials = JSON.parse(secretString);
    }

    // eslint-disable-next-line no-param-reassign
    app.locals.cognitoCreds = credentials;
};

const getMatchingPublicKey = (kid, cognitoCreds) => {
    const cognitoPublicKeys = JSON.parse(cognitoCreds.COGNITO_PUBLIC_KEYS).keys;
    const matchingKey = cognitoPublicKeys.find((row) => row.kid === kid);

    if (matchingKey) {
        return jwkToPem(matchingKey);
    }

    const err = new Error('Authentication error');
    err.description = 'Could not find matching KID for JWT token';
    throw err;
};

const verifyAndDecodeJwtToken = (token, publicKey, creds) => {
    const { COGNITO_ISSUER_URL, COGNITO_USER_POOL_ID, COGNITO_WEB_CLIENT_ID } = creds;

    const verificationOptions = {
        issuer: `${COGNITO_ISSUER_URL}/${COGNITO_USER_POOL_ID}`,
        audience: COGNITO_WEB_CLIENT_ID,
        maxAge: HOUR_IN_SECONDS,
    };

    return jwt.verify(token, publicKey, { algorithms: ['RS256'], ...verificationOptions });
};

const verifyIdToken = (idToken, creds) => {
    if (idToken === undefined || idToken === 'undefined') {
        const err = new Error('Authentication error');
        err.description = 'JWT Token is undefined';
        throw err;
    }

    // Step 1: Confirm the structure of the JWT
    const jwtParts = idToken.split('.');
    if (jwtParts.length !== 3) {
        const err = new Error('Authentication error');
        err.description = 'Invalid JWT structure';
        throw err;
    }

    const header = JSON.parse(base64ToAscii(jwtParts[0]));
    const { kid } = header;
    const publicKey = getMatchingPublicKey(kid, creds);

    // Step 2 & 3: Validate the JWT signature & Verify the claims
    const decodedToken = verifyAndDecodeJwtToken(idToken, publicKey, creds);

    // Step 4: Check the token_use claim
    if (decodedToken.token_use !== 'id') {
        const err = new Error('Authentication error');
        err.description = 'Invalid JWT Token type';
        throw err;
    }

    return decodedToken;
};

// Reference - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#signUp-property
const signUp = async (params) => {
    const reqParams = {
        ClientId: params.clientId,
        Password: params.password,
        Username: params.username,
        UserAttributes: params.userAttributes,
    };

    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
        region: AWS_REGION,
    });

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.signUp(reqParams, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Reference - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#listUsers-property
const listUsers = async (params) => {
    const reqParams = {
        UserPoolId: params.userPoolId,
        Filter: params.filter,
    };

    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
        region: AWS_REGION,
    });

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.listUsers(reqParams, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Reference - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#initiateAuth-property
const initiateAuth = async (params) => {
    const reqParams = {
        AuthFlow: params.authFlow,
        ClientId: params.clientId,
        AuthParameters: params.authParams,
    };

    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
        region: AWS_REGION,
    });

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.initiateAuth(reqParams, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Reference - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#respondToAuthChallenge-property
const respondToAuthChallenge = async (params) => {
    const reqParams = {
        ChallengeName: params.challengeName,
        ClientId: params.clientId,
        ChallengeResponses: params.challengeResponses,
        Session: params.session,
    };

    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
        region: AWS_REGION,
    });

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.respondToAuthChallenge(reqParams, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

module.exports = {
    getMatchingPublicKey,
    initialiseCognitoCredentials,
    signUp,
    listUsers,
    initiateAuth,
    respondToAuthChallenge,
    verifyIdToken,
};
