function webflowPrototypingFrameworkShowDebugOverlay() {
	var allParams = ReactiveLocalStorage.getAllParams();

	var overlay = $('<div style="position:fixed; left: 30px; bottom: 0; padding: 10px; max-height: 300px; max-width: 600px; background: #fff; overflow: auto; z-index: 1000; box-shadow: 10px 10px 108px 0px rgba(0,0,0,0.75);"></div>');

	$.each(allParams, function(key, value) {
		var row = $('<div><span style="padding-right: 8px;">'+key+'</span><input value="'+value+'" action-text-input="'+key+'"></input></div>');
		row.appendTo(overlay);
	});

	overlay.appendTo('body');
}

$(window).on('keypress', function(e) {
	console.log('keypress');
	if ( e.ctrlKey && ( e.which === 46 ) ) {
	  webflowPrototypingFrameworkShowDebugOverlay();
	}
});