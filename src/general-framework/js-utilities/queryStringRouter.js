//QueryStringRouter - designed by Maciej Sawicki documented on https://github.com/maciejsaw/query-string-router

var QueryStringRouter = (function() {

	//decode query string
	function getQueryStringParams() {
		return deparam(window.location.search.substring(1));
	}

	function getQueryStringParam(key) {
		return deparam(window.location.search.substring(1))[key];
	}

	//we store the state in a simple variable
	//only on page open we will handle the query string URL, later we will always
	//use variable, because URL might be slow to update and we used to have race conditions
	var queryString = window.location.search.substring(1);

	//we diff against the previous params, so that we can remove the params that are not present
	//in the query string from the reactive params
	var previousQueryString = "";

	function processQueryStringParams() {
		var previous = deparam(previousQueryString);
		var updated = deparam(queryString);

		//check what previous params are not present in the new query string
		$.each(previous, function(key, value) {
			if (typeof updated[key] == 'undefined') {
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		$.each(updated, function(key, value) {
			if (JSON.stringify(updated[key]) !== JSON.stringify(previous[key]) )  { //only trigger event if param changed
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		previousQueryString = $.param(updated);
	}

	//when document loads
	processQueryStringParams();

	$(window).on('popstate', function() {
		queryString = window.location.search.substring(1);
		processQueryStringParams();
	});

	var processingDebouncingTimer; //needed to limit number of processing when multiple params are changed
	$(window).on('queryStringRouter__processParams', function() {
		clearTimeout(processingDebouncingTimer);
		setTimeout(function() {
			processQueryStringParams();
		}, 50);
	});

	var doNotCreateHistoryState = true;
  var udpateURLTimer;
	function updateURL(options) {
		options = options || {};

		console.log('received updateURL event');
		clearTimeout(udpateURLTimer);

		//if at least one ot trigger does not have the options doNotCreateHistoryState,
		//we should create a new state in the debounced function
		if (!options.doNotCreateHistoryState) {
			doNotCreateHistoryState = false;
		}

		udpateURLTimer = setTimeout(function() {
			var updated = deparam(queryString);
			var newQueryString = $.param(updated);

			if (doNotCreateHistoryState === true) {
				setTimeout(function() {
					window.history.replaceState(updated,'', '?'+newQueryString);
				}, 100);
			} else {
				setTimeout(function() {
					window.history.pushState(updated,'', '?'+newQueryString);
					doNotCreateHistoryState = true;
					console.log('pushedNewHistoryState');
				}, 100);
			}

		}, 100);

	}

	function setParam(key, value, options) {
		var queryStringParams = deparam(queryString);

		if (queryStringParams[key] !== value) {
			queryStringParams[key] = value;
			queryString = $.param(queryStringParams);

			options = options || {};

			updateURL(options);

			$(window).trigger('queryStringRouter__processParams');
		}

	}

	function removeParam(key, options) {
		var queryStringParams = deparam(queryString);

		if (typeof queryStringParams[key] !== 'undefined') {
			delete queryStringParams[key];
			queryString = $.param(queryStringParams);

			updateURL(options);

			$(window).trigger('queryStringRouter__processParams');
		}
	}

	function setFreshParams(newParamsObj, options) {
		queryString = $.param(newParamsObj);

		updateURL(options);

		$(window).trigger('queryStringRouter__processParams');
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		$(document).on('QueryStringRouter__'+key+'__paramChanged', function(event) {
			var paramsObject = deparam(queryString);
			var value = paramsObject[key];
			console.log('query string param changed - '+key+' '+value);
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
		var queryStringParams = deparam(queryString);
		var param = queryStringParams[key];
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
		version: '24',
		releaseNotes: {
			v24: 'the state variable stored as param string instead of object',
      v23: 'not getting the query string each time its updated, because it was buggy in some browsers and large params',
			v22: 'added optional counting of states inside modal and ability to go back before modal',
			v21: 'only fire events when param changed',
			v2: 'removed Meteor and uses simple jQuery events',
		}
	};

})();