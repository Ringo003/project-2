var route = require("controllers/exoplanet_controller.js")

$(function() {

	// call post method 
	$("#sign-up").on("click", function(event) {
		 event.preventDefault();
		var newUsername = $('#newUsername').val().trim();
		var newEmail = $('#newEmail').val().trim();
		var newPassword = $('#newPassword').val().trim();
	    if (newUsername === null) {
	    	var needName = alert("You need a username!");
	    } else{
	    	if (newEmail === null) {
	    		var needEmail = alert("You forgot to give use your email");
	    	}else{
	    		if (newPassword === null) {
	    			var needPass = alert("You need a password!")
	    		}
	    	}
	    }.then(function(){
	    	var vals = {}
	    	vals.push(newUsername);
	    	vals.push(newPassword);
	    	vals.push(newEmail);
        $.post("/api/user_table/" + id).done(function(vals) {

        });

        $.ajax({
            url: '/api/exoplanets/user_table',
            type: 'PUT',
            success: function(data) {
                console.log(data);
            }
        });
    });
	    })

	    // Send the GET request.
	    var urlFoo = "http://localhost:3000/search/";
	    window.location.href=urlFoo;
	});
$(function() {

	// call GET method 
	$("#orderBy").on("click", function(event) {
	    var col = $(this).data("col");
	    var condition = $(this).data("condition");

	    // Send the GET request.
	    var urlFoo = "http://localhost:3000/search/" + col + "/" + condition;
	    window.location.href=urlFoo;
	});
});