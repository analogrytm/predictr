  HaveFunHub.EventModel = HaveFunHub.Model.extend({
  	id: "",
  	name:"",
    description:"",
    start:"",
    end:""
  });

HaveFunHub.EventModel.reopenClass({
  find: function(id, controller) {
    	console.log('searching for event with id '+ id);
    	var _this = this;
    	var _data = $.ajax('http://api.test.havefunhub.com/services/event/'+id, {
            type: 'GET',
            data: {},
            contentType: 'application/json',
            dataType: 'json',
            success: function(data, status, resp){
              console.log('success data = '+ JSON.stringify(data) );
              console.log('success status = '+status);
              console.log('success resp = '+resp);
              controller.set('content', data);
            },
            error: function(resp, status, error){
              console.log('error resp = '+ JSON.stringify(resp) );
              console.log('error status = '+status);
              console.log('error message = '+error);
            }
          });	
    console.log('returning event = '+ JSON.stringify(_data) );
  }
})
