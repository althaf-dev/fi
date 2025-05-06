/* eslint-disable import/prefer-default-export */
/**
 * @file selectDynamicConfig - select dynamicConsulData from APP_REDUCER
 */

import { createSelector } from '@reduxjs/toolkit';
import { REDUX_REDUCER_KEY } from '@/constants/AppConstant';

export const selectDynamicConfig = (path: any) => createSelector(
    (state: any) => state[REDUX_REDUCER_KEY.APP_REDUCER].dynamicConsulData[path],
    (subState) => subState,
);
