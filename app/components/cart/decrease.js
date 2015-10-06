/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../../.././appActions');

var Decrease = React.createClass({
    handleClick: function() {
        AppActions.decreaseItem(this.props.index);
    },

    render: function() {
        return (
            <button className="but but-success" onClick={this.handleClick}>-</button>
        )
    }
});

module.exports = Decrease;
