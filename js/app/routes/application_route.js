/**
  The base Application route

  @class ApplicationRoute
  @extends HaveFunHub.Route
  @namespace HaveFunHub
  @module HaveFunHub
**/

  HaveFunHub.ApplicationRoute = HaveFunHub.Route.extend({
    redirect: function() {
      // NEVER USE a redirect() IN THE APPLICATION ROUTE!!!
      // TOOK HOURS TO WORKOUT THIS WAS THE CAUSE OF ALL MY
      // PROBLEMS!!!
    },
    setupController: function(controller) {
      var currentUser;
      console.log("setting up application controller.");
    }
  });

