import {
    UPDATE_WEALTH_DATA,
} from './constants';
import { WealthTncRootActions } from './actions';

interface IWealthTncReducer {
    wealthTncComplaintsData: object;
}

const initialState: IWealthTncReducer = {
    wealthTncComplaintsData: {
        totalAtBeginningOfMonth: 0,
        receivedDuringMonth: 0,
        resolvedDuringMonth: 0,
        pendingAtEndOfMonth: 0,
        reasonForPendency: 0,
        month: '31-Oct-2021',
    },
};

const wealthTncReducer = (
    state = initialState,
    action: WealthTncRootActions,
): IWealthTncReducer => {
    const copyState = {
        ...state,
    };

    switch (action.type) {
        case UPDATE_WEALTH_DATA: {
            const { data = {} } = action.payload;

            if (Object.keys(data).length) {
                return {
                    ...copyState,
                    wealthTncComplaintsData: data,
                };
            }

            return state;
        }

        default:
            return state;
    }
};

export default wealthTncReducer;
