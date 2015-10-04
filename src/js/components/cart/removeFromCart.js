/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../../actions/appActions');

var removeFromCart = React.createClass({
    handleClick: function() {
        AppActions.removeItem(this.props.index);
    },

    render: function() {
        return (
            <button className="but but-success" onClick={this.handleClick}>remove</button>
        )
    }
});

module.exports = removeFromCart;
