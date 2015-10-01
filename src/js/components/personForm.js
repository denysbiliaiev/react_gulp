"use strict"
var React = require('react');
var TextInput = require('./TextInput');

var PersonForm = React.createClass({
    render: function() {
        return (
            <div id="person_form">
                <form className="personForm" ref="personData">
                    <TextInput
                        name = 'firstName'
                        label = 'First Name'
                        validate_error = {this.props.validate_errors.firstName}
                        />
                    <TextInput
                        name = 'lastName'
                        label = 'Last Name'
                        validate_error = {this.props.validate_errors.lastName}
                        />
                    <TextInput
                        name = 'phone'
                        label = 'Phone'
                        validate_error = {this.props.validate_errors.phone}
                        />
                    <TextInput
                        name = 'gender'
                        label = 'Gender'
                        validate_error = {this.props.validate_errors.gender}
                        />
                    <TextInput
                        name = 'age'
                        label = 'Age'
                        validate_error = {this.props.validate_errors.age}
                        />
                    <input type="submit" onClick={this.props.createPerson} value="add" className="btn btn-success"></input>
                </form>
            </div>
        )
    }
});

module.exports = PersonForm;