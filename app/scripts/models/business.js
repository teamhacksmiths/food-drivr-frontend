/*global Backbone*/
var app = app || {};

(function() {
  'use strict';

  app.Business = Backbone.Model.extend({

    url: '',

    initialize: function() {},

    defaults: {},

    validate: function(attrs, options) {},

    parse: function(response, options) {
      return response;
    }
  });

})();