"use strict"


var _ = require('lodash');
var AppDispatcher = require('../dispatchers/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var PersonAction = {
    addItem: function(item) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.ADD_ITEM,
            action: {
                item: item
            }
        });
    },

    removeItem: function(index) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.REMOVE_ITEM,
            action: {
                index: index
            }
        });
    },

    increaseItem: function(index) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.INCREASE_ITEM,
            action: {
                index: index
            }
        });
    },

    decreaseItem: function(index) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.DECREASE_ITEM,
            action: {
                index: index
            }
        });
    },
};

module.exports = PersonAction;