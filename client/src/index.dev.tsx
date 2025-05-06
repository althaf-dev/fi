/**
 * This is the entry file for the web application in the development environment
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './containers/App/App';
import Theme from './Themes/Theme';
import store from './store';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
);
