/** @jsx React.DOM */

"use strict";

var React = require('react');
var Header = require('./header/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = App;
