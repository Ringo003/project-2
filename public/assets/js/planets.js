$(function() {

	// call GET method 
	$("#orderBy").on("click", function(event) {
	    var col = $(this).data("col");
	    var condition = $(this).data("condition");

	    // Send the GET request.
	    var urlFoo = "http://localhost:3000/search/" + col + "/" + condition;
	    window.location.href=urlFoo;
	});

	// 
	$("#distance").on("click", function(event) {
		$("#orderBy").attr('data-col', "distance");
	});

	$("#mass").on("click", function(event) {
		$("#orderBy").attr('data-col', "mass");
	});

	$("#xray").on("click", function(event) {
		$("#orderBy").attr('data-col', "xray");
	});

	$("#asc").on("click", function(event) {
		$("#orderBy").attr('data-condition', "asc");
	});

	$("#desc").on("click", function(event) {
		$("#orderBy").attr('data-condition', "desc");
	});

	$(".viewButton").on("click", function(event) {

		var id = $(this).data("id");
		var url = "http://localhost:3000/exoplanet/" + id;
		window.location.href=url;
	});

	$(".deleteButton").on("click", function(event) {
		event.preventDefault();
		var id = $(this).data("id");

		$.ajax({
			url: '/api/delete/' + id,
			type: 'DELETE',
			success: function(data) {
				console.log(data);
			}
		}).done(
	      function() {
	        window.location.reload();
	      }
		);

		$.ajax({
			url: '/api/exoplanets/' + id + '/undo',
			type: 'PUT',
			success: function(data) {
				console.log(data);
			}
		});
	});

	$("#addProductButton").on("click", function(event) {
		event.preventDefault();
		var id = $(this).data("id");
		// IF NOT SOLD

		$.post("/api/cart/1/" + id).done(function(data) {

		});

		$.ajax({
			url: '/api/exoplanets/' + id,
			type: 'PUT',
			success: function(data) {
				console.log(data);
			}
		});

		alert("Added to Cart!");
	});

	$("#checkoutButton").on("click", function(event) {

		var url = "http://localhost:3000/checkout";
		window.location.href=url;
	});

	$("#signUpButton").on("click", function(event) {

		var user = {
			userName: $('#newUsername').val().trim(),
			email: $('#newEmail').val().trim(),
			password: $('#newPassword').val().trim()
		};

		console.log(user);

		$.post("/api/account/new", user).done(function(data) {

		});
	});

	$("#logInButton").on("click", function(event) {
		var user = {
			userName: $('#logUsername').val().trim(),
			password: $('#logPassword').val().trim()
		};



	});

});