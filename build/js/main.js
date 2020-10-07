"use strict";

$('.owl-carousel').owlCarousel({
  margin: 10,
  dots: false,
  nav: true,
  navContainer: ".news-slider__buttons",
  responsive: {
    1470: {
      items: 4
    },
    1100: {
      items: 3
    },
    767: {
      items: 2
    },
    567: {
      items: 2
    },
    0: {
      items: 1
    }
  }
});
var burger = document.querySelector('.js-burger');
burger.addEventListener('click', function () {
  burger.classList.add('active');
  document.querySelector('.js-nav').classList.add('active');
  document.querySelector('body').classList.add('lock');
});
var navBurger = document.querySelector('.js-nav-burger');
navBurger.addEventListener('click', function () {
  burger.classList.remove('active');
  document.querySelector('.js-nav').classList.remove('active');
  document.querySelector('body').classList.remove('lock');
});
document.addEventListener('scroll', function () {
  if (window.pageYOffset > 65) {
    document.querySelector('.header').classList.add('colored');
  } else {
    document.querySelector('.header').classList.remove('colored');
  }
});
var navButtons = document.querySelectorAll('.nav__link');
navButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.hasAttribute('data-scroll')) {
      var scroll = $(button.getAttribute('data-scroll')).offset();
      $('html, body').animate({
        scrollTop: scroll.top - 80
      }, 500);
    }
  });
});