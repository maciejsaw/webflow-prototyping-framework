SimplyExtendStoreWithArrayOperations(State);
SimplyExtendStoreWithArrayOperations(StateSession);
SimplyExtendStoreWithArrayOperations(StateNonPersistent);

function SimplyExtendStoreWithArrayOperations(store) {
	store.appendToBeginningOfTheArray = function(paramNameThatContainsArray, objectToAppend) {
		var array = store.getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.unshift(objectToAppend);

		store.setParam(paramNameThatContainsArray, array);

		return array;
	};

	store.appendToArray = function(paramNameThatContainsArray, objectToAppend) {
		var array = store.getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.push(objectToAppend);

		store.setParam(paramNameThatContainsArray, array);

		return array;
	};

	store.removeElementFromArrayXWithIdY = function(paramNameThatContainsArray, idThatShouldBeRemoved) {
		var array = store.getParam(paramNameThatContainsArray);

		array = $.grep(array, function(elementOfArray, indexInArray){
			return elementOfArray.id != idThatShouldBeRemoved;
		});

		store.setParam(paramNameThatContainsArray, array);

		return array;
	};

	store.updateObjectInArray = function(paramNameThatContainsArray, options) {
		var array = store.getParam(paramNameThatContainsArray);

		//this is to show the schema of options here in code
		var idToLookFor = options.findObjectWithId;
		var propertyToUpdate = options.propertyToUpdate;
		var newValue = options.newValue;

		$.grep(array, function(elementOfArray, indexInArray){
			if (elementOfArray['id'] === idToLookFor || elementOfArray['ID'] === idToLookFor) {
				elementOfArray[propertyToUpdate] = newValue;
			}
		});

		store.setParam(paramNameThatContainsArray, array);

		return array;
	};

	store.findInArrayXObjectWithPropertyYMatchingZ = function(paramNameThatContainsArray, objectPropertyToSearchIn, propertyValueThatShouldMatch) {
		var array = store.getParam(paramNameThatContainsArray);

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

	};

	store.findInArrayXObjectWithIdY = function(paramNameWithArray, idThatShouldMatch) {
		var result = store.findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'id', idThatShouldMatch);
		if (typeof result === 'undefined' || result.length === 0) {
			//fallback for differt way to write id --> ID
			result = store.findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'ID', idThatShouldMatch);
		}
		return result;
	};
}