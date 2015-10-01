"use strict";

var React = require('react');
var PersonFork = require('./PersonFork');

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