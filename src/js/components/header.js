"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="app"><img src='http://formatjs.io/img/react.svg' alt="FLUX" className="navbar-brand"/></Link>
                            <ul className="nav navbar-nav">
                                <li><Link to="app">Home</Link></li>
                                <li><Link to="authors">Authors</Link></li>
                                <li><Link to="about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
});

module.exports = Header;