define(function() {

	var Dispatcher = (function() {
		function Dispatcher(backend, gui, eventBus) {
			this.backend = backend;
			this.gui = gui;
			this.eventBus = eventBus;
			this.setupEvents();
		}

		Dispatcher.prototype.setupEvents = function() {
			return this.eventBus.on('nameUpdated', (function(_this) {
				return function(name) {
					return _this.gui.setState({'name': name});
				};
			})(this));
		};

		Dispatcher.prototype.start = function() {};

		return Dispatcher;
	})();
	
	return Dispatcher;
});