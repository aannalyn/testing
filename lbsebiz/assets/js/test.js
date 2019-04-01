$(document).ready(function() {


    $(window).on('scroll', function() {
        $('.lbs-header').toggleClass('fixed-top', ($(window).scrollTop() > $('.section-1').height()));
    });


    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();



    // Parallax Section
    // ------------------------------------------------------------
    var parallaxTest = new TimelineMax();
    parallaxTest.from('.lbs-parallax-content', .4, { autoAlpha: 0, ease: Power0.easeNone }, 0.4)
                .from('.lbs-bg', 1, { y: '-50%', ease:Power0.easeNone }, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.lbs-parallax',
        triggerHook: 1,
        duration: '100%'
    })
    .setTween(parallaxTest)
    .addTo(controller);


    
    // Scene Section
    // ------------------------------------------------------------

    // Section 5
    var sectionScene = new ScrollMagic.Scene({
        triggerElement: '.section-5',
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('.section-5 .lbs-slide-wrapper')
    .addTo(controller);

    // Section 6
        var pinScene06 = new ScrollMagic.Scene({
        triggerElement: '.section-5',
        triggerHook: 0,
        duration: '200%'
    })
    .setPin('.section-6 .lbs-slide-wrapper')
    .addTo(controller);

    // Section 7
    var pinScene07 = new ScrollMagic.Scene({
        triggerElement: '.section-6',
        triggerHook: 0,
        duration: '200%'
    })
    .setPin('.section-7 .lbs-slide-wrapper')
    .addTo(controller);

    // Section 8
    var pinScene08 = new ScrollMagic.Scene({
        triggerElement: '.section-7',
        triggerHook: 0,
        duration: '200%'
    })
    .setPin('.section-8 .lbs-slide-wrapper')
    .addTo(controller);


        
    // Section 10
    // ------------------------------------------------------------
    // var scaleTween = TweenMax.to('.section-10-img', 1,{ scale :1 });

    new ScrollMagic.Scene({
        triggerElement: '.section-10',
        triggerElement: 0,
        duration: '100%'
    })
    .setTween('.section-10-img img', {
        scale: 1
    })
    .addTo(controller);



    // Parallax Effect
    var section10Scene1 = new ScrollMagic.Scene({
        triggerElement: '#parallax',
        triggerHook: 'OnEnter',
        duration: '100%'
    })
    .scale('#parallax', {
        backgroundPosition: '50% 100%',
        ease: Linear.easeNone
    })
    .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#slidein",
        triggerHook: "onLeave",
    })
    .setPin("#slidein")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
 
    new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        triggerHook: "onLeave",
    })
    .setPin("#slidein2")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});





