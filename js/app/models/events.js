  HaveFunHub.EventsModel = HaveFunHub.Model.extend({
  	currentEvents: [],
    hasMoreEvents: false,
    nextPage: null,
    eventTime: null,
    noEvents: function()
    {
      if(this.get('currentEvents').length > 0)
      {
        return false;
      }else{
        return true;        
      }
    }.property('currentEvents'),
    resetEvents: function(){
      this.set('nextPage',null);
      this.loadEvents();
    },
  	loadEvents: function(){
  		var _this = this;
      console.log('searching for events with coords '+ HaveFunHub.longitude+ " : "+ HaveFunHub.latitude);
      var pageUrl = 'http://api.test.havefunhub.com/services/events';
      var nextPage = this.get('nextPage');
      var eventTime = this.get('eventTime');
      if (!eventTime)
      {
        eventTime = 'now';
      }
      if (nextPage)
      {
        pageUrl = pageUrl + '?when='+eventTime+'&rows=15&lat='+HaveFunHub.latitude+'&long='+HaveFunHub.longitude+'&page='+nextPage;
      } else {
        pageUrl = pageUrl + '?when='+eventTime+'&rows=15&lat='+HaveFunHub.latitude+'&long='+HaveFunHub.longitude+'&page=1';
      }
  		$.ajax(pageUrl, {
            type: 'GET',
            data: {},
            contentType: 'application/json',
            dataType: 'json',
            success: function(data, status, resp){
              //console.log('success data = '+ JSON.stringify(data) );
              //console.log('success status = '+status);
              //console.log('success resp = '+resp);
              //console.log('nextPage = '+ data.nextPage );

              if (nextPage)
              {
                var currentEvents = _this.get('currentEvents');
                var newResults = currentEvents.concat(data.results);
                _this.set("currentEvents", newResults);
                console.log("setting "+ newResults.length+" items.");
              }else{
                _this.set("currentEvents", data.results);                
                console.log("setting "+ data.results.length+" items.");
              }

              // decide whether to load more events or not...
              if (data.nextPage)
              {
                var n = parseInt(data.currentPage)+1;
                console.log('setting nextPage = '+ n);
                _this.set('hasMoreEvents', true);
                _this.set('nextPage', n);
              }else{
                console.log('disabling next page.');
                _this.set('hasMoreEvents', false);
                _this.set('nextPage', null);
              }
            },
            error: function(resp, status, error){
              console.log('error resp = '+ JSON.stringify(resp) );
              console.log('error status = '+status);
              console.log('error message = '+error);
            }
          });	
  	}
  });

