$(document).on('preloadingComplete', function() {

	var bindedTabParams = {};

	$('[action-tab]').each(function() {
		var tabsGroup = $(this).attr('tabs-group');
		var tabIdToBind = $(this).attr('action-tab');

		if (!bindedTabParams[tabsGroup]) {
			QueryStringRouter.onParamChange('tabs__'+tabsGroup, function(value) {
				if (typeof value != 'undefined') {
					$('[tabs-group="'+tabsGroup+'"][tab-id="'+value+'"]').removeClass('is-hidden');
					$('[tabs-group="'+tabsGroup+'"][tab-id]').not('[tab-id="'+value+'"]').addClass('is-hidden');

					$('[tabs-group="'+tabsGroup+'"][action-tab]').not('[action-tab="'+value+'"]').removeClass('is-current');
					$('[tabs-group="'+tabsGroup+'"][action-tab="'+value+'"]').addClass('is-current');
				}
			});
			bindedTabParams[tabsGroup] = true;
		}
	});

	$(document).on('click', '[action-tab]', function(event) {
		var clickedTab = $(this).attr('action-tab');
		var clickedTabGroup = $(this).attr('tabs-group');
		QueryStringRouter.setParam('tabs__'+clickedTabGroup, clickedTab, {doNotCreateHistoryState: true});
	});
});