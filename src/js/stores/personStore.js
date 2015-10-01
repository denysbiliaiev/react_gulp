"use strict"

var PersonDispatcher = require('../dispatchers/personDispatcher');
var AppDispatcher = require('../dispatchers/appDispatcher');
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

    list: function() {
        return _persons;
    },

    getPersonById: function(id) {
        return _.find(_persons, {id: id});
    },


});

PersonDispatcher.register(function(payload) {
    switch (payload.actionTypes) {
        case ActionTypes.PERSON_INITIALIZE:
            _persons = payload.persons;
            PersonStore.emitChange();
            break;
        case ActionTypes.PERSON_CREATE:
            _persons.push(payload.person);
            PersonStore.emitChange();
            break;
        case ActionTypes.PERSON_UPDATE:
            var person = _.find(_persons, {id: payload.person.id});
            var index = _.indexOf(_persons, existingPerson);
            _persons.splice(index, 1, payload.person);
            PersonStore.emitChange();
            break;
        case ActionTypes.PERSON_DELETE:
            _persons.push(payload.person);
            PersonStore.emitChange();
            break;
    }
});

AppDispatcher.register(function(payload) {
    switch (payload.actionTypes) {

    }
});

module.exports = PersonStore;