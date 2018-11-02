//This will bind all checkboxes with attribute [action-checkbox] the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //Each checkbox state is stored in reactivelocalstorage
    $(document).on('click', '[action-checkbox]', function(event) {
        var paramToChange = $(this).attr('action-checkbox');
        var valueToSet;
        if (ReactiveLocalStorage.getParam(paramToChange) == 'true') {
            valueToSet = 'false';
        } else {
            valueToSet = 'true';
        }

        ReactiveLocalStorage.setParam(paramToChange, valueToSet );
    });

    $('[action-checkbox]').each(function() {
        var paramToChange = $(this).attr('action-checkbox');

        //default state is the Webflow default state based on the class
        var $thisCheckmark = $(this).find('.bem-checkbox__checkmark');
        var initialCheckedState;
        if ($thisCheckmark.hasClass('is-unchecked') ) {
            initialCheckedState = 'false';
        } else if ( $thisCheckmark.hasClass('is-checked') ) {
            initialCheckedState = 'true';
        }
        ReactiveLocalStorage.setDefaultParam(paramToChange, initialCheckedState );

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            //fallback for weid autofill behaviour
            if (value !== "false" && value !== "true") {value = "false";}

            if (value == 'true') {
                $thisCheckmark.addClass('is-checked').removeClass('is-unchecked');
            } else if (value == 'false') {
                $thisCheckmark.removeClass('is-checked').addClass('is-unchecked');
            }
        });
    });

});