/*global HackathonForHungerFrontend, Backbone*/

HackathonForHungerFrontend.Collections = HackathonForHungerFrontend.Collections || {};

(function () {
  'use strict';

  HackathonForHungerFrontend.Collections.Donors = Backbone.Collection.extend({

    model: HackathonForHungerFrontend.Models.Donors

  });

})();
