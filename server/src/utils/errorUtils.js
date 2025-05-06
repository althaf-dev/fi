// NOTE: need to remove below linting comment once more error utils are added.
/**
 * Returns respective message based on error code
 * @param {number} errorCode error code
 * @returns {string} error message
 */

// eslint-disable-next-line import/prefer-default-export
const getOtpErrorMessage = (errorCode) => {
    let { message } = errorCode;

    const incorrectOTPCodes = [102, 103];
    const expiredOTPCodes = [104, 105];

    if (incorrectOTPCodes.includes(errorCode)) {
        message = 'Incorrect OTP!';
    } else if (expiredOTPCodes.includes(errorCode)) {
        message = 'OTP expired. Please try again';
    } else {
        message = 'Something went wrong. Please try again';
    }

    return message;
};

module.exports = {
    getOtpErrorMessage,
};
