/*global HackathonForHungerFrontend, Backbone*/

HackathonForHungerFrontend.Models = HackathonForHungerFrontend.Models || {};

(function () {
  'use strict';

  HackathonForHungerFrontend.Models.Donor = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
