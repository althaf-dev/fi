/**
 * Community controller for sign in flow
 * Handles logic of creating jwts, verifying jwts, generate & validate community otp, create cognito users for community
 */

const jwt = require('jsonwebtoken');

const WaitlistClient = require('../../grpc/waitlist/client');
const { success } = require('../../utils/ResponseWrapper');
const { logger } = require('../../utils/logger');
const {
    randomIntFromInterval, getRandomString, base64ToString, asciiToBase64,
} = require('../../utils/helpers');
const cognito = require('../../utils/cognito');

// constants
const USER_NOT_ON_WAITLIST_ERR_MSG = 'Thanks for showing interest, but community is currently open to select users only.'
    + ' Please register on waitlist to expedite your chances of getting on community.';

// utils
const handleError = (error) => {
    let statusCode;
    let message;
    let description;

    if (error.description) { // User thrown error will always have description
        statusCode = 400;
        message = error.message;
        description = error.description;
    } else { // If it as an unexpected error, send the error message as description as it does not render on UI
        statusCode = 500;
        message = 'Something went wrong. Please try again later.';
        description = error.message || 'Unexpected error';
    }

    if (error.name === 'JsonWebTokenError') {
        statusCode = 401;
    }

    return {
        statusCode,
        message,
        description,
    };
};

const createNewJwtPayload = (cognitoPayload, decodedVanillaJwt) => {
    const curTimeInUnix = Math.floor(Date.now() / 1000);
    const expTimeInUnix = curTimeInUnix + (60 * 10); // 10 minutes from now

    const userData = {
        id: cognitoPayload.sub,
        email: cognitoPayload.email,
        name: cognitoPayload.preferred_username,
    };

    return {
        v: 'lang:1.0',
        iat: curTimeInUnix,
        exp: expTimeInUnix,
        u: userData,
        st: decodedVanillaJwt.st,
    };
};

// verifies whether incoming login request is from vanilla using the jwt passed on in query params
const verifyJwt = async (req, res, next) => {
    try {
        const { vanillaJwt } = req.query;
        const { cognitoCreds } = req.app.locals;

        // verify vanilla jwt
        jwt.verify(vanillaJwt, cognitoCreds.COGNITO_CLIENT_SECRET, { algorithms: ['HS256'] });

        success(res, { description: 'Valid vanilla JWT' });
    } catch (error) {
        const { statusCode, message, description } = handleError(error);

        next({
            description,
            message,
            ctrl: 'community',
            fn: 'verifyJwt',
            rawError: error,
            statusCode,
        });
    }
};

// creates the redirect url which contains the new jwt user information required by vanilla to complete login into community
const getVanillaRedirectUrl = (vanillaJwt, idToken, cognitoCreds) => {
    if (!vanillaJwt || !idToken) {
        const err = new Error('Mandatory parameters are missing');
        err.description = 'Cannot create redirect url';
        throw err;
    }

    // verify vanilla jwt
    const decodedVanillaJwt = jwt.verify(vanillaJwt, cognitoCreds.COGNITO_CLIENT_SECRET, { algorithms: ['HS256'] });

    // verify cognito jwt
    const decodedCognitoJwt = cognito.verifyIdToken(idToken, cognitoCreds);

    // build new jwt payload
    const newJwtHeader = {
        kid: cognitoCreds.COGNITO_CLIENT_ID,
    };
    const newJwtPayload = createNewJwtPayload(decodedCognitoJwt, decodedVanillaJwt);

    // sign new jwt
    const jwtSecret = cognitoCreds.COGNITO_CLIENT_SECRET;
    const signedJwt = jwt.sign(newJwtPayload, jwtSecret, { header: newJwtHeader });

    return `${decodedVanillaJwt.rurl}#jwt=${signedJwt}`;
};

// verify if the OTP is correct and send back the redirect url to complete sign in flow
const verifyCustomChallenge = async (req, res, next) => {
    try {
        const { session, vanillaJwt } = req.body;
        let { username, otpCode } = req.body;

        if (!username || !otpCode || !session || !vanillaJwt) {
            res.status(400).send({
                message: 'Mandatory parameters are missing',
                description: 'Bad request: missing parameter',
            });

            return;
        }

        username = base64ToString(username);
        otpCode = base64ToString(otpCode);

        // eslint-disable-next-line no-restricted-globals
        if (otpCode.length !== 6 || isNaN(otpCode)) {
            res.status(400).send({
                message: 'Please enter a valid otp code',
                description: 'Bad request: invalid otp',
            });

            return;
        }

        const { cognitoCreds } = req.app.locals;

        const { COGNITO_WEB_CLIENT_ID: clientId } = cognitoCreds;
        const challengeName = 'CUSTOM_CHALLENGE';

        const challengeResponses = {
            USERNAME: username,
            ANSWER: otpCode,
        };

        const user = await cognito.respondToAuthChallenge({
            challengeName, clientId, challengeResponses, session,
        });

        if (!(user.AuthenticationResult && user.AuthenticationResult.IdToken)) {
            const err = new Error('Invalid OTP');
            err.description = 'Did not get AuthenticationResult';
            err.session = user.Session; // Send back the new session token
            throw err;
        }

        const { IdToken: idToken } = user.AuthenticationResult;
        const redirectUrl = getVanillaRedirectUrl(vanillaJwt, idToken, cognitoCreds);

        success(res, { redirectUrl });
        // res.status(302).redirect(redirectUrl);
    } catch (error) {
        const { statusCode, message, description } = handleError(error);

        const { session } = error;
        const extraParams = session ? { session } : {};

        next({
            description,
            message,
            ctrl: 'community',
            fn: 'verifyCustomChallenge',
            rawError: error,
            statusCode,
            extraParams,
        });
    }
};

// step 1 of custom auth flow, check if user's phone num exists in cognito and return the username & session token required in step 2
const signInWithPhoneNum = async (req, res, next) => {
    try {
        let { phoneNum } = req.body;

        if (!phoneNum) {
            res.status(400).send({
                message: 'Mandatory parameters are missing',
                description: 'Bad request: missing parameter',
            });

            return;
        }

        phoneNum = base64ToString(phoneNum);

        // 10 digit number + 2 digit country code + 1 char ( + sign ) = 13
        // eslint-disable-next-line no-restricted-globals
        if (phoneNum.length !== 13 || isNaN(phoneNum)) {
            res.status(400).send({
                message: 'Please enter a valid phone number',
                description: 'Bad request: invalid phone number',
            });

            return;
        }

        const { cognitoCreds } = req.app.locals;

        const { COGNITO_WEB_CLIENT_ID: clientId } = cognitoCreds;
        const authFlow = 'CUSTOM_AUTH';
        const authParams = { USERNAME: phoneNum };

        const user = await cognito.initiateAuth({ authFlow, clientId, authParams });

        const { apiError, USERNAME } = user.ChallengeParameters;

        if (apiError) {
            let errMsg = 'Something went wrong. Please try again later.';

            if (apiError === USER_NOT_ON_WAITLIST_ERR_MSG) errMsg = USER_NOT_ON_WAITLIST_ERR_MSG;

            const err = new Error(errMsg);
            err.description = 'Error in lambda function';
            throw err;
        }

        const userInfo = {
            username: asciiToBase64(USERNAME),
            session: user.Session,
        };

        success(res, userInfo);
    } catch (error) {
        const { statusCode, message, description } = handleError(error);

        let extraParams = {};
        if (error.code) extraParams = { errorCode: error.code };

        next({
            description,
            message,
            ctrl: 'community',
            fn: 'signInWithPhoneNum',
            rawError: error,
            statusCode,
            extraParams,
        });
    }
};

// generates otp for user to login using community auth flow
const generateOtp = async (req, res, next) => {
    try {
        const {
            countryCode,
            phoneNumber,
        } = req.body;

        if (!phoneNumber || !countryCode) {
            res.status(400).send({
                message: 'Mandatory parameters are missing',
                description: 'Bad request: missing parameter',
            });

            return;
        }

        let { token } = req.body;

        if (!token) token = '';

        const requestPayload = {
            phone_number: {
                country_code: countryCode,
                national_number: phoneNumber,
            },
            token,
        };

        const { token: resToken, retry_timer_seconds } = await WaitlistClient.generateCommunityOtp(requestPayload);

        const data = {
            token: resToken,
            retryTimerSeconds: retry_timer_seconds,
        };

        success(res, data);
    } catch (error) {
        const { statusCode } = handleError(error);
        let { message, description } = handleError(error);

        // Change the error message & description since it will render on UI
        if (message === 'Permission denied') {
            message = USER_NOT_ON_WAITLIST_ERR_MSG;
            description = USER_NOT_ON_WAITLIST_ERR_MSG;
        }

        next({
            description,
            message,
            ctrl: 'community',
            fn: 'generateOTP',
            rawError: error,
            statusCode,
        });
    }
};

// validates otp for user to login using community auth flow
const verifyOtp = async (req, res, next) => {
    try {
        const {
            countryCode,
            phoneNumber,
            token,
            otp,
        } = req.body;

        if (!countryCode || !phoneNumber || !token || !otp) {
            res.status(400).send({
                message: 'Mandatory parameters are missing',
                description: 'Bad request: missing parameter',
            });

            return;
        }

        const requestPayload = {
            phone_number: {
                country_code: countryCode,
                national_number: phoneNumber,
            },
            token,
            otp,
        };

        await WaitlistClient.verifyCommunityOtp(requestPayload);

        success(res, 'successfully validated otp');
    } catch (error) {
        const { statusCode, message, description } = handleError(error);

        next({
            description,
            message,
            ctrl: 'community',
            fn: 'verifyOtp',
            rawError: error,
            statusCode,
        });
    }
};

/**
 * Creates a username using the first & last name of a user.
 * @param {string} firstName The first name of the user.
 * @param {string} lastName The last name of the user.
 * @param {boolean} duplicate If the username already exists on cognito.
 * @returns {string} A username to be used on community.
 */
const createUsername = (firstName, lastName, duplicate = false) => {
    let userName = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

    if (duplicate) {
        // attach a random 2 digit number to the username if duplicate
        userName = `${userName}${randomIntFromInterval(10, 99)}`;
    }

    return userName;
};

/**
 * Returns the formatted phone number of the user.
 * @param {object} user Contains user information returned by waitlist rpc.
 * @returns {string} A string containing the country code & national number of the user.
 */
const getPhoneNumber = (user) => {
    const { country_code, national_number } = user.phone_number;

    return `+${country_code}${national_number}`;
};

/**
 * Creates the user attributes array for a new user.
 * @param {object} user Contains user information returned by waitlist rpc.
 * @param {string} username The username to be used on community.
 * @returns {array<object>} Array of user attributes required for signing up a user on cognito.
 */
const createUserAttributes = (user, username) => {
    const email = user.email_id;

    const phoneNumber = getPhoneNumber(user);
    const { country_code } = user.phone_number;

    // return required attributes
    return [
        { Name: 'email', Value: email },
        { Name: 'phone_number', Value: phoneNumber },
        { Name: 'preferred_username', Value: username },
        { Name: 'custom:country_code', Value: `+${country_code}` },
    ];
};

/**
 * Find a user based on user details like, email, phone number, username etc.
 * @param {string} property The field that you want to search on.
 * @param {string} value The value of the required field.
 * @param {object} cognitoCreds Cognito credentials used for authenticating the request.
 * @returns {array<object>} Array of objects containing user details for which the query has matched.
 */
const searchUser = async (property, value, cognitoCreds) => await cognito.listUsers({
    userPoolId: cognitoCreds.COGNITO_USER_POOL_ID,
    filter: `${property} = "${value}"`,
});

/**
 * Check if there exists a user already in cognito with the supplied username.
 * @param {string} username The community username.
 * @param {object} cognitoCreds Cognito credentials used for authenticating the request.
 * @returns {boolean} If a user exists returns true, else false.
 */
const checkIfUsernameExists = async (username, cognitoCreds) => {
    const filteredUsers = await searchUser('preferred_username', username, cognitoCreds);

    // if user is already signed up on cognito, return true
    return filteredUsers.Users.length > 0;
};

/**
 * Main function that signs up a user in the cognito user pool.
 * @param {object} user Contains user information returned by waitlist rpc.
 * @param {object} cognitoCreds Cognito credentials used for authenticating the request.
 */
const signUpUser = async (user, cognitoCreds) => {
    const { name = null } = user;

    if (!name) return;

    const { first_name: firstName, last_name: lastName } = name;

    // create unique username
    let username = createUsername(firstName, lastName, false);
    const userNameExists = await checkIfUsernameExists(username, cognitoCreds);

    if (userNameExists) username = createUsername(firstName, lastName, true);

    // sign up user on cognito
    const phoneNumber = getPhoneNumber(user);
    const params = {
        clientId: cognitoCreds.COGNITO_WEB_CLIENT_ID,
        password: getRandomString(30),
        username: phoneNumber,
        userAttributes: createUserAttributes(user, username),
    };

    await cognito.signUp(params);
};

/**
 * Main controller for community/waitlist that signs up a user on cognito user pool.
 * @param {object} req The request object passed by express.
 * @param {object} res The response object passed by express.
 * @param {function} next Function to call the next middleware in the chain.
 * @returns Success if user was able to sign up on cognito user pool.
 */
const createCognitoUser = async (req, res, next) => {
    const method = 'createCognitoUser';
    try {
        const { countryCode, phoneNumber } = req.body;
        if (!countryCode || !phoneNumber) {
            res.status(400).send({
                message: 'Mandatory parameters are missing',
                description: 'Bad request: missing parameter',
            });

            return;
        }

        const requestPayload = {
            phone_number: {
                country_code: `+${countryCode}`,
                national_number: phoneNumber,
            },
        };

        const user = await WaitlistClient.getUserDetailsForCommunity(requestPayload);

        // add phone_number as key since it is not returned by rpc
        user.phone_number = {
            country_code: countryCode,
            national_number: phoneNumber,
        };

        const { cognitoCreds } = req.app.locals;
        // check if user already exists in user pool
        const phoneNoWithCountryCode = getPhoneNumber(user);

        const filteredUsers = await searchUser('phone_number', phoneNoWithCountryCode, cognitoCreds);

        // if user is already signed up on cognito, return
        if (filteredUsers.Users.length > 0) {
            logger.log('error', 'User already signed up on community', { method });
            res.status(400).send({
                message: 'Mandatory parameters are missing',
                description: 'Bad request: missing parameter',
            });

            return;
        }

        await signUpUser(user, cognitoCreds);

        success(res, 'successfully checked waitlist user');
    } catch (error) {
        let { statusCode, message, description } = handleError(error);

        // user has not signed up on waitlist
        if (error.code === 5) { // err.message = 'Not Found'
            statusCode = 404;
            message = USER_NOT_ON_WAITLIST_ERR_MSG;
            description = 'User not on waitlist';
        }

        next({
            description,
            message,
            ctrl: 'community',
            fn: method,
            rawError: error,
            statusCode,
        });
    }
};

module.exports = {
    verifyJwt,
    generateOtp,
    verifyOtp,
    createCognitoUser,
    verifyCustomChallenge,
    signInWithPhoneNum,
};
