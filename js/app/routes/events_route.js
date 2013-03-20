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
      
      var _this = this;
      var _controller = controller;
      var _model = model;

      if (HaveFunHub.hasLocation)
      {
        console.log("Events setupController called.");
        console.log("currentEvents has "+ model.currentEvents.length + " items.");

        // check if we have cached data
        if (model.currentEvents.length == 0){
          model.loadEvents();
        }
        controller.set("content", model);
      }else{
        if (Modernizr.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Found location of "+ latitude + " : "+ longitude);
            HaveFunHub.hasLocation = true;
            HaveFunHub.longitude = longitude;
            HaveFunHub.latitude = latitude;
            _this.setupController(_controller,_model);
          });
        } else {
          // no native support; maybe try a fallback?
            console.log("No location support.");
        }
      }
    }
  });

