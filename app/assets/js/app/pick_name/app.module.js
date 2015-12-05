define(function(require) {

	var Backend = require('./backend.module');
	var Dispatcher = require('./dispatcher.module');
	var EventBus = require('modules/event_bus.module');
	var Gui = require('./gui.module');

	var App = (function() {
		function App() {
			this.eventBus = EventBus;
			this.backend = new Backend();
			this.gui = new Gui(this.eventBus);
		}

		App.prototype.start = function(node) {
			this.gui.render(node);
			this.dispatcher = new Dispatcher(this.backend, this.gui, this.eventBus);
			return this.dispatcher.start();
		};

		return App;
	})();
	return App;
});