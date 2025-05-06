/**
 * @file async call for app store is exported from this file
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { META_INFO_URL, CONSUL_URL } from '@/Api/ApiRoutes';
import ClientAPIWrapper from '@/utils/clientAPIWrapper';

const setCSRFMetaTag = (csrfToken: string) => {
    const meta = document.createElement('meta');
    meta.name = 'csrf-token';
    meta.content = csrfToken;
    document.getElementsByTagName('head')[0].appendChild(meta);
};

const getAppAssistanceData = createAsyncThunk(
    'get/appAssistanceData',
    async (payload: any, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.get(`${META_INFO_URL}/app/assistance`, payload);

            const { csrfToken } = response.data;

            if (csrfToken) {
                setCSRFMetaTag(csrfToken);
            }

            return thunkAPI.fulfillWithValue(response);
        } catch (error: any) {
            throw thunkAPI.rejectWithValue({});
        }
    }
);

const getDynamicConsulData = createAsyncThunk(
    'get/dynamic-consul-data',
    async (payload: any, thunkAPI) => {
        try {
            const { path } = payload;
            const response = await ClientAPIWrapper.get(`${CONSUL_URL}?path=${path}`, payload);
            return thunkAPI.fulfillWithValue(response);
        } catch (error: any) {
            throw thunkAPI.rejectWithValue({});
        }
    }
);

export { getDynamicConsulData, getAppAssistanceData };
