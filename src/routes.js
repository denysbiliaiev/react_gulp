"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./js/components/app')}>
        <DefaultRoute handler={require('./js/components/catalog/catalog')}></DefaultRoute>
        <Route name="cart" handler={require('./js/components/cart/cart')}></Route>
        <Route name="item" path="item/:id" handler={require('./js/components/product/catalogDetail')}></Route>
        <NotFoundRoute handler={require('./js/components/NotFoundPage')}></NotFoundRoute>
    </Route>
);

module.exports = routes;