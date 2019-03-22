$(document).ready(function() {
    $('.room-dropdown-menu').delegate('a', 'click', function() {
        $(this).parent().parent().find('button.dropdown-toggle').html($(this).text());
    });

    $('.schedule-list').delegate('.schedule-item', 'click', function() {
        $(this).parent().addClass('d-none');
        $('.program-result-wrapper').removeClass('d-none');

        selectProgram($(this));

        $('.date-dropdown-menu a[data-selected="'+$(this).attr('data-selected')+'"]').trigger('click');
        $('.room-dropdown-menu a:first-of-type').trigger('click');
    });

    $('.date-dropdown-menu').delegate('a', 'click', function() {
        $(this).parent().parent().find('button.dropdown-toggle').html($(this).text());
        selectProgram($(this));
    });


    function selectProgram(elem) {
        var dateSelected = elem.attr('data-selected');
        $('.program-tab-content').addClass('d-none');
        $('#' + dateSelected + '-TabContent.program-tab-content').removeClass('d-none');
    
        var elementData = [];

        if (dateSelected == 'may13') {
            elementData = [
                { id: "fr1", href: "#fr1", ac: "fr1", as: "true", label: "Function Room 1" },
                { id: "fr2n3", href: "#fr2n3", ac: "fr2n3", as: "false", label: "Function Room 2 & 3" },
                { id: "fr4", href: "#fr4", ac: "fr4", as: "false", label: "Function Room 4" },
                { id: "fr5", href: "#fr5", ac: "fr5", as: "false", label: "Function Room 5" },
                { id: "mr7n8n9", href: "#mr7n8n9", ac: "mr7n8n9", as: "false", label: "MR 7,8 & 9" }
            ];
        } else if (dateSelected == 'may14') {
            elementData = [
                { id: "fr1", href: "#fr1", ac: "fr1", as: "true", label: "Function Room 1" },
                { id: "fr2n3", href: "#fr2n3", ac: "fr2n3", as: "false", label: "Function Room 2 & 3" },
                { id: "fr4", href: "#fr4", ac: "fr4", as: "false", label: "Function Room 4" },
                { id: "fr5", href: "#fr5", ac: "fr5", as: "false", label: "Function Room 5" },
                { id: "mr7n8n9", href: "#mr7n8n9", ac: "mr7n8n9", as: "false", label: "MR 7,8 & 9" },
                { id: "r11", href: "#r11", ac: "r11", as: "false", label: "R 11" },
                { id: "r13", href: "#r13", ac: "r13", as: "false", label: "R 13" }
            ];
        } else if (dateSelected == 'may15') {
            elementData = [
                { id: "fr1", href: "#fr1", ac: "fr1", as: "true", label: "Function Room 1" },
                { id: "fr2n3", href: "#fr2n3", ac: "fr2n3", as: "false", label: "Function Room 2 & 3" },
                { id: "fr4", href: "#fr4", ac: "fr4", as: "false", label: "Function Room 4" },
                { id: "fr5", href: "#fr5", ac: "fr5", as: "false", label: "Function Room 5" },
                { id: "mr7n8n9", href: "#mr7n8n9", ac: "mr7n8n9", as: "false", label: "MR 7,8 & 9" }
            ];
        } else if (dateSelected == 'may16') {
            elementData = [
                { id: "fr2n3", href: "#fr2n3", ac: "fr2n3", as: "true", label: "Function Room 2 & 3" },
                { id: "fr4", href: "#fr4", ac: "fr4", as: "false", label: "Function Room 4" },
                { id: "fr5", href: "#fr5", ac: "fr5", as: "false", label: "Function Room 5" },
                { id: "mr1", href: "#mr1", ac: "mr1", as: "false", label: "MR 1" },
                { id: "mr2n3", href: "#mr2n3", ac: "mr2n3", as: "false", label: "MR 2&3" },
                { id: "mr7n8n9", href: "#mr7n8n9", ac: "mr7n8n9", as: "false", label: "MR 7,8 & 9" }
            ];
        } else if (dateSelected == 'may17') {
            elementData = [
                { id: "fr1", href: "#fr1", ac: "fr1", as: "true", label: "Function Room 1" },
                { id: "fr2n3", href: "#fr2n3", ac: "fr2n3", as: "false", label: "Function Room 2 & 3" },
                { id: "fr4", href: "#fr4", ac: "fr4", as: "false", label: "Function Room 4" },
                { id: "fr5", href: "#fr5", ac: "fr5", as: "false", label: "Function Room 5" }
            ];
        }


        var el = '';
        $.each(elementData, function (index, val) {
            el += '<a class="nav-link dropdown-nav-link" id="'+ val.id +'-'+ dateSelected+ '" data-toggle="tab" href="'+ val.href +'-'+ dateSelected +'-tab" role="tab" aria-controls="'+ val.ac +'-'+ dateSelected +'-tab" aria-selected="'+val.as+'">'+ val.label +'</a>';
        });

        $('.room-dropdown-menu').empty().html(el);
    }
}); 