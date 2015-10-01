"use strict"
var React = require('react');

var TextInput = React.createClass({
    propsTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        err: React.PropTypes.string
    },

    render: function() {
        var wraperClass = "form-group";

        if (this.props.err && this.props.err.length >= 1) {
            wraperClass += " " + "has-error";
        }

        return (
            <div className={wraperClass}>
                <label for={this.props.name}  class="col-sm-2 control-label">{this.props.label}</label>
                <div className="field">
                    <input type="text"
                           name={this.props.name}
                           placeholder={this.props.label}
                           className="form-control input-small"/>
                    <div>{this.props.validate_error}</div>
                </div>
            </div>
        )
    }
});

module.exports = TextInput;