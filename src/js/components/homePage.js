"use strict";

var React = require('react');
var PersonFork = require('./PersonFork');
var PersonAction = require('../actions/personAction');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <PersonFork />
            </div>
        )
    }
});

module.exports = App;