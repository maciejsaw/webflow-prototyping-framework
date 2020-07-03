function hideWebflowDropdowns() {
    $(".w-dropdown-list").removeClass("w--open").removeAttr('is-open');
    $(".w-dropdown-toggle").removeClass("w--open").removeAttr('is-open');
}

//open and close Webflow dropdowns in ajax-loaded content
$(document).on('click', '.w-dropdown-toggle', function(event) {
    event.preventDefault();

    var thisDropdownButton = $(this);
    var thisDropdownList = $(this).next(".w-dropdown-list");
    var otherDropdownLists = $('.w-dropdown-list').not(thisDropdownList);
    var otherDropdownButtons = $('.w-dropdown-toggle').not(thisDropdownButton);

    var isOpen = thisDropdownButton.hasClass('w--open') || thisDropdownButton.is('[is-open]');

    //TODO clean up webflow.js from unneccessary functions like dropdowns
    //because it is conflicting with our scripts
    if (isOpen) {
        setTimeout(function() {
            thisDropdownButton.removeClass('w--open').removeAttr('is-open');
            thisDropdownList.removeClass("w--open").removeAttr('is-open');
        }, 0);
    } else {
        setTimeout(function() {
            thisDropdownButton.addClass('w--open').attr('is-open', 'true');
            thisDropdownList.addClass("w--open").attr('is-open', 'true');
        }, 0);
    }

    otherDropdownLists.removeClass('w--open').removeAttr('is-open');
    otherDropdownButtons.removeClass('w--open').removeAttr('is-open');
});

$(document).on('click.dropdown', document, function(event) {
    //if clicked outside the dropdown button and content, close it
    if ($(event.target).closest(".w-dropdown-toggle").length === 0 && $(event.target).closest(".w-dropdown-list").length === 0) {
        console.log("hide all dropdowns");
        hideWebflowDropdowns()
    } else {
        //console.log("don't hide dropdowns");
    }
});

//Webflow tabs need this to work with Ajax content
//Add attribute ajax-true for tabs loaded with ajax. This is needed to prevent Webflow switching the tabs twice.
$(document).on('click', '[data-w-tab][ajax="true"]', function() {
    var tabToActivate = $(this).attr('data-w-tab');
    $(this).closest('.w-tabs').find('.w-tab-menu').find('.w--current').removeClass('w--current');
    $(this).closest('.w-tabs').find('.w-tab-content').find('.w--tab-active').removeClass('w--tab-active').end();
    $(this).addClass('w--current').closest('.w-tabs').find('.w-tab-content').find('[data-w-tab="'+tabToActivate+'"]').addClass('w--tab-active').end();
    console.log('ajaxTabs');
});

//links with attributes, without link blocks
$(document).on('click', '[click-link]', function(e) {
    e.preventDefault();
    window.location.href = $(this).attr('click-link');
});

//links with attributes, without link blocks
$(document).on('click', '[action-go-to-url]', function(e) {
    e.preventDefault();
    window.location.href = $(this).attr('action-go-to-url');
});

//IDEA todo - add auto wrapping in link block with address

$(document).on('preloadingComplete', function() {
    $('[js-is-disabled]').attr('disabled', '');
});