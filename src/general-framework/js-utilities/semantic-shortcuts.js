//fix common typos
function fixCommonAttrTypos() {
  $('[action-shown-when-param-equals]').each(function() {
    var attrValue = $(this).attr('action-shown-when-param-equals');
    $(this).removeAttr('action-shown-when-param-equals');
    $(this).attr('action-show-when-param-equals', attrValue);
  });
}

fixCommonAttrTypos();
$(document).on('preloadingComplete', function() {
  fixCommonAttrTypos();
});



//helpful shortcuts for shorter code


/* shorter version of addClass and removeClass */
(function( $ ) {
  $.fn.isHidden = function(customClass) {

  	customClass = customClass || 'is-hidden';

    this.each(function() {
      $(this).addClass(customClass);
    });

    return this;
  };
}( jQuery ));

(function( $ ) {
  $.fn.isShown = function(customClass) {

  	customClass = customClass || 'is-hidden';

    this.each(function() {
      $(this).removeClass(customClass);
    });

    return this;
  };
}( jQuery ));

/* Synonyms for above functions */
(function( $ ) {
  $.fn.isNotShown = $.fn.isHidden;
}( jQuery ));

(function( $ ) {
  $.fn.isNotHidden = $.fn.isShown;
}( jQuery ));


/* One line show or hide based on expression */
(function( $ ) {
  $.fn.isShownWhen = function(expression) {

    var thisInstance = this;

  if (!!expression) {
    thisInstance.each(function() {
      $(this).isShown();
    });
  } else {
    thisInstance.each(function() {
      $(this).isHidden();
    });
  }

    return this;
  };
}( jQuery ));

/* One line show or hide based on expression */
(function( $ ) {
  $.fn.addClassWhen = function(expression, classToAdd) {

    var thisInstance = this;

    if (!!expression) {
      thisInstance.each(function() {
        $(this).addClass(classToAdd);
      });
    } else {
      thisInstance.each(function() {
        $(this).removeClass(classToAdd);
      });
    }

    return this;
  };
}( jQuery ));

/* One line to show or hide element selected by attribute if its value equal to specific value */
function showOnlyElementsWithAttributeXMatchingY(attributeName, valueToMatch) {
  $('['+attributeName+']').each(function() {
    var attrVal = $(this).attr(attributeName);
    $(this).isShownWhen(attrVal === valueToMatch);
  });
}

/* One line to show or hide element selected by attribute if its value equal to specific value */
function addClassToElementsWithAttributeXMatchingY(attributeName, valueToMatch, classToAdd) {
  $('['+attributeName+']').each(function() {
    var attrVal = $(this).attr(attributeName);
    $(this).addClassWhen(attrVal === valueToMatch, classToAdd);
  });
}

/* Quick one line showing or hiding element depending on reactive local storage param value */
(function( $ ) {
  $.fn.onlyShowWhenReactiveLocalStorageParamEquals = function(paramName, valueToEqual) {

    var thisInstance = this;

    ReactiveLocalStorage.onParamChange(paramName, function(value) {
      thisInstance.each(function() {
        $(this).isShownWhen(value === valueToEqual);
      });
    });

    return this;
  };
}( jQuery ));

/* Easier to write selecting by attribute */
(function( $ ) {
  $.elementWithAttr = function(attrName, attrValue) {
    if ($.isEmptyObject(attrValue)) {
      return $('['+attrName+']');
    } else {
      return $('['+attrName+'="'+attrValue+'"]');
    }
  };
}( jQuery ));

//easier to read syntax for attribute selectors
function elementWithAttr(attrName, attrValue) {
  if ($.isEmptyObject(attrValue)) {
    return '['+attrName+']';
  } else {
    return '['+attrName+'="'+attrValue+'"]';
  }
}

/* Easier to write document on */
(function( $ ) {
  $.On = function(event, selector, callbackFunction) {
    var returned = $(document).on(event, selector, callbackFunction);
    return returned;
  };
}( jQuery ));

/* Synonyms for state management libraries */
(function( $ ) {
  $.State = function(storageType) {
    storageType = storageType || 'localStorage';

    if (storageType === 'localStorage') {
      return ReactiveLocalStorage;
    } else if (storageType.toLoweCase() === 'url') {
      return QueryStringRouter;
    } else if (storageType.toLoweCase() === 'session') {
      //TODO
    }
  };
}( jQuery ));


$(document).on('click', '[action-set-param]', function() {
  var paramToSet = $(this).attr('action-set-param');
  var valueToSet = $(this).attr('value-to-set');
  ReactiveLocalStorage.setParam(paramToSet, valueToSet);
});

$(document).on('click', '[set-param]', function() {
  var paramToSet = $(this).attr('set-param');
  var valueToSet = $(this).attr('set-value');
  ReactiveLocalStorage.setParam(paramToSet, valueToSet);
});

$(document).on('click', '[action-set-querystring]', function() {
  var paramToSet = $(this).attr('action-set-querystring');
  var valueToSet = $(this).attr('value-to-set');
  QueryStringRouter.setParam(paramToSet, valueToSet);
});

$(document).on('click', '[set-querystring]', function() {
  var paramToSet = $(this).attr('set-querystring');
  var valueToSet = $(this).attr('set-value');
  QueryStringRouter.setParam(paramToSet, valueToSet);
});

$(document).on('preloadingComplete', function() {
  $('[action-text-input][default-value]').each(function() {
    var paramToSet = $(this).attr('action-text-input');
    var valueToSet = $(this).attr('default-value');
    ReactiveLocalStorage.setDefaultParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[action-text-input][value-on-load]').each(function() {
    var paramToSet = $(this).attr('action-text-input');
    var valueToSet = $(this).attr('value-on-load');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[action-set-param][default-value]').each(function() {
    var paramToSet = $(this).attr('action-set-param');
    var valueToSet = $(this).attr('default-value');
    ReactiveLocalStorage.setDefaultParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[action-set-param][value-on-load]').each(function() {
    var paramToSet = $(this).attr('action-set-param');
    var valueToSet = $(this).attr('default-value');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[textarea-rows]').each(function() {
    var rows = $(this).attr('textarea-rows');
    $(this).attr('rows', rows);
  });
});

/*
$.State('localStorage').onParamChange('introShown', function(value) {
  $.elementWithAttr('ref-continue-button').isShownWhen(value === 'true');
});
*/
/*

IDEA

State.Storage.onChange('introShown', function(value) {
  $.elementWithAttr('ref-continue-button').isShownWhen(value === 'true');
});

*/
// function ReactiveLocalStorageIsSetToTrueWhen(paramName, expression) {
//   if (!!expression) {
//     ReactiveLocalStorage.setParam(paramName, 'true');
//   } else {
//     ReactiveLocalStorage.setParam(paramName, 'false');
//   }
// }

/*
IDEA TODO
make the params work like jquery, so that you can first select the param and then choose if you want to set it, add on param change etc
for example

ReactiveLocalStorage.param('is-logged-in').get();

or

$$('is-logged-in').onChange(function(value) {
  $('[some-element]').isShownWhen(value === true);
});

ReactiveState('is-logged-in').isSetToTrueWhen('is-finished-loggin-in', 'true');

//this way we can have more methods on params and support chaining?

*/

/*
IDEA add default subpage
Define default state from Webflow attribute
*/

//IDEA
// State Share, get URL that contains localStorage params
