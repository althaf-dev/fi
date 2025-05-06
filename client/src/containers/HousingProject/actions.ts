/**
* @file Housing Project actions
*/

import { SET_HOUSING_DATA_ON_GOOGLE_SHEET } from './constant';

interface IGetDataWithPayload {
    type: typeof SET_HOUSING_DATA_ON_GOOGLE_SHEET;
    payload: any;
}

type AppRootActions = IGetDataWithPayload;

const setHousingDataOnGoogleSheet = (payload: any): AppRootActions => ({
    type: SET_HOUSING_DATA_ON_GOOGLE_SHEET,
    payload,
});

export {
    // Root Action Type
    AppRootActions,
    // Action Name
    setHousingDataOnGoogleSheet,
};
