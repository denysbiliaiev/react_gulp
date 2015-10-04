/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../../stores/appStore');

var StoreWatchMixin = function(cb){
    return {
        getInitialState: function() {
            return cb(this)
        },

        componentWillMount: function() {
            AppStore.addChangeListener(this._onChange);
        },

        componentWillUnMount: function() {
            AppStore.removeChangeListener(this._onChange);
        },

        _onChange: function() {
            this.setState(cb(this));
        },
    }
};

module.exports = StoreWatchMixin;