/*********
* ROUTER *
*********/

var MovieRouter = Backbone.Router.extend({
  routes: {
    "movies/search/:title": "search"
  },

  search: function(title){
    new ResultsView({collection: new SearchedMovies(), title: title});
  }
});

new MovieRouter();

Backbone.history.start();

/**************
* COLLECTIONS *
**************/

var SearchedMovies = Backbone.Collection.extend({
  model: Movie,
  url: '/movies/search'
})

/*********
* MODELS *
*********/

var Movie = Backbone.Model.extend({
  defaults: {
    seen: false
  }
});

/********
* VIEWS *
********/

var FormView = Backbone.View.extend({
  el: "form",

  events: {
    "submit": "isSubmitted"
  },

  isSubmitted: function(e){
    e.preventDefault();
    var title = this.$el.find("input[name='movie']").val();
    Backbone.history.navigate("movies/search/" + title, {trigger: true});
  }
});

var form = new FormView();

var ResultsView = Backbone.View.extend({
  tagName: "div",

  // template: _.template($("#result").html()),

  initialize: function(opts){
    this.movieTitle = opts.title
    this.collection.fetch({data: {title: this.movieTitle}});
  }

  // newMovie: function(e) {
  //   $.ajax({
  //   type: "GET",
  //   url: "http://www.omdbapi.com/?s=" + title,
  //   dataType: "json",
  //   success: this.receiveMovies,
  //   context: this
  //   }
  // });
  // },

  // receiveMovies: function(response){
  //   jsonObject = JSON.parse(response);
  //   this.movieID = jsonObject.Search.imdbID; 
  //   this.movietitle = jsonObject.Search.Title;
    
  //   this.render();
  // },

  // render: function() {
  //   var compiledTemplate = this.template();
  //   this.$el.html(compiledTemplate);
  // },


});
