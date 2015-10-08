var winston = require('winston');
var path = require('path');
var config = require('../../config');
var ENV = process.env.NODE_ENV;

function handler(module) {
    var err_path = module.filename.split('\\').slice(-2).join('\\');
    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: (ENV == 'development') ? 'info' : 'info',
                label: err_path
            }),
            new winston.transports.File({
                name: 'error-file',
                filename: path.join(__dirname, config.get('log_path')),
                level: (ENV == 'development') ? 'info' : 'info',
                label: err_path
            })
        ]
    });
}

module.exports = handler;

