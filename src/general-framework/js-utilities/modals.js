//Elements with action-open-modal should show modals container and 
// and show the respective modal modal
$(document).on('click', '[action-open-modal]', function(event) {
    var modalToLoad = $(this).attr("action-open-modal");
    QueryStringRouter.setParam('modalContent', modalToLoad);
     
    hideWebflowDropdowns();      
});

$(document).on('click', '[action-close-modal="true"]', function(event) {
    if (QueryStringRouter.getNumberOfPreviousNavigationStepsInModal >= 1) {
        QueryStringRouter.goBackBeforeModal();
    } else {
        QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
    }
});

function bindEscButtonToCloseModal() {
    $(document).one('keydown.modal', function(event) {
        if (event.which === 27) {
            QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
        }
    });
}

function closeModal() {
    //deselectAll();
    $(".modal-wrapper").fadeOutAndHide(300);
    $('[modal-id]').addClass('hidden');          
}

QueryStringRouter.onParamChange('modalContent', function(value) {
    if (typeof value != 'undefined') {
        if ($(".modal-wrapper").hasClass('is-hidden')) {
            $(".modal-wrapper").showAndFadeIn(200, function() {
                $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
                $('[modal-id="'+value+'"]').removeClass('is-hidden');
            });
        } else {
            $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
            $('[modal-id="'+value+'"]').removeClass('is-hidden');
        }

        //esc button closes modal, binded only after modal was opened
        bindEscButtonToCloseModal();
    } else {
        closeModal();
    }
});


//modal generic action
$(document).on('click', '[action-show-modal]', function() {
    var modalContentToShow = $(this).attr('action-show-modal');
    QueryStringRouter.setParam('modalContent', modalContentToShow);
});