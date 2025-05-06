import {
    GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
    UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
} from './constants';

interface IGetIssueResolutionFeedbackVerifyStatusPayload {
    ticketId: number;
    answer: string;
}

interface IGetIssueResolutionFeedbackVerifyStatusAction {
    type: typeof GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS;
    payload: IGetIssueResolutionFeedbackVerifyStatusPayload;
}

interface IUpdateIssueResolutionFeedbackVerifyStatusPayload {
    issueResolutionFeedback: string;
}

interface IUpdateIssueResolutionFeedbackVerifyStatusAction {
    type: typeof UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS;
    payload: IUpdateIssueResolutionFeedbackVerifyStatusPayload;
}

type issueResolutionAction =
    | IGetIssueResolutionFeedbackVerifyStatusAction
    | IUpdateIssueResolutionFeedbackVerifyStatusAction

const getIssueResolutionFeedbackVerifyStatusAction = (
    payload: IGetIssueResolutionFeedbackVerifyStatusPayload,
): IGetIssueResolutionFeedbackVerifyStatusAction => ({
    type: GET_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
    payload,
});

const updateIssueResolutionFeedbackVerifyStatusAction = (
    payload: IUpdateIssueResolutionFeedbackVerifyStatusPayload,
): IUpdateIssueResolutionFeedbackVerifyStatusAction => ({
    type: UPDATE_ISSUE_RESOLUTION_FEEDBACK_VERIFY_STATUS,
    payload,
});

export {
    issueResolutionAction,
    getIssueResolutionFeedbackVerifyStatusAction,
    updateIssueResolutionFeedbackVerifyStatusAction,
};
