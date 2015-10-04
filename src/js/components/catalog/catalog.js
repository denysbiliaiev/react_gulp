/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../../stores/appStore');
var AddToCart = require('./addToCart');
var CatalogItem = require('./CatalogItem');
var StoreWatchMixin = require('../mixins/storeWatchMixin');

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
