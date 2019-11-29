function reloadCssWithoutReloadingPage() {
  $('[href*=".css"]').each(function() {
    var thisAttr = $(this).attr('href').split('?')[0];
    var newAttr = thisAttr+'?'+Date.now();
    $(this).attr('href', newAttr);
  });
}

var initHotReloadingOfCSSTimer = {};
function initHotReloadingOfCSS(interval) {
  reloadCssWithoutReloadingPage();
  interval = interval || 5000;
  initHotReloadingOfCSSTimer = setInterval(reloadCssWithoutReloadingPage, interval);
}