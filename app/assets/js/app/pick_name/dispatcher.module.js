define(function() {

	var Dispatcher = (function() {
		function Dispatcher(backend, gui, eventBus) {
			this.backend = backend;
			this.gui = gui;
			this.eventBus = eventBus;
			this.setupEvents();
		}

		Dispatcher.prototype.setupEvents = function() {};

		Dispatcher.prototype.start = function() {};

		return Dispatcher;
	})();
	
	return Dispatcher;
});