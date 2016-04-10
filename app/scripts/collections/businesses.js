/*global Backbone*/
var app = app || {};

(function() {
	'use strict';

	// Declare the Businesses collection.
	var Businesses = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Business

	});

})();