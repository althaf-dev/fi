/* eslint-disable import/no-extraneous-dependencies, import/first, import/order */
const fs = require('fs');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerStyleSheet, ThemeProvider } = require('styled-components');
const { StaticRouter } = require('react-router-dom/server');
const { Provider } = require('react-redux');
const { getEncodedURL } = require('../../src/utils/helpers');

// import required client code here
import App from '../../src/containers/App/App';
import Theme from '../../src/Themes/Theme';
import store from '../../src/store';
import rootSaga from '../../src/store/sagas';

const HOME_PAGE_HTML_STRING = (
    '<link rel="preload" as="image" href="https://dza2kd7rioahk.cloudfront.net/assets/webp/home-page_poster.webp"></link>'
    + '\n'
    + '<link rel="preload" as="video" href="https://dza2kd7rioahk.cloudfront.net/assets/videos/home-page_poster.webm"></link>'
    + '\n'
    + '<link rel="preload" as="image" href="https://dza2kd7rioahk.cloudfront.net/assets/logos/play-store_black.png"></link>'
    + '\n'
    + '<link rel="preload" as="image" href="https://dza2kd7rioahk.cloudfront.net/assets/logos/app-store_black.png"></link>'
    + '\n'
);

const getHrefLangLinkTag = (url = '/') => `\n<link rel=“alternate” hreflang=“en-in” href='${getEncodedURL(`https://fi.money${url}`)}' />`;

const renderHTML = (INDEX_HTML_PATH, expressApp) => (req, res, next) => {
    const URL = req.originalUrl;

    if (URL === '/' && expressApp.locals.homePageHtml) {
        res.locals.indexHTML = expressApp.locals.homePageHtml;

        return next();
    }

    if (URL === '/about' && expressApp.locals.aboutPageHtml) {
        res.locals.indexHTML = expressApp.locals.aboutPageHtml;

        return next();
    }

    if (URL === '/teams' && expressApp.locals.teamsPageHtml) {
        res.locals.indexHTML = expressApp.locals.teamsPageHtml;

        return next();
    }

    if (URL === '/careers' && expressApp.locals.careersPageHtml) {
        res.locals.indexHTML = expressApp.locals.careersPageHtml;

        return next();
    }

    if (URL === '/contact-us' && expressApp.locals.contactUsPageHtml) {
        res.locals.indexHTML = expressApp.locals.contactUsPageHtml;

        return next();
    }

    // read `index.html` file
    return fs.readFile(
        INDEX_HTML_PATH,
        'utf8',
        (err, data) => {
            if (err) {
                console.error('error in reading file', err);

                return res.status(500).send('Something went wrong!');
            }

            let indexHTML = data;

            const sheet = new ServerStyleSheet();

            // Create a new Redux store instance
            // const store = createStore(reducer);

            // get HTML string from the `App` component
            const appHTML = ReactDOMServer.renderToString(sheet.collectStyles(
                <Provider store={store}>
                    <ThemeProvider theme={Theme}>
                        <StaticRouter location={URL}>
                            <App />
                        </StaticRouter>
                    </ThemeProvider>
                </Provider>,
            ));

            const styleTags = sheet.getStyleTags();
            sheet.seal();

            // populate `#root` element with `appHTML`
            indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

            // set value of `initial_state` global variable
            // indexHTML = indexHTML.replace(
            //     'var initial_state = null;',
            //     `var initial_state = ${ JSON.stringify( componentData ) };`
            // );

            indexHTML = indexHTML.replace(
                '__STYLES_TAGS__',
                styleTags,
            );

            let dynamicHeadTags = '';

            if (URL === '/') {
                dynamicHeadTags = HOME_PAGE_HTML_STRING;
            }

            // adding hrefLang link tag for specifies the language of the linked document.
            dynamicHeadTags += getHrefLangLinkTag(URL);

            // dynamic head tags for page speed optimization based on the route
            indexHTML = indexHTML.replace(
                '__DYNAMIC_HEAD_TAGS__',
                dynamicHeadTags,
            );

            /**
             * This code runs when we dispatch the END function which is being done by the store.close() method.
             * This method is defined in the store file.
             * Ref - https://github.com/redux-saga/redux-saga/blob/main/examples/real-world/server.js
            */
            store.runSaga(rootSaga).toPromise().then(() => {
                if (URL === '/') {
                    expressApp.locals.homePageHtml = indexHTML;
                } else if (URL === '/about') {
                    expressApp.locals.aboutPageHtml = indexHTML;
                } else if (URL === '/teams') {
                    expressApp.locals.teamsPageHtml = indexHTML;
                } else if (URL === '/careers') {
                    expressApp.locals.careersPageHtml = indexHTML;
                } else if (URL === '/contact-us') {
                    expressApp.locals.contactUsPageHtml = indexHTML;
                }

                res.locals.indexHTML = indexHTML;

                return next();
            }).catch((e) => {
                console.error(e.message);

                return next();
            });

            res.header({
                'Content-Type': 'text/html',
                'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
                Expires: '-1',
                Pragma: 'no-cache',
            });

            return store.close();
        },
    );
};

module.exports = {
    renderHTML,
};
