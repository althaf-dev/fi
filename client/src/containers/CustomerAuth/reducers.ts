import {
    GET_EMAIL_VERIFY_STATUS,
    UPDATE_EMAIL_VERIFY_STATUS,
} from './constants';
import { customerAuthActions } from './actions';

interface ICustomerAuthReducer {
    emailVerification: object;
}

const initialState: ICustomerAuthReducer = {
    emailVerification: {
        loading: true,
        success: false,
    },
};

const customerAuthReducer = (
    state = initialState,
    action: customerAuthActions,
): ICustomerAuthReducer => {
    switch (action.type) {
        case GET_EMAIL_VERIFY_STATUS:
            return {
                ...state,
                emailVerification: {
                    ...state.emailVerification,
                    loading: true,
                },
            };

        case UPDATE_EMAIL_VERIFY_STATUS: {
            const { success } = action.payload;

            return {
                ...state,
                emailVerification: {
                    ...state.emailVerification,
                    loading: false,
                    success,
                },
            };
        }

        default:
            return state;
    }
};

export default customerAuthReducer;
