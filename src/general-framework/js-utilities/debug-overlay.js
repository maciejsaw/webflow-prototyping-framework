function webflowPrototypingFrameworkShowDebugOverlay() {

	var allParams = ReactiveLocalStorage.getAllParams();

	var allParamsOrdered = {};
	Object.keys(allParams).sort().forEach(function(key) {
	  allParamsOrdered[key] = allParams[key];
	});

	var overlay = $('<div js-debug-overlay style="position:fixed; left: 30px; bottom: 0; padding: 10px; max-height: 300px; max-width: 600px; background: #fff; overflow: auto; z-index: 1000; box-shadow: 10px 10px 108px 0px rgba(0,0,0,0.75); border-radius: 5px; font-size: 13px;"></div>');

	$.each(allParamsOrdered, function(key, value) {
		var row = $('<div><span style="padding-right: 8px;">'+key+'</span><input value="'+value+'" action-text-input="'+key+'" update-on-input="true" js-debug-input="'+key+'"></input></div>');
		row.appendTo(overlay);
	});

	overlay.appendTo('body');

	$(document).on('click.debugOverlay', function() {
		$('[js-debug-input]').each(function() {
			var param = $(this).attr('js-debug-input');
			$(this).val(ReactiveLocalStorage.getParam(param));
		});
	});

}

function webflowPrototypingFrameworkHideDebugOverlay() {
	$('[js-debug-overlay]').remove();

	$(document).off('click.debugOverlay');
}

$(document).on('keydown', function(e) {
	if ( e.shiftKey && ( e.which === 192 ) ) {
	 	if ($('[js-debug-overlay]').length === 0) {
	 		webflowPrototypingFrameworkShowDebugOverlay();
	 	} else {
	 		webflowPrototypingFrameworkHideDebugOverlay();
	 	}

	}
});

//IDEA TODO - show attributes on hover

//IDEA TODO - show elements binded to this param on hover

//IDEA TODO - in reactive local storage add onAnyParamChange