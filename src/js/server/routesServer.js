"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./../components/app')}>
        <DefaultRoute handler={require('./../components/catalog/catalog')}></DefaultRoute>
        <Route name="cart" handler={require('./../components/cart/cart')}></Route>
        <NotFoundRoute handler={require('./../components/catalog/catalog')}></NotFoundRoute>
        <Redirect from="about/*" to="about"></Redirect>
    </Route>
);

module.exports = routes;

