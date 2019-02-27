$(document).ready(function() {
    // Evaluation Page
    $('.btn-login').on('click', function() {
        $('.pda-login-form').addClass('d-none');
        $('.speakers-wrapper').removeClass('d-none');
    });


    $('.evaluation-btn').on('click', function(event) {
        $('.evaluation-menu').removeClass('active');
        $(this).parent().addClass('active');

        $('.evaluation-title').removeClass('d-none');
        $('.emoticons').removeClass('d-none');
    });

    $(".speaker-ratings").starRating({
        initialRating: 4,
        strokeWidth: 10,
        strokeColor: '#95989A',
        starSize: 18,
        emptyColor: 'lightgray',
        hoverColor: '#1FADAB',
        activeColor: '#1FADAB',
        useGradient: false
    });
});