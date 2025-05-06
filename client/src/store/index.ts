/* eslint-disable import/order, import/first, no-underscore-dangle */
// TODO: need to change it to import. It's throwing some error on import statement
// import { createStore, applyMiddleware, compose } from 'redux';
const { compose, createStore, applyMiddleware } = require('redux');

import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// declare const window: any;

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

// sagaMiddleware.run(rootSaga);

store.runSaga = sagaMiddleware.run;

store.runSaga(rootSaga);

/**
 * this function is being used to run all the sagas at the server side code for SSR.
 * Ref - https://github.com/redux-saga/redux-saga/blob/main/examples/real-world/store/configureStore.prod.js
 */
store.close = () => store.dispatch(END);

export type RootDispatch = ReturnType<typeof store.dispatch>;

export default store;
