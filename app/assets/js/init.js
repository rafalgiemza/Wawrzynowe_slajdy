
// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'assets/js',
    paths: {
		'jquery': 'lib/jquery-2.1.4.min',
		'handlebars': 'lib/handlebars-v4.0.4',
		'rx': 'lib/rx.lite.min'
    },
	'shim': {
		'handlebars': {
			'exports': 'Handlebars'
		}
	}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/hello/init']);
requirejs(['app/pick_name/init']);