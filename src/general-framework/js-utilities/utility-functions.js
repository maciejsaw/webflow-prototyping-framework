function formatDecimalNumber(numberToFormat, decimalNumbers) {
  if (typeof decimalNumbers === 'undefined') {
    decimalNumbers = 2;
  }
  var number = parseFloat(numberToFormat);
  var formatted = (number.toFixed(decimalNumbers)).replace('.', ',');
  return formatted;
}

function stringToDecimal(stringToFormat) {
  var number = stringToFormat.replace(',', '.');
  number = parseFloat(number);
  return number;
}

function replaceComa(stringToFormat) {
  var cleaned = stringToFormat.replace(',', '.');
  return cleaned;
}

function compareValues(currentValue, newValue) {
  if (!$.isNumeric(currentValue) || !$.isNumeric(newValue)) {
    return "cannot compare";
  }

  currentValue = currentValue * 1;
  newValue = newValue * 1;
  if ( currentValue == newValue ) {
    return "equal";
  }
  else if ( newValue > currentValue ) {
    return "new-is-larger";
  }
  else if ( newValue < currentValue ) {
    return "new-is-lower";
  }
}

function arrayToString(arrayToConvert) {
  if ($.isArray(arrayToConvert)) {
    return arrayToConvert.join(' ');
  } else {
    return '';
  }
}

//https://stackoverflow.com/questions/4597900/checking-something-isempty-in-javascript
function isEmpty(val) {

    // test results
    //---------------
    // []        true, empty array
    // {}        true, empty object
    // null      true
    // undefined true
    // ""        true, empty string
    // ''        true, empty string
    // 0         false, number
    // true      false, boolean
    // false     false, boolean
    // Date      false
    // function  false

        if (val === undefined)
        return true;

    if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;

    if (val == null || val.length === 0)        // null or 0 length array
        return true;

    if (typeof (val) == "object") {
        // empty object

        var r = true;

        for (var f in val)
            r = false;

        return r;
    }

    return false;
}

function isNotEmpty(val) {
  return !isEmpty(val);
}

//https://stackoverflow.com/questions/6921275/is-it-possible-to-chain-settimeout-functions-in-javascript
function delay(t, fn) {
    // private instance variables
    var queue = [], self, timer;

    function schedule(t, fn) {
        timer = setTimeout(function() {
            timer = null;
            fn();

            if (queue.length) {
                var item = queue.shift();
                schedule(item.t, item.fn);
            }
        }, t);
    }
    self = {
        delay: function(t, fn) {
            // if already queuing things or running a timer,
            //   then just add to the queue
            if (queue.length || timer) {
                queue.push({fn: fn, t: t});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(t, fn);
            }
            return self;
        },
        cancel: function() {
            clearTimeout(timer);
            queue = [];
            return self;
        }
    };
    return self.delay(t, fn);
}

//debouncing that allows easy code block handling in ReactibeLocalStorage, without separate functions and scopes
debounceGlobalTimers = {};
function debounce(debounceName, wait, fn) {

  if (typeof wait === 'function') {
    fn = wait;
    wait = 100;
  }

  if (debounceGlobalTimers[debounceName]) {
    clearTimeout(debounceGlobalTimers[debounceName]);
  }

  debounceGlobalTimers[debounceName] = setTimeout(function() {
    fn();
  }, wait);

}