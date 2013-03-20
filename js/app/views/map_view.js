HaveFunHub.MapView = HaveFunHub.View.extend({

	init: function(){
	    this._super();
	    var context = this.get('context');
	    console.log('long '+ context.get('content.'+this.get('longitude') ));
	    console.log('lat '+ context.get('content.'+this.get('latitude') ));

	    // create the map
	    var map;
	    var eventPosition = new google.maps.LatLng(context.get('content.'+this.get('latitude')), context.get('content.'+this.get('longitude')));
	    var userPosition = new google.maps.LatLng(context.get('content.'+this.get('latitude')), context.get('content.'+this.get('longitude')));
	    var mapOptions = {
          zoom: 16,
          center: eventPosition,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false,
          streetViewControl: false,
          mapTypeControl: false
        };
        var eventMapDiv = document.getElementById('eventMap');
        console.log('holding the event div...');
        map = new google.maps.Map(eventMapDiv, mapOptions);

        // add the event marker
        var eventMarker = new google.maps.Marker({
        	map: map,
        	position: eventPosition
        });

        // add the user marker
        var userMarker = new google.maps.Marker({
        	map: map,
        	position: userPosition
        });
	},
	longitude: null,
	latitude: null
});

