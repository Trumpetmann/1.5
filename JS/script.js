
'use strict';


 const breakpoint = window.matchMedia( '(min-width:767px)' );

 let mySwiper;

 const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {

    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

    return;

    } else if ( breakpoint.matches === false ) {

        return enableSwiper();

    }
};

const enableSwiper = function() {

    mySwiper = new Swiper('.slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
    
        },
        mousewheel: {
            sensitivity: 0.5,
            evntsTarget: '.slider',
        },
        slidesPerView: 1.1,
        freeMode: true,
        width: 285,
    });

};

breakpoint.addListener(breakpointChecker);
breakpointChecker();




let sliderWrapper = document.querySelector('.slider__wrapper')

let buttonShow = document.querySelector('.main__button-overflow--show')
let buttonHide = document.querySelector('.main__button-overflow--hide')

buttonShow.addEventListener('click', function() {

    sliderWrapper.classList.remove('slider__wrapper--hide');
    sliderWrapper.classList.add('slider__wrapper--show');

    buttonShow.classList.remove('main__button-overflow--active');
    buttonHide.classList.add('main__button-overflow--active');

})

buttonHide.addEventListener('click', function() {

    sliderWrapper.classList.remove('slider__wrapper--show');
    sliderWrapper.classList.add('slider__wrapper--hide');

    buttonHide.classList.remove('main__button-overflow--active');
    buttonShow.classList.add('main__button-overflow--active');

})







          
   
