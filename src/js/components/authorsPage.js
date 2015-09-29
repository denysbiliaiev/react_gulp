"use strict";
var React = require('react');
var Router = require('react-router');

var AuthorsPage = React.createClass({
    mixins: [
        Router.Navigation,
        Router.State
    ],

    componentDidMount: function() {
        //go Back
            //this.goBack();
        //go to new route
            //this.transitionTo('about');
        //replace current router
            //this.replaceWith('app');
        //careate a URL to a route and replace
        this.replaceWith(this.makePath('author', {id: 11, name: 'vasya'}, {req: 'test'}));
    },

    render: function() {

        return (
            <div>
                <h3>authorsPage</h3>
            </div>
        )
    }
});

module.exports = AuthorsPage;