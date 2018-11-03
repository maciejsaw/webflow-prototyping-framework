var ReactiveLocalStorage = (function() {

	var paramsString; //this will be a string containing params to save in local storage

	function isLocalStorageNameSupported() {
	    var testKey = 'test', storage = window.sessionStorage;
	    try
	    {
	        storage.setItem(testKey, '1');
	        storage.removeItem(testKey);
	        return true;
	    }
	    catch (error)
	    {
	    	console.error('Local Storage is not working in Safari incognito mode');
	        return false;
	    }
	}

	//the condition is to degrade to regular variables if localStorage is not supported,
	//especially happens in Safari iOS incognito mode
	var saveParamObjectToLocalStorageAsString;
	if ( isLocalStorageNameSupported() ) {
		saveParamObjectToLocalStorageAsString = function(paramsObject) {
			paramsString = JSON.stringify(paramsObject);
			localStorage.setItem('paramsString', paramsString);
		};
		checkIfParamsAreAlreadyStoredInLocalStorage();
	} else {
		saveParamObjectToLocalStorageAsString = function(paramsObject) {
			paramsString = JSON.stringify(paramsObject);
		};
		var paramsObject = {};
		paramsString = JSON.stringify({});
	}

	function checkIfParamsAreAlreadyStoredInLocalStorage() {
		if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
			var paramsObject = {};
			saveParamObjectToLocalStorageAsString(paramsObject);
		} else {
			var stringFromLocalStorage = localStorage.getItem('paramsString');
			try {
				JSON.parse(stringFromLocalStorage);
				paramsString = stringFromLocalStorage;
			} catch(err) {
				console.error('couldn not parse local storage string');
				console.error(err);
				paramsString = JSON.stringify({});
			}

		}
	}

	//at the beginning, check if params are stored in local storage
	// if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
	// 	var paramsObject = {};
	// 	saveParamObjectToLocalStorageAsString(paramsObject);
	// } else {
	// 	paramsString = localStorage.getItem('paramsString');
	// }

	function getParam(key) {
		//this return only values, not direct access to paramsObject
		//that's why we JSON.parse here
		return JSON.parse(paramsString)[key];
	}

	function getAllParams() {
		var allParams = JSON.parse(paramsString);
		var allParamsOrdered = {};
		Object.keys(allParams).sort().forEach(function(key) {
		  allParamsOrdered[key] = allParams[key];
		});
		return allParamsOrdered;
	}

	function setParam(key, value, options) {
		options = options || {};

		var paramsObject = JSON.parse(paramsString);

		if (paramsObject[key] !== value) {
			paramsObject[key] = value;
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged');
		}

	}

	function setDefaultParam(key, value) {
		var paramsObject = JSON.parse(paramsString);

		if (typeof paramsObject[key] == 'undefined') {
			setParam(key, value);
		}
	}

	function appendToBeginningOfTheArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.unshift(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function appendToArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.push(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function removeElementFromArrayXWithIdY(paramNameThatContainsArray, idThatShouldBeRemoved) {
		var array = getParam(paramNameThatContainsArray);

		array = $.grep(array, function(elementOfArray, indexInArray){
			return elementOfArray.id != idThatShouldBeRemoved;
		});

		setParam(paramNameThatContainsArray, array);
	}

	function updateObjectInArray(paramNameThatContainsArray, options) {
		var array = getParam(paramNameThatContainsArray);

		//this is to show the schema of options here in code
		var idToLookFor = options.findObjectWithId;
		var propertyToUpdate = options.propertyToUpdate;
		var newValue = options.newValue;

		$.grep(array, function(elementOfArray, indexInArray){
			if (elementOfArray['id'] === idToLookFor) {
				elementOfArray[propertyToUpdate] = newValue;
			}
		});

		setParam(paramNameThatContainsArray, array);
	}

	function findInArrayXObjectWithPropertyYMatchingZ(paramNameThatContainsArray, objectPropertyToSearchIn, propertyValueThatShouldMatch) {
		var array = getParam(paramNameThatContainsArray);

		if ($.isArray(array)) {
			var filteredData = $.grep(array, function(elementOfArray, indexInArray){
				return elementOfArray[objectPropertyToSearchIn] === propertyValueThatShouldMatch;
			});
			if (filteredData.length > 0) {
				return filteredData[0];
			} else {
				return [];
			}
		} else {
			return [];
		}

	}

	function findInArrayXObjectWithIdY(paramNameWithArray, idThatShouldMatch) {
		return findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'id', idThatShouldMatch);
	}

	function removeParam(key, options) {
		var paramsObject = JSON.parse(paramsString);

		options = options || {};

		if (typeof paramsObject[key] !== 'undefined') {
			delete paramsObject[key];
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged');
		}
	}

	function setFreshParams(newParamsObj) {
		var paramsObject = JSON.parse(paramsString);
		saveParamObjectToLocalStorageAsString(paramsObject);
		retriggerOnParamChangeForAll();
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction, options) {
		options = options || {};

		var handleActionFunction = function() {
			var paramsObject = JSON.parse(paramsString);
			var value = paramsObject[key];
			actionFunction(value);
		};

		if (options.fireOnlyOnce === true) {
			$(document).one('reactiveLocalStorage__'+key+'__paramChanged', function(event) {
				handleActionFunction();
			});
		} else {
			$(document).on('reactiveLocalStorage__'+key+'__paramChanged', function(event) {
				handleActionFunction();
			});

			//store the action on param in a separate array, so that we can retrigger this route manually
			//because this might be needed for ajax loaded content etc.
			if (typeof actionsOnParamChange[key] === 'undefined') {
				actionsOnParamChange[key] = [];
			}
			actionsOnParamChange[key].push(actionFunction);
		}

	}

	function onlyOnceWhenParamChanges(key, actionFunction) {
		onParamChange(key, actionFunction, {fireOnlyOnce: true});
	}

	function retriggerOnParamChange(key) {
		var paramsObject = JSON.parse(paramsString);
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

	return {
		varsion: {
			version: 4,
			versionNotes: {
				5: 'Removed default retrigger on param change while creating the onParamChage',
				4: 'Added options to disable retrigger on param change while creating onParamChange',
				3: 'Added fallback for Safari incognito not supporting localStorage',
			},
		},
		setParam: setParam,
		getAllParams: getAllParams,
		setFreshParams: setFreshParams,
		setDefaultParam: setDefaultParam,
		getParam: getParam,
		onParamChange: onParamChange,
		onlyOnceWhenParamChanges: onlyOnceWhenParamChanges,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		appendToBeginningOfTheArray: appendToBeginningOfTheArray,
		appendToArray: appendToArray,
		removeElementFromArrayXWithIdY: removeElementFromArrayXWithIdY,
		findInArrayXObjectWithIdY: findInArrayXObjectWithIdY,
		findInArrayXObjectWithPropertyYMatchingZ: findInArrayXObjectWithPropertyYMatchingZ,
		updateObjectInArray: updateObjectInArray,
	};

})();

//EXAMPLES:

// ReactiveLocalStorage.onParamChange('openModal' , function(value) {
// 	if (value === 'true') {
// 		console.log('modal will be open!');
// 	} else {
// 		console.log('hide  modal!');
// 	}
// });

// ReactiveLocalStorage.onParamChange('activeTab' , function(value) {
// 	if (value === 'comments') {
// 		console.log('switch tab to comments');
// 	} else if (value === 'products') {
// 		console.log('switch tab to products');
// 	} else if (value === 'pictures') {
// 		console.log('switch tab to pictures');
// 	}
// });

// ReactiveLocalStorage.onParamChange('centralPanelFolderPath' , function(value) {
// 	if (typeof value != 'undefined') { //how to make sure that you don't need to write this
// 		console.log('in the central panel, a folder with path '+value+' will be loaded');
// 	}
// });

// ReactiveLocalStorage.retriggerOnParamChange('activeTab');

//TODO: allow storing empty object
//