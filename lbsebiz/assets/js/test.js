$(document).ready(function() {


    $(window).on('scroll', function() {
        $('.lbs-header').toggleClass('fixed-top', ($(window).scrollTop() > $('.section-1').height()));
    });


    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var parallaxTest = new TimelineMax();

    parallaxTest.from('.lbs-parallax-content', .4, { autoAlpha: 0, ease: Power0.easeNone }, 0.4)
                .from('.lbs-bg', 1, { y: '-20%', ease:Power0.easeNone }, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.lbs-parallax',
        triggerHook: 1,
        duration: '100%'
    })
    .setTween(parallaxTest)
    .addTo(controller);
});