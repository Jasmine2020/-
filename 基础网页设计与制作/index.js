// JavaScript Document
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
	var numpic = $('#slides li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 5000;
	
		$('#slides li').eq(0).siblings('li').css({'display':'none'});

	function ADDLI(){
		//var lilicount = numpic + 1;
		for(var i = 0; i <= numpic; i++){
			ulcontent += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
		}
		
		$('#slides').after(ulstart + ulcontent + ulend);	
	}

	pagination.on('click',DOTCHANGE)


$(document).ready(function() {
    $('li').click(function() {
        $(this).effect('bounce',{times:3},500);
    });
});