import React, {
    useEffect, useState, useRef, Suspense, lazy,
} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../404Page';
import Landing from '../Landing';

import { getCategoriesData, getFoldersAndArticlesForCategory, getRelatedFaqsData } from '../actions';
import CategoryTitleSection from '../FaqCategory/CategoryTitleSection';
import {
    ContentHolder,
} from '../FaqStyled';
import convertSpaceToHyphenString from '../utils/convertSpaceToHyphenString';
import createFAQsLinks from '../utils/createFAQsLinks';
import ArticlesContainer from './ArticlesContainer';
// import RelatedFaqSection from './RelatedFaqSection';

const RelatedFaqSection = lazy(() => import('./RelatedFaqSection'));

interface ParamsObject {
    [key: string]: any
}

let categoryName: string;

const FaqArticles = () => {
    const [folderTitle, setFolderTitle] = useState('');
    const [articleTitle, setArticleTitle] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [articleId, setArticleId] = useState(null);
    const [isURLValid, setIsURLValid] = useState(true);

    const relatedFAQsDataRef = useRef(null);

    const params: ParamsObject = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SELECTED_CATEGORY_DATA = useSelector(
        (state: any) => state.faqReducer.selectedCategoryData,
        shallowEqual,
    );

    const hasSelectedCategoryData = useSelector(
        (state: any) => state.faqReducer.hasSelectedCategoryData,
        shallowEqual,
    );

    const hasSelectedCategoryFoldersData = useSelector(
        (state: any) => state.faqReducer.hasSelectedCategoryFoldersData,
        shallowEqual,
    );

    const RELATED_FAQS_DATA = useSelector(
        (state: any) => state.faqReducer.relatedFaqsData,
    );

    const hasCategoriesData = useSelector(
        (state: any) => state.faqReducer.hasCategoriesData,
        shallowEqual,
    );

    const CATEGORIES_DATA = useSelector(
        (state: any) => state.faqReducer.categoriesData,
    );

    const redirectToFAQsPage = () => {
        /**
         * redirect to selected category page incase both params name & id are present
         * else redirect to faqs categories page
         */
        setIsURLValid(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params]);

    /**
     * dispatch getRelatedFaqsData if articleId is present
     */
    useEffect(() => {
        if (articleId) {
            dispatch(getRelatedFaqsData({ faqId: articleId }));
        }
    }, [articleId, dispatch]);

    /**
     * if CATEGORIES_DATA and SELECTED_CATEGORY_DATA is not present in the store then
     * dispatch getCategoriesData to get all CATEGORIES_DATA
     * after getting CATEGORIES_DATA check the params name with the all name presents in the CATEGORIES_DATA
     * if it not matches then call the function redirectToFAQsPage
     * if id matches then dispatch getFoldersAndArticlesForCategory to get all SELECTED_CATEGORY_DATA
     */
    useEffect(() => {
        if (!hasSelectedCategoryData) {
            if (!hasCategoriesData) {
                dispatch(getCategoriesData());
            } else {
                const data = CATEGORIES_DATA.find((ele) => convertSpaceToHyphenString(ele.name) === convertSpaceToHyphenString(params.name));

                if (data) {
                    dispatch(getFoldersAndArticlesForCategory({ categoryId: data.id }));
                } else {
                    redirectToFAQsPage();
                }
            }
        }
    }, [hasSelectedCategoryData, hasCategoriesData, params.name, dispatch]);

    /**
     * if folders data is not present in the SELECTED_CATEGORY_DATA then call a fn redirectToFAQsPage
     */
    useEffect(() => {
        if (hasSelectedCategoryData && !hasSelectedCategoryFoldersData) {
            redirectToFAQsPage();
        }
    }, [hasSelectedCategoryData, hasSelectedCategoryFoldersData]);

    /**
     * if all folders and articles data present in the SELECTED_CATEGORY_DATA then
     * match the params title with the articles titles if it match then
     * get the id, title and dedescriptionText from the article data and render in the ui
     * use articleId to dispatch a getRelatedFaqsData call to get all RELATED_FAQS_DATA
     */
    useEffect(() => {
        if (hasSelectedCategoryData && hasSelectedCategoryFoldersData) {
            let selectedArticlesData;
            let selectedFolderTitle;

            // eslint-disable-next-line no-restricted-syntax
            for (const folders of SELECTED_CATEGORY_DATA.folders) {
                selectedFolderTitle = folders.name;
                // eslint-disable-next-line max-len
                selectedArticlesData = folders.articles.find((ele) => convertSpaceToHyphenString(ele.title) === convertSpaceToHyphenString(params.articleTitle));

                if (selectedArticlesData) {
                    break;
                } else {
                    selectedArticlesData = null;
                    selectedFolderTitle = null;
                }
            }

            if (selectedArticlesData) {
                const { id, title, description } = selectedArticlesData;
                setFolderTitle(selectedFolderTitle);
                setArticleId(id);
                setArticleTitle(title);
                setArticleDescription(description);
            } else {
                redirectToFAQsPage();
            }
        }
    }, [hasSelectedCategoryData, hasSelectedCategoryFoldersData, params, dispatch]);

    if (hasSelectedCategoryData) {
        categoryName = SELECTED_CATEGORY_DATA.name;
    }

    const getRelatedFAQsLink = (relatedFaq) => {
        let folderName;
        let articleName;
        if (relatedFaq.categoryId === SELECTED_CATEGORY_DATA.id) {
            const categoryFolder = SELECTED_CATEGORY_DATA.folders.find((folder) => (
                folder.id === relatedFaq.folderId
            ));
            folderName = categoryFolder.name;
            articleName = relatedFaq.title;
        } else {
            relatedFAQsDataRef.current = relatedFaq;
            dispatch(getFoldersAndArticlesForCategory({ categoryId: relatedFaq.categoryId }));
        }

        if (categoryName && folderName && articleName) {
            const relatedFaqLink = createFAQsLinks(categoryName, folderName, articleName);
            navigate(relatedFaqLink);
        }
    };

    /**
     * call the getRelatedFAQsLink function with the updated SELECTED_CATEGORY_DATA
     * using relatedFAQsDataRef here to store the reference of the current articleObject
     */
    useEffect(() => {
        if (hasSelectedCategoryData && hasSelectedCategoryFoldersData && relatedFAQsDataRef.current) {
            getRelatedFAQsLink(relatedFAQsDataRef.current);
        }
    }, [SELECTED_CATEGORY_DATA]);

    return (
        isURLValid ? (
            <Landing>
                <ContentHolder>
                    <CategoryTitleSection
                        categoryName={categoryName}
                        folderTitle={folderTitle}
                    />

                    <ArticlesContainer
                        articleTitle={articleTitle}
                        articleDescription={articleDescription}
                    />

                    {RELATED_FAQS_DATA.length ? (
                        <Suspense fallback={<div />}>
                            <RelatedFaqSection
                                relatedFaqData={RELATED_FAQS_DATA}
                                getRelatedFAQsLink={getRelatedFAQsLink}
                            />
                        </Suspense>
                    ) : null}
                </ContentHolder>
            </Landing>
        ) : (
            <NotFound />
        )
    );
};

export default FaqArticles;
