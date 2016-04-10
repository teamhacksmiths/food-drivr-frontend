/*global Backbone*/
var app = app || {};

(function() {
	'use strict';

	// Declare the Users collection.
	var Users = Backbone.Collection.extend({
		// Reference to this collection's models.
		model: app.User

	});

})();