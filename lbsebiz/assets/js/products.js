$(document).ready(function() {
    $('.lbs-product-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        nav: false,
        dots: true,
        responsiveClass: true,
        animateOut: 'fadeOut'
    });

    $('.lbs-companies.owl-carousel').owlCarousel({
        padding: 10,
        center:true,
        loop: true,
        autoWidth:true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false
    });
});