// cognito verify auth challenge for custom otp flow.
const axios = require('axios').default;
const APP_ENV = process.env.APP_ENV || 'NON_PROD';
let VERIFY_OTP_URL = 'https://demo-web.pointz.in/api/v1/community/verify-otp';
if (APP_ENV === 'PROD') {
    VERIFY_OTP_URL = 'https://fi.money/api/v1/community/verify-otp';
}

exports.handler = async event => {
    const userPhoneNumber = event.request.userAttributes.phone_number;
    const phoneNoLen = userPhoneNumber.length;
    const startIndex = phoneNoLen - 10;
    const phoneNumber = userPhoneNumber.substring(startIndex, userPhoneNumber.length);
    let countryCode = event.request.userAttributes['custom:country_code'];
    // fallback to india if country code is not present
    if (!countryCode) countryCode = '+91';
    // console.log('new otp verify request: ', event.request);
    const token = event.request.privateChallengeParameters.otpToken;
    const otp = event.request.challengeAnswer;
    // call API instead to validate OTP
    try {
        const payload = {
            countryCode,
            phoneNumber,
            otp,
            token,
        };
        const response = await axios.post(VERIFY_OTP_URL, payload);
        const statusCode = response.status;
        // if the response was not successful, fail verification
        // use http status code for verification, instead of response body in case the API is changed in the future.
        // throw and error if status code is not in the 2xx range
        if (statusCode < 200 || statusCode > 299) {
            throw new Error('Verify OTP API did not give http status code 200');
        }
        event.response.answerCorrect = true;
    } catch (error) {
        console.error('Error while calling verify OTP API: ', error);
        event.response.answerCorrect = false;
    }
    return event;
};
