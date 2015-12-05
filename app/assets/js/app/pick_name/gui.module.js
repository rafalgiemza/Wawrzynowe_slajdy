define(['require', 'jquery', 'handlebars'], function (require, $, Handlebars) {
	
	var Gui = (function() {
		function Gui(eventBus) {
			window.gui_id++;
			this.eventBus = eventBus;
			this.gui_id = window.gui_id;
			this.getInitialState();
		}

		Gui.prototype.getInitialState = function() {
			this.state = {name: ""};
		};
		
		Gui.prototype.quiteSetState = function(state) {
			var t = this;
			$.each(state, function(property, value) {
				t.state[property] = value;
			});
			/*$.each($('[gui='+this.gui_id+']'), function(i, elem) {
				t.render(elem);
			});*/
		};

		Gui.prototype.render = function(node) {
			$(node).attr("gui", this.gui_id);

			var t = this;
			$.get("views/pick_name/index.html.hb", function(source, status) {
				var template = Handlebars.compile(source);
				$(node).html(template(t.state));

				$("#nameInput").change(function() {
					t.quiteSetState({name: $('#nameInput').val()});				
				});
				$('#submithName').click(function() {
					t.eventBus.publish("nameUpdated", t.state.name);
				});
			}, "text");
			
		};

		return Gui;
	})();
	
	return Gui;
});