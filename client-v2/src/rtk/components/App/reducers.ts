/**
 * @file app component reducers and actions are exported from this file
 */

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getDynamicConsulData, getAppAssistanceData } from './saga';
import { REDUX_REDUCER_KEY } from '@/constants/AppConstant';

interface IAppReducer {
    appAssistanceData: object;
    dynamicConsulData: object
}

const initialState: IAppReducer = {
    appAssistanceData: {
        showFooterSection: true,
    },
    dynamicConsulData: {},
};

const appSlice = createSlice({
    name: REDUX_REDUCER_KEY.APP_REDUCER,
    initialState,
    reducers: {
        setAppAssistanceData: (state: any, action: PayloadAction<any>) => {
            const { data = {} } = action.payload;
            if (Object.keys(data).length) {
                return {
                    ...state,
                    appAssistanceData: data,
                };
            }
            return state;
        },
        setDyanamicConsulData: (state, action: PayloadAction<any>) => {
            const { path, data = {} } = action.payload;

            if (Object.keys(data).length) {
                return {
                    ...state,
                    dynamicConsulData: {
                        ...state.dynamicConsulData,
                        [path]: data,
                    },
                };
            }
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDynamicConsulData.fulfilled, (state, action) => {
                const { path, data = {} } = action.payload;

                if (Object.keys(data).length) {
                    state.dynamicConsulData = {
                        ...state.dynamicConsulData,
                        [path]: data
                    };
                }
            })
            .addCase(getAppAssistanceData.fulfilled, (state, action) => {
                const { data = {} } = action.payload;
                if (Object.keys(data).length) {
                    state.appAssistanceData = data;
                }
            })
            .addCase(getAppAssistanceData.rejected, (state) => {
                state.appAssistanceData = {};
            });
    }
});

const { setAppAssistanceData, setDyanamicConsulData } = appSlice.actions;

export { setAppAssistanceData, setDyanamicConsulData };

export default appSlice.reducer;
