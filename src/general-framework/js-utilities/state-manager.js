var State = SimplyCreateStateStore('SimplyFrameworkState__localStorage', {type: 'localStorage'});
var StateSession = SimplyCreateStateStore('SimplyFrameworkState__sessionStorage', {type: 'sessionStorage'});
var StateNonPersistent = SimplyCreateStateStore('SimplyFrameworkState__nonPersistent', {type: 'nonPersistent'});
var StateURL = SimplyCreateStateStore('SimplyFrameworkState__URL', {type: 'URL'});

function SimplyCreateStateStore(storageName, options) {
	return (function() {
		options = options || {};

		var isLocalStorageNameSupported = (function() {
	    var testKey = 'test';
	    var storage = window.localStorage;
	    try {
	      storage.setItem(testKey, '1');
	      storage.removeItem(testKey);
	      return true;
	    } catch (error) {
	    	console.error('Local Storage is not working... Fallback used.');
	      return false;
	    }
		})();

		var isSessionStorageNameSupported = (function() {
	    var testKey = 'test';
	    var storage = window.sessionStorage;
	    try {
	      storage.setItem(testKey, '1');
	      storage.removeItem(testKey);
	      return true;
	    } catch (error) {
	      console.error('Session Storage is not working... Fallback used.');
	      return false;
	    }
		})();

		//the condition is to degrade to regular variables if localStorage is not supported,
		//especially happens in Safari iOS incognito mode

		var typeOfStorage = (function() {
			if (isLocalStorageNameSupported && typeof options.type === 'undefined' ||
				isLocalStorageNameSupported && options.type === 'localStorage') {
				return 'localStorage';
			} else if (isSessionStorageNameSupported && options.type === 'sessionStorage') {
				return 'sessionStorage';
			} else if (!isSessionStorageNameSupported || options.type === 'nonPersistent') {
				return "nonPersistent";
			} else if (options.type === "URL") {
				return "URL";
			}
		})();

		var storage = (function() {
			if (typeOfStorage === "localStorage") {
				return window.localStorage;
			} else if (typeOfStorage === "sessionStorage") {
				return window.sessionStorage;
			}
		})();

		var parse = (function() {
			if (typeOfStorage === "URL") {
				return deparam; //needed for decoding URL query strings
			} else {
				return window.JSON.parse;
			}
		})();

		var stringify = (function() {
			if (typeOfStorage === "URL") {
				return $.param;
			} else {
				return window.JSON.stringify;
			}
		})();

		var storageString = stringify({}); //this will be a string containing params to save in local storage
		var storageSavingTimer; //debouncing the slow storage operation
		var doNotCreateHistoryState = true; //flag for recognizing if one of events should create history state

		var saveParamObjectAsString = function(paramsObject, options) {
			options = options || {};

			storageString = stringify(paramsObject);
			clearTimeout(storageSavingTimer);

			if (typeOfStorage === 'localStorage' || typeOfStorage === 'sessionStorage') {

				storageSavingTimer = setTimeout(function() {
					storage.setItem(storageName, storageString);
				}, 50);

			} else if (typeOfStorage === 'URL') {

				//if at least one of triggers does not have the options doNotCreateHistoryState,
				//we should create a new state in the debounced function
				if (!options.doNotCreateHistoryState) {
					doNotCreateHistoryState = false;
				}

				storageSavingTimer = setTimeout(function() {

					if (doNotCreateHistoryState === true) {
						setTimeout(function() {
							window.history.replaceState(paramsObject,'', '?'+storageString);
						}, 100);
					} else {
						setTimeout(function() {
							window.history.pushState(paramsObject,'', '?'+storageString);
							doNotCreateHistoryState = true;
						}, 100);
					}

				}, 50);


			}
		};

		function checkIfParamsAreAlreadyStoredInStorage() {
			if (typeof storage.getItem(storageName) == 'undefined' || storage.getItem(storageName) == null) {
				var paramsObject = {};
				saveParamObjectAsString(paramsObject);
			} else {
				var stringFromLocalStorage = storage.getItem(storageName);
				try {
					parse(stringFromLocalStorage);
					storageString = stringFromLocalStorage;
				} catch(err) {
					console.error('Could not parse storage string');
					console.error(err);
					storageString = stringify({});
				}

			}
		}

		if (typeOfStorage === "localStorage" || typeOfStorage === "sessionStorage") {
			checkIfParamsAreAlreadyStoredInStorage();
		}

		//only if state is stored in URL, we need to handle history back and forward events
		//we diff against the previous params, so that we can remove the params that are not present
		//in the query string from the reactive params
		if (typeOfStorage === "URL") {
			var queryString = window.location.search.substring(1);
			processQueryStringParams = function() {
				var previous = parse(storageString);
				storageString = queryString;
				var paramsObject = parse(storageString);

				//check what previous params are not present in the new query string
				$.each(previous, function(key, value) {
					if (typeof paramsObject[key] == 'undefined') {
						delete paramsObject[key];
						$(document).trigger(storageName+"."+key+'.paramChanged');

					}
				});

				//only trigger params that changed from previous.
				//No need to resave as storage string because we treat queryString as source
				$.each(paramsObject, function(key, value) {
					if (JSON.stringify(paramsObject[key]) !== JSON.stringify(previous[key]) )  {
						$(document).trigger(storageName+'.'+key+'.paramChanged');
					}
				});

				previousQueryString = stringify(paramsObject);
			};
			processQueryStringParams();

			$(window).on('popstate', function() {
				queryString = window.location.search.substring(1);
				processQueryStringParams();
			});
		}

		function getParam(key) {
			//this return only values, not direct access to paramsObject
			//that's why we JSON.parse or deparam here
			return parse(storageString)[key];
		}

		function getAllParams() {
			return parse(storageString);
		}

		function setParam(key, value, options) {
			options = options || {};

			var paramsObject = parse(storageString);

			if (paramsObject[key] !== value) {
				paramsObject[key] = value;
				saveParamObjectAsString(paramsObject, options);
				$(document).trigger(storageName+'.'+key+'.paramChanged');
			}
		}

		function setDefaultParam(key, value, options) {
			var paramsObject = parse(storageString);
			if (typeof paramsObject[key] == 'undefined') {
				setParam(key, value);
			}

		}

		function removeParam(key, options) {
			options = options || {};

			var paramsObject = parse(storageString);

			if (typeof paramsObject[key] !== 'undefined') {
				delete paramsObject[key];
				saveParamObjectAsString(paramsObject, options);
				$(document).trigger(storageName+"."+key+'.paramChanged');
			}
		}

		function setFreshParams(newParamsObj) {
			saveParamObjectAsString(newParamsObj);
			retriggerOnParamChangeForAll();
		}

		var actionsOnParamChange = {};
		function onParamChange(key, actionFunction, options) {
			$(document).on(storageName+'.'+key+'.paramChanged', function(event) {
				var paramsObject = parse(storageString);
				var value = paramsObject[key];
				actionFunction(value);
			});

			//store the action on param in a separate array, so that we can retrigger this manually
			//because this might be needed for ajax loaded content etc.
			if (typeof actionsOnParamChange[key] === 'undefined') {
				actionsOnParamChange[key] = [];
			}
			actionsOnParamChange[key].push(actionFunction);
		}

		function retriggerOnParamChange(key) {
			var paramsObject = parse(storageString);
			var param = paramsObject[key];
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

		function toggleParam(key, value1, value2) {
			var previousValue = getParam(key);

			if (previousValue !== value1) {
				setParam(key, value1);
			} else if (previousValue !== value2) {
				setParam(key, value2);
			}
		}

		function clearStorage() {
			paramsObject = {};
			saveParamObjectAsString(paramsObject);
		}

		function clearAllButLeave(paramsToLeaveArray) {

			if (typeof paramsToLeaveArray === 'undefined') {
				console.error('You need to provide paramsToLeaveArray');
				return;
			}

			var allParams = getAllParams();

			$.each(allParams, function(key, value) {
				if ( $.inArray(key, paramsToLeaveArray) === -1 ) {
					delete allParams[key];
				}
			});

			if ($.isEmptyObject(allParams)) {
				clearStorage();
			} else {
				saveParamObjectAsString(allParams);
			}
		}

		return {
			storageName: storageName,
			setParam: setParam,
			set: setParam, //shorter synonym
			toggleParam: toggleParam,
			toggle: toggleParam,
			getAllParams: getAllParams,
			setFreshParams: setFreshParams,
			setDefaultParam: setDefaultParam,
			setDefault: setDefaultParam, //shorter synonym
			getParam: getParam,
			get: getParam, //shorter synonym
			onParamChange: onParamChange,
			onChange: onParamChange, //shorter synonym
			retriggerOnParamChange: retriggerOnParamChange,
			triggerParam: retriggerOnParamChange, //shorter alias
			retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
			triggerAllParams: retriggerOnParamChangeForAll, //shorter synonym
			removeParam: removeParam,
			remove: removeParam, //shorter synonym
			actionsOnParamChange: actionsOnParamChange,
			clearStorage: clearStorage,
			clearAllButLeave: clearAllButLeave,
			version: 1,
		};

	})();
}



