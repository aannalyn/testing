$(document).ready(function() {
    var speakersList = [];

    $.getJSON( "assets/data/speakers.json", function( data ) {
        speakersList = data;
        $('.speakers').empty();

        var speakersElem = '';
        $.each( speakersList, function( key, val ) {
            speakersElem += '<li class="speaker d-inline-flex flex-column flex-fill">';
            speakersElem +=     '<a href="#" class="speaker-link" data-toggle="modal" data-target="#speakersModal" data-key="'+key+'">';
            speakersElem +=         '<img src="./assets/images/pages/speakers/'+val.photo+'.png" alt="Speaker Photo" class="speaker-photo mb-2">';
            speakersElem +=         '<h4 class="pda-primary-text text-uppercase font-weight-normal mb-0">'+val.fname+'</h4>';
            speakersElem +=         '<span>'+val.lname+', '+val.labelled+'</span>';
            speakersElem +=     '</a>';
            speakersElem += '</li>';
        });
    
        $('.speakers').html(speakersElem);
    }); 

    $('#speakersModal').on('show.bs.modal', function (event) {
        var speakerKey = $(event.relatedTarget).attr('data-key');

        var modal = $(this);
        modal.find('.pda-photo').attr('src', './assets/images/pages/speakers/'+speakersList[speakerKey].photo+'.png')
        modal.find('.pda-speaker').html('<h4>'+speakersList[speakerKey].fname+' </h4> '+speakersList[speakerKey].lname+', '+speakersList[speakerKey].labelled);
        modal.find('.pda-achievements').html(speakersList[speakerKey].achievements);
        modal.find('.pda-date').text('Presentation Date: ' + speakersList[speakerKey].presentationDate);
        modal.find('.pda-venue').text('Venue: ' + speakersList[speakerKey].presentationDate);
        modal.find('.pda-presentation-title').text('Presentation Title: ' + speakersList[speakerKey].presentationTitle);
        modal.find('.pda-presentation-content').html(speakersList[speakerKey].presentationContent);
    });

});