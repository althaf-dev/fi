const { verifyIdToken } = require('../../utils/token');
const { logger } = require('../../utils/logger');

const AUTH_EXLUDED_PATH_LIST = [
    '',
];

module.exports = async (req, res, next) => {
    const method = 'authMiddleware';
    try {
        /**
         * This check is needed to exclude some endpoints from token verification.
         * Not using req.originalUrl here because it consists of req.baseUrl, req.path, req.params & req.query
         */
        if (AUTH_EXLUDED_PATH_LIST.includes(`${req.baseUrl}${req.path}`)) {
            return next();
        }
        const idToken = req.headers.id_token;
        const { cognitoCreds } = req.app.locals;
        // will throw an error if invalid jwt is passed
        verifyIdToken(idToken, cognitoCreds);
        logger.log('info', 'verified request using id token', { method });
        return next();
    } catch (error) {
        logger.log('error', 'error in auth middleware', { error: error?.message, method });
        res.status(401).send({ message: 'Unauthorized', description: error?.message });
        return res.end();
    }
};
