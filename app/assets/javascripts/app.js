/*******
* ROUTER
*******/

var MovieRouter = Backbone.Router.extend({
  routes: {
    "search/:title": "movie"
  },

  movie: function(title){
    new ResultsView({symbol: title});
  }
});

new MovieRouter();

/*******
* COLLECTIONS
*******/

// var Movies = Backbone.Collection.extend({
//   model: Movie,
//   urlRoot: '/movies'
// })

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
  el: "form",

  events: {
    "submit": "isSubmitted"
  },

  isSubmitted: function(e){
    e.preventDefault();
    var title = this.$el.find("input[name='movie']").val();
    Backbone.history.navigate("search/" + title, {trigger: true});
  }
});

var form = new FormView();

var ResultsView = Backbone.View.extend({
  tagName: "div",

  template: _.template($("#result").html()),

  newMovie: function(e) {
    $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?s=" + title,
    dataType: "json",
    success: this.receiveMovies,
    context: this
    }
  });
  },

  receiveMovies: function(response){
    jsonObject = JSON.parse(response);
    this.movietitle = jsonObject.Search.Title;
    this.moviePoster = jsonObject.Search.
    this.render();
  },

  render: function() {
    var compiledTemplate = this.template();
    this.$el.html(compiledTemplate);
  },


})