//helpful shortcuts for showing and hiding with addClass and removeClass

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

(function( $ ) {
  $.fn.isNotShown = $.fn.isHidden;
}( jQuery ));

(function( $ ) {
  $.fn.isNotHidden = $.fn.isShown;
}( jQuery ));

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

(function( $ ) {
  $.fn.isShownWhenAttrValueMatches = function(valueToMatch) {

    var thisInstance = this;

    thisInstance.each(function() {
      console.log(thisInstance);
    });

    return this;
  };
}( jQuery ));





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
