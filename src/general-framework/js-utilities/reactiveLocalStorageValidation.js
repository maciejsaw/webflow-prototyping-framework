/*=================================================================
=            ReactiveLocalStorage validation extension            =
=================================================================*/

ReactiveLocalStorage.registeredValidators = {};

ReactiveLocalStorage.registerParamValidator = function(param, validationFunction) {
	ReactiveLocalStorage.registeredValidators[param] = validationFunction;
};

ReactiveLocalStorage.validateParam = function(paramToValidate, functionCallback) {
	var currentValue = ReactiveLocalStorage.getParam(paramToValidate);
	var validationResult = "";
	if (ReactiveLocalStorage.registeredValidators && ReactiveLocalStorage.registeredValidators[paramToValidate]) {
		validationResult = ReactiveLocalStorage.registeredValidators[paramToValidate](currentValue);
	} else {
		console.error('No validator registered for '+paramToValidate);
	}

	if (typeof functionCallback === 'function') {
		functionCallback(validationResult);
	}

	return validationResult;
};

function showErrorForElement(elm, validationResult) {
	if (typeof validationResult === 'undefined') {
		validationResult === "";
	}

	var errorMsg = "⚠ ⚠ ⚠"; //defaults to triangle exclamation
	var errorDiv = elm.parent().find('[js-selector="validation-error-msg"]');
	if (errorDiv.length === 0) {
		errorDiv = $('<div class="bem-error-text" js-selector="validation-error-msg"></div>');
	}

	errorMsgFromElm = elm.attr('err-txt__'+validationResult);
	console.log(errorMsgFromElm);
	console.log(validationResult);
	if (typeof errorMsgFromElm !== "undefined") {
		errorMsg = errorMsgFromElm;
	}

	errorDiv.text(errorMsg);
	elm.after(errorDiv);
	elm.removeClass('is-correct');
	elm.find('[validation-add-class]').removeClass('is-correct');
	elm.addClass('is-error');
	elm.find('[validation-add-class]').addClass('is-error');
	elm.attr('has-error', 'true');
}

function hideErrorForElement(elm) {
	var errorDiv = elm.parent().find('[js-selector="validation-error-msg"]');
	elm.addClass('is-correct');
	elm.find('[validation-add-class]').addClass('is-correct');
	elm.removeClass('is-error');
	elm.find('[validation-add-class]').removeClass('is-error');
	elm.removeAttr('has-error');
	errorDiv.remove();
}

function handleErrorForElement(elm, validationResult) {
	if (validationResult === 'good') {
		hideErrorForElement(elm);
	} else {
		showErrorForElement(elm, validationResult);
	}
}

//automatically searches for DOM elements that need to be validated and show error for them
//based on DOM attributes
ReactiveLocalStorage.validateElementChildren = function(elm, callbacksObject) {
	elm.find('[validated-param]').filter(':visible').each(function() {
		if ( $(this).closest('.is-hidden').length === 0 ) { //only validate visible fields
			var relatedField = $(this);
			var paramToValidate = $(this).attr('validated-param');
			ReactiveLocalStorage.validateParam(paramToValidate, function(validationResult) {
				handleErrorForElement(relatedField, validationResult);
			});
		}
	});
	var numberOfErrors = elm.find('[has-error]').length;

	//var numberOfErrors = elm.find('[has-error]').length;
	if (numberOfErrors === 0) {
		console.log('no errors');
		console.log(callbacksObject);
		if (callbacksObject && callbacksObject.onSuccess) {
			callbacksObject.onSuccess();
		}
	} else {
		if (callbacksObject && callbacksObject.onError) {
			callbacksObject.onError();
		}
	}
	//IDEA/TODO: validateElementChildren could return an array of errors
};

ReactiveLocalStorage.setDefaultParamAndValidationRules = function(param, options) {
	if (options && typeof options.default !== 'undefined') {
		console.log(options);
		ReactiveLocalStorage.setDefaultParam(param, options.default);
	}
	ReactiveLocalStorage.registerParamValidator(param, options.validationFunction);
}

// validation on blur for elements with additional attribute validate-on-blur
// we will show errors only if usered focused the field at least once
// if you want to validate after each entered character, you need to use "update-on-input" attr
// for text inputs
$(document).on('preloadingComplete', function() {
	$(document).on('focus', '[validated-param][validate-on-blur]:not([is-touched])', function() {

		var relatedInput = $(this);
		console.log('focus' + relatedInput.val());

		var relatedParam = $(this).attr('validated-param');

    	relatedInput.attr('is-touched', 'true');

    	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
	    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
	    		handleErrorForElement(relatedInput, validationResult);
	    	});
	    });

    	//also validate on blur even if param did not change
	    relatedInput.on('blur', function() {
	    	if (relatedInput.val() === ReactiveLocalStorage.getParam(relatedParam)) {
	    		ReactiveLocalStorage.retriggerOnParamChange(relatedParam);
	    	}
	    });

	});
});

// you can decide if you want to revalidate the field after it was changed by user
// just add attribute 'validate-on-click' -- better for radio buttons
$(document).on('preloadingComplete', function() {
	$(document).on('click', '[validated-param][validate-on-click]:not([is-touched])', function() {
		var relatedParam = $(this).attr('validated-param');
    	var relatedInput = $(this);

    	relatedInput.attr('is-touched', 'true');

    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});

    	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
	    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
	    		handleErrorForElement(relatedInput, validationResult);
	    	});
	    });

	});
});

// you can decide if you want to revalidate the field after it was changed by user
// just add attribute 'validate-on-change' -- better for select dropdowns
$(document).on('preloadingComplete', function() {
	$(document).on('click', '[validated-param][validate-on-change]:not([is-touched])', function() {
		var relatedParam = $(this).attr('validated-param');
    	var relatedInput = $(this);

    	relatedInput.attr('is-touched', 'true');

    	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
	    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
	    		handleErrorForElement(relatedInput, validationResult);
	    	});
	    });

	});
});


$(document).on('preloadingComplete', function() {
  $(document).on('click', '[validated-param][has-error]', function() {
    var relatedParam = $(this).attr('validated-param');
    var relatedInput = $(this);
    $(document).on('input', relatedInput, function() {
    	ReactiveLocalStorage.setParam(relatedParam, relatedInput.val());
    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    	  handleErrorForElement(relatedInput, validationResult);
    	});
    });
  });
});

/*=====  End of ReactiveLocalStorage validation extension  ======*/


/* EXAMPLE

1. First register validators for each param separately

ReactiveLocalStorage.registerParamValidator('registration-email', function(value) {
	if (value === "") {
		return 'required';
	} else {
		return 'good';
	}
});

ReactiveLocalStorage.registerParamValidator('registration-password', function(value) {
	if (value === "") {
		return 'required';
	} else if (value.length < 8) {
		return 'too-short';
	} else {
		return 'good';
	}
});

2. When submitting form, you can use validateElementChildren thah will automatically
validate DOM elements that you marked with attribute "validated-param". You should store error
messages in DOM attributes "err-txt__your-validation-result", since different fields can have indiviudal more contextual errors

function submitEmailRegistrationForm() {
	var thisForm = $('[js-selector="registration-email-form"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onSuccess: function() {
			registerUser();
		},
		onError: function() {
			var firstError = $('[has-error]').first();
			$('.page-wrapper').scrollTo(firstError); //you have full control of what happens after error
		}
	});
}

/*
EXAMPLE 2: more flexible - manually check params and handle Errors for each element
function submitEmailRegistrationForm() {
	var thisForm = $('[js-selector="registration-email-form"]');

    ReactiveLocalStorage.validateParam('registration-email', function(validationResult) {
    	var relatedField = thisForm.find('[validated-param="registration-email"]');

    	if (validationResult !== 'good') {
    		handleErrorForElement(relatedField, validationResult);
			return;
    	}

    	registerUser();
    });

}
*/