/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var AppStore = require('../../stores/appStore');
var StoreWatchMixin = require('../mixins/storeWatchMixin');

function cartTotals() {
    return AppStore.getCartTotals();
}

var CartSummary = React.createClass({
    mixins: [StoreWatchMixin(cartTotals)],

    render: function() {
        return (
            <div>
                <Link to="cart" className="btn btn success">
                    CART ITEMS: {this.state.qty} / ${this.state.total}
                </Link>
            </div>
        )
    }
});

module.exports = CartSummary;