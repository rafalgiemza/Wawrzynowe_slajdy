
define(['require', 'jquery', './app.module'], function (require, $) {

	var App = require('./app.module');
	var EventBus = require('modules/event_bus.module');

	EventBus.on('pickNameDivRendered', function() {
		if (!window.pickNameApp) {
			return $(document).ready(function() {
				return $('div#pickName').each(function() {
					window.pickNameApp = new App();
					return window.pickNameApp.start(this);
				});
			});
		} else {
			return $('div#pickName').each(function() {
				return window.pickNameApp.gui.render(this);
			});
		}
	});
});