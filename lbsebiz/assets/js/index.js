$(document).ready(function() {

    $(window).on('scroll', function() {
        $('.lbs-header').toggleClass('fixed-top', ($(window).scrollTop() > $('.section-1').height()));

        // if ($(window).scrollTop() > $('.section-1').height()) {
            // var item1Index = $('li').index($('.lbs-main-nav-item:nth-child(1)')),
            //     item2Index = $('li').index($('.lbs-main-nav-item:nth-child(2)')),
            //     item3Index = $('li').index($('.lbs-main-nav-item:nth-child(3)')),
            //     item4Index = $('li').index($('.lbs-main-nav-item:nth-child(4)')),
            //     item5Index = $('li').index($('.lbs-main-nav-item:nth-child(5)')),
            //     item6Index = $('li').index($('.lbs-main-nav-item:nth-child(6)')),
            //     item7Index = $('li').index($('.lbs-main-nav-item:nth-child(7)'));

            // $('.lbs-main-nav-item:nth-child(4)').css({order:0 });
            
        // }
    });

});