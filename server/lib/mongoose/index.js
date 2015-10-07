var mongoose = require('mongoose');
var config = require('../../config');

module.exports = mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));