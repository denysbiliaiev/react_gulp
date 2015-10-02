"use strict"
var React = require('react');
var Person = require('./Person');
var PersonAction = require('../actions/personAction');
var PersonStore = require('../stores/personStore');
var _ = require('lodash');

var PersonList = React.createClass({
    sortPersons: function(e) {
        PersonAction.sort(e.target.id);
    },

    deletePerson: function(id) {
        PersonAction.delete(id);
    },

    render: function() {
        var list = this.props.persons.map(function(person, i) {
            return (
                <Person key={i} person={person} deletePerson={this.deletePerson.bind(this, person.id)}/>
            )
        }, this);

        return (
            <div id="persons_list">
                <table className="table">
                    <thead onClick={this.sortPersons}>
                    <th id="firstName">First Name</th>
                    <th id="lastName">Last Name</th>
                    <th id="phone">Phone</th>
                    <th id="gender">Gender</th>
                    <th id="age">Age</th>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = PersonList;