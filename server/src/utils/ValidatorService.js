const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const validateEmail = (emailString) => {
    return EMAIL_REGEX.test(emailString);
};
