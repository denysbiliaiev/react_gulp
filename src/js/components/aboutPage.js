"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AboutPage = React.createClass({
    mixins: [
        Router.Navigation,
        Router.State
    ],

    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if (!confirm('transition to about')) {
                transition.abort();
            } else {
                callback();
            }
        },

        willTransitionFrom: function(transition, component) {
            if (!confirm('transition from about')) {
                transition.abort();
            }
        }
    },

    render: function() {
        //this.transitionTo('author');
        //this.replaceWith('author');

        return (
            <div>
                <Link to='app' className="btn btn-primary">Home</Link>
                <h3>aboutPage</h3>
            </div>
        )
    }
});

module.exports = AboutPage;