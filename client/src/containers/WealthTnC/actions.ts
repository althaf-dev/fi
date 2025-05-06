import {
    GET_WEALTH_DATA, UPDATE_WEALTH_DATA,
} from './constants';

interface IGetDataWithoutPayload {
    type: typeof GET_WEALTH_DATA;
}

interface IGetDataWithPayload {
    type: typeof UPDATE_WEALTH_DATA
    payload: any;
}

type WealthTncRootActions = IGetDataWithoutPayload | IGetDataWithPayload;

const getWealthTncComplaintsData = (): WealthTncRootActions => ({
    type: GET_WEALTH_DATA,
});

export {
    // Root Action Type
    WealthTncRootActions,
    // Action Name
    getWealthTncComplaintsData,
};
