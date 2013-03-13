
HaveFunHub.IndexRoute = Ember.Route.extend({
	
	route: "/",
	redirect: function() {
	  	console.log('redirecting to event view...');
	    this.transitionTo('events');
	},
	setupController:function(controller)
	{
	  	console.log('setting up index route...');
	}
});
