"use strict"
var React = require('react');
var _ = require('lodash');
var PersonForm = require('./PersonForm');
var PersonList = require('./PersonList');
var PersonApi = require('./../api/PersonApi');
var Validator = require('./../services/Validator');
var PersonAction = require('../actions/personAction');

var PersonFork = React.createClass({
    getInitialState: function() {
        return {
            persons: PersonAction.init(),
            validate_errors: {}
        };
    },

    createPerson: function(e) {
        e.preventDefault();
        var form = this.findDOMNode(this.refs.personForm.refs.personData);
        var person = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phone: form.phone.value,
            gender: form.gender.value,
            age: form.age.value
        };

        if (!Validator.validate.call(this, person)) {
            return;
        }

        PersonAction.create(person);
    },

    deletePerson: function(id) {
        PersonAction.delete(id);
    },

    sortField: '',
    sortMode: true,

    sortPersons: function(e) {
        this.sortMode = !this.sortMode;
        this.sortField = e.target.id;

        if (this.sortMode) {
            var persons = _.sortBy(PersonApi.list(), this.sortField);
        } else {
            var persons = _.sortBy(PersonApi.list(), this.sortField).reverse();
        }

        this.setState({persons: persons});
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
            <div className="container">
                <PersonForm ref="personForm" createPerson={this.createPerson} validate_errors={this.state.validate_errors} />
                <PersonList persons={this.state.persons} deletePerson={this.deletePerson} sortPersons={this.sortPersons}/>
            </div>
        )
    }
});

module.exports = PersonFork;