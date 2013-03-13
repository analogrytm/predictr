/**
  The base Application route

  @class ApplicationRoute
  @extends HaveFunHub.Route
  @namespace HaveFunHub
  @module HaveFunHub
**/

  HaveFunHub.EventRoute = HaveFunHub.Route.extend({
    route: "/event",
    model: function(params) {
      console.log('model is loading data for event '+ JSON.stringify(params) );
      return {id: params.id};
    },
    setupController: function(controller, model) {
      console.log("configuring the event controller before display of data using id "+ JSON.stringify(model));      

      var event_model;
      if (model.id)
        event_model = HaveFunHub.EventModel.find(model.id, controller);
      else
        event_model = HaveFunHub.EventModel.find(model, controller);
    }
  });

