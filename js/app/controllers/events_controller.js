/*global _gaq:true */

/**
  The base controller for all things HaveFunHub

  @class ApplicationController
  @extends HaveFunHub.Controller
  @namespace HaveFunHub
  @module HaveFunHub
**/

HaveFunHub.EventsController = HaveFunHub.Controller.extend({

	loadMore: function(){
		console.log('EventsController: loadMore fired. Retrieving pageIndex '+ this.get('content.nextPage'));
		this.get('content').loadEvents();
	},
	changeTime: function(time){
		console.log('EventsController: changeTime fired. '+ JSON.stringify(time));
		this.set('content.nextPage', null);
		this.set('content.eventTime', time);
		this.get('content').loadEvents();
	}
});
