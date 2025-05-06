import convertSpaceToHyphenString from './convertSpaceToHyphenString';

/**
 * Function takes a string and create a FaqsUrls accroding to the params
 * @param categoryNameData {string}
 * @param folderTitleData {string}
 * @param articleTitleData {string}
 * @returns FAQsUrl {{string}}
 */
const createFAQsLinks = (categoryNameData: string, folderTitleData?: string, articleTitleData?: string) => {
    const FAQs = 'FAQs';
    let categoryName;
    if (categoryNameData) {
        categoryName = convertSpaceToHyphenString(categoryNameData);
    }

    if (folderTitleData && articleTitleData) {
        const folderTitle = convertSpaceToHyphenString(folderTitleData);
        const articleTitle = convertSpaceToHyphenString(articleTitleData);
        return `/${FAQs}/${categoryName}/${folderTitle}/${articleTitle}`;
    }

    return `/${FAQs}/${categoryName}`;
};

export default createFAQsLinks;
