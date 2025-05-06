import {
    GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
    UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
} from './constants';
import { issueResolutionAction } from './actions';

interface IcxSupportReducer {
    isLoading: boolean;
    issueResolutionFeedback: string;
}

const initialState: IcxSupportReducer = {
    isLoading: true,
    issueResolutionFeedback: '',
};

const cxSupportReducer = (
    state = initialState,
    action: issueResolutionAction,
): IcxSupportReducer => {
    switch (action.type) {
        case GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS:
            return {
                ...state,
                isLoading: true,
            };

        case UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS: {
            const { issueResolutionFeedback } = action.payload;

            return {
                ...state,
                isLoading: false,
                issueResolutionFeedback,
            };
        }

        default:
            return state;
    }
};

export default cxSupportReducer;
