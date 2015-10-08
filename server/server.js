var express = require('express'),
    http = require('http'),
    app = express(),
    middleware = require('./middleware')(app, express),
    config = require('./config'),
    log = require('./utils/log')(app, module);

http.createServer(app).listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});




var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var config = require('./config');
var log = require('./lib/winston')(module);
var HttpError = require('./lib/error').HttpError;
var routers = require('./routers');





//var User = require('./models/User');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('middleware/sendError'));

app.use('/api', routers);

app.use(function(err, req, res, next) {
    if (process.env.NODE_ENV == 'development') {
        if (err instanceof HttpError) {
            log.error(err);
            res.sendError(err);
            //process.exit(1);
        }

        res.send(500, 'ERROR: ' + err);
    }
});

http.createServer(app).listen(config.get('port'), function() {
    console.log('server listen: ' + config.get('port'));
});
