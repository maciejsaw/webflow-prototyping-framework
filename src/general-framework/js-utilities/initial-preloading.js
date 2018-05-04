/* Notes about the convention used here
- subpages are main content views, like a separate subpage in the main card
- subpages are preloaded on page load into their containers
- Only one active subpage is shown at a time
- Tabs and subpages containers share the same id and are binded together this way
*/////////

//preload all views into respective containers
//until the subpages are loaded the UI is covered by loading overlay
//after they are preloaded, we retrigger the state of all components
//and fade in the UI to prevent flicker
//we can define for what specific events we wait until we show the UI, 
//for example we may want to preload not only subpages, but additional promo modals etc.


// function initialLoadHtmlsubpages(callbackFunction) {
// 	var numberOfSubpagesToLoad = $('[subpage-id]').not('[disable-preloading]').length;
// 	var numberOfCompletedLoads = 0;

// 	if (numberOfSubpagesToLoad > 0) {
// 		$('[subpage-id]').not('[disable-preloading]').each(function() {
// 			var urlSlug = "/subpages";
// 		    var subpageToLoad = $(this).attr('subpage-id');
// 			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
// 				numberOfCompletedLoads = numberOfCompletedLoads + 1;

// 				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
// 					if (typeof callbackFunction === 'function') { callbackFunction(); };
// 					$(document).trigger('subpagesReady');
// 					console.log('subpagesReady');
// 				}
// 			});
// 		});	
// 	} else {
// 		$(document).trigger('subpagesReady');
// 		console.log('subpagesReady');
// 	}

// }

function initialLoadModalsContent(callbackFunction) {
	var numberOfSubpagesToLoad = $('[modal-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[modal-id]').each(function() {
			var urlSlug = "/modals";
		    var subpageToLoad = $(this).attr('modal-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('modalsReady');
					console.log('modalsReady');
				}
			});
		});	
	} else {
		$(document).trigger('modalsReady');
		console.log('modalsReady');
	}

}

function initialLoadComponents(callbackFunction) {
	var numberOfSubpagesToLoad = $('[component-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[component-id]').each(function() {
			var urlSlug = "/components";
		    var subpageToLoad = $(this).attr('component-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('componentsReady');
					console.log('componentsReady');
				}
			});
		});	
	} else {
		$(document).trigger('componentsReady');
		if (typeof callbackFunction === 'function') { callbackFunction(); };
		console.log('componentsReady');
	}
}

function recursivelyPreloadElements() {
	var preloadMissingElements = function() {
		$('[preload-from]').not('[preloading-started]').not('[preloading-done]').each(function() {
			var elemToLoad = $(this).attr('preload-from');
			var $this = $(this);
			$this.attr('preloading-started', 'true');

			$this.load(elemToLoad + " .content-to-load", function() {
				$this.attr('preloading-done', 'true');
				checkAndRerunPreloadinIfNeccessary();
			});
		});
	};

	var checkIfEverythingIsPreloaded = function() {
		//check if there are no elements that has not yet been started preloading
		var numberOfUnitialisedElements = $('[preload-from]').not('[preloading-started]').not('[preloading-done]').length;
		var numberOfInProgressElements = $('[preload-from][preloading-started]').not('[preloading-done]').length;

		if (numberOfUnitialisedElements === 0 && numberOfInProgressElements === 0) {
			return 'everything-preloaded-and-nothing-in-progress';
			console.log('everything-preloaded-and-nothing-in-progress');
		} else if (numberOfUnitialisedElements === 0 && numberOfInProgressElements > 0) {
			return 'some-elements-still-in-progress';
			console.log('some-elements-still-in-progress');
		} else if (numberOfUnitialisedElements > 0){
			return 'there-are-elements-that-need-preloading';
			console.log('there-are-elements-that-need-preloading');
		}
	};

	var checkAndRerunPreloadinIfNeccessary = function() {
		if (checkIfEverythingIsPreloaded() === 'everything-preloaded-and-nothing-in-progress') {
			$(document).trigger('preloadedElementsReady');
			console.log('preloadedElementsReady');
		} else if (checkIfEverythingIsPreloaded() === 'there-are-elements-that-need-preloading') {
			preloadMissingElements(); //rerun this function
		} else if (checkIfEverythingIsPreloaded() === 'some-elements-still-in-progress') {
			return; //do nothing because other elements will continue recursive preloading
		}
	};

	checkAndRerunPreloadinIfNeccessary();
}

function initTheUIAfterPreloading() {
	QueryStringRouter.retriggerOnParamChangeForAll();
	ReactiveLocalStorage.retriggerOnParamChangeForAll();
	$('.initial-load-overlay').fadeOutAndHide(500);
}

function waitForInitialAjaxLoadingToFinishThenShowUI(eventsToWaitFor, callbackFunction) {

	var numberOfEventsThatHappened = 0;

	$.each(eventsToWaitFor, function(index, value) {
		$(document).one(value, function() {
			numberOfEventsThatHappened = numberOfEventsThatHappened + 1;
			if (numberOfEventsThatHappened === eventsToWaitFor.length) {
				if (typeof callbackFunction === 'function') { callbackFunction(); };
				$(document).trigger('preloadingComplete');
				console.log('preloading complete'); 
				//TODO refactor so that it checks if the specific events happened, not number of elements
			}
		});
	});
}

//components should load after subapges and modals
waitForInitialAjaxLoadingToFinishThenShowUI([
	'modalsReady',
	// 'subpagesReady',
	'preloadedElementsReady'
], function() {
	initialLoadComponents(function() {
		initTheUIAfterPreloading();
	});
});

//after all the load dependencies are defined, start loading modals and subpages simulataneously
initialLoadHtmlsubpages();
initialLoadModalsContent();
recursivelyPreloadElements();

