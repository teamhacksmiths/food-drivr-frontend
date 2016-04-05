/*global HackathonForHungerFrontend, Backbone*/

HackathonForHungerFrontend.Collections = HackathonForHungerFrontend.Collections || {};

(function () {
  'use strict';

  HackathonForHungerFrontend.Collections.Drivers = Backbone.Collection.extend({

    model: HackathonForHungerFrontend.Models.Drivers

  });

})();
