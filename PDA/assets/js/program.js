$(document).ready(function() {
    $(".program-menus .dropdown-menu a").click(function(){
        $(this).parent().parent().find('.btn:first-child').html($(this).text());
    });
});