//Webflow dropdowns as select dropdown
//Each dropdown state is stored in a separate reactive local storage state
$(document).on('click', '[choice-value]', function() {
    var valueToSet = $(this).attr('choice-value');
    var paramToSet = $(this).closest('[action-select-dropdown]').attr('action-select-dropdown');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
    $(this).closest('[action-select-dropdown]').find('.select-dropdown__list.w-dropdown-list').removeClass('w--open');
    hideWebflowDropdowns();
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load
    $('[action-select-dropdown]').each(function() {
        var paramToChange = $(this).attr('action-select-dropdown');

        //default state is the first from the dropdown chosen-values options
        var firstAvailableChoice = $(this).find('[chosen-value]').attr('chosen-value');
        ReactiveLocalStorage.setDefaultParam(paramToChange, firstAvailableChoice );

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.removeClass('is-hidden');
            otherNotChosenItems.addClass('is-hidden');
            renderSelectDropdownChosenValue(thisDropdown, value);
        });
    });
});

$(document).on('input', '[action-select-dropdown-search-input]', function() {
  var thisDropdown = $(this).closest('[action-select-dropdown]');
  var thisChosenItems = thisDropdown.find('[choice-value]');
  var searchQuery = $(this).val().toLowerCase();

  thisChosenItems.each(function() {
    var attrVal = $(this).attr('choice-value').toLowerCase();
    var textVal = $(this).html();
    if (attrVal.includes(searchQuery) || textVal.includes(searchQuery)) {
        $(this).isShown();
    } else {
        $(this).isHidden();
    }
  });
});