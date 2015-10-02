"use strict"
var React = require('react');
var _ = require('lodash');
var PersonForm = require('./PersonForm');
var PersonList = require('./PersonList');
var PersonApi = require('./../api/PersonApi');
var PersonAction = require('../actions/personAction');
var PersonStore = require('../stores/personStore');

var PersonFork = React.createClass({
    getInitialState: function() {
        return {
            persons: [],
            validate_errors: {}
        };
    },

    componentDidMount: function() {
        PersonStore.addChangeListener(this.storeChanged);
        PersonAction.init();
    },

    componentWillUnMount: function() {
        PersonStore.removeChangeListener(this.storeChanged);
    },

    storeChanged: function() {
        this.setState({persons: PersonStore.list()});
    },

    render: function() {
        return (
            <div>
                <PersonForm />
                <PersonList persons={this.state.persons} deletePerson={this.deletePerson} sortPersons={this.sortPersons}/>
            </div>
        )
    }
});

module.exports = PersonFork;