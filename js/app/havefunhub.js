/*global Modernizr:true*/
/*global assetPath:true*/

/**
  The main HaveFunHub Application

  @class HaveFunHub
  @extends Ember.Application
**/

window.HaveFunHub = {};
HaveFunHub.SiteSettings = {};

console.log('creating application...');
HaveFunHub = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: '#main'  
});
console.log('Completed creating application...');
