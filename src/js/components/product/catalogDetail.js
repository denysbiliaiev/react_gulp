/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../../stores/appStore');
var AddToCart = require('../catalog/addToCart');
var CatalogItem = require('../catalog/CatalogItem');
var StoreWatchMixin = require('../mixins/storeWatchMixin');
var Link = require('react-router').Link;

function getCatalogItem(component) {
    var thisItem;

    AppStore.getCatalog().forEach(function(item, i){
        if (item.id.toString() == component.props.params.id) {
            thisItem = item;
        }
    });

    return {item: thisItem};
}

var React = require('react');

var CatalogDetail = React.createClass({
    mixins: [StoreWatchMixin(getCatalogItem)],

    render: function() {
        var imgStyle = {
            width: 100
        };

        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <img style={imgStyle} src={this.state.item.img} alt=""></img>
                <p>{this.state.item.description}</p>
                <p>${this.state.item.cost}<span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
                <div className="btn-group btn-group-xs">
                    <AddToCart item={this.state.item}/>
                    <Link to="app" className="btn btn-default">Continue shoping</Link>
                </div>
            </div>
        )
    }
});

module.exports = CatalogDetail;