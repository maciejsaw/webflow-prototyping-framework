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
