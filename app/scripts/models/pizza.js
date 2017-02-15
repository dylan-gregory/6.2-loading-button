
var Backbone = require('backbone');

var Pizza = Backbone.Model.extend({

});

var PizzaCollection = Backbone.Collection.extend({
  model: Pizza,
  url: "https://tiny-lasagna-server.herokuapp.com/collections/pizza",

})

module.exports = {
  Pizza: Pizza,
  PizzaCollection: PizzaCollection
};
