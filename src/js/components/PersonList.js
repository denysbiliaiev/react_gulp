"use strict"
var React = require('react');
var Person = require('./Person');

var PersonList = React.createClass({
    render: function() {
        var list = this.props.persons.map(function(person, i) {
            return (
                <Person key={i} person={person} ref={"item" + i} deletePerson={this.props.deletePerson.bind(this, person.id)}/>
            )
        }, this);

        return (
            <div id="persons_list">
                <table className="table">
                    <thead onClick={this.props.sortPersons}>
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