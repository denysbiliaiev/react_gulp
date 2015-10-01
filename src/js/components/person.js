"use strict"
var React = require('react');

var Person = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.person.firstName}</td>
                <td>{this.props.person.lastName}</td>
                <td>{this.props.person.phone}</td>
                <td>{this.props.person.gender}</td>
                <td>{this.props.person.age}</td>
                <td><button onClick={this.props.deletePerson} className="btn btn-danger">delete</button></td>
            </tr>
        )
    }
});

module.exports = Person;