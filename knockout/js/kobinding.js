ko.bindingHandlers.tinymce = {
    init: function (element, valueAccessor, allBindingsAccessor) {
		var tinymceOptions = {
			setup: function (editor) {
				editor.on('change', function (event) {
					valueAccessor()(event.target.getContent());
				});
			}
		};
	
		$( element ).text( valueAccessor()() );

		setTimeout( function() { $( element ).tinymce(tinymceOptions); }, 0 );
		
		ko.utils['domNodeDisposal'].addDisposeCallback( element, function() {
			$( element ).tinymce().remove();
		});
    },
	'update': function( element, valueAccessor, allBindings ) {
		var tinymce = $( element ).tinymce(),
			value = valueAccessor()();

		if ( tinymce ) {
			if ( tinymce.getContent() !== value ) {
				tinymce.setContent( value );
			}
		}
	}
};