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
	});

	$("#checkoutButton").on("click", function(event) {

		var url = "http://localhost:3000/checkout";
		window.location.href=url;
	})

});