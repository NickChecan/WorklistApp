/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/nick/sample/worklistapp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});