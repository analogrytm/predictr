/**
  This controller supports actions on the site header

  @class HeaderController
  @extends HaveFunHub.Controller
  @namespace HaveFunHub
  @module HaveFunHub
**/
HaveFunHub.HeaderController = HaveFunHub.Controller.extend({
  topic: null,
  showExtraInfo: null,

  toggleStar: function() {
    var topic = this.get('topic');
    if (topic) topic.toggleStar();
    return false;
  }

});


