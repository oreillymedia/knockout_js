ko.extenders.maxCharacters = function(target, max) {
	var result = ko.pureComputed({
		read: target,
		write: function(newValue) {
			var current = target();
			console.log(current.length);
			// only write the newValue if it less or equal to the max characters allowed
			if (newValue.length <= max)
				target(newValue);
			// set it back to the previous value
			else {
				target(current);
				target.notifySubscribers(current);
			}
		}
	}).extend({ notify: 'always' });
	
	return result;
};