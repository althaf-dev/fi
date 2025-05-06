/**
 * @file next app common utils reducers
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import clientApiWrapper from '@/utils/clientAPIWrapper';
import { META_INFO_URL } from '@/Api/ApiRoutes';
import logger from '@/utils/logger';

export interface ICreditCardEligibilitytReducer {
}

const initialState: ICreditCardEligibilitytReducer = {
};

const setCookies = createAsyncThunk(
    'set/cookies',
    async (payload: any, thunkAPI) => {
        try {
            const response = await clientApiWrapper.get(`http://localhost:8080${META_INFO_URL}/app/assistance`);
            return thunkAPI.fulfillWithValue(response);
        } catch (error: any) {
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

const ApiStore = createSlice({
    name: 'ApiStore',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setCookies.pending, (state, action) => {
            logger.log('setCookies.pending', state, action);
        })
            .addCase(setCookies.fulfilled, (state, action) => {
                logger.log('setCookies.fulfilled', state, action);
            })
            .addCase(setCookies.rejected, (state, action) => {
                logger.log('setCookies.rejected', state, action);
            });
    },
});

export { setCookies };

export default ApiStore.reducer;
