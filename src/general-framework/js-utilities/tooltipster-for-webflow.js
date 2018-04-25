var tooltipsterTrigger = 'custom';

var tooltipsterTriggerOpen = {
    mouseenter: true,
    touchstart: true,
    tap: true,
    click: true
};

var tooltipsterTriggerClose = {
    mouseleave: true,
    scroll: true,
    tap: true
};

function initTooltipster() {
    $('[tooltipster="top"]').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="bottom"]').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="left"]').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="right"]').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="right-delay"]').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="top-delay"]').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="left-delay"]').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="bottom-delay"]').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless'
    });
}

initTooltipster();

$(document).on('preloadingComplete', function() {
    initTooltipster();
});