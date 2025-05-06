import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { useParams } from 'react-router-dom';
import NotFound from '../../404Page';
import { getActiveFolderIndex, getCategoriesData, getFoldersAndArticlesForCategory } from '../actions';
import CategoryTitleSection from '../FaqCategory/CategoryTitleSection';
import {
    ContentHolder,
} from '../FaqStyled';
import convertSpaceToHyphenString from '../utils/convertSpaceToHyphenString';
import Landing from '../Landing';

import FolderContainer from './FolderContainer';

interface ParamsObject {
    [key: string]: any
}

let categoryName: string;
let categoryIcon: string;

const FaqFolders = () => {
    const dispatch = useDispatch();
    const params: ParamsObject = useParams();

    const [isValidURL, setIsValidURL] = useState(true);

    const CATEGORIES_DATA = useSelector(
        (state: any) => state.faqReducer.categoriesData,
    );

    const hasCategoriesData = useSelector(
        (state: any) => state.faqReducer.hasCategoriesData,
    );

    const SELECTED_CATEGORY_DATA = useSelector(
        (state: any) => state.faqReducer.selectedCategoryData,
    );

    const hasSelectedCategoryData = useSelector(
        (state: any) => state.faqReducer.hasSelectedCategoryData,
        shallowEqual,
    );

    const hasSelectedCategoryFoldersData = useSelector(
        (state: any) => state.faqReducer.hasSelectedCategoryFoldersData,
        shallowEqual,
    );

    const ACTIVE_FOLDER_INDEX = useSelector(
        (state: any) => state.faqReducer.activeFolderIndex,
    );

    const setActiveFolderIndex = (index) => {
        const activeFolderIndex = ACTIVE_FOLDER_INDEX === index ? -1 : index;
        dispatch(getActiveFolderIndex({ activeFolderIndex }));
    };

    /**
     * Check the CATEGORIES_DATA empty or not
     * if empty then
     * dispatch a getCategoriesData call and get the CATEGORIES_DATA
     * if CATEGORIES_DATA not empty then
     * matches the params name with the all name present in CATEGORIES_DATA
     * if name matches then
     * get the categoryId and check the conditions
     * if SELECTED_CATEGORY_DATA is not in the store or SELECTED_CATEGORY_DATA id is not matches with the categoryId then
     * dispatch a getFoldersAndArticlesForCategory call to get SELECTED_CATEGORY_DATA
     * if if not get any data during the matching of params name with the CATEGORIES_DATA then redirect to the FAQ's page
     */
    useEffect(() => {
        window.scrollTo(0, 0);
        if (hasCategoriesData) {
            const data = CATEGORIES_DATA.find((ele) => convertSpaceToHyphenString(ele.name) === convertSpaceToHyphenString(params.name));

            if (data) {
                const categoryId = data.id;
                if (!hasSelectedCategoryData) {
                    dispatch(getFoldersAndArticlesForCategory({ categoryId }));
                } else if (hasSelectedCategoryData && SELECTED_CATEGORY_DATA.id !== categoryId) {
                    dispatch(getActiveFolderIndex({ activeFolderIndex: -1 }));
                    dispatch(getFoldersAndArticlesForCategory({ categoryId }));
                }
            } else {
                setIsValidURL(false);
            }
        } else {
            dispatch(getCategoriesData());
        }
    }, [hasCategoriesData, hasSelectedCategoryData, dispatch, params.name]);

    if (hasSelectedCategoryData) {
        categoryName = SELECTED_CATEGORY_DATA.name;
        categoryIcon = SELECTED_CATEGORY_DATA.iconUrl;
    }

    return (
        isValidURL ? (
            <Landing>
                <ContentHolder>
                    <CategoryTitleSection
                        categoryName={categoryName}
                        categoryIcon={categoryIcon}
                    />
                    {hasSelectedCategoryData && hasSelectedCategoryFoldersData
                        ? (
                            <FolderContainer
                                folders={SELECTED_CATEGORY_DATA.folders}
                                activeFolderIndex={ACTIVE_FOLDER_INDEX}
                                categoryName={categoryName}
                                setActiveFolderIndex={setActiveFolderIndex}
                            />
                        ) : null}
                </ContentHolder>
            </Landing>
        ) : (
            <NotFound />
        )
    );
};

export default FaqFolders;
