const { v4: uuidv4 } = require('uuid');

const getStringUUID = () => {
    return uuidv4();
};

module.exports = {
    getStringUUID,
};
