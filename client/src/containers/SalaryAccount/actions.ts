import { SET_EMPLOYER_DATA_ON_GOOGLE_SHEET } from './constant';

interface IGetDataWithPayload {
    type: typeof SET_EMPLOYER_DATA_ON_GOOGLE_SHEET;
    payload: any;
}

type AppRootActions = IGetDataWithPayload;

const setEmployerDataOnGoogleSheet = (payload: any): AppRootActions => ({
    type: SET_EMPLOYER_DATA_ON_GOOGLE_SHEET,
    payload,
});

export {
    // Root Action Type
    AppRootActions,
    // Action Name
    setEmployerDataOnGoogleSheet,
};
