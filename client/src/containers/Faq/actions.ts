import {
    GET_FAQ_DATA, UPDATE_FAQ_DATA, GET_CATEGORIES_DATA, UPDATE_CATEGORIES_DATA,
    GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY, UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY,
    GET_RELATED_FAQS_DATA, UPDATE_RELATED_FAQS_DATA, GET_ACTIVE_FOLDER_INDEX,
} from './constants';

interface IGetDataWithoutPayload {
    type: typeof GET_FAQ_DATA
        | typeof GET_CATEGORIES_DATA;
}

interface IGetDataWithPayload {
    type: typeof GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY
        | typeof GET_RELATED_FAQS_DATA
        | typeof UPDATE_FAQ_DATA
        | typeof UPDATE_CATEGORIES_DATA
        | typeof UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY
        | typeof UPDATE_RELATED_FAQS_DATA
        | typeof GET_ACTIVE_FOLDER_INDEX;
    payload: any;
}

type FaqRootActions = IGetDataWithoutPayload | IGetDataWithPayload;

const getFaqData = (): FaqRootActions => ({
    type: GET_FAQ_DATA,
});

const getCategoriesData = (): FaqRootActions => ({
    type: GET_CATEGORIES_DATA,
});

const getFoldersAndArticlesForCategory = (payload: any): FaqRootActions => ({
    type: GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY,
    payload,
});

const getRelatedFaqsData = (payload: any): FaqRootActions => ({
    type: GET_RELATED_FAQS_DATA,
    payload,
});

const getActiveFolderIndex = (payload: any): FaqRootActions => ({
    type: GET_ACTIVE_FOLDER_INDEX,
    payload,
});

export {
    // Root Action Type
    FaqRootActions,
    // Action Name
    getFaqData,
    getCategoriesData,
    getFoldersAndArticlesForCategory,
    getRelatedFaqsData,
    getActiveFolderIndex,
};
