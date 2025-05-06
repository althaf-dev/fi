const renderPageWithMetaTags = (req, res) => {
    const data = res.locals.indexHTML;

    const updatedDataWithMetaTags = data.replace(
        '__PAGE_META__',
        '',
    );

    // for home page, we need to fetch the latest version
    if (req.originalUrl === '/') {
        res.header({
            'Content-Type': 'text/html',
            'Cache-Control': 'public, no-cache, no-store, must-revalidate, max-age=0',
            Expires: '-1',
            Pragma: 'no-cache',
        });
    }

    return res.send(updatedDataWithMetaTags);
};

module.exports = {
    renderPageWithMetaTags,
};
