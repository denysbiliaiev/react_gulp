"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('././app')}>
        <DefaultRoute handler={require('././catalog/catalog')}></DefaultRoute>
        <Route name="cart" handler={require('././cart/cart')}></Route>
        <Route name="item" path="item/:id" handler={require('././product/catalogDetail')}></Route>
        <NotFoundRoute handler={require('././NotFoundPage')}></NotFoundRoute>
    </Route>
);

module.exports = routes;