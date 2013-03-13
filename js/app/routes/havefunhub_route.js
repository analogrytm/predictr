/**
  The base route for all routes on HaveFunHub. Includes global enter functionality.

  @class Route
  @extends Em.Route
  @namespace HaveFunHub
  @module HaveFunHub
**/

  HaveFunHub.Route = Em.Route.extend({

    /**
      Called every time we enter a route on HaveFunHub.

      @method enter
    **/
    enter: function(router, context) {
      // Close mini profiler
      $('.profiler-results .profiler-result').remove();

      // Close some elements that may be open
      // this is for resetting the UI components
      $('.d-dropdown').hide();
      $('header ul.icons li').removeClass('active');
      $('[data-toggle="dropdown"]').parent().removeClass('open');

      var hideDropDownFunction = $('html').data('hide-dropdown');
      if (hideDropDownFunction) return hideDropDownFunction();
    }
  });


  HaveFunHub.Route.reopenClass({

    buildRoutes: function(builder) {
      var oldBuilder = HaveFunHub.routeBuilder;
      HaveFunHub.routeBuilder = function() {
        if (oldBuilder) oldBuilder.call(this);
        return builder.call(this);
      };
    }

  });
