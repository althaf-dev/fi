// cognito auto confirm user on sign up for custom otp flow.
exports.handler = async event => {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
    return event;
};
