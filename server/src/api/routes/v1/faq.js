const FaqRouter = require('express').Router();

const { faqController } = require('../../controllers');
const { asyncFnMiddleware } = require('../../middlewares/asyncFnMiddleware');

// get faqs combined data in a single request
FaqRouter.get('/all', asyncFnMiddleware(faqController.getFaqData));

// get faqs categories data
FaqRouter.get('/categories', asyncFnMiddleware(faqController.getAllCategories));

// get faqs folders data in a category
FaqRouter.get('/folders', asyncFnMiddleware(faqController.getAllFoldersInCategory));

// get faqs articles data in a folder
FaqRouter.get('/articles', asyncFnMiddleware(faqController.getAllArticlesInFolder));

// get all folders & articles data within a category
FaqRouter.get('/category-details', asyncFnMiddleware(faqController.getAllFoldersAndArticlesInCategory));

// get related faqs data wrt category or folder or article
FaqRouter.get('/related-faqs', asyncFnMiddleware(faqController.getRelatedFaqs));

module.exports = {
    FaqRouter,
};
