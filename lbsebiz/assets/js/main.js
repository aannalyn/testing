$(document).ready(function() {

    $(window).on('scroll', function() {
        $('.lbs-header').toggleClass('fixed-top', ($(window).scrollTop() > $('.section-1').height()));
    });

});