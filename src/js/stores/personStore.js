"use strict"

var AppDispatcher = require('../dispatchers/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var CHANGE_EVENT = 'change';
var _persons = [];
var _mode = false;

var PersonStore = _.merge(EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },

    list: function() {
        return _persons;
    },

    findById: function(id) {
        return _.find(_persons, {id: id});
    },

    sort: function(field) {
        _mode = !_mode;

        return _mode ? _.sortBy(_persons, field) : _.sortBy(_persons, field).reverse();
    },
});

AppDispatcher.register(function(payload) {
    console.log(payload);

    switch (payload.actionType) {
        case ActionTypes.PERSON_INITIALIZE:
            _persons = payload.persons;
            break;
        case ActionTypes.PERSON_CREATE:
            _persons.push(payload.person);
            break;
        case ActionTypes.PERSON_UPDATE:
            var person = _.find(_persons, {id: payload.person.id});
            var index = _.indexOf(_persons, existingPerson);
            _persons.splice(index, 1, payload.person);
            break;
        case ActionTypes.PERSON_DELETE:
            var person = _.find(_persons, {id: payload.id});
            var index = _.indexOf(_persons, person);
            _persons.splice(index, 1);
            break;
        case ActionTypes.PERSON_SORT:
            console.log(payload);
            _persons = PersonStore.sort(payload.field);
            break;
    }

    PersonStore.emitChange();
    return true;
});

AppDispatcher.register(function(payload) {
    switch (payload.actionTypes) {

    }
});

module.exports = PersonStore;