/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');
var Catalog = require('./catalog/catalog');
var Cart = require('./cart/cart');
var CatalogDetail = require('./product/catalogDetail');
var Template = require('./template');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
    render: function() {
        return (
            <Template>
                <Locations>
                    <Location path="/" handler={Catalog} />
                    <Location path="/cart" handler={Cart} />
                    <Location path="/item/:id" handler={CatalogDetail} />
                </Locations>
            </Template>
        )
    }
});

module.exports = App;
