/*global HackathonForHungerFrontend, Backbone*/

HackathonForHungerFrontend.Collections = HackathonForHungerFrontend.Collections || {};

(function () {
  'use strict';

  HackathonForHungerFrontend.Collections.Donations = Backbone.Collection.extend({

    model: HackathonForHungerFrontend.Models.Donations

  });

})();
