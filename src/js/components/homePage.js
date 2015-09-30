"use strict";
var React = require('react');
var Link = require('react-router').Link;
var PersonActions = require('../actions/personActions');
var PersonStore = require('../stores/personStore');

var HomePage = React.createClass({
    render: function() {
        PersonActions.createPerson({name: 'vasya'});

        return (
            <div>
               <h3>homePage</h3>
            </div>
        )
    }
});

module.exports = HomePage;