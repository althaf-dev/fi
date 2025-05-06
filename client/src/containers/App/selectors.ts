/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { APP_KEY } from './constants';

export const selectDynamicConfig = (path) => createSelector(
    (state) => state[APP_KEY].dynamicConsulData[path],
    (subState) => subState,
);
