"use strict";
var React = require('react');
var Link = require('react-router').Link;
var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Page not found</h3>
                <Link to="app">Home</Link>
            </div>
        )
    }
});

module.exports = NotFoundPage;