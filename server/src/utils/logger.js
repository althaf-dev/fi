const winston = require('winston');

const { createLogger, format, transports } = winston;
const {
    combine, json, prettyPrint, timestamp,
} = format;

// define transports
const transportsList = [
    new (transports.File)({
        name: 'info-file',
        filename: `${process.env.LOG_PATH}/info.log`,
        level: 'info',
    }),
];

let level = 'info';

if (process.env.APP_ENV === 'development') {
    transportsList.push(new transports.Console({
        format: combine(
            timestamp(),
            prettyPrint(),
        ),
    }));
    level = 'debug';
}

const logger = createLogger({
    transports: transportsList,
    levels: {
        error: 0,
        info: 1,
        debug: 2,
    },
    level,
    format: combine(timestamp(), json()),
});

module.exports = {
    logger,
};
