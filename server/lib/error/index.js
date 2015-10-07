var util = require('util');
var http = require('http');

function HttpError(status, message) {
    this.status = status;
    this.message = message || http.STATUS_CODES(status) || 'Error';
    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function CustomError(message) {
    this.message = message;
    Error.captureStackTrace(this, CustomError);
}

util.inherits(CustomError, Error);
CustomError.prototype.name = 'CustomError';

exports.HttpError = HttpError;
exports.CustomError = CustomError;