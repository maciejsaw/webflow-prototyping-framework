//Each checkbox state is stored in reactivelocalstorage
$(document).on('click', '[action-radio-buttons] [chosen-value]', function(event) {
    var paramToChange = $(this).closest('[action-radio-buttons]').attr('action-radio-buttons');
    var valueToSet = $(this).attr('chosen-value');

    ReactiveLocalStorage.setParam(paramToChange, valueToSet );
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load
    $('[action-radio-buttons]').each(function() {
        var paramToChange = $(this).attr('action-radio-buttons');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-radio-buttons="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-radio-buttons="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.addClass('is-selected');
            chosenItem.find('[chosen-icon-inside]').removeClass('is-hidden');
            otherNotChosenItems.removeClass('is-selected');
            otherNotChosenItems.find('[chosen-icon-inside]').addClass('is-hidden');
        });
    });
});