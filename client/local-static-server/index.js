/* eslint-disable import/no-extraneous-dependencies, no-console */
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import fs from 'fs';

const { renderHTML } = require('./middlewares/ssrMiddleware');
const { renderPageWithMetaTags } = require('./middlewares/metaInfoMiddleware');

globalThis.window = {
    document: {},
    localStorage: {},
};

// this needs to be changed incase build folder is available at some other path
const INDEX_HTML_PATH = path.resolve(__dirname, '../build/index.html');

const app = express();

// load the cookie-parsing middleware
app.use(cookieParser());

// parses incoming requests with URL-encoded payloads - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parses incoming requests with JSON payloads - application/json
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

// app.get(/\.(js|css|map)$/, express.static(path.resolve(__dirname, '../build')));
app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../build')));
app.get(/\.(woff|woff2|ttf)$/, express.static(path.resolve(__dirname, '../build')));
app.get(/\.(png|webp|svg|jpg|mp4|webm|js)$/, express.static(path.resolve(__dirname, './static')));
app.get('/scripts/*.js', express.static(path.resolve(__dirname, './static/common')));

app.get('/about', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/teams', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/careers', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/contact-us', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/features/*', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/open-savings-account-online', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/open-salary-account-online', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/calculators/*', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/calculators', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/FAQs/*', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/FAQs', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/fees', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/privacy', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/T&C', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/Fi-Secure', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/rewards/TnC', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/wealth/TnC', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/fsl-tnc', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/cDJwLWxlbmRlci1yZWdpc3RyYXRpb24tYWdyZWVtZW50', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/d2VhbHRoLWFhZGhhYXItZS1zaWdu', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/app/invite', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/insights', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags); // need to fix
app.get('/customer-auth/*', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/fi-care/*', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/fin-charts/*', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/app/fi-minutes', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/signup', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/open-salary-account-online/b2b', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);
app.get('/', renderHTML(INDEX_HTML_PATH, app), renderPageWithMetaTags);

app.get('*', (req, res) => {
    fs.readFile(
        path.resolve(__dirname, '../build/index.html'),
        'utf8',
        (err, data) => {
            if (err) {
                console.error(err);

                return res.status(500).send('Something went wrong!');
            }

            console.log('here in another universe', 'req -> originalUrl ->', req.originalUrl, req.url);

            // for home page, we need to fetch the latest version
            if (req.originalUrl === '/') {
                res.header({
                    'Content-Type': 'text/html',
                    'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
                    Expires: '-1',
                    Pragma: 'no-cache',
                });
            }

            return res.send(data);
        },
    );
});

app.listen('8080', () => {
    console.log('Express server started at http://localhost:8080');
});
