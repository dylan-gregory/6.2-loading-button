var $ = require('jquery');
var Handlebars = require('handlebars');

var model = require('./models/pizza.js');
var buttonTemplate = require('../templates/load-button.hbs');
var pizzaTemplate = require('../templates/pizza-list.hbs');
var byoForm = require('../templates/byo-pizza-form.hbs');

var todaysPizzas = new model.PizzaCollection();


$('.button-spot').append(buttonTemplate());


$('.loading-button').on('click', function(){
  $('.loading-button').html('Loading...');
  todaysPizzas.fetch();

});

todaysPizzas.on('sync', function(){
  $('.loading-button').html('Submit');
  todaysPizzas.forEach(function(pizza){

    $('.pizza-menu').append(pizzaTemplate(pizza.toJSON()));
  });

  $('.byo-za').append(byoForm());
  $('.build-title').removeClass('hide');

});


$('.pizza-form').on('submit', function(event){
  event.preventDefault();

  this.model.save({
    name: $('.name-your-za').val(),
    type: $('.type-your-za').val(),
    ingredients: $('.ingred-your-za').val()
  });

});
