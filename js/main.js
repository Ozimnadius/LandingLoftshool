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

//accordion horizontal
(function () {
    $('.menu__trigger').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            menuItem = $this.closest('.menu__item'),
            menuContent = menuItem.find('.menu__content'),
            // menuContentText = menuContent.find('.menu-content__text'),
            requarideWidht = menuContent.find('.menu-content__text').outerWidth(),
            otherItems = $('.menu__item'),
            otherMenuContent = $('.menu__content');

        if (!menuItem.hasClass('menu__item_active')) {
            otherItems.removeClass('menu__item_active');
            menuItem.addClass('menu__item_active');
            otherMenuContent.css('width', '0');
            menuContent.css('width', requarideWidht);
        } else {
            menuItem.removeClass('menu__item_active');
            menuContent.css('width', '0');
        }
    });

//клик вне аккордеона
    $(document).on('click', function (e) {
        var $this = e.target;

        if (!$this.closest('.menu__list')) {
            $('.menu__item').removeClass('menu__item_active');
            $('.menu__content').css('width', '0');
        }


    });
}());
