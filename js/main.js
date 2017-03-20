/**
 * Created by Михаил on 14.03.2017.
 */

//one page scroll
$(function () {

    var sections = $('.section'),
        mainContent = $('.maincontent'),
        inScroll = false,
        screen = 0;

    var scrollToSection = function (sectionIndex) {
        var position;

        position = ((sections.eq(sectionIndex).index()) * -100) + '%';

        sections.eq(sectionIndex).addClass('active')
            .siblings()
            .removeClass('active');


        mainContent.css({
            'transform': 'translate3d(0,' + position + ', 0)'
        });

        setTimeout(function () {
            inScroll = false;

            // $('.nav__link').removeClass('nav__link_active');
            $('.nav__item').eq(sectionIndex).addClass('nav__item_active')
                .siblings()
                .removeClass('nav__item_active');
        }, 1300);

    }


    $(document).on('wheel', function (e) {

        var deltaY = e.originalEvent.deltaY,
            activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();


        if (inScroll) return;

        inScroll = true;

        if (deltaY > 0) { //скролл вниз
            if (nextSection.length) {
                screen = nextSection.index();
            }
        }

        if (deltaY < 0) { //скролл вверх
            if (prevSection.length) {
                screen = prevSection.index();
            }
        }

        scrollToSection(screen);
    });


    $('.down-arrow__link').on('click', function (e) {
        e.preventDefault();
        scrollToSection(1);
    });


    $('.nav__link, .order__link, .header__link').on('click', function (e) {
        e.preventDefault();
        var section = parseInt($(this).attr('href'));
        scrollToSection(section);

    })

    $(document).on('keydown', function (e) {

        var activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        if ($(e.target).is('textarea')) return;

        if (!(e.keyCode ===38 || e.keyCode ===40)) return;

        switch (e.keyCode) {
            case 38: //up
                if (prevSection.length) {
                    screen = prevSection.index();
                }
                break;
            case 40: //down
                if (nextSection.length) {
                    screen = nextSection.index();
                }
                break;
        }

        scrollToSection(screen);


    });

});


//slider
(function () {
    $(document).ready(function () {

        var burgerCarousel = $('.slider-list').owlCarousel({
            items: 1,
            nav: true,
            navContainer: $('.slider-nav'),
            navText: ['', ''],
            loop: true
        });

        $('.right-arrow__link').on('click', function (e) {
            e.preventDefault();
            burgerCarousel.trigger('next.owl.carousel');
        });


        $('.left-arrow__link').on('click', function (e) {
            e.preventDefault();
            burgerCarousel.trigger('prev.owl.carousel');
        });


    });


}());

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


//input mask

(function () {
    $('.phone-mask').inputmask('+7 (999) 999 99 99');
}());


//fancybox
$(function () {
    $('.review-modal__close').on('click', function (e) {
        e.preventDefault();
        $.fancybox.close();
    });
});


//yandex-map
(function () {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.65587627, 37.54100446],
            zoom: 14,
            controls: []
        });

        myMap.behaviors.disable(['scrollZoom']);
        // myMap.controls.remove('geolocationControl')
        //     .remove('searchControl')
        //     .remove('trafficControl')
        //     .remove('typeSelector')
        //     .remove('fullscreenControl')
        //     .remove('zoomControl')
        //     .remove('rulerControl');

        myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-15, -55]
        });

        myPlacemark1 = new ymaps.Placemark([55.65587627, 37.54100446], {});
        myPlacemark2 = new ymaps.Placemark([55.64158266, 37.52660636], {});
        myPlacemark3 = new ymaps.Placemark([55.65672547, 37.57243995], {});
        myPlacemark4 = new ymaps.Placemark([55.66958253, 37.55184058], {});

        myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4);
        myMap.geoObjects.add(myPin);
    }
}());


//form mail
$(function () {
    $('#order-form').on('submit', function (e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();

        $.post('/mail.php', formData, function (data) {

            // console.log(data);

            data = JSON.parse(data);
            var popup = data.status ? '#success' : '#error';

            $('.status-popup__close').on('click', function (e) {
                e.preventDefault();
                $.fancybox.close();
            });

            $.fancybox.open({
                src  : popup,
                type : 'inline',
                opts : {
                    afterClose: function () {
                        form.trigger('reset');
                    }
                }
            });

        });



    });
});
