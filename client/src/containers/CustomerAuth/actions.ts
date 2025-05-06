import {
    GET_EMAIL_VERIFY_STATUS,
    UPDATE_EMAIL_VERIFY_STATUS,
    GET_NAME_BY_USER_ID,
} from './constants';

interface IGetEmailVerifyStatusPayload {
    requestId: string;
    hash: string;
}

interface IGetEmailVerifyStatusAction {
    type: typeof GET_EMAIL_VERIFY_STATUS;
    payload: IGetEmailVerifyStatusPayload;
}

interface IUpdateEmailVerifyStatusPayload {
    success: boolean;
}

interface IUpdateEmailVerifyStatusAction {
    type: typeof UPDATE_EMAIL_VERIFY_STATUS;
    payload: IUpdateEmailVerifyStatusPayload;
}

interface IGetNameByUserIdPayload {
    userId: string;
}

interface IGetNameByUserIdAction {
    type: typeof GET_NAME_BY_USER_ID;
    payload: IGetNameByUserIdPayload;
}

type customerAuthActions =
    | IGetEmailVerifyStatusAction
    | IUpdateEmailVerifyStatusAction
    | IGetNameByUserIdAction;

const getEmailVerifyStatusAction = (
    payload: IGetEmailVerifyStatusPayload,
): IGetEmailVerifyStatusAction => ({
    type: GET_EMAIL_VERIFY_STATUS,
    payload,
});

const updateEmailVerifyStatusAction = (
    payload: IUpdateEmailVerifyStatusPayload,
): IUpdateEmailVerifyStatusAction => ({
    type: UPDATE_EMAIL_VERIFY_STATUS,
    payload,
});

const getNameByUserIdAction = (
    payload: IGetNameByUserIdPayload,
): IGetNameByUserIdAction => ({
    type: GET_NAME_BY_USER_ID,
    payload,
});

export {
    customerAuthActions,
    getEmailVerifyStatusAction,
    updateEmailVerifyStatusAction,
    getNameByUserIdAction,
};
