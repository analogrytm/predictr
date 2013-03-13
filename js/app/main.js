// this is the start of our js application.
// ensure all loaded mudles are used here...

  console.log("creating router...");

  HaveFunHub.Router.map(function() {
    this.resource('index',{path: '/'});
    this.resource('event',{path: '/event/:id'});
    this.resource('events',{path: '/events'});
  });
  
  console.log("initing app...");
  HaveFunHub.initialize();

/*
  $(document).bind('pageinit', function(){
    console.log('pageinit');
    var v = App.get('application');

    if (!v) {
        console.log('main not created');
        v = HaveFunHub.ApplicationView.create();
        HaveFunHub.set('applicationView',v);
        v.append();
    }
});*/
