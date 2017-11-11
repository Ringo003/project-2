$(function() {

	// call PUT method
	$(".change-devour").on("click", function(event) {
	    var id = $(this).data("id");
	    var newDevour = $(this).data("newDevour");

	    var newDevourState = {
	      devoured: newDevour
	    };

	    // Send the PUT request.
	    $.ajax("/api/burgers/" + id, {
	      type: "PUT",
	      data: newDevourState
	    }).then(
	      function() {
	        console.log("changed devour to", newDevour);
	        // Reload the page to get the updated list
	        location.reload();
	      }
	    );		
	});

	$(".create-form").on("submit", function(event) {
	// Make sure to preventDefault on a submit event.
	event.preventDefault();

	var newBurger = {
	  name: $("#name").val().trim(),
	  devoured: false
	};

	// Send the POST request.
	$.ajax("/api/burgers", {
	  type: "POST",
	  data: newBurger
	}).then(
	  function() {
	    console.log("created new burger");
	    // Reload the page to get the updated list
	    location.reload();
	  }
	);
	});

});