/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../../.././appActions');

var addToCart = React.createClass({
    handleClick: function() {
        AppActions.addItem(this.props.item);
    },

    render: function() {
        return (
            <button className="btn btn-default" onClick={this.handleClick}>add to cart</button>
        )
    }
});

module.exports = addToCart;
