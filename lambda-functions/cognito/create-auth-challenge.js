// cognito create auth challenge for custom otp flow.
const axios = require('axios').default;
const APP_ENV = process.env.APP_ENV || 'NON_PROD';
let GENERATE_LOGIN_OTP_URL = 'https://demo-web.pointz.in/api/v1/community/generate-otp';
if (APP_ENV === 'PROD') {
    GENERATE_LOGIN_OTP_URL = 'https://fi.money/api/v1/community/generate-otp';
}

exports.handler = async (event) => {
    let apiError = '';
    let otpToken = '';
    try {
        if (!event.request.session || !event.request.session.length) {
            // This is a new auth session. Send OTP to user's mobile
            // console.log('new otp request: ', event.request);
            const userPhoneNumber = event.request.userAttributes.phone_number;
            // userPhoneNumber --> '+9876543210'. Remove '+' sign from number.
            const phoneNoLen = userPhoneNumber.length;
            const startIndex = phoneNoLen - 10;
            const phoneNumber = userPhoneNumber.substring(startIndex, userPhoneNumber.length);
            let countryCode = event.request.userAttributes['custom:country_code'];
            // fallback to india if country code is not present
            if (!countryCode) countryCode = '+91';
            const payload = {
                countryCode,
                phoneNumber,
            };
            const response = await axios.post(GENERATE_LOGIN_OTP_URL, payload);
            const { token } = response.data.data;
            // save otpToken for verify auth challenge
            otpToken = token;
        } else {
            // There's an existing session. Don't generate new OTP but
            // re-use the code from the current session. This allows the user to
            // make a mistake when keying in the code and to then retry, rather
            // the needing to send the user an all new code again.
            const previousChallenge = event.request.session.slice(-1)[0];
            otpToken = previousChallenge.challengeMetadata;
        }
    } catch (error) {
        console.error('Error while generating OTP in lambda fn: ', error);
        let { description } = error.response.data;
        if (!description) description = 'Something went wrong while generating otp';
        apiError = description;
    }

    // This is sent back to the client app
    event.response.publicChallengeParameters = {
        email: event.request.userAttributes.email,
        apiError,
    };

    // Add the secret token to the private challenge parameters
    // so it can be verified by the "Verify Auth Challenge Response" trigger
    event.response.privateChallengeParameters = { otpToken };

    // Add the number of attempts so it is available
    // in a next invocation of the "Create Auth Challenge" trigger
    event.response.challengeMetadata = otpToken;

    return event;
};
