/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../../stores/appStore');
var RemoveFromCart = require('./removeFromCart');
var Increase = require('./increase');
var Decrease = require('./decrease');
var StoreWatchMixin = require('../mixins/storeWatchMixin');
var Link = require('react-router-component').Link;

function cartItems() {
    return {items: AppStore.getCartItems()}
}

var Cart = React.createClass({
    mixins: [StoreWatchMixin(cartItems)],

    render: function() {
        var total = 0;
        var items = this.state.items.map(function(item, i) {
            var subtotal = item.cost * item.qty;
            total += subtotal;

            return (
                <tr key={i}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <Decrease index={i} />
                        <Increase index={i} />
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>QTY</th>
                            <th></th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="text-right">Total</td>
                            <td>{total}</td>
                        </tr>
                    </tfoot>
                </table>

                <Link href='/'>Continue shoping</Link>
            </div>
        )
    }
});

module.exports = Cart;
