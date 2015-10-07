var mongoose = require('../lib/mongoose');

var ClientSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Client', ClientSchema);