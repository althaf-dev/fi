const path = require('path');

const getPathFromSrc = (relativePathFromSrc) => {
    return path.join(__dirname, `../${relativePathFromSrc}`);
};

module.exports = {
    getPathFromSrc,
};
