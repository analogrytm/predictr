  HaveFunHub.EventModel = HaveFunHub.Model.extend({
  	id: null,
  	name:null,
    description:null,
    start:null,
    end:null,
    place: {longitude: null, latitude: null}
  });

HaveFunHub.EventModel.reopenClass({
  find: function(id, controller) {
    	console.log('searching for event with id '+ id);
    	var _this = this;
    	$.ajax('http://api.test.havefunhub.com/services/event/'+id, {
            type: 'GET',
            data: {},
            contentType: 'application/json',
            dataType: 'json',
            success: function(data, status, resp){
              //console.log('success data = '+ JSON.stringify(data) );
              //console.log('success status = '+status);
              //console.log('success resp = '+resp);
              var eventDetails = HaveFunHub.EventModel.create(data);
              eventDetails.description = eventDetails.description.replace(/\n/g,'<br/>');
              //console.log(eventDetails.description);
              controller.set('content', eventDetails);
            },
            error: function(resp, status, error){
              console.log('error resp = '+ JSON.stringify(resp) );
              console.log('error status = '+status);
              console.log('error message = '+error);
            }
      });	
    //console.log('returning event = '+ JSON.stringify(_data) );
  }
})
