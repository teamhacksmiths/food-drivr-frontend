/*global Backbone*/
var app = app || {};

(function() {
  'use strict';

  // User model from the Users collection.
  app.User = Backbone.Model.extend({

    url: '',

    initialize: function() {},

    defaults: {},

    validate: function(attrs, options) {},

    parse: function(response, options) {
      return response;
    }
  });

  // Declare the Donor user-type.
  // Extend the User model.
  app.Donor = app.User.extend({
    /*
     *
     * To add its functionality.
     *
     */
  });

  // Declare the Driver user-type.
  // Extend the User model.
  app.Driver = app.User.extend({
    /*
     *
     * To add its functionality.
     *
     */
  });

  // Declare the Recipient user-type.
  // Extend the User model.
  app.Recipient = app.User.extend({
    /*
     *
     * To add its functionality.
     *
     */
  });

})();