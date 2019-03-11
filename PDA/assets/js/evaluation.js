$(document).ready(function() {

    // Star Rating Initialization
    $(".speaker-ratings").starRating({
        initialRating: 4,
        strokeWidth: 10,
        strokeColor: '#95989A',
        starSize: 18,
        emptyColor: 'lightgray',
        hoverColor: '#1FADAB',
        activeColor: '#1FADAB',
        ratedColor: '#1FADAB',
        useGradient: false
    });

    $('.evaluation-ratings').starRating({
        initialRating: 5,
        strokeWidth: 10,
        strokeColor: '#95989A',
        starSize: 30,
        emptyColor: 'lightgray',
        hoverColor: '#1FADAB',
        activeColor: '#1FADAB',
        ratedColor: '#1FADAB',
        useGradient: false
    });



    $('.btn-login').on('click', function() {
        $('#login-evaluation').removeClass('opened');
        $('#menu-evaluation').addClass('opened');
    });


    // Evaluation Nav
    $('.evaluation-nav').on('click', function() {
        $('#menu-evaluation').removeClass('opened');
        
        var selectedEvaluation = $(this).attr('data-evaluation');
        $('#' + selectedEvaluation + '-evaluation').addClass('opened');

        // $('.site-heading').text(selectedEvaluation + ' Evaluation');
    });


    $('.evaluation-btn').on('click', function(event) {
        $('.evaluation-menu').removeClass('active');
        $(this).parent().addClass('active');

        $('.evaluation-title').removeClass('d-none');
        $('.emoticons').removeClass('d-none');

        var selectedBtn = $(this).attr('data-label');
        if (selectedBtn == 'visual-aids') {
            $('.btn-skip').addClass('d-none');
            $('.btn-remarks').removeClass('d-none');
        } else {
            $('.btn-skip').removeClass('d-none');
            $('.btn-remarks').addClass('d-none');
        }
    });


});