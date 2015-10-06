"use strict"
var express = require('express');
var app = express();
var path = require('path');
var React = require('react');
//var Com = require('./app');

app.listen(3007, 'react', function() {
    console.log('server listen: ');
});

//app.get('/', (req, res) => {
//    res.json({"test": "hello"});
//});
//
//app.get('/test', (req, res) => {
//    res.render(<App />);
//});


var router = express.Router();              // get an instance of the express Router

app.use('/api', router);

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});


router.get('/', function(req, res) {
    res.json({ "message": "hooray! welcome to our api!" });
});


