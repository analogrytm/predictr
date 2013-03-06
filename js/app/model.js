// All models for predictr are stored here

/*global window, Ember, $, PredictrDictionary, alert*/

  // All Ember applications need to be an instance of `Ember.Application`.
  // We'll create this first so that we can use it as a namespace for all
  // our models, controllers and views.
  var Predictr = window.Predictr = Ember.Application.create({ 
    rootElement: $('body'),
    LOG_TRANSITIONS: true
  });

  // ## Models
  //
  // Our models are delcared as extensions of `Ember.Object`. We use models
  // to organize our data.

  // **Profile:** A simple object to represent the current logged in user. 
  Predictr.Login = Ember.Object.extend({
    username: "",
    password: ""
  });

  Predictr.Profile = Ember.Object.extend({
  	name: "",
  	email: ""
  });

  // **Prediction:** A prediction that the current user has made.
  Predictr.Prediction = Ember.Object.extend({
  	startDate: "",
  	endDate: "",
  	description: ""
  });

  // **Predictions for current user:**
  Predictr.Predictions = Ember.Object.extend({
  	user: null,
  	prediction: null,
    // Add a letter to the word being built.
    initUser: function(username, password) {
      this.user = {name: "Steve", email: "smitchell@gmail.com"};
      this.predictions = [
            {startDate: "2013-10-10", endDate: "", description: "Predictr will be huge!"},
            {startDate: "2013-12-01", endDate: "", description: "Tomorrow morning I will take a dump."}
          ];
    }
  });

