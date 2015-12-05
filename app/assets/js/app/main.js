define(['require', 'jquery', 'handlebars', './messages', '../modules/event_bus.module'], function (require, $, Handlebars) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    $('#id').hide();
    $('#id').load('./assets/js/app/partials/toload.html', function() {
    	var source   = $("#id").html();
		var template = Handlebars.compile(source);
	    var context = {title: "My New Post", body: "This is my first post!"};
		var html    = template(context);
		$('#id').html(html);
		$('#id').fadeIn();
    });
  
	//$('#id').html("<p>aaa</p>");

    var messages = require('./messages');
    var eb = require('../modules/event_bus.module');
    
    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('./helpers/print.helper');

    //print(messages.getHello());
});