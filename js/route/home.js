document.addEventListener("DOMContentLoaded", () => {
    new Accordion( {
        $container: document.querySelector('#faq-accordion')
    });

    new Swiper('#home-page-top-slider', {
        slidesPerView: 4,
        spaceBetween: 32,
        // centeredSlides: true,
        loop: true,
    });

    new Swiper('#section-search-tours__slider-skew', {
        slidesPerView: 4,
        spaceBetween: 32,
        // centeredSlides: true,
        loop: true,
        autoplay: true,
        speed: 750,
    });
});

