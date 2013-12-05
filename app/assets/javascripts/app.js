/*******
* COLLECTIONS
*******/

var Movies = Backbone.Collection.extend({
  model: Movie,
  urlRoot: '/movies'
})

/*******
* MODELS
*******/

var Movie = Backbone.Model.extend({
  urlRoot: '/movies',

  defaults: {
    seen: false
  }
});

/******
* VIEWS
******/

var FormView = Backbone.View.extend({
  model: Movie, 
  url: '/tasks',
  el: "form",

  events: {
    "submit": "newMovie"
  },

  newMovie: function(e) {
    e.preventDefault();
    var title = this.$el.find("input[name='movie']").val();
  }
});

var form = new FormView();
