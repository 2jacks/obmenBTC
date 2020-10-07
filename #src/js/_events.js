let burger = document.querySelector('.js-burger');
burger.addEventListener('click', () => {
    burger.classList.add('active');
    document.querySelector('.js-nav').classList.add('active');
    document.querySelector('body').classList.add('lock');
});
let navBurger = document.querySelector('.js-nav-burger');
navBurger.addEventListener('click', () => {
    burger.classList.remove('active');
    document.querySelector('.js-nav').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

document.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 65) {
        document.querySelector('.header').classList.add('colored');
    }
    else {
        document.querySelector('.header').classList.remove('colored');
    }
});

let navButtons = document.querySelectorAll('.nav__link');
navButtons.forEach((button) => {
    button.addEventListener('click', () => {
    if (button.hasAttribute('data-scroll')) {
        let scroll = $(button.getAttribute('data-scroll')).offset();
        $('html, body').animate({
            scrollTop: scroll.top - 80,
        }, 500)
    }
});
});
