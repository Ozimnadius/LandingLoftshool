/**
 * Created by Михаил on 14.03.2017.
 */

//slider
(function () {
    $(document).ready(function(){

        var burgerCarousel = $('.slider-list').owlCarousel({
            items : 1,
            nav : true,
            navContainer: $('.slider-nav'),
            navText: ['', ''],
            loop: true
        });

        $('.right-arrow__link').on('click', function(e) {
            e.preventDefault();
            burgerCarousel.trigger('next.owl.carousel');
        });


        $('.left-arrow__link').on('click', function(e) {
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

