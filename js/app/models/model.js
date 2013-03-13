/**
  A base object we can use to handle models in the HaveFunHub client application.

  @class Model
  @extends Ember.Object
  @uses HaveFunHub.Presence
  @namespace HaveFunHub
  @module HaveFunHub
**/

console.log('creating HaveFunHub.Model');

  HaveFunHub.Model = Ember.Object.extend(HaveFunHub.Presence, {

    /**
      Our own AJAX handler that handles erronous responses

      @method ajax
      @param {String} url The url to contact
      @param {Object} args The arguments to pass to $.ajax
    **/
    ajax: function(url, args) {
      var oldError = args.error;
      args.error = function(xhr) {
        return oldError($.parseJSON(xhr.responseText).errors);
      };
      return $.ajax(url, args);
    },

    /**
      Update our object from another object

      @method mergeAttributes
      @param {Object} attrs The attributes we want to merge with
      @param {Object} builders Optional builders to use when merging attributes
    **/
    mergeAttributes: function(attrs, builders) {
      var _this = this;
      return Object.keys(attrs, function(k, v) {
        // If they're in a builder we use that
        var builder, col;
        if (typeof v === 'object' && builders && (builder = builders[k])) {
          if (!_this.get(k)) {
            _this.set(k, Em.A());
          }
          col = _this.get(k);
          return v.each(function(obj) {
            col.pushObject(builder.create(obj));
          });
        } else {
          _this.set(k, v);
        }
      });
    }
  });

  HaveFunHub.Model.reopenClass({

    /**
      Given an array of values, return them in a hash

      @method extractByKey
      @param {Object} collection The collection of values
      @param {Object} klass Optional The class to instantiate
    **/
    extractByKey: function(collection, klass) {
      var retval;
      retval = {};
      if (!collection) {
        return retval;
      }
      collection.each(function(c) {
        var obj;
        obj = klass.create(c);
        retval[c.id] = obj;
      });
      return retval;
    }
  });