var ROOT_QUERYSTRING_PARAMS = {
	subpage: 'start',
    mainTab: 'start',
    secondaryTab: 'start',
};

QueryStringRouter.setDefaultRootParams(ROOT_QUERYSTRING_PARAMS);

$(document).on('click', '[action-go-to-home-page]', function(event) {
	QueryStringRouter.setFreshParams(ROOT_QUERYSTRING_PARAMS);
});

$(document).on('click', '[action-go-back]', function() {
	window.history.back();
});

QueryStringRouter.onParamChange('subpage', function(value) {
	if (typeof value != 'undefined') {
	    $('[subpage-id]').not('[subpage-id="'+value+'"]').addClass('is-hidden');
	    $('[subpage-id="'+value+'"]').removeClass('is-hidden');
	    $('.page-wrapper').scrollTo(0);
	    QueryStringRouter.removeParam('hamburgerMenu', {doNotCreateHistoryState: true});
	    hideWebflowDropdowns();
	}
});

// $(document).on('click', '[action-go-to-invoices]', function(event) {
// 	QueryStringRouter.setFreshParams({
//     	subpage: 'invoices',
//     	mainTab: 'my-account',
//      secondaryTab: 'invoices',
// 	});
// });

/*======================================
=            Hamburger menu            =
======================================*/

function showHamburgerMenu() {
	$('[js-selector="sidebar"]').addClass('is-expanded');
	$('[js-selector="sidebar-overlay"]').removeClass('is-hidden');
	setTimeout(function() {
		$('[js-selector="sidebar-overlay"]').removeClass('is-transparent');
	}, 100);
}

function hideHamburgerMenu() {
	$('[js-selector="sidebar"]').removeClass('is-expanded');
	$('[js-selector="sidebar-overlay"]').addClass('is-transparent');
	setTimeout(function() {
		$('[js-selector="sidebar-overlay"]').addClass('is-hidden');
	}, 800);
}

$(document).on('click', '[action-show-hamburger-menu]', function() {
	QueryStringRouter.setParam('hamburgerMenu', 'show');
});

$(document).on('click touchstart', '[action-hide-hamburger-menu]', function() {
	QueryStringRouter.removeParam('hamburgerMenu', {doNotCreateHistoryState: true});
});

QueryStringRouter.onParamChange('hamburgerMenu', function(value) {
	if (value === 'show') {
		showHamburgerMenu();
	} else {
		hideHamburgerMenu();
	}
});

/*=====  End of Hamburger menu  ======*/



//# sourceMappingURL=webflow-prototyping-main-app-bundle.js.map