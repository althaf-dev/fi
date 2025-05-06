import {
    SET_APP_ASSISTANCE_DATA, SET_DYNAMIC_CONSUL_DATA,
} from './constants';
import { AppRootActions } from './actions';

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

const appReducer = (
    state = initialState,
    action: AppRootActions,
): IAppReducer => {
    const copyState = {
        ...state,
    };

    switch (action.type) {
        case SET_APP_ASSISTANCE_DATA: {
            const { data = {} } = action.payload;

            if (Object.keys(data).length) {
                return {
                    ...copyState,
                    appAssistanceData: data,
                };
            }

            return state;
        }

        case SET_DYNAMIC_CONSUL_DATA: {
            const { path, data = {} } = action.payload;

            if (Object.keys(data).length) {
                return {
                    ...copyState,
                    dynamicConsulData: {
                        ...copyState.dynamicConsulData,
                        [path]: data,
                    },
                };
            }

            return state;
        }

        default:
            return state;
    }
};

export default appReducer;
