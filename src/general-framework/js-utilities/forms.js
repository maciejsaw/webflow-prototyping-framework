//prevent submitting forms by clicking enter
$(document).on('preloadingComplete', function() {
	$('form').not('.w-password-page').not('[js-selector]').each(function() {
		$(this).on('submit', function (event){
			event.preventDefault();
			console.log('Form submit prevented by webflow prototyping framework...');
		});
	});
});

$(document).on('click', '[prevent-default]', function(event) {
	event.preventDefault();
});

$(document).on('click', '[stop-propagation]', function(event) {
	event.stopPropagation();
});

function showSpinnerInClickedButton(clickedButtonElm, actionAfter) {
	var button = clickedButtonElm.closest('[js-selector="button-with-spinner"]');
	var spinnerIcon = clickedButtonElm.find('[js-selector="button-spinner-icon"]');
	var textNearSpinner = clickedButtonElm.find('[js-selector="button-text-near-spinner"]');

	button.addClass('is-inactive-with-preloader');
	clickedButtonElm.addClass('is-inactive-with-preloader');
	spinnerIcon.removeClass('is-hidden');
	textNearSpinner.addClass('is-with-spinner-shown');

	setTimeout(function() {
		clickedButtonElm.removeClass('is-inactive-with-preloader');
		button.removeClass('is-inactive-with-preloader');
		spinnerIcon.addClass('is-hidden');
		textNearSpinner.removeClass('is-with-spinner-shown');

		actionAfter();
	}, 1500);
}

var showSpinnerInButton = showSpinnerInClickedButton;

/* showing spinner briefly inside a button */
(function( $ ) {
  $.fn.showSpinnerInsideThisButton = function(actionAfter) {

    this.each(function() {
      var clickedButtonElm = $(this);
      var spinnerIcon = clickedButtonElm.find('[js-selector="button-spinner-icon"]');
      var textNearSpinner = $(this).find('[js-selector="button-text-near-spinner"]');

      clickedButtonElm.addClass('is-inactive-with-preloader');
      spinnerIcon.removeClass('is-hidden');
      textNearSpinner.addClass('is-with-spinner-shown');

      setTimeout(function() {
      	clickedButtonElm.removeClass('is-inactive-with-preloader');
      	spinnerIcon.addClass('is-hidden');
      	textNearSpinner.removeClass('is-with-spinner-shown');

      	actionAfter();
      }, 1500);
    });

    return this;
  };
}( jQuery ));

//TODO refactor multiple ways to show loading in spinner
function showLoadingInButton(elm) {
	elm = $(elm);
	elm.addClass('is-grayed-out');
	elm.addClass('is-with-spinner-shown');
	elm.parent().attr('is-inactive-with-preloader', 'true')
	.find('[js-selector="button-spinner-icon"]').removeClass('is-hidden');
}

function hideLoadingInButton(elm) {
	elm = $(elm);
	elm.removeClass('is-grayed-out');
	elm.removeClass('is-with-spinner-shown');
	elm.parent().removeAttr('is-inactive-with-preloader')
	.find('[js-selector="button-spinner-icon"]').addClass('is-hidden');
}

$(document).on('click', '[is-inactive-with-preloader]', function(e) {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
	return false;
})