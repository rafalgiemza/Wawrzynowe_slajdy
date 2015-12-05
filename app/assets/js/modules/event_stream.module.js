define(['rx'], function (Rx) {

	var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }
	var slice = [].slice;

	var EventStream = (function() {
	  function EventStream(options, stream) {
	    var streamType;
	    this.options = options != null ? options : {};
	    this.stream = stream != null ? stream : void 0;
	    this.on = bind(this.on, this);
	    this.publish = bind(this.publish, this);
	    if (this.stream == null) {
	      streamType = EventStream.subjectType(this.options.repeating);
	      this.stream = new streamType();
	    }
	  }

	  EventStream.prototype.publish = function() {
	    var args, eventName;
	    eventName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return this.stream.onNext.call(this.stream, [eventName].concat(args));
	  };

	  EventStream.prototype.on = function(eventName, callback) {
	    return this.stream.filter((function(_this) {
	      return function(ev) {
	        return ev[0] === eventName;
	      };
	    })(this)).subscribe((function(_this) {
	      return function(args) {
	        return callback.apply(null, args.slice(1));
	      };
	    })(this));
	  };

	  EventStream.subjectType = function(repeating) {
	    if (repeating) {
	      return Rx.ReplaySubject;
	    }
	    return Rx.Subject;
	  };

	  return EventStream;

	})();
	
	return EventStream;
});