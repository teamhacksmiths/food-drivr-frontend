/*global Backbone*/
var app = app || {};

(function() {
	'use strict';

	// Declare the Donations collection.
	var Donations = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Donation

	});

})();