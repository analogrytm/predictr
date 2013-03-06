// ## Predictr Initialisation - always call after declaring...
// ## models.js
// ## view.js
// ## mcontrollers.js


  Predictr.ApplicationController = Ember.Controller.extend({
  });

  // Boilerplate below initializes the game. Routers make more sense 
  // when there is more than one URL :)
  Predictr.ApplicationView = Ember.View.extend();
  Predictr.EventsView = Ember.View.extend();
  Predictr.EventsController = Ember.ObjectController.extend({
    content: Ember.Object.create()
  });
  Predictr.EventsController = Ember.Controller.extend({
    showEvents: function(data)
    {
      console.log('receviecd event data...');
      this.set('model', data);
    },
    model: null,
    showEvent: function(eventid)
    {
      console.log("showing event details using id="+eventid);
      var model = this.get('model');
      for(var c=0;c<model.results.length;c+=1)
      {
        if (eventid == model.results[c].id)
        {
          console.log("Name: "+model.results[c].name);
        }
      }
    }
  });

  Predictr.ClickableView = Ember.View.extend({
  click: function(evt) {
    alert("ClickableView was clicked!");
  }
});

  Predictr.IndexController = Ember.ObjectController.extend({
    content: Ember.Object.create()
  });

  // Define all the route or URLS of your application.
  // the routes will give you guidance on how to accept a new request 
  // and configure the controller and view for the user.
  Predictr.IndexRoute = Ember.Route.extend({
    route: "/",
    setupController: function(controller, model) {
      // set the indexcontrollers title
      //controller.set('content', model);
      //controller.set('title', 'Welcome to the Predictr!');
    }
  });

  Predictr.AboutRoute = Ember.Route.extend({
    route: "/about",
    setupController: function(controller) {
      // set the indexcontrollers title
      controller.set('title', 'The Predictr is a store of all those little predictions you make each day, think of me as a place to take note and share with your friends those small expectations and predictions you make.');
    }
  });

  Predictr.LoginController = Ember.Controller.extend({
    authenticated: function()
    {
      console.log("Moving to events state");
      this.transitionToRoute('events');
    },
    login: function() {
        var u = this.get('username');
        var p = this.get('password') ;
        console.log('login fired. '+ u + ' - '+ p );      

        var myController = this;
        $.ajax({
          type: 'POST',
          url: 'http://api.test.havefunhub.com/services/login',
          data: {},
          contentType: 'application/json',
          dataType: 'json',
          success: function(data, status, resp){
            console.log('success data = '+ JSON.stringify(data) );
            console.log('success status = '+status);
            console.log('success resp = '+resp);
            myController.authenticated();
          },
          error: function(resp, status, error){
            console.log('error resp = '+ JSON.stringify(resp) );
            console.log('error status = '+status);
            console.log('error message = '+error);
          },
          beforeSend : function(req) {
              req.setRequestHeader('Authorization', "Basic " + Base64.encode(u+ ':' + p));
          }
        });
      }
  });

  Predictr.LoginView = Ember.View.extend({
  });

  Predictr.LoginRoute = Ember.Route.extend({
    route: "/login",
    setupController: function(controller, model) {
      // set the indexcontrollers title      
      controller.set('model', model);
      controller.set('content', model);
      controller.set('title', 'Login to the predictr to access your predictions.');
      controller.set('username','mateo@druidalabs.com');
      controller.set('password','password');
    }
  });

  Predictr.EventsRoute = Ember.Route.extend({
    route: "/events",
    setupController: function(controller, model) {
      // set the indexcontrollers title      
      //controller.set('model', model);
      //controller.set('content', model);
      controller.set('title', 'Your current events...');
    
      var myRoute = this;
        $.ajax({
          type: 'GET',
          url: 'http://api.test.havefunhub.com/services/events',
          data: {},
          contentType: 'application/json',
          dataType: 'json',
          success: function(data, status, resp){
            console.log('success data = '+ JSON.stringify(data) );
            console.log('success status = '+status);
            console.log('success resp = '+resp);
            controller.showEvents(data);
          },
          error: function(resp, status, error){
            console.log('error resp = '+ JSON.stringify(resp) );
            console.log('error status = '+status);
            console.log('error message = '+error);
          }
        });
    }
  });

  Predictr.PredictionsRoute = Ember.Route.extend({
    route: "/predictions",
    setupController: function(controller, model) {
      // set the indexcontrollers title
      controller.set('title', 'View your predictions.');
      controller.set('content', model);
    },
    model: function() {
      return Predictr.Predictions;
    }
  });

  Predictr.Router.map(function() {
    this.route("about", { path: "/about" });
    this.route("index", { path: "/" });
    this.route("login", { path: "/login" });
    this.route("predictions", { path: "/predictions" });
    this.route("events", { path: "/events" });
  });
  Predictr.initialize();
