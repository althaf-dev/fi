/* eslint-disable global-require */
const path = require('path');
const dotenv = require('dotenv');

// initializes env variables from .env file
dotenv.config({ path: path.join(__dirname, `./envs/.env${process.env.FIWEB_ENV ? `.${process.env.FIWEB_ENV}` : ''}`) });

// this will start the server
if (process.env.APP_ENV === 'development') {
    const { initialiseServer } = require('./server-dev');
    initialiseServer();
} else {
    const { initialiseServer } = require('./server-prod');
    initialiseServer();
}
