$(document).ready(function() {
 
	//code institute code - already in the template
 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	//refactored code from challange 1
	// seting up the correct tags and adds the id to the button
	$('.bottom_button').each(function () {
		$(this).replaceWith('<button class="bottom_button">' + $(this).text() + '</button>');
	});

	$(".bottom_button").first().attr('id', 'firstBtn');

}); 
