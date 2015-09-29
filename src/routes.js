"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./js/components/app')}>
        <DefaultRoute handler={require('./js/components/homePage')}></DefaultRoute>
        <Route name="authors" handler={require('./js/components/authorsPage')}></Route>
        <Route name="author" path="author/:id/:name" handler={require('./js/components/authorPage')}></Route>
        <Route name="about" handler={require('./js/components/aboutPage')}></Route>
        <NotFoundRoute handler={require('./js/components/NotFoundPage')}></NotFoundRoute>
        <Redirect from="about/*" to="about"></Redirect>
    </Route>
);

module.exports = routes;

