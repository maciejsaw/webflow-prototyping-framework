//preload all views into respective containers
//until the subpages are loaded the UI is covered by loading overlay
//after they are preloaded, we retrigger the state of all components
//and fade in the UI to prevent flicker

function recursivelyPreloadElements() {
	var preloadMissingElements = function() {
		var elementsThatWillBePreloaded = $('[preload-from]').not('[preloading-started]').not('[preloading-done]');
		//mark all elements that will be preloaded
		elementsThatWillBePreloaded.attr('preloading-started', 'true');

		elementsThatWillBePreloaded.each(function() {
			var elemToLoad = $(this).attr('preload-from');
			var $this = $(this);
			$this.load(elemToLoad + " .content-to-load", function() {
				$this.attr('preloading-done', 'true');
				checkIfEverythingIsPreloaded();
			});
		});
	};

	var checkIfEverythingIsPreloaded = function() {
		//check if there are no elements that has not yet been started preloading
		var numberOfUnitialisedElements = $('[preload-from]').not('[preloading-started]').not('[preloading-done]').length;
		var numberOfInProgressElements = $('[preload-from][preloading-started]').not('[preloading-done]').length;

		if (numberOfUnitialisedElements === 0 && numberOfInProgressElements === 0) {
			console.log('Everything preloaded and nothing in progress');
			$(document).trigger('preloadedElementsReady');
		} else if (numberOfUnitialisedElements === 0 && numberOfInProgressElements > 0) {
			//console.log('Preloading still in progress...');
			//do nothing because other elements will continue recursive preloading
		} else if (numberOfUnitialisedElements > 0){
			console.log('Noticed elements to preload...');
			preloadMissingElements(); //rerun the checking function
		}
	};

	checkIfEverythingIsPreloaded();
}

function initTheUIAfterPreloading() {
	$(document).trigger('preloadingComplete');
	QueryStringRouter.retriggerOnParamChangeForAll();
	ReactiveLocalStorage.retriggerOnParamChangeForAll();
	console.log('retriggerOnParamChangeForAll');
	$('.initial-load-overlay').fadeOutAndHide(500);
}

function waitForInitialAjaxLoadingToFinishThenShowUI(eventsToWaitFor, callbackFunction) {

	var numberOfEventsThatHappened = 0;

	$.each(eventsToWaitFor, function(index, value) {
		$(document).one(value, function() {
			//TODO refactor so that it checks if the specific events happened, not number of elements
			numberOfEventsThatHappened = numberOfEventsThatHappened + 1;
			if (numberOfEventsThatHappened === eventsToWaitFor.length) {
				console.log('preloading complete start'); 
				if (typeof callbackFunction === 'function') { callbackFunction(); }
				console.log('preloading complete end'); 
			}
		});
	});
}

waitForInitialAjaxLoadingToFinishThenShowUI([
	// reserved place in case we need to wait for more events
	'preloadedElementsReady'
], function() {
	$(document).ready(function() {
		console.log('document ready');
		initTheUIAfterPreloading();
	});
});

recursivelyPreloadElements();

