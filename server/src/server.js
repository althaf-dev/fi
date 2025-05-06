const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const mime = require('mime-types');
// eslint-disable-next-line import/no-extraneous-dependencies
const html2canvasProxy = require('html2canvas-proxy');

// const csrf = require('csurf');
const bodyParser = require('body-parser');

const httpProxy = require('http-proxy');
const { metricsMiddleware } = require('./utils/prometheus/api');
const { initialisePrometheus } = require('./utils/prometheus/app');

const { errHandler } = require('./api/middlewares/errorMiddleware');
const { getApiRateLimiterConfig, genericApiLimiter } = require('./api/middlewares/rateLimiterMiddleware');
const consulMiddleware = require('./api/middlewares/consul');
const { startProfiling, profilingMiddleware } = require('./api/middlewares/pyroscope');
const { cdnMiddleware } = require('./api/middlewares/cdnMiddleware');

// Root Routes
const { ApiRouter } = require('./api/routes');

// External Routes
const { ExternalApiRouter } = require('./api/externalRoutes');

// Html Pages Routes
const { AssetsRouter } = require('./api/assetsRouters');

// Pdf Files Routes
const { CreditCardPdfFilesRouter, FeesPdfFilesRouter, SecuredCreditCardPdfFilesRouter } = require('./api/pdfFilesRoutes');

const { initialiseCognitoCredentials } = require('./utils/cognito');
const { initialiseGoogleSheetCredentials } = require('./utils/gSheet');

const { accessibleFolderAssets } = require('./constants');
const { redirectionMiddleware } = require('./api/middlewares/redirectionMiddleware');

// proxy server
const proxy = httpProxy.createProxyServer({});

const initialiseExpressApp = () => {
    const {
        APP_ENV,
        APP_PORT,
        X_FORWARDED_FOR_HEADER_HOPS,
    } = process.env;

    // App
    const app = express();

    /* package to monitor the performance of the app
    if (APP_ENV === 'development') {
        app.use(require('express-status-monitor')());
    }
    */

    // customMiddleware for redirecting https://www.fi.money to https://fi.money
    const customMiddleware = (req, res, next) => {
        if (req.headers.host.startsWith('www.')) {
            const redirectTo = req.headers.host.replace(/^www\./, '');
            const fullUrl = `${req.protocol}://${redirectTo}${req.originalUrl ? req.originalUrl : ''}`;
            return res.redirect(301, fullUrl);
        }
        if (req.baseUrl === '/sitemap.xml') {
            // To run blog pagination locally, add a new key ignorePath and set it to true
            proxy.web(req, res, {
                target: `${process.env.CDN_URL}/site-data/sitemap.xml`,
                changeOrigin: true,
                followRedirects: true,
                ignorePath: true,
            },
            (error) => {
                next({
                    description: 'Exception while fetching sitemap.xml',
                    message: 'Error occurred while proxying',
                    ctrl: 'proxy',
                    fn: 'proxyMiddleware',
                    rawError: error,
                });
            });
            // eslint-disable-next-line consistent-return
            return;
        }
        return next();
    };

    app.use('*', customMiddleware);

    // load the cookie-parsing middleware
    app.use(cookieParser());

    // parses incoming requests with URL-encoded payloads - application/x-www-form-urlencoded

    // parses incoming requests with JSON payloads - application/json

    app.use(bodyParser.json({ limit: '50mb' }));

    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    app.use(express.json());

    app.use(compression());

    // middleware function with no mount path. This is getting executed every time the app receives a request.
    app.use((_, res, next) => {
        res.header('Referrer-Policy', 'no-referrer');
        res.header('Strict-Transport-Security', 'max-age=298000; includeSubDomains; preload');
        res.header('X-Content-Type-Options', 'nosniff');
        res.header('X-Frame-Options', 'SAMEORIGIN');
        res.header('X-XSS-Protection', '1; mode=block');

        next();
    });

    app.disable('x-powered-by');

    mime.contentType('text/html; charset=utf-8');

    // health check
    app.use('/_health', (_, res) => {
        res.send('server up');
    });

    // const csrfProtection = csrf({ cookie: true });

    // enable if you're behind a reverse proxy (AWS ELB, etc)
    // see https://expressjs.com/en/guide/behind-proxies.html
    app.set('trust proxy', parseInt(X_FORWARDED_FOR_HEADER_HOPS, 10));

    // Different Middlewares
    // Middleware to fetch common keys from consul that are used in subsequent functions
    app.use(consulMiddleware);
    // Middleware to turn continuous profiling off and on dynamically
    app.use(profilingMiddleware);

    app.use('/html2canvas-proxy', html2canvasProxy());

    // Api Routes
    app.use('/api', getApiRateLimiterConfig, genericApiLimiter, metricsMiddleware, ApiRouter);
    // Api Routes END

    // External Api Routes
    app.use('/external-api', metricsMiddleware, ExternalApiRouter);
    // External Api Routes END

    // for every page assets calling static files to join with the URL
    accessibleFolderAssets.forEach((folderInfo) => {
        const { folderName } = folderInfo;
        /**
         * '/assets\/pages\/styles' is the regex statement for /assets/pages/styles since forward slash is not working without backward slash.
         *
         * app.use with express.static joins static files to certain URLs.
         * e.g. app.use('/assets\/pages\/styles', express.static(path.join(__dirname, `./assets/pages/styles`)))
         * Now, we can load the files that are in the /src/assets/pages/styles folder from the URL http://localhost:3000/assets/pages/styles
         * => http://localhost:3000/assets/pages/styles/base-styles.css
         *
         * This is necessary to make the files inside assets folders accessible in custom URLs (/assets/pages/styles) which are accessed by the simultaneous html pages.
         */
        // eslint-disable-next-line no-useless-escape
        app.use(`/assets\/pages\/${folderName}`, express.static(path.join(__dirname, `./assets/pages/${folderName}`), {
            maxAge: '1y',
        }));
    });

    // Html Pages Routes
    app.use('/assets', AssetsRouter);
    // Html Pages Routes End

    // Middleware to redirect old urls to new urls
    // Here we are using req.baseUrl for redirection so if the path pattern is changed it can result in incorrect redirection
    app.use('*', redirectionMiddleware);

    // Credit Card Pdf Files Routes
    app.use('/credit-card', CreditCardPdfFilesRouter);
    // Credit Card Pdf Files Routes End

    // Secured Credit Card Pdf Files Routes
    app.use('/secured-credit-card', SecuredCreditCardPdfFilesRouter);
    // Secured Credit Card Pdf Files Routes End

    // Fess Pdf Files Routes
    app.use('/fees', FeesPdfFilesRouter);
    // Fess Pdf Files Routes End

    // CDN URLs routes from consul
    app.use('/documents', cdnMiddleware);
    // CDN URLs routes from consul end

    app.use(errHandler);

    // serve static files for all envs
    app.use(express.static(path.join(__dirname, './static/common'), {
        maxAge: '1y',
    }));

    // serve static files only for prod env
    if (APP_ENV === 'prod') {
        app.use(express.static(path.join(__dirname, './static/prod'), {
            maxAge: '1y',
        }));
    }

    const PORT = APP_PORT || 8000;

    // Initialise prometheus express app
    initialisePrometheus();

    // Initialise cognito creds
    initialiseCognitoCredentials(app);

    // Initialise gSheet creds
    initialiseGoogleSheetCredentials(app);

    startProfiling();

    return {
        expressApp: app,
        port: PORT,
    };
};

module.exports = {
    initialiseExpressApp,
};
