function initSlidersDragging() {

  function getAngleRatio(x, y) {
    if (y === 0) {y = 0.0001; } //prevent divide by zero
    var angleRatio = Math.abs(x) / Math.abs(y);
    return angleRatio;
  }

  function mathRound(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  function roundToClosestMultipleOf(interval, inputNumber) {
    var intervalNumber = Number(interval);
    var inputNumberRounded = mathRound(inputNumber, 10);
    var ceil = Math.ceil(inputNumber/intervalNumber);
    var toReturn = ceil*interval;
    return toReturn;
  }

  $('[action-slider]').each(function() {

    var $swipableArea = $(this);
    var $sliderHandle = $(this).find('[js-slider-handle]');
    var bindedParam = $(this).attr('action-slider');
    var minValue = Number($(this).attr('action-slider-min'));
    var maxValue = Number($(this).attr('action-slider-max'));
    var interval = Number($(this).attr('action-slider-interval')) || 1;

    function setSliderHandleToPercentage(percentageToSet) {
      $sliderHandle.css('left', maxWidth*percentageToSet + 'px');
    }

    function setSliderHandleToValue(valueToSet) {

      if (valueToSet > maxValue) { valueToSet = maxValue }
      if (valueToSet < minValue) { valueToSet = minValue }

      var percentage = (valueToSet - minValue)/(maxValue - minValue);
      var sliderWidth = $swipableArea.outerWidth();
      var pixels = (sliderWidth*percentage).toFixed(0)+'px';
      $sliderHandle.css('left', pixels);
    }

    /* Bind sliders positino to params value */
    ReactiveLocalStorage.onParamChange(bindedParam, function(value) {
      value = Number(value);

      //TODO replace with validation
      // if (value > maxValue) {
      //   ReactiveLocalStorage.setParam(bindedParam, maxValue);
      //   return;
      // }

      // if (value < minValue) {
      //   ReactiveLocalStorage.setParam(bindedParam, minValue);
      //   return;
      // }

      setSliderHandleToValue(value);
    });



    //we need function handler so that we can add and remove event listener later
    var handleTouchmovePreventDefault = function(e) {
      e.preventDefault();
    };

    $sliderHandle.on('movestart.sliderMove', function(event) {

      console.log('test');

      //if move angle is less than 45 degrees...
      var angleRatio = getAngleRatio(event.deltaX, event.deltaY);
      if (angleRatio > 1 ) {

        //attempt to prevent window scrolling while vertical movement
        //https://stackoverflow.com/questions/21817397/event-handler-namespace-in-vanilla-javascript
        //not always works well on new iOS but helps a bit to prevent page bounce
        window.addEventListener('touchmove', handleTouchmovePreventDefault, { passive: false });

        var sliderWidth = $swipableArea.outerWidth();
        var currentHandlePosition = $sliderHandle.position().left;
        var distanceLimitRight = sliderWidth - currentHandlePosition;
        var distanceLimitLeft = -currentHandlePosition;

        //...we bind other events that handle dragging handle
        $swipableArea.on('move.sliderMove', function(moveEvent) {

          var distanceToMove = moveEvent.distX;

          //limit distance to move by amounts from left and right for the handle
          //wasn't enough to add this in condition, because the events are throttled
          //so with dropped frames it cause menu not to open/close fully
          if (distanceToMove > distanceLimitRight) { distanceToMove = distanceLimitRight; }
          if (distanceToMove < distanceLimitLeft) { distanceToMove = distanceLimitLeft; }

          //we round up pixels for better performance
          var pixelsToMove = (currentHandlePosition + distanceToMove).toFixed(0);

          var percetangeThatWasSet = pixelsToMove / sliderWidth;
          var resultNumber = (maxValue - minValue)*percetangeThatWasSet + Number(minValue);
          var resultNumberRounded = roundToClosestMultipleOf(interval, resultNumber);

          ReactiveLocalStorage.setParam(bindedParam, resultNumberRounded);

        });

        $swipableArea.on('moveend.sliderMove', function(moveendEvent) {

          //unbind events previously attached on movestart
          $swipableArea.off('move.sliderMove');
          window.removeEventListener('touchmove', handleTouchmovePreventDefault, { passive: false });

        });
      }
    });

    $swipableArea.on('click', function(event) {
      var eventVieportPageX = event.pageX - window.scrollX;
      var rect = $swipableArea[0].getBoundingClientRect();
      var clickedDistanceInElem = eventVieportPageX.toFixed(0) - rect.left.toFixed(0);
      var sliderWidth = $swipableArea.outerWidth();
      var clickedPercentage = clickedDistanceInElem / sliderWidth;
      var resultNumber = (maxValue - minValue)*clickedPercentage + Number(minValue);
      if (resultNumber > maxValue) {resultNumber = maxValue; }
      if (resultNumber < minValue) {resultNumber = minValue; }
      var resultNumberRounded = roundToClosestMultipleOf(interval, resultNumber);
      ReactiveLocalStorage.setParam(bindedParam, resultNumberRounded);
    });

  });
}

$(document).on('preloadingComplete', function() {
  initSlidersDragging();
});