"use strict"

var Dispatcher = require('../dispatchers/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _persons = [];

var PersonStore = _.assign({}, EventEmitter.prototype, {
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },

    getAllPersons: function() {
        return _persons;
    },

    getPersonById: function(id) {
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function(action) {
    switch (action.actionTypes) {
        case ActionTypes.PERSON_CREATE:
        _persons.push(action.person);
        PersonStore.emitChange();
        break;
    }
});

module.exports = PersonStore;