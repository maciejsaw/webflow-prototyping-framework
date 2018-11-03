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

/* One line to show or hide element selected by attribute if its value equal to specific value */
function showOnlyElementsWithAttributeXMatchingY(attributeName, valueToMatch) {
  $('['+attributeName+']').each(function() {
    var attrVal = $(this).attr(attributeName);
    $(this).isShownWhen(attrVal === valueToMatch);
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
