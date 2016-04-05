/*global HackathonForHungerFrontend, Backbone*/

HackathonForHungerFrontend.Collections = HackathonForHungerFrontend.Collections || {};

(function () {
  'use strict';

  HackathonForHungerFrontend.Collections.Businesses = Backbone.Collection.extend({

    model: HackathonForHungerFrontend.Models.Businesses

  });

})();
