
define(['require', 'jquery', './app.module'], function (require, $) {
	var App = require('./app.module');

	$(document).ready(function() {
		window.gui_id = 0;
		return $('#content').each(function() {
			window.app = new App();
			return window.app.start(this);
		});
	});
});