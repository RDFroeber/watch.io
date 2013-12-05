/*******
* MODELS
*******/

var Movies = Backbone.Model.extend({
  defaults: {
    seen: false
  }
});


/******
* VIEWS
******/

var FormView = Backbone.View.extend({
  el: "form",

  events: {
    "submit": "newMovie"
  },

  newMovie: function(e) {
    e.preventDefault();
    // var title = this.$el.find("input[name='movie']").val();
  }
});

var form = new FormView();
