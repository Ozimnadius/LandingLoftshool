/**
 * Created by Михаил on 14.03.2017.
 */

//accordion
$(function () {
    $('.team__trigger').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
        teamItem = $this.closest('.team__item'),
        otherItems = $('.team__item'),
        teamContent = teamItem.find('.team__content'),
        otherContent = $('.team__content');


        if (!teamItem.hasClass('team__item_active')) {
            otherItems.removeClass('team__item_active');
            teamItem.addClass('team__item_active');
            otherContent.slideUp();
            teamContent.slideDown();
        } else {
            teamItem.removeClass('team__item_active');
            teamContent.slideUp();
        }

    });
    
});