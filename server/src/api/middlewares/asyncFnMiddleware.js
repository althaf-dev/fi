/**
 * Until now, we’ve used try/catch blocks to catch errors in our async/await functions,
 * but they make our code look messy.
 * To fix this issue, we’ll wrap the every controller func with this middleware,
 * so that every error can route to error middleware through here
 */
const asyncFnMiddleware = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
};

module.exports = {
    asyncFnMiddleware,
};
