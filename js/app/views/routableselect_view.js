HaveFunHub.eventTimes = Ember.Object.create({
	content: ["now", "later", "tomorrow", "any"]
});

HaveFunHub.RoutableSelect = Ember.Select.extend({
	action: null,
    valueDidChange: Ember.observer(function() {
        this._super();
        console.log("Changed time to " + this.get('selection'));
		var controller = this.get('controller');
        if (controller)
        {
        	console.log('we found a controller and the action is '+ this.get('action'));
        	controller[this.get('action')](this.get('selection') );
        }
    }, 'value')
});