function ReactiveLocalStorageOnParamChangeShowElementsOnlyWhenParamXEqualsY(param, paramValue) {
	ReactiveLocalStorage.onParamChange(param, function(value) {
		if (value === paramValue) {
		    $('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		    $('[show-when-'+param+'='+paramValue+']').removeClass('is-hidden');
		} else {
			$('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageDependVisibilityOnParam(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		//TODO refactor needed
		$('[depends-on-param="'+paramName+'"]').not('[action-show-when-param-equals="'+value+'"]').not('[action-hide-when-param-equals]').not('[action-show-when-param-not-equals]').addClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-param-equals="'+value+'"]').removeClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-param-not-equals]').each(function() {
			var paramToCompare = $(this).attr('action-show-when-param-not-equals');
			if (paramToCompare !== value && typeof value !== 'undefined') {
				$(this).removeClass('is-hidden');
			} else if (typeof value !== 'undefined') {
				$(this).addClass('is-hidden');
			}
		});
	});
}

$(document).on('preloadingComplete', function() {
	$('[depends-on-param][show-by-default]').each(function() {
		var param = $(this).attr('depends-on-param');
		var valueToSet = $(this).attr('action-show-when-param-equals');
		ReactiveLocalStorage.setDefaultParam(param, valueToSet);
	});
});

$(document).on('preloadingComplete', function() {
	$('[depends-on-param][show-on-load]').each(function() {
		var param = $(this).attr('depends-on-param');
		var valueToSet = $(this).attr('action-show-when-param-equals');
		ReactiveLocalStorage.setParam(param, valueToSet);
	});
});

//IDEA todo add synonym for "shown" and not only show, common typo

function ReactiveLocalStorageHideWhenParamEquals(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		$('[depends-on-param="'+paramName+'"]').not('[action-hide-when-param-equals="'+value+'"]').not('[action-show-when-param-equals]').not('[action-show-when-param-not-equals]').removeClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-param-equals="'+value+'"]').addClass('is-hidden');
	});
}


function ReactiveLocalStorageHideIfParamNotUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value !== 'undefined') || (value !== 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-not-undefined]').addClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-not-undefined]').removeClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageShowIfParamUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value === 'undefined') || (value === 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-undefined]').removeClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-undefined]').addClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageHideIfParamUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value === 'undefined') || (value === 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-undefined]').addClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-undefined]').removeClass('is-hidden');
		}
	});
}

$(document).on('preloadingComplete', function() {
	$('[is-hidden-on-load]').isHidden();
	$('[hide-on-load]').isHidden();
	$('[add-class-on-load]').each(function() {
		var classToAdd = $(this).attr('add-class-on-load');
		$(this).addClass(classToAdd);
	});

	$('[depends-on-param]').each(function() {
		var paramToDependOn = $(this).attr('depends-on-param');
		ReactiveLocalStorageDependVisibilityOnParam(paramToDependOn);
		ReactiveLocalStorageHideWhenParamEquals(paramToDependOn);
		ReactiveLocalStorageHideIfParamNotUndefined(paramToDependOn);
		ReactiveLocalStorageShowIfParamUndefined(paramToDependOn);
		ReactiveLocalStorageHideIfParamUndefined(paramToDependOn);
	});

	ReactiveLocalStorage.setDefaultParam('show-elements-hidden-for-future', 'false');
	$('[hide-for-future]').each(function() {
		if (ReactiveLocalStorage.getParam('show-elements-hidden-for-future') === 'false') {
			$(this).remove();
		} else {
			//keep the elements
		}
	});

	$('[is-hidden-on-load]').removeAttr('is-hidden-on-load').attr('was-hidden-on-load', 'true');
	$('[hide-on-load]').removeAttr('hide-on-load').attr('was-hidden-on-load', 'true');
});




//unfinished idea
// function ReactiveLocalStorageShowWhen(paramName) {
// 	ReactiveLocalStorage.onParamChange(paramName, function(value) {
// 		var bindedItems = $('[when-'+paramName+'-equals-'+value+']');
// 		$.each(bindedItems, function() {
// 			var attrVal = $this.attr('[when-'+paramName+'-equals-'+value+']');

// 			if (attrVal === 'show') {
// 				$(this).removeClass('is-hidden');
// 			} else if (attrVal === 'hide') {
// 				$(this).addClass('is-hidden');
// 			}
// 		});
// 	});
// }

//idea  - fallback hiding if is-hidden class is not set TODO

//idea - todo - reusable attribute that makes element visible only when its value matches param value
//is-shown-when-param__param-name="yourvalue"

