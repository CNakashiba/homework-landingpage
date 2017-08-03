// hide all read more text(s)
// hide read less links
// If a user clicks "read more" on the first blog post: 
	// Have the <p> (with id="first-read-more-text") slide up and hide the "Read Less" link using $.slideUp() and $.hide()
	// Show the relevant "Read More" link using $.show()
// If a user clicks "Read Less" on the first post:
	// 	Have the <p> (with id="first-read-more-text") slide up and hide the "Read Less" link using $.slideUp() and $.hide()
	// 	Show the relevant "Read More" link using $.show()
// If a user clicks "Read More" on the second blog post
	// Have the text in the <p> tag (with id="second-read-more-text") slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
	// Hide the relevant "Read More" link using $.hide()
// If a user clicks "Read Less" on the second post:
	// Have the <p> (with id="second-read-more-text") slide up and hide the "Read Less" link using $.slideUp() and $.hide()
	// Show the relevant "Read More" link using $.show()
		
$(document).ready(function(){
	$("#first-read-more-text, #second-read-more-text").hide();
	$(".read-less").hide();

	$("#first-read-more-button").click(readMoreOne);
	$("#first-read-less-button").click(readLessOne);
	$("#second-read-more-button").click(readMoreTwo);
	$("#second-read-less-button").click(readLessTwo);

	function preventMovement(){
		event.preventDefault();
	}
	
	function readMoreOne() {
		$("#first-read-less-button").show();
		$("#first-read-more-text").slideDown();
		$("#first-read-more-button").hide();
	}

	function readLessOne() {
		$("#first-read-more-button").show();
		$("#first-read-more-text").slideUp();
		$("#first-read-less-button").hide();
	}

	function readMoreTwo() {
		$("#second-read-less-button").show();
		$("#second-read-more-text").slideDown();
		$("#second-read-more-button").hide();
	}

	function readLessTwo() {
		$("#second-read-more-button").show();
		$("#second-read-more-text").slideUp();
		$("#second-read-less-button").hide();
	}

})

