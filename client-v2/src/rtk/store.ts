/**
 * @file redux toolkit store provider
 */

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore, Reducer } from '@reduxjs/toolkit';

import creditCardReducer from './components/CreditCard/reducer';
import ApiStoreReducer from './components/commonUtils/reducer';
import appReducer from './components/App/reducers';
import riskFormReducer from './components/riskForm/reducer';
import usStocksReducer from './components/US-Stocks-feature-page/reducers';
import travelBudgetReducer from './components/debitCardTravelBudget/reducer';
import ForexCalculatorReducer from './components/forexCalculatorBudget/reducer';
import calculatorReducer from '../containers/Calculator/reducers'
import { CALCULATORS_KEY } from '@/containers/Calculator/constants';
import { CalculatorRootActions } from '@/containers/Calculator/actions';
import { ICalculatorsReducer } from '@/containers/Calculator/types';

export const store = configureStore({
    reducer: {
        creditCardEligibility: creditCardReducer,
        usStocks: usStocksReducer,
        ApiStore: ApiStoreReducer,
        appReducer,
        riskForm: riskFormReducer,
        travelBudget: travelBudgetReducer,
        forexCalculator: ForexCalculatorReducer,
        [CALCULATORS_KEY]:calculatorReducer as Reducer<ICalculatorsReducer, CalculatorRootActions>
    },
    // middleware: (getDefaultMiddleware) => {
    //   return getDefaultMiddleware().concat(middleware)
    // },
});

setupListeners(store.dispatch);

export const appDispatch = store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

