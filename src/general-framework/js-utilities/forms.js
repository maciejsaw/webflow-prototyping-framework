//prevent submitting forms by clicking enter
$(document).on('preloadingComplete', function() {
	$('form').each(function() {
		$(this).on('submit', function (event){
			event.preventDefault();
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
	clickedButtonElm.closest('[js-selector="button-with-spinner"]').addClass('is-inactive-with-preloader')
	  .find('[js-selector="button-spinner-icon"]').removeClass('is-hidden');

	setTimeout(function() {
		clickedButtonElm.closest('[js-selector="button-with-spinner"]').removeClass('is-inactive-with-preloader')
		  .find('[js-selector="button-spinner-icon"]').addClass('is-hidden');

		actionAfter();
	}, 1500);
}

function showLoadingInBemButton(elm) {
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