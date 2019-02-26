$(document).ready(function() {
    // Evaluation Page
    $('.btn-login').on('click', function() {
        $('.pda-login-form').addClass('d-none');
        $('.speaker-list').removeClass('d-none');
    });


    $('.evaluation-btn').on('click', function(event) {
        $('.evaluation-menu').removeClass('active');
        $(this).parent().addClass('active');

        $('.emoticons').removeClass('d-none');
    });
});