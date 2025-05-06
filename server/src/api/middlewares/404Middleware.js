const fs = require('fs');
const path = require('path');
const { validateStockSymbol } = require('../../utils/usStockSymbolValidation');
const { getCategoryId, getFolderId, getArticleId } = require('../../utils/faqValidation');

const render404Page = (res) => {
    const filePath = path.join(__dirname, '..', '..', 'assets', 'pages', '404', 'index.html');
    res.writeHead(404, { 'content-type': 'text/html' });
    return fs.createReadStream(filePath).pipe(res);
};
const usStocks404Middleware = async (req, res, next) => {
    const symbol = req.baseUrl.split('/')[2];

    if (symbol === 'collections') {
        return next();
    }

    if (symbol === 'stock-directory') {
        return next();
    }

    const isStockSymbolValid = await validateStockSymbol(symbol);

    if (isStockSymbolValid) {
        return next();
    }

    return render404Page(res);
};

const faq404Middleware = async (req, res, next) => {
    const urlSplits = req.baseUrl.split('/').splice(2);
    const [category, folder] = urlSplits;
    let article = '';
    if (urlSplits.length > 2) {
        article = urlSplits.slice(2).join('/');
    } else {
        // eslint-disable-next-line prefer-destructuring
        article = urlSplits[2];
    }
    const categoryId = await getCategoryId(category);
    if (!categoryId) {
        return render404Page(res);
    }
    if (!folder) {
        return next();
    }
    const folderId = await getFolderId(categoryId, folder);
    if (!folderId) {
        return render404Page(res);
    }

    const articleId = await getArticleId(folderId, article);
    if (!articleId) {
        return render404Page(res);
    }

    return next();
};

const notFoundMiddleware = async (req, res, next) => {
    if (req.baseUrl.startsWith('/us-stocks/')) {
        return await usStocks404Middleware(req, res, next);
    }

    if (req.baseUrl.startsWith('/FAQs/')) {
        return await faq404Middleware(req, res, next);
    }
    return next();
};

module.exports = {
    notFoundMiddleware,
};
