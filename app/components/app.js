/** @jsx React.DOM */

"use strict";

var React = require('react');
var Header = require('./header/header');
var RouteHandler = require('react-router').RouteHandler;
var Favicon = require('react-favicon');

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Favicon url= {['https://raw.githubusercontent.com/RickWong/react-isomorphic-starterkit/master/static/favicon.ico']} />
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = App;
