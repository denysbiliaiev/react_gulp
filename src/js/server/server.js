"use strict"


var express = require('express');
var app = express();
var path = require('path');
var React = require('react');
var Router = require('react-router');
var routes = require('./routesServer');

app.use(express.static(path.join(__dirname, '/src/js')));


app.use((req, res) => {
    Router.run(routes, req.path, (Root, state) => {
        res.send('<!DOCTYPE html>' + React.renderToString( <Root/> ));
    });
});

app.listen(3000, function() {
    console.log('server listen: ');
});


//require ('node-jsx').install();
//var renderer = require('react-engine');

//function collector(stats) {
//    console.log(stats);
//}
//
//var engine = renderer.server.create({
//    reactRoutes: './routesServer.js',
//    performanceCollector: collector
//});

//app.engine('.jsx', engine);
//app.set('views', path.join(__dirname, '/js/components'));
//app.set('view engine', 'jsx');
//app.set('view', renderer.expressView);


//var index = function(req, res) {
//    res.render('app');
//}
//
//app.get('', index);
//app.get('/', index);

