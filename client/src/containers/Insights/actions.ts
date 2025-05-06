export const GMAIL_GET_STARTED = 'GMAIL_GET_STARTED';
export const SET_AUTH_URL = 'SET_AUTH_URL';
export const EXHAUSTED_INSIGHTS = 'EXHAUSTED_INSIGHTS';
export const CHECK_ACCESS_STATUS = 'CHECK_ACCESS_STATUS';
export const GET_EMAIL_SYNC_STATUS = 'GET_EMAIL_SYNC_STATUS';
export const GET_ALREADY_EXIST_EMAIL_SYNC_STATUS = 'GET_ALREADY_EXIST_EMAIL_SYNC_STATUS';
export const GET_INSIGHTS_EMAIL = 'GET_INSIGHTS_EMAIL';
export const UPDATE_EMAIL_SYNC_STATUS = 'UPDATE_EMAIL_SYNC_STATUS';
export const UPDATE_ACTIVE_STATE = 'UPDATE_ACTIVE_STATE';
export const UPDATE_INSIGHT_QUIZ_STATE = 'UPDATE_INSIGHT_QUIZ_STATE';
export const PARCEL_OPEN_STATUS = 'PARCEL_OPEN_STATUS';
export const SET_ACTIVE_PAGE_STATUS = 'SET_ACTIVE_PAGE_STATUS';
export const SET_PREVIOUS_PAGE_STATUS = 'SET_PREVIOUS_PAGE_STATUS';
export const SET_GOLDEN_TICKET_NUMBER = 'SET_GOLDEN_TICKET_NUMBER';
export const SET_GOLDEN_TICKET_TYPE = 'SET_GOLDEN_TICKET_TYPE';
export const SET_USER_DETAIL = 'SET_USER_DETAIL';
export const UPDATE_SYNC_MODAL_STATUS = 'UPDATE_SYNC_MODAL_STATUS';
export const UPDATE_REDIRECT_URL = 'UPDATE_REDIRECT_URL';
export const SET_ANSWER_STATE = 'SET_ANSWER_STATE';
export const SET_INSIGHTS_EMAIL = 'SET_INSIGHTS_EMAIL';
export const UNLINK_ACCOUNT = 'UNLINK_ACCOUNT';

// Interface
export interface IUserDetail {
    name: string;
    email: string;
    mobile: number;
}

// Action Type .......................
interface IGmailGetStartedAction {
    type: typeof GMAIL_GET_STARTED;
}

interface IGmailStoreUrlAction {
    type: typeof SET_AUTH_URL;
    payload: string;
}

interface ICheckAccessStatusAction {
    type: typeof CHECK_ACCESS_STATUS;
}

interface IGetEmailSyncStatusAction {
    type: typeof GET_EMAIL_SYNC_STATUS;
    payload: string;
}

interface IGetAlreadyExistEmailSyncStatusAction {
    type: typeof GET_ALREADY_EXIST_EMAIL_SYNC_STATUS;
}

interface IGetInsightsEmail {
    type: typeof GET_INSIGHTS_EMAIL;
}

interface IUpdateEmailSyncStatusAction {
    type: typeof UPDATE_EMAIL_SYNC_STATUS;
    payload: number;
}

interface IUpdateActiveStateAction {
    type: typeof UPDATE_ACTIVE_STATE;
    payload: number;
}

interface IUpdateInsightQuizState {
    type: typeof UPDATE_INSIGHT_QUIZ_STATE;
    payload: number;
}

interface IParcelOpenStatusAction {
    type: typeof PARCEL_OPEN_STATUS;
    payload: boolean;
}

interface ISetActivePageStatus {
    type: typeof SET_ACTIVE_PAGE_STATUS;
    payload: number;
}
interface ISetPreviousPageStatus {
    type: typeof SET_PREVIOUS_PAGE_STATUS;
    payload: number;
}

interface ISetGoldenTicketNumber {
    type: typeof SET_GOLDEN_TICKET_NUMBER;
    payload: string;
}

interface ISetGoldenTicketType {
    type: typeof SET_GOLDEN_TICKET_TYPE;
    payload: string;
}

interface ISetUSerDetail {
    type: typeof SET_USER_DETAIL;
    payload: IUserDetail;
}

interface IUpdateSyncModal {
    type: typeof UPDATE_SYNC_MODAL_STATUS;
    payload: boolean;
}

interface IRedirectUrl {
    type: typeof UPDATE_REDIRECT_URL;
    payload: string;
}

interface ISetAnswerState {
    type: typeof SET_ANSWER_STATE;
    payload: boolean[];
}

interface ISetInsightsEmailPayload {
    success: boolean;
    emailId?: string;
}

interface ISetInsightsEmail {
    type: typeof SET_INSIGHTS_EMAIL;
    payload: ISetInsightsEmailPayload;
}

interface IUnlinkAccount {
    type: typeof UNLINK_ACCOUNT;
}

interface IExhaustedInsights {
    type: typeof EXHAUSTED_INSIGHTS;
    payload: any;
}

// Root Action Type
type InsightsActions =
    | IGetEmailSyncStatusAction
    | IGetAlreadyExistEmailSyncStatusAction
    | IGetInsightsEmail
    | IUpdateEmailSyncStatusAction
    | IGmailGetStartedAction
    | IGmailStoreUrlAction
    | ICheckAccessStatusAction
    | IUpdateActiveStateAction
    | IUpdateInsightQuizState
    | IParcelOpenStatusAction
    | ISetActivePageStatus
    | ISetGoldenTicketNumber
    | ISetUSerDetail
    | ISetGoldenTicketType
    | ISetPreviousPageStatus
    | IUpdateSyncModal
    | IRedirectUrl
    | ISetInsightsEmail
    | ISetAnswerState
    | IUnlinkAccount
    | IExhaustedInsights;

// All ACtions..............................

const checkAccessStatusAction = (): InsightsActions => ({ type: CHECK_ACCESS_STATUS });

const getEmailSyncStatusAction = (payload: string): InsightsActions => ({
    type: GET_EMAIL_SYNC_STATUS,
    payload,
});

const getAlreadyExistEmailSyncStatusAction = (): InsightsActions => ({ type: GET_ALREADY_EXIST_EMAIL_SYNC_STATUS });

const getInsightsEmail = (): InsightsActions => ({ type: GET_INSIGHTS_EMAIL });

const updateEmailSyncStatusAction = (payload: number): InsightsActions => ({
    type: UPDATE_EMAIL_SYNC_STATUS,
    payload,
});

const getStartedInsightAction = (): InsightsActions => ({ type: GMAIL_GET_STARTED });

const exhaustedInsightsAction = (payload): InsightsActions => ({
    type: EXHAUSTED_INSIGHTS,
    payload,
});

const setAuthUrlInsightAction = (payload: string): InsightsActions => ({
    type: SET_AUTH_URL,
    payload,
});

const updateActiveStateInsightAction = (payload: number): InsightsActions => ({
    type: UPDATE_ACTIVE_STATE,
    payload,
});

const updateInsightQuizState = (payload: number): InsightsActions => ({
    type: UPDATE_INSIGHT_QUIZ_STATE,
    payload,
});

const updateParcelOpenStatusAction = (payload: boolean): InsightsActions => ({
    type: PARCEL_OPEN_STATUS,
    payload,
});

const setActivePageStatus = (payload: number): InsightsActions => ({
    type: SET_ACTIVE_PAGE_STATUS,
    payload,
});

const setPreviousPageStatus = (payload: number): InsightsActions => ({
    type: SET_PREVIOUS_PAGE_STATUS,
    payload,
});

const setTicketNumber = (payload: string): InsightsActions => ({
    type: SET_GOLDEN_TICKET_NUMBER,
    payload,
});
const setTicketType = (payload: string): InsightsActions => ({
    type: SET_GOLDEN_TICKET_TYPE,
    payload,
});

const setUserDetail = (payload: IUserDetail): InsightsActions => ({
    type: SET_USER_DETAIL,
    payload,
});

const updateSyncModal = (payload: boolean): InsightsActions => ({
    type: UPDATE_SYNC_MODAL_STATUS,
    payload,
});

const updateRedirectUrlAction = (payload: string): InsightsActions => ({
    type: UPDATE_REDIRECT_URL,
    payload,
});

const setAnswerState = (payload: boolean[]): InsightsActions => ({
    type: SET_ANSWER_STATE,
    payload,
});

const setInsightsEmail = (payload: ISetInsightsEmailPayload): InsightsActions => ({
    type: SET_INSIGHTS_EMAIL,
    payload,
});

const unlinkAccountAction = (): InsightsActions => ({ type: UNLINK_ACCOUNT });

export {
    InsightsActions,
    getEmailSyncStatusAction,
    getAlreadyExistEmailSyncStatusAction,
    getInsightsEmail,
    updateEmailSyncStatusAction,
    getStartedInsightAction,
    setAuthUrlInsightAction,
    updateActiveStateInsightAction,
    updateInsightQuizState,
    updateParcelOpenStatusAction,
    setActivePageStatus,
    setTicketNumber,
    setTicketType,
    setUserDetail,
    setPreviousPageStatus,
    updateSyncModal,
    checkAccessStatusAction,
    updateRedirectUrlAction,
    setAnswerState,
    setInsightsEmail,
    unlinkAccountAction,
    exhaustedInsightsAction,
};
