import {
    GET_FAQ_DATA, UPDATE_FAQ_DATA, GET_CATEGORIES_DATA, UPDATE_CATEGORIES_DATA,
    GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY, UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY,
    GET_RELATED_FAQS_DATA, UPDATE_RELATED_FAQS_DATA, GET_ACTIVE_FOLDER_INDEX,
} from './constants';
import { FaqRootActions } from './actions';

interface IFaqReducer {
    isLoading: boolean;
    categoriesData: Array<any>;
    folderData: Array<any>;
    articleData: Array<any>;
    selectedCategoryData: object;
    hasCategoriesData: boolean;
    hasSelectedCategoryData: boolean;
    hasSelectedCategoryFoldersData: boolean;
    relatedFaqsData: Array<any>;
    activeFolderIndex: number;
}

const initialState: IFaqReducer = {
    isLoading: true,
    categoriesData: [],
    folderData: [],
    articleData: [],
    selectedCategoryData: {},
    hasCategoriesData: false,
    hasSelectedCategoryData: false,
    hasSelectedCategoryFoldersData: false,
    relatedFaqsData: [],
    activeFolderIndex: -1,
};

const faqReducer = (
    state = initialState,
    action: FaqRootActions,
): IFaqReducer => {
    const copyState = {
        ...state,
    };

    switch (action.type) {
        case GET_FAQ_DATA:
        case GET_CATEGORIES_DATA:
        case GET_FOLDERS_AND_ARTICLES_FOR_CATEGORY:
        case GET_RELATED_FAQS_DATA:
            return {
                ...copyState,
                isLoading: true,
            };

        case UPDATE_FAQ_DATA: {
            const { folderData = [], articleData = [] } = action.payload;

            return {
                ...copyState,
                isLoading: false,
                folderData,
                articleData,
            };
        }

        case UPDATE_CATEGORIES_DATA: {
            const { data = [] } = action.payload;

            let hasCategoriesData = false;

            if (data.length) {
                hasCategoriesData = true;
            }

            return {
                ...copyState,
                isLoading: false,
                categoriesData: data,
                hasCategoriesData,
            };
        }

        case UPDATE_FOLDERS_AND_ARTICLES_FOR_CATEGORY: {
            const { data = {} } = action.payload;

            let hasSelectedCategoryData = false;
            let hasSelectedCategoryFoldersData = false;

            if (Object.keys(data).length) {
                hasSelectedCategoryData = true;

                if (data.folders.length) {
                    hasSelectedCategoryFoldersData = true;
                }
            }

            return {
                ...copyState,
                isLoading: false,
                selectedCategoryData: data,
                hasSelectedCategoryData,
                hasSelectedCategoryFoldersData,
            };
        }

        case UPDATE_RELATED_FAQS_DATA: {
            const { data = [] } = action.payload;

            return {
                ...copyState,
                isLoading: false,
                relatedFaqsData: data,
            };
        }

        case GET_ACTIVE_FOLDER_INDEX: {
            const { activeFolderIndex } = action.payload;

            return {
                ...copyState,
                activeFolderIndex,
            };
        }

        default:
            return state;
    }
};

export default faqReducer;
