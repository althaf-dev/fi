import createSagaMiddleware from 'redux-saga';
import { DeepPartial } from './test-utils';
import rootReducer, { RootState } from '../store/reducers/index';

import rootSaga from '../store/sagas';

const { createStore, applyMiddleware } = require('redux');

const getStore = (initialState:DeepPartial<RootState>) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default getStore;
