/*global _gaq:true */

/**
  The base controller for all things HaveFunHub

  @class ApplicationController
  @extends HaveFunHub.Controller
  @namespace HaveFunHub
  @module HaveFunHub
**/

  HaveFunHub.ApplicationController = HaveFunHub.Controller.extend({
    //needs: ['modal'],

    showLogin: function() {
      var _ref;
      //return (_ref = this.get('controllers.modal')) ? _ref.show(HaveFunHub.LoginView.create()) : void 0;
    },

    routeChanged: function(){
      if (window._gaq === undefined) { return; }

      if(this.afterFirstHit) {
        Em.run.next(function(){
          _gaq.push(['_trackPageview']);
        });
      } else {
        this.afterFirstHit = true;
      }
    }.observes('currentPath')
  });
