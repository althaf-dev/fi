/**
 * @file Render document
*/

const fs = require('fs');
const path = require('path');

const URLS_MAPPING = {
    EXPERIAN_TNC: 'experian-tnc',
    A2_FORM_V2: 'a2-form/v2/', // need to add trailing slash since we are using relative imports for css and js files in the HTML file
    A2_FORM_V1: 'a2-form/', // no hard requirement to add here since the CSS and JS files are deployed on S3,
    // but keeping trailing slash for consistency and if we move to relative imports in the future
    FEES: 'fees',
    TERMS_AND_CONDITION: 'T&Cs',
    IMPORTANT_TERMS_AND_CONDITION: 'important-T&Cs',
    KEY_FACT_STATEMENT: 'key-fact-statement',
    SALARY_TNC: 'salary-tnc',
    INTERNATIONAL_ATM: 'international-ATM',
    MOST_IMPORTANT_TERMS_AND_CONDITION_SECURED: 'important-tnc',
    KEY_FACT_STATEMENT_SECURED: 'key-fact-statement',
    EMI_TERMS_AND_CONDITION: 'EMI-T&Cs',
    CIBIL_TNC: 'cibil-tnc',
};

const FILENAMES_MAPPING = {
    EXPERIAN_TNC_HTML: 'experian-tnc.html',
    A2_FORM_HTML_V2: 'a2-form/v2/index.html',
    A2_FORM_HTML_V1: 'a2-form/v1/index.html',
    CIBIL_TNC: 'cibil-tnc.html',
    FEES: 'fees.pdf',
    TERMS_AND_CONDITION: 'terms-and-conditions.pdf',
    IMPORTANT_TERMS_AND_CONDITION: 'important-terms-and-conditions.pdf',
    KEY_FACT_STATEMENT: 'key-fact-statement.pdf',
    SALARY_TNC: 'salary-tnc.pdf',
    INTERNATIONAL_ATM: 'international-atm.pdf',
    MOST_IMPORTANT_TERMS_AND_CONDITION_SECURED: 'most-important-terms-and-conditions-secured.pdf',
    KEY_FACT_STATEMENT_SECURED: 'key-fact-statement-secured.pdf',
    NOT_FOUND_HTML: 'not-found.html',
    EMI_TERMS_AND_CONDITION: 'emi-terms-and-conditions.pdf',
};

/**
 * This is a mapping between URLs and html filenames
 * A key in this mapping is the URL, and a value is the html file that is stored in the assets/pages folder
 * Keeping this mapping allows us to easily change routes for a particular file name.
 * For example:
 * The experian-tnc.html file is rendered on the route /assets/pages/experian-tnc
 * The a2-form.html file is rendered on the route /assets/pages/a2-form
 * For instance, if we want to render experian-tnc.html on route /assets/pages/experian-tnc-content, then we just need to change our URLS_MAPPING as stated below.
 * It needs to be changed from EXPERIAN_TNC: 'experian-tnc' to EXPERIAN_TNC: 'experian-tnc-content' in URLS_MAPPING
*/
const URLS_AND_FILENAMES_MAPPING_FOR_HTML_PAGES = {
    [URLS_MAPPING.EXPERIAN_TNC]: FILENAMES_MAPPING.EXPERIAN_TNC_HTML,
    [URLS_MAPPING.A2_FORM_V2]: FILENAMES_MAPPING.A2_FORM_HTML_V2,
    [URLS_MAPPING.A2_FORM_V1]: FILENAMES_MAPPING.A2_FORM_HTML_V1,
    [URLS_MAPPING.CIBIL_TNC]: FILENAMES_MAPPING.CIBIL_TNC,
};

/**
 * This is a mapping between URLs and pdf filenames
 * A key in this mapping is the URL, and a value is the pdf file that is stored in the assets/pages folder
 * Keeping this mapping allows us to easily change routes for a particular file name.
 */
const URLS_AND_FILENAMES_MAPPING_FOR_CREDIT_CARD_PDF_FILES = {
    [URLS_MAPPING.FEES]: FILENAMES_MAPPING.FEES,
    [URLS_MAPPING.TERMS_AND_CONDITION]: FILENAMES_MAPPING.TERMS_AND_CONDITION,
    [URLS_MAPPING.IMPORTANT_TERMS_AND_CONDITION]: FILENAMES_MAPPING.IMPORTANT_TERMS_AND_CONDITION,
    [URLS_MAPPING.KEY_FACT_STATEMENT]: FILENAMES_MAPPING.KEY_FACT_STATEMENT,
    [URLS_MAPPING.SALARY_TNC]: FILENAMES_MAPPING.SALARY_TNC,
    [URLS_MAPPING.EMI_TERMS_AND_CONDITION]: FILENAMES_MAPPING.EMI_TERMS_AND_CONDITION,
};

const URLS_AND_FILENAMES_MAPPING_FOR_SECURED_CREDIT_CARD_PDF_FILES = {
    [URLS_MAPPING.KEY_FACT_STATEMENT_SECURED]: FILENAMES_MAPPING.KEY_FACT_STATEMENT_SECURED,
    [URLS_MAPPING.MOST_IMPORTANT_TERMS_AND_CONDITION_SECURED]: FILENAMES_MAPPING.MOST_IMPORTANT_TERMS_AND_CONDITION_SECURED,
};

const URLS_AND_FILENAMES_MAPPING_FOR_FEES_PDF_FILES = {
    [URLS_MAPPING.INTERNATIONAL_ATM]: FILENAMES_MAPPING.INTERNATIONAL_ATM,
};

const ERROR_MSG_MAP = {
    renderHtmlPages: 'Failed to render html pages',
    renderCreditCardPdfFiles: 'Failed to render credit pdf files',
    renderFeesPdfFiles: 'Failed to render fees pdf files',
    renderPdfFiles: 'Failed to render pdf file',
};

const CTRL_KEY = 'document';

/**
 * This function takes a request object and urlsAndFileNamesMapping as input and returns the filePath and fileName
 * corresponding to the requested page name, based on a mapping of URLs to file names.
 */
const getFilePathAndFileName = (req, urlsAndFileNamesMapping) => {
    /**
     * To get the path related data, we are using req.path rather than req.params. Reason for doing so is the following:
     * For a URL like https://fi.money/assets/pages/a2-form/v2/ where we display a HTML file, the source code on the HTML file contains relative imports for the CSS and JS files.
     * The reason for using relative imports is that we do not need to upload the CSS and JS files to S3 which improves shipping speed time.
     * It also helps to start a live server and do quick development using that which also helps in quicker development time.
     * Example - For importing the CSS file, we use a relative import. Example -  ```<link rel="stylesheet" href="./styles.css">```
     * The way it resolve in the browser is that the browser takes the current URL and relative to that it constructs the URL.
     * So for a URL like https://fi.money/assets/pages/a2-form/v2/, the relative import resolves to -> https://fi.money/assets/pages/a2-form/v2/styles.css
     * Now here the trailing slash proves to be very important. If we did not have a trailing slash in the browser URL, then the relative import would resolve to https://fi.money/assets/pages/a2-form/styles.css
     * As you can see, the 'v2' is dropped in the request since the closest folder is a2-form and not v2
     * Hence we need to have a trailing slash in our main URL.
     * Now if we use req.params, then we get the following when we print the value:
     * { '0': '/v2', pageName: 'a2-form' }
     * As you can see there is no trailing slash in the v2 part. Hence when we try to form the pagePath using req.params['pageName'] + req.params['0'] we get a not found error.
     * To resolve this issue, we use req.path
     * req.path provides path as "/a2-form/v2/" and hence we get the trailing slash.
     * But in this case, it also gives an extra slash at the start. To remove that, we use substring.
     * This gives us the final path that is required.
     */
    const pageName = req.path.substring(1);

    const fileName = urlsAndFileNamesMapping[pageName];

    const pagesFolderPath = path.join(__dirname, '../../assets/pages');

    let filePath;

    if (fileName) {
        filePath = `${pagesFolderPath}/${fileName}`;
    } else {
        filePath = `${pagesFolderPath}/${FILENAMES_MAPPING.NOT_FOUND_HTML}`;
    }

    return {
        fileName,
        filePath,
    };
};

const renderHtmlPages = (req, res, next) => {
    const fnName = 'renderHtmlPages';

    try {
        const { filePath } = getFilePathAndFileName(req, URLS_AND_FILENAMES_MAPPING_FOR_HTML_PAGES);

        /**
         * If file path is not found in html page mapping
         * then allowing next() to check static files exposed.
         *
         * Currently if backend or any other service hits the wrong URL e.g. /assets/pages/a2-form-2
         * but the URL matches /assets/pages prefix then next() would be executed which would take the user to not found kitty page e.g. https://fi.money/abc
         *
         * In order to show custom NOT FOUND page, then certain conditions can be added for checking if the URL matches the static files (assets files),
         * if it matches the static files then we must execute next() otherwise show the custom not found page.
         *
         * E.g. /assets/pages/a2-form/css/styles.css is the static file. The URL mapping does not have /a2-form/css/styles.css, hence it would fail and go to the else block.
         * Now we need check if the URL matches the known assets and if it does then going to next() otherwise render not-found.html page.
         * Inside the else block:
         * if (assetsURLs.find((asset) => asset === req.path.substring(1))) {
         *     next();
         * } else {
         *     filePath = 'not-found.html'
         *     res.writeHead(200, { 'content-type': 'text/html' });
         *     fs.createReadStream(filePath).pipe(res);
         * }
         */
        if (filePath) {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(filePath).pipe(res);
        } else {
            next();
        }
    } catch (err) {
        next({
            description: err.message,
            message: ERROR_MSG_MAP[fnName],
            ctrl: CTRL_KEY,
            fn: fnName,
        });
    }
};

const renderCreditCardPdfFiles = (req, res, next) => {
    const fnName = 'renderCreditCardPdfFiles';

    try {
        const { fileName, filePath } = getFilePathAndFileName(req, URLS_AND_FILENAMES_MAPPING_FOR_CREDIT_CARD_PDF_FILES);
        if (fileName) {
            res.writeHead(200, { 'content-type': 'application/pdf' });
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
        }

        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        next({
            description: err.message,
            message: ERROR_MSG_MAP[fnName],
            ctrl: CTRL_KEY,
            fn: fnName,
        });
    }
};

const renderSecuredCreditCardPdfFiles = (req, res, next) => {
    const fnName = 'renderSecuredCreditCardPdfFiles';

    try {
        const { fileName, filePath } = getFilePathAndFileName(req, URLS_AND_FILENAMES_MAPPING_FOR_SECURED_CREDIT_CARD_PDF_FILES);

        if (fileName) {
            res.writeHead(200, { 'content-type': 'application/pdf' });
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
        }

        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        next({
            description: err.message,
            message: ERROR_MSG_MAP[fnName],
            ctrl: CTRL_KEY,
            fn: fnName,
        });
    }
};

const renderFeesPdfFiles = (req, res, next) => {
    const fnName = 'renderFeesPdfFiles';

    try {
        const { fileName, filePath } = getFilePathAndFileName(req, URLS_AND_FILENAMES_MAPPING_FOR_FEES_PDF_FILES);

        if (fileName) {
            res.writeHead(200, { 'content-type': 'application/pdf' });
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
        }

        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        next({
            description: err.message,
            message: ERROR_MSG_MAP[fnName],
            ctrl: CTRL_KEY,
            fn: fnName,
        });
    }
};

module.exports = {
    renderHtmlPages,
    renderCreditCardPdfFiles,
    renderFeesPdfFiles,
    renderSecuredCreditCardPdfFiles,
};
