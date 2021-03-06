//This will bind all the input fields for the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('blur', '[action-text-input]', function(event) {
    var thisAttr = $(this).attr('action-text-input');
    ReactiveLocalStorage.setParam(thisAttr, $(this).val() );
});

$(document).on('input', '[action-text-input][update-on-input="true"]', function(event) {
    var thisAttr = $(this).attr('action-text-input');
    var thisInputValue = $(this).val();
    console.log(thisInputValue);
    if (typeof thisInputValue !== 'undefined' && event.target.validity.valid) {
        ReactiveLocalStorage.setParam(thisAttr, $(this).val() );
    }
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //for each input field existing in the html we check if there's a matching state
    $('[action-text-input]').each(function() {
        var paramToChange = $(this).attr('action-text-input');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            $('[action-text-input="'+paramToChange+'"]').val(value);
        });
    });

});

$(document).on('keypress', '[allow-only-integer]', function(event) {

    // Old browsers fallback
    if (!event || !event.key) {
      return true;
    }

    var isNumber = !!event.key.match(/^[0-9]*$/) || (event.charCode >= 47 && event.charCode <= 57);
    var isEnter = event.key === 'Enter';
    var isDelete = event.key === 'Backspace' || event.key === 'Delete';
    var isArrow = event.key.includes('Arrow');
    return isNumber || isEnter || isDelete || isArrow;
});

$(document).on('keypress', '[allow-only-number]', function(event) {

    // Old browsers fallback
    if (!event || !event.key) {
      return true;
    }

    var isNumber = !!event.key.match(/^[0-9]*$/) || (event.charCode >= 47 && event.charCode <= 57);
    var isEnter = event.key === 'Enter';
    var isDelete = event.key === 'Backspace' || event.key === 'Delete';
    var isArrow = event.key.includes('Arrow');
    var isComa = event.key.includes('.');
    var isDot = event.key.includes(',');

    if ($(event.currentTarget).val().includes('.') || $(event.currentTarget).val().includes(',')) {
        return isNumber || isEnter || isDelete || isArrow;
    } else {
        return isNumber || isEnter || isDelete || isArrow || isComa || isDot;
    }

});