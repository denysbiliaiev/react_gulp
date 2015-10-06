/** @jsx React.DOM */

var React = require('react');
var AppStore = require('.././appStore');
var AddToCart = require('./addToCart');
var CatalogItem = require('./catalogItem');
var StoreWatchMixin = require('../mixins/StoreWatchMixin');

function getCatalog() {
    return {items: AppStore.getCatalog()};
};

var Catalog = React.createClass({
    mixins: [StoreWatchMixin(getCatalog)],

    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <CatalogItem item={item} />
            )
        });

        return (
            <div className="rows">
                {items}
            </div>
        )
    }
});

module.exports = Catalog;
