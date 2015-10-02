"use strict"
var React = require('react');
var TextInput = require('./TextInput');
var Validator = require('./../services/Validator');
var PersonAction = require('../actions/personAction');

var PersonForm = React.createClass({
    getInitialState: function() {
        return {
            person: {},
            validate_errors: {}
        }
    },

    createPerson: function(e) {
        e.preventDefault();
        var form = e.target;
        var person = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phone: form.phone.value,
            gender: form.gender.value,
            age: form.age.value
        };

        //if (!Validator.validate.call(this, person)) {
        //    return;
        //}

        PersonAction.create(person);
    },

    validate_field : {
        firstName: {
            regex: /^[a-z]{1,10}$/,
            msg: "not valid"
        },
        lastName: {
            regex: /^[a-z]{1,10}$/,
            msg: "not valid"
        },
        phone: {
            regex: /^\d{1,10}$/,
            msg: "not valid"
        },
        gender: {
            enum: ["man", "woman"],
            msg: "not valid"
        },
        age: {
            regex: /^\d{1,2}$/,
            msg: "not valid"
        }
    },

    render: function() {
        return (
            <div id="person_form">
                <form className="personForm" onSubmit={this.createPerson}>
                    <TextInput
                        name = 'firstName'
                        label = 'First Name'
                        validate_error = {this.state.validate_errors.firstName}
                        />
                    <TextInput
                        name = 'lastName'
                        label = 'Last Name'
                        validate_error = {this.state.validate_errors.lastName}
                        />
                    <TextInput
                        name = 'phone'
                        label = 'Phone'
                        validate_error = {this.state.validate_errors.phone}
                        />
                    <TextInput
                        name = 'gender'
                        label = 'Gender'
                        validate_error = {this.state.validate_errors.gender}
                        />
                    <TextInput
                        name = 'age'
                        label = 'Age'
                        validate_error = {this.state.validate_errors.age}
                        />
                    <input type="submit" value="add" className="btn btn-success"></input>
                </form>
            </div>
        )
    }
});

module.exports = PersonForm;