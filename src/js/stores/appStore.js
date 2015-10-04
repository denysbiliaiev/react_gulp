"use strict"

var AppDispatcher = require('../dispatchers/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _catalog= [];

for (var i=1; i<9; i++) {
    _catalog.push({
        id: "widget" + i,
        title: "widget #" + i,
        summary: "This is summary",
        description: "This is description",
        img: "https://www.colourbox.com/preview/12033568-fresh-product.jpg",
        cost: i,
    });
}

var _cartItems = [];

function _addItem(item) {
    if (!item.inCart) {
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
    } else {
        _cartItems.forEach(function (cartItem, i) {
            if (cartItem.id = item.id) {
                _increaseItem(i);
            }
        });
    }
}

function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
};

function _increaseItem(index) {
    _cartItems[index].qty++;
};

function _decreaseItem(index) {
    if (_cartItems[index].qty > 1) {
        _cartItems[index].qty--;
    } else {
        _removeItem(index);
    }
};

function _cartTotals() {
    var qty = 0;
    var total = 0;

    _cartItems.forEach(function(item, i) {
        qty += item.qty;
        total += item.qty * item.cost;
    });

    return {qty: qty, total: total};
};

var AppStore = _.merge(EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },

    getCatalog: function() {
        return _catalog;
    },

    getCartItems: function() {
        return _cartItems;
    },

    getCartTotals: function() {
        return _cartTotals();
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {

        var action = payload.action;

        switch (payload.actionType) {
            case ActionTypes.ADD_ITEM:
                _addItem(payload.action.item);
                break;
            case ActionTypes.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;
            case ActionTypes.INCREASE_ITEM:
                _increaseItem(payload.action.index);
                break;
            case ActionTypes.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
                break;
            }

        AppStore.emitChange();
        return true;
    })
});

module.exports = AppStore;