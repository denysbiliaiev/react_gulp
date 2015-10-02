"use strict"

var _ = require('lodash');
var AppDispatcher = require('../dispatchers/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var PersonApi = require('../api/personApi');

var PersonAction = {
    init: function() {
        AppDispatcher.dispatch({
            actionType: ActionTypes.PERSON_INITIALIZE,
            persons: PersonApi.list()
        });
    },

    create: function(person) {
        //var newPerson = PersonApi.create(person);

        AppDispatcher.dispatch({
            actionType: ActionTypes.PERSON_CREATE,
            person: person
        });
    },

    update: function(id) {
        //var person = PersonApi.delete(id);

        AppDispatcher.dispatch({
            actionType: ActionTypes.PERSON_DELETE,
            id: id
        });
    },

    delete: function(id) {
        //var person = PersonApi.delete(id);

        AppDispatcher.dispatch({
            actionType: ActionTypes.PERSON_DELETE,
            id: id
        });
    },

    sort: function(field) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.PERSON_SORT,
            field: field
        });
    }
};

module.exports = PersonAction;