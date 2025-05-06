import {
    getInsightQuizState,
    getParcelOpenStatus,
    setInsightActiveState,
    setInsightQuizState,
    setParcelOpenStatus,
} from '../../utils/storageService';

import {
    InsightsActions,
    IUserDetail,
    SET_AUTH_URL,
    PARCEL_OPEN_STATUS,
    SET_ACTIVE_PAGE_STATUS,
    SET_GOLDEN_TICKET_NUMBER,
    SET_GOLDEN_TICKET_TYPE,
    SET_PREVIOUS_PAGE_STATUS,
    SET_USER_DETAIL,
    UPDATE_EMAIL_SYNC_STATUS,
    UPDATE_ACTIVE_STATE,
    UPDATE_INSIGHT_QUIZ_STATE,
    UPDATE_SYNC_MODAL_STATUS,
    UPDATE_REDIRECT_URL,
    SET_ANSWER_STATE,
    SET_INSIGHTS_EMAIL,
    EXHAUSTED_INSIGHTS,
} from './actions';

export interface IInsightReducer {
    insightActiveState: number;
    insightConsentUrl: string;
    insightQuizState: number;
    insightParcelOpenStatus: boolean;
    activeStatus: number;
    previousStatus: number;
    GoldenTicketNumber: string;
    GoldenTicketType: string;
    userDetail: IUserDetail;
    openSyncModal: boolean;
    emailSyncProgress: number;
    clearLoginData: boolean;
    redirectUrl: string;
    answerState: boolean[];
    insightsEmail: string;
    errInInsightsEmail: boolean;
    hasExhaustedInsights: boolean;
}

const initialState: IInsightReducer = {
    insightActiveState: null, // getInsightActiveState(),
    insightConsentUrl: null,
    insightQuizState: getInsightQuizState(),
    insightParcelOpenStatus: getParcelOpenStatus(),
    activeStatus: null,
    previousStatus: null,
    GoldenTicketNumber: null,
    GoldenTicketType: null,
    userDetail: null,
    openSyncModal: false,
    emailSyncProgress: null,
    clearLoginData: false,
    redirectUrl: null,
    answerState: [false, false, false, true, false],
    insightsEmail: null,
    errInInsightsEmail: false,
    hasExhaustedInsights: false,
};

const insightReducer = (
    state = initialState,
    action: InsightsActions,
): IInsightReducer => {
    switch (action.type) {
        case SET_AUTH_URL:
            return {
                ...state,
                insightConsentUrl: action.payload,
            };

        case EXHAUSTED_INSIGHTS:
            return {
                ...state,
                hasExhaustedInsights: action.payload,
            };

        case UPDATE_EMAIL_SYNC_STATUS:
            return {
                ...state,
                emailSyncProgress: action.payload,
            };

        case UPDATE_ACTIVE_STATE:
            setInsightActiveState(action.payload);
            return {
                ...state,
                insightActiveState: action.payload,
            };

        case UPDATE_INSIGHT_QUIZ_STATE:
            setInsightQuizState(action.payload);
            return {
                ...state,
                insightQuizState: action.payload,
            };

        case PARCEL_OPEN_STATUS:
            setParcelOpenStatus(action.payload);
            return {
                ...state,
                insightParcelOpenStatus: action.payload,
            };

        case SET_ACTIVE_PAGE_STATUS:
            return {
                ...state,
                activeStatus: action.payload,
            };

        case SET_PREVIOUS_PAGE_STATUS:
            return {
                ...state,
                previousStatus: action.payload,
            };

        case SET_GOLDEN_TICKET_NUMBER:
            return {
                ...state,
                GoldenTicketNumber: action.payload,
            };

        case SET_GOLDEN_TICKET_TYPE:
            return {
                ...state,
                GoldenTicketType: action.payload,
            };
        case SET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload,
            };

        case UPDATE_SYNC_MODAL_STATUS:
            return {
                ...state,
                openSyncModal: action.payload,
            };

        case UPDATE_REDIRECT_URL:
            return {
                ...state,
                redirectUrl: action.payload,
            };

        case SET_ANSWER_STATE:
            return {
                ...state,
                answerState: action.payload,
            };

        case SET_INSIGHTS_EMAIL: {
            const { success, emailId } = action.payload;

            if (success === false) {
                return {
                    ...state,
                    errInInsightsEmail: true,
                    insightsEmail: null,
                };
            }

            return {
                ...state,
                errInInsightsEmail: false,
                insightsEmail: emailId,
            };
        }

        default:
            return state;
    }
};

export default insightReducer;
