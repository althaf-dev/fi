/**
 * @file async call for app store is exported from this file
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getQueryStringFromObject } from '@/rtk/util';
import ClientAPIWrapper from '@/utils/clientAPIWrapper';
import { FOREX_CALCULATOR_URL, FAQ_CATEGORIES_URL, FAQ_FOLDER_URL } from '@/Api/ApiRoutes';

const getForexExchangeRate = createAsyncThunk(
    'get/forex-exchange-rate',
    async (payload: any, thunkAPI) => {
        const { resolve, reject, ...restPayload } = payload;
        try {
            const queryString = getQueryStringFromObject(restPayload);
            const response = await ClientAPIWrapper.get(`${FOREX_CALCULATOR_URL}?${queryString}`);
            if (resolve) {
                resolve();
            }
            return thunkAPI.fulfillWithValue(response?.data);
        } catch (error: any) {
            if (reject) {
                reject();
            }
            throw thunkAPI.rejectWithValue({});
        }
    }
);

const getFaqData = createAsyncThunk(
    'get/faq-data',
    async (payload: any, thunkAPI) => {
        const { resolve, reject } = payload;
        try {
            const categoryResponse = await ClientAPIWrapper.get(`${FAQ_CATEGORIES_URL}`);
            const categoryId = categoryResponse?.data?.find(
                (category: any) => category.name === 'Debit Card'
            ).id;

            const folderData = await ClientAPIWrapper.get(`${FAQ_FOLDER_URL}?categoryId=${categoryId}`);

            if (resolve) {
                resolve();
            }
            return thunkAPI.fulfillWithValue(folderData?.data);
        } catch (error: any) {
            if (reject) {
                reject();
            }
            throw thunkAPI.rejectWithValue({ error });
        }
    }
);

export { getForexExchangeRate, getFaqData };
