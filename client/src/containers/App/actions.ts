import {
    GET_APP_ASSISTANCE_DATA, SET_APP_ASSISTANCE_DATA, GET_DYNAMIC_CONSUL_DATA, SET_DYNAMIC_CONSUL_DATA,
} from './constants';

interface IGetDataWithoutPayload {
    type: typeof GET_APP_ASSISTANCE_DATA
}

interface IGetDataWithPayload {
    type: typeof SET_APP_ASSISTANCE_DATA
        | typeof GET_DYNAMIC_CONSUL_DATA
        | typeof SET_DYNAMIC_CONSUL_DATA;
    payload: any;
}

type AppRootActions = IGetDataWithoutPayload | IGetDataWithPayload;

const getAppAssistanceData = (): AppRootActions => ({
    type: GET_APP_ASSISTANCE_DATA,
});

const getDynamicConsulData = (payload: any): AppRootActions => ({
    type: GET_DYNAMIC_CONSUL_DATA,
    payload,
});

export {
    // Root Action Type
    AppRootActions,
    // Action Name
    getAppAssistanceData,
    getDynamicConsulData,
};
