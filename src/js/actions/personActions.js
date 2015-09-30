"use strict"

var Dispatcher = require('../dispatchers/appDispatcher');
var PersonApi = require('../services/personApi');
var ActionTypes = require('../constants/actionTypes');

var PersonActions = {
    createPerson: function(person) {
        var newPerson = PersonApi.create(person);
        Dispatcher.dispatch({
            actionType: ActionTypes.PERSON_CREATE,
            person: person
        });
    }
};

module.exports = PersonActions;