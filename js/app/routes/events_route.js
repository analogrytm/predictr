/**
  The base Application route

  @class ApplicationRoute
  @extends HaveFunHub.Route
  @namespace HaveFunHub
  @module HaveFunHub
**/

  HaveFunHub.EventsRoute = HaveFunHub.Route.extend({
    route: "/events",
    model: function(){
      return HaveFunHub.EventsModel.create();
    },
    setupController: function(controller, model) {
      console.log("Events setupController called.");
      console.log("currentEvents has "+ model.currentEvents.length + " items.");
      // check if we have cached data
      if (model.currentEvents.length == 0){
        model.loadEvents();
      }
      controller.set("content", model);
    }
  });

