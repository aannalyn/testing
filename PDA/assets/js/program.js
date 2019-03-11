$(document).ready(function() {
    $('.program-menus .dropdown-menu a').on('click', function(){
        $(this).parent().parent().find('.btn:first-child').html($(this).text());
    });

    $('.schedule-item').on('click', function() {
        $(this).parent().addClass('d-none');
        $('.program-result-wrapper').removeClass('d-none');
    });
});