/**
 * This is the entry file for the web application for the production environment
 */

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import './index.scss';
import App from './containers/App/App';
import Theme from './Themes/Theme';
import store from './store';

loadableReady(() => {
    hydrateRoot(
        document.getElementById('root') as HTMLElement,
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>,
    );
});
