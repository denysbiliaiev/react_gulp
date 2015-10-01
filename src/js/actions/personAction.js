"use strict"

var _ = require('lodash');
var PersonDispatcher = require('../dispatchers/personDispatcher');
var ActionTypes = require('../constants/actionTypes');
var PersonApi = require('../api/personApi');

var PersonAction = {
    init: function() {
        PersonDispatcher.dispatch({
            actionType: ActionTypes.PERSON_INITIALIZE,
            persons: PersonApi.list()
        });
    },

    create: function(person) {
        var newPerson = PersonApi.create(person);

        PersonDispatcher.dispatch({
            actionType: ActionTypes.PERSON_CREATE,
            person: newPerson
        });
    },

    update: function(id) {
        var person = PersonApi.delete(id);

        PersonDispatcher.dispatch({
            actionType: ActionTypes.PERSON_DELETE,
            id: id
        });
    },

    delete: function(id) {
        var person = PersonApi.delete(id);

        PersonDispatcher.dispatch({
            actionType: ActionTypes.PERSON_DELETE,
            id: id
        });
    },
};

module.exports = PersonAction;