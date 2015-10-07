var nconf = require('nconf');
var path = require('path');

nconf.argv();

nconf.env();

nconf.file({file: path.join(__dirname, 'config.json')});

module.exports = nconf;