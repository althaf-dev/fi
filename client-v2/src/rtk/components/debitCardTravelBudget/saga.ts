/**
 * @file async call for app store is exported from this file
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { TRAVEL_DESTINATIONS_URL, TRAVEL_BUDGET_CALCULATOR_URL } from '@/Api/ApiRoutes';
import { getQueryStringFromObject } from '@/rtk/util';
import ClientAPIWrapper from '@/utils/clientAPIWrapper';

const getDestinations = createAsyncThunk(
    'get/travel-destinations',
    async (payload: any, thunkAPI) => {
        const { resolve, reject } = payload;
        try {
            const queryString = getQueryStringFromObject(payload);
            const response = await ClientAPIWrapper.get(`${TRAVEL_DESTINATIONS_URL}?${queryString}`);
            if (resolve) {
                resolve();
            }
            return thunkAPI.fulfillWithValue(response?.data?.travel_destinations);
        } catch (error: any) {
            if (reject) {
                reject();
            }
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

const getTravelBudget = createAsyncThunk(
    'get/travel-budget',
    async (payload: any, thunkAPI) => {
        const { resolve, reject, ...restPayload } = payload;
        try {
            const queryString = getQueryStringFromObject(restPayload);
            const response = await ClientAPIWrapper.get(`${TRAVEL_BUDGET_CALCULATOR_URL}?${queryString}`);
            if (resolve) {
                resolve();
            }
            return thunkAPI.fulfillWithValue(response?.data?.expense_budget);
        } catch (error: any) {
            if (reject) {
                reject();
            }
            throw thunkAPI.rejectWithValue({});
        }
    }
);

export { getDestinations, getTravelBudget };
