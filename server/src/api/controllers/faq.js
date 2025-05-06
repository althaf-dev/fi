/* eslint-disable consistent-return */
const { pathOr } = require('ramda');

const InAppHelpFaqClient = require('../../grpc/inAppHelp/faq/client');
const InAppHelpRecentActivityClient = require('../../grpc/inAppHelp/recentActivity/client');

const { success, grpcErrorHandler } = require('../../utils/ResponseWrapper');

const categoriesArrayForWebsite = ['Waitlist'];

/**
 * Format the categories BE data with camelCase support
 * @param  {object} item BE category object
 * @return {object}      formatted categories data
 */
const getFormattedCategoriesData = (item) => {
    const {
        id, name, description, icon_url, background_color, category_visibility,
    } = item;

    return {
        id,
        name,
        description,
        iconUrl: icon_url,
        backgroundColor: background_color,
        visibility: category_visibility,
    };
};

/**
 * Format the folders within a category BE data with camelCase support
 * @param  {object} item BE category object
 * @return {object}      formatted folders data
 */
const getFormattedFoldersData = (item) => {
    const {
        id, name, description, folder_visibility,
    } = item;

    return {
        id,
        name,
        description,
        visibility: folder_visibility,
    };
};

/**
 * Format the articles within a folder BE data with camelCase support
 * @param  {object} item BE category object
 * @return {object}      formatted articles data
 */
const getFormattedArticlesData = (item) => {
    const {
        id, title, description, description_text, category_id, folder_id, article_visibility,
    } = item;
    /**
     * deeplink format - ^^fi://screen?data=content^^deeplink label^^
     * regex - /(\^\^)(fi:\/\/screen\?data=.*)(\^\^)([a-zA-Z ]+)(\^\^)/gm
     * Need to replace "^^fi://screen?data=%08^^smart deposit^^" with "smart deposit"
     *
     * Code -
     * const regexToReplaceDeeplink = /(\^\^)(fi:\/\/screen\?data=.*)(\^\^)([a-zA-Z ]+)(\^\^)/gm;
     * const formattedDescription = description.replace(regexToReplaceDeeplink, '$4');
     *
     * This seems to be breaking for multiple deeplinks in a single article so using string split & array filter on the deeplink format
     */

    /**
     * transform the string with deeplinks to the string with no deeplinks
     *
     * example -
     * description = 'Check ^^fi://screen?data=%08%03^^My Rewards^^ here. And check for redeemed ^^redeemed_offers_screen^^Offers^^ section here.'
     * formattedDescription = 'Check My Rewards here. And check for redeemed Offers section here.'
     */
    const splittedDescription = description.split('^^');
    // HACK: Put a check for underscore(_) as few deeplinks are not getting marshalled property from BE
    // since we are splitting on ^^, we are filtering the strings incase they starts with '<p' or ends with '</p'
    const filteredDescriptionArr = splittedDescription.filter((itm) => itm.startsWith('<p') || itm.endsWith('</p>') || !(itm.startsWith('fi://') || itm.includes('_')));

    const formattedDescription = filteredDescriptionArr.join('');

    return {
        id,
        title,
        description: formattedDescription,
        descriptionText: description_text,
        categoryId: category_id,
        folderId: folder_id,
        visibility: article_visibility,
    };
};

/**
 * Get all categories data(no folders or articles data) for specified source 'WEBSITE' or 'APP'
 * This can be used for internal API calls also where we directly send just data back.
 * No use of response object in that case.
 */
const getAllCategories = async (_, res, next, isInternalCaller) => {
    const requestPayload = {
        faq_fetch_source: 'WEBSITE',
    };

    try {
        const response = await InAppHelpFaqClient.getAllCategories(requestPayload);

        const categories = pathOr([], ['categories'], response);

        const data = categories.map(getFormattedCategoriesData);

        if (isInternalCaller) {
            return data;
        }

        res.send({ data });
    } catch (err) {
        if (isInternalCaller) {
            return [];
        }
        const { statusCode, message } = grpcErrorHandler(err);

        next({
            description: message,
            statusCode,
            message: 'Failed to fetch faq categories',
            ctrl: 'faq',
            fn: 'getAllCategories',
            rawError: err,
        });
    }
};

/**
 * Get all folders data within a category(no category or articles data) for specified source 'WEBSITE' or 'APP' & category ID.
 * This can be used for internal API calls also where we directly send just data back.
 * No use of response object in that case.
 */
const getAllFoldersInCategory = async (req, res, next, isInternalCaller, folderPayload) => {
    let requestPayload;

    if (isInternalCaller) {
        requestPayload = folderPayload;
    } else {
        const { categoryId } = req.query;

        requestPayload = {
            faq_fetch_source: 'WEBSITE',
            category_id: categoryId,
        };
    }

    if (!requestPayload.faq_fetch_source || !requestPayload.category_id) {
        if (isInternalCaller) {
            return [];
        }

        res.status(400).send({
            message: 'Failed to fetch folders within a category',
            description: 'Mandatory parameters are missing',
        });

        return;
    }

    try {
        const response = await InAppHelpFaqClient.getAllFoldersInCategory(requestPayload);

        const folders = pathOr([], ['folders'], response);

        const data = folders.map(getFormattedFoldersData);

        if (isInternalCaller) {
            return data;
        }

        res.send({ data });
    } catch (err) {
        if (isInternalCaller) {
            return [];
        }
        const { statusCode, message } = grpcErrorHandler(err);

        next({
            description: message,
            statusCode,
            message: 'Failed to fetch folders within a category',
            ctrl: 'faq',
            fn: 'getAllFoldersInCategory',
            rawError: err,
        });
    }
};

/**
 * Get all articles data within a folders(no category or folder data) for specified source 'WEBSITE' or 'APP' & folder ID.
 * This can be used for internal API calls also where we directly send just data back.
 * No use of response object in that case.
 */
const getAllArticlesInFolder = async (req, res, next, isInternalCaller, articlePayload) => {
    let requestPayload;

    if (isInternalCaller) {
        requestPayload = articlePayload;
    } else {
        const { folderId } = req.query;

        requestPayload = {
            faq_fetch_source: 'WEBSITE',
            folder_id: folderId,
        };
    }

    if (!requestPayload.faq_fetch_source || !requestPayload.folder_id) {
        if (isInternalCaller) {
            return [];
        }

        res.status(400).send({
            message: 'Failed to fetch articles within a folder',
            description: 'Mandatory parameters are missing',
        });

        return;
    }

    try {
        const response = await InAppHelpFaqClient.getAllArticlesInFolder(requestPayload);

        const articles = pathOr([], ['articles'], response);

        const data = articles.map(getFormattedArticlesData);

        if (isInternalCaller) {
            return data;
        }

        res.send({ data });
    } catch (err) {
        if (isInternalCaller) {
            return [];
        }
        const { statusCode, message } = grpcErrorHandler(err);

        next({
            description: message,
            statusCode,
            message: 'Failed to fetch articles within a folder',
            ctrl: 'faq',
            fn: 'getAllArticlesInFolder',
            rawError: err,
        });
    }
};

/**
 * Get category related data with their folders & articles data for specified source 'WEBSITE' or 'APP' & category ID.
 * e.g.
 * data = {
 *   ...categoryData,
 *   folders: [{
 *     ...folderData,
 *     articles: [{
 *       ...articlesData,
 *     }]
 *   }]
 * }
 */
const getAllFoldersAndArticlesInCategory = async (req, res, next) => {
    const { categoryId } = req.query;

    if (!categoryId) {
        res.status(400).send({
            message: 'Failed to fetch all folders & articles data within a category',
            description: 'Mandatory parameters are missing',
        });

        return;
    }

    const sourcePayload = {
        faq_fetch_source: 'WEBSITE',
    };

    const requestPayload = {
        ...sourcePayload,
        category_id: categoryId,
    };

    try {
        const categoriesData = await getAllCategories(req, res, next, true);
        const selectedCategoryData = categoriesData.find((item) => item.id === categoryId);

        const foldersData = await getAllFoldersInCategory(req, res, next, true, requestPayload);

        const foldersAndArticlesData = await Promise.all(
            foldersData.map(async (folder) => {
                const articlePayload = {
                    ...sourcePayload,
                    folder_id: folder.id,
                };

                const articlesData = await getAllArticlesInFolder(req, res, next, true, articlePayload);

                return {
                    ...folder,
                    articles: articlesData,
                };
            }),
        );

        const data = {
            ...selectedCategoryData,
            folders: foldersAndArticlesData,
        };

        res.send({ data });
    } catch (err) {
        const { statusCode, message } = grpcErrorHandler(err);
        next({
            description: message,
            statusCode,
            message: 'Failed to fetch all folders & articles data within a category',
            ctrl: 'faq',
            fn: 'getAllFoldersAndArticlesInCategory',
            rawError: err,
        });
    }
};

/**
 * Get related faqs articles data for specified faq type CATEGORY|FOLDER|ARTICLE & faq ID.
 */
const getRelatedFaqs = async (req, res, next) => {
    const { faqId, faqType } = req.query;

    if (!faqId) {
        res.status(400).send({
            message: 'Failed to fetch related faqs',
            description: 'Mandatory parameters are missing',
        });

        return;
    }

    const requestPayload = {
        faq: {
            faq_id: faqId,
            faq_type: faqType || 'ARTICLE', // enum CATEGORY, FOLDER, ARTICLE
        },
    };

    try {
        const response = await InAppHelpRecentActivityClient.getRelatedFaqs(requestPayload);

        const relatedArticles = pathOr([], ['related_articles'], response);

        const data = relatedArticles.map(getFormattedArticlesData);

        res.send({ data });
    } catch (err) {
        const { statusCode, message } = grpcErrorHandler(err);
        next({
            description: message,
            statusCode,
            message: 'Failed to fetch related faqs',
            ctrl: 'faq',
            fn: 'getRelatedFaqs',
            rawError: err,
        });
    }
};

/**
 * Get FAQ data with all folders & all articles data. This API is going to be deprecated soon.
 * e.g.
 * data = {
 *   folderData,
 *   articleData,
 * }
 */
const getFaqData = async (req, res, next) => {
    try {
        const categoryPayload = {
            faq_fetch_source: 'WEBSITE',
        };

        // get all categories data
        let categoryData = await getAllCategories(req, res, next, true);
        categoryData = categoryData.filter((item) => categoriesArrayForWebsite.includes(item.name));

        // get all folders data
        const folderResponse = await Promise.all(
            categoryData.map((value) => {
                const folderPayload = {
                    ...categoryPayload,
                    category_id: value.id,
                };

                return InAppHelpFaqClient.getAllFoldersInCategory(folderPayload);
            }),
        );

        const folderData = [].concat(
            ...folderResponse.map((response) => response.folders.map(getFormattedFoldersData)),
        );

        // get all articles data
        const articleResponse = await Promise.all(
            folderData.map((value) => {
                const folderPayload = {
                    ...categoryPayload,
                    folder_id: value.id,
                };

                return InAppHelpFaqClient.getAllArticlesInFolder(folderPayload);
            }),
        );

        const articleData = articleResponse.map((response) => response.articles.map(getFormattedArticlesData));

        const responseData = {
            folderData,
            articleData,
        };

        success(res, responseData);
    } catch (err) {
        const { statusCode, message } = grpcErrorHandler(err);
        next({
            description: message,
            statusCode,
            message: 'Failed to fetch faq data',
            ctrl: 'faq',
            fn: 'getFaqData',
            rawError: err,
        });
    }
};

/**
 * Get FAQ data with all categories & their respective folders & folder's respective articles data
 * e.g.
 * data = [{
 *   ...categoryData,
 *   folders: [{
 *     ...folderData,
 *     articles: [{
 *       ...articlesData,
 *     }]
 *   }]
 * }]
 */
const getFaqDataV2 = async (req, res, next) => {
    try {
        const sourcePayload = {
            faq_fetch_source: 'WEBSITE',
        };

        // get all categories data
        const categoriesData = await getAllCategories(req, res, next, true);

        // get all categories, folders & articles data in a single JSON
        const data = await Promise.all(
            categoriesData.map(async (category) => {
                const folderPayload = {
                    ...sourcePayload,
                    category_id: category.id,
                };

                const foldersData = await getAllFoldersInCategory(req, res, next, true, folderPayload);

                const foldersAndArticlesData = await Promise.all(
                    foldersData.map(async (folder) => {
                        const articlePayload = {
                            ...sourcePayload,
                            folder_id: folder.id,
                        };

                        const articlesData = await getAllArticlesInFolder(req, res, next, true, articlePayload);

                        return {
                            ...folder,
                            articles: articlesData,
                        };
                    }),
                );

                return {
                    ...category,
                    folders: foldersAndArticlesData,
                };
            }),
        );

        res.send({ data });
    } catch (err) {
        const { statusCode, message } = grpcErrorHandler(err);
        next({
            description: message,
            statusCode,
            message: 'Failed to fetch faq data',
            ctrl: 'faq',
            fn: 'getFaqDataV2',
            rawError: err,
        });
    }
};

module.exports = {
    getFaqData,
    getFaqDataV2,
    getAllCategories,
    getAllFoldersInCategory,
    getAllArticlesInFolder,
    getRelatedFaqs,
    getAllFoldersAndArticlesInCategory,
};
