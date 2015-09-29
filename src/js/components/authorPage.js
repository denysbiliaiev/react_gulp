"use strict";
var React = require('react');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({

    render: function() {
        return (
            <div>
                <h3>{this.props.params.id}</h3>
                <h3>{this.props.params.name}</h3>
                <h3>{this.props.query.req}</h3>
            </div>
        )
    }
});

module.exports = AuthorPage;