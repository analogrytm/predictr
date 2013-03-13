/**
  Builds the routes for the application

  @method buildRoutes
  @for HaveFunHub.ApplicationRoute
**/

  HaveFunHub.Route.buildRoutes(function() {

    console.log("creating routes...");
    var router = this;

    this.route('index',{path: "/"});
    this.route('events',{path: "/events"});

  });

