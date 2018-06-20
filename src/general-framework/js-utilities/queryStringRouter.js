//QueryStringRouter - designed by Maciej Sawicki documented on https://github.com/maciejsaw/query-string-router

var QueryStringRouter = (function() {

	//decode query string
	function getQueryStringParams() {
		return deparam(window.location.search.substring(1));
	}

	function getQueryStringParam(key) {
		return deparam(window.location.search.substring(1))[key];
	} 

	//we diff against the previous params, so that we can remove the params that are not present
	//in the query string from the reactive params
	var previousQueryStringParams = {};
	function processQueryStringParams() {
		var queryStringParams = getQueryStringParams();

		//check what previous params are not present in the new query string
		$.each(previousQueryStringParams, function(key, value) {
			if (typeof queryStringParams[key] == 'undefined') {
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
				console.log('param '+key+' was removed');
			}
		});

		$.each(queryStringParams, function(key, value) {
			if (queryStringParams[key] !== previousQueryStringParams[key]) { //only trigger event if param changed
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		previousQueryStringParams = queryStringParams;
	}

	//when document loads
	processQueryStringParams();

	$(window).on('popstate', function() {
		processQueryStringParams();
	});

	function setParam(key, value, options) {
		var queryStringParams = getQueryStringParams();

		if (queryStringParams[key] !== value) {
			queryStringParams[key] = value;
			var newQueryString = $.param(queryStringParams);

			options = options || {};
			if (options.doNotCreateHistoryState === true) {
				window.history.replaceState('','', '?'+newQueryString);
			} else if (options.isInModal === true) {
				var calculateNumberOfPreviousNaviationStepsInModal = function() {
					var number = getNumberOfPreviousNavigationStepsInModal();
					number = number + 1;
					console.log(number);
					return number;
				};

				window.history.pushState({numberOfPreviousNavigationStepsInModal: calculateNumberOfPreviousNaviationStepsInModal()},'', '?'+newQueryString);
			} else {
				window.history.pushState('','', '?'+newQueryString);
			}

			$(window).trigger('popstate');
		}
		
	}

	function goBackBeforeModal() {
		if (window.history && window.history.state) {
			if (typeof window.history.state.numberOfPreviousNavigationStepsInModal === 'number' && window.history.state.numberOfPreviousNavigationStepsInModal > 1) {
				var numberOfStepsToGoBack = window.history.state.numberOfPreviousNavigationStepsInModal;
				window.history.go(-numberOfStepsToGoBack - 1);
			}
		}
	}

	function removeParam(key, options) {
		var queryStringParams = getQueryStringParams();
		if (typeof queryStringParams[key] !== 'undefined') {
			delete queryStringParams[key];

			var newQueryString = $.param(queryStringParams);

			options = options || {};
			if (options.doNotCreateHistoryState === true) {
				window.history.replaceState('','', '?'+newQueryString);
			} else {
				window.history.pushState('','', '?'+newQueryString);
			}

			$(window).trigger('popstate');  
		}
	}

	function setFreshParams(newParamsObj, options) {
		var newQueryString = $.param(newParamsObj);

		options = options || {};
		if (options.doNotCreateHistoryState === true) {
			window.history.replaceState('','', '?'+newQueryString);
		} else {
			window.history.pushState('','', '?'+newQueryString);
		}
		$(window).trigger('popstate');
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		$(document).on('QueryStringRouter__'+key+'__paramChanged', function(event) {
			var paramsObject = getQueryStringParams();
			var value = paramsObject[key];
			actionFunction(value);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);

		//when the onParamChanged is being defined, also retrigger the state
		retriggerOnParamChange(key);
	}

	function retriggerOnParamChange(key) {
		var param = getQueryStringParam(key);
		var arrayOfFunctionsAssociatedWithThisParam = actionsOnParamChange[key];
		$.each(arrayOfFunctionsAssociatedWithThisParam, function(index, value) {
			value(param);
		});
	}

	function retriggerOnParamChangeForAll() {
		$.each(actionsOnParamChange, function(key, value) {
			retriggerOnParamChange(key);
		});
	}

	function setDefaultRootParams(paramsObjects) {
		$(document).ready(function() {
			if (window.location.pathname === "/" & window.location.search === "") {
				setFreshParams(paramsObjects, {doNotCreateHistoryState: true});
			}
		});
	}

	function getNumberOfPreviousNavigationStepsInModal() {
		if (window.history && window.history.state) {
			if (typeof window.history.state.numberOfPreviousNavigationStepsInModal === 'number') {
				return window.history.state.numberOfPreviousNavigationStepsInModal;
			} else {
				return 0;
			}
		}
	}

	return {
		setParam: setParam,
		getParam: getQueryStringParam,
		getAllParams: getQueryStringParams,
		setFreshParams: setFreshParams,
		setDefaultRootParams: setDefaultRootParams,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		version: '21',
		goBackBeforeModal: goBackBeforeModal,
		getNumberOfPreviousNavigationStepsInModal: getNumberOfPreviousNavigationStepsInModal,
		releaseNotes: {
			v22: 'added optional counting of states inside modal and ability to go back before modal',
			v21: 'only fire events when param changed',
			v2: 'removed Meteor and uses simple jQuery events',
		}
	};

})();