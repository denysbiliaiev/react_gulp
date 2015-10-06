/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../../actions/appActions');

var Increase = React.createClass({
    handleClick: function() {
        AppActions.increaseItem(this.props.index);
    },

    render: function() {
        return (
            <button className="but but-success" onClick={this.handleClick}>+</button>
        )
    }
});

module.exports = Increase;
