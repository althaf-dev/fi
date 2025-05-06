const HOUR_IN_MILLISECONDS = 3600000;

const setTokenInCookie = (res, cookieName, cookieValue, expiryTime, sameSite) => {
    let secure = true;

    if (process.env.APP_ENV === 'development') {
        secure = false;
    }

    res.cookie(cookieName, cookieValue, {
        httpOnly: true,
        secure,
        sameSite: sameSite || 'Strict',
        maxAge: expiryTime || HOUR_IN_MILLISECONDS * 24 * 30,
    });
};

module.exports = {
    setTokenInCookie,
};
