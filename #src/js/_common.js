$('.owl-carousel').owlCarousel({
    margin:10,
    dots: false,
    nav: true,
    navContainer: ".news-slider__buttons",
    responsive: {
        1470: {
            items: 4,
        },
        1100: {
            items: 3,
        },
        767: {
            items: 2,
        },
        567: {
            items: 2,
        },
        0: {
            items: 1,
        }
    }
});