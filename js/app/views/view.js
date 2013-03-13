  /**
    A base view that gives us common functionality, for example `present` and `blank`

    @class View
    @extends Ember.View
    @uses HaveFunHub.Presence
    @namespace HaveFunHub
    @module HaveFunHub
  **/
  HaveFunHub.View = Ember.View.extend(HaveFunHub.Presence, {});
