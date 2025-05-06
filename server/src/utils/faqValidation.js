const InAppHelpFaqClient = require('../grpc/inAppHelp/faq/client');

const parseName = (name) => decodeURIComponent(name
    .split(' ')
    .join('')
    .split('-')
    .join('')
    .replace('?', '')
    .toLowerCase());

const getCategoryId = async (categoryName) => {
    const requestPayload = {
        faq_fetch_source: 'WEBSITE',
    };

    const response = await InAppHelpFaqClient.getAllCategories(requestPayload);

    const category = response.categories.find((c) => parseName(c.name) === parseName(categoryName));

    return category?.id;
};

const getFolderId = async (categoryId, folderName) => {
    const requestPayload = {
        faq_fetch_source: 'WEBSITE',
        category_id: categoryId,
    };

    const response = await InAppHelpFaqClient.getAllFoldersInCategory(requestPayload);

    const folder = response.folders.find((f) => parseName(f.name) === parseName(folderName));

    return folder?.id;
};

const getArticleId = async (folderId, articleName) => {
    const requestPayload = {
        faq_fetch_source: 'WEBSITE',
        folder_id: folderId,
    };

    const response = await InAppHelpFaqClient.getAllArticlesInFolder(requestPayload);

    const article = response.articles.find((a) => parseName(a.title) === parseName(articleName));

    return article?.id;
};

module.exports = {
    getCategoryId,
    getFolderId,
    getArticleId,
};
