/**
 * @file Manages the util functions to get the faq urls listed on the website
 */

const path = require('path');
const fs = require('fs');

const FAQ_ARTICLES = require('../models/meta-info/faq-articles-v2.json');
const { getFaqCanonicalUrl } = require('../utils/urls');

// get faq urls for all the faq articles
const faqUrls = FAQ_ARTICLES.map((data) => {
    const {
        categoryName, folderName, articleTitle,
    } = data;

    const faqUrl = getFaqCanonicalUrl(categoryName, folderName, articleTitle);
    return `https://fi.money${faqUrl}`;
});

// eslint-disable-next-line consistent-return
fs.writeFile(path.join(__dirname, './faq-urls.csv'), faqUrls, (err) => {
    if (err) return console.log(err);

    console.log('Added faq urls in a file');
});
