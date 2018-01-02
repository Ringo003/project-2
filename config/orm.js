var connection = require("./connection.js");

var tableForPlanets = "exosale";
var tableForCart = "cart"; ///////////
<<<<<<< HEAD
var tableForReviews = "review"; /////////////
var tableForUserInfo = "user_table"
var col = "burger_name, devoured, date"; //////////////
=======
var tableForUser = "account";
var colForCart = "id_account, id_planet"; //////////////
>>>>>>> 9c4e03109c32824bc4b2d1858c4819455975c8d4

var orm = {

	// user
	addUser: function(newUser, cb) {
		var queryString = "INSERT INTO " + tableForUser + " ( username, email, password ) VALUES ( '" + newUser.userName + "', '" + newUser.email + "', '" + newUser.password + "' );"; 
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});

	},

	// cart
	selectCart: function(condition, cb) {
		var queryString = "SELECT * FROM " + tableForCart + " WHERE " + condition + ";";
		var joinQueryString = "SELECT * FROM exosale INNER JOIN cart ON exosale.id = cart.id_planet;"
		console.log(joinQueryString);
		connection.query(joinQueryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// planet
	selectPlanet: function(condition, cb) {
		var queryString = "SELECT * FROM " + tableForPlanets + " WHERE " + condition + ";";
		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// planet
	orderBy: function(colName, condition, cb) {
		var queryString = "SELECT * FROM " + tableForPlanets + " ORDER BY " + colName + " " + condition + " LIMIT 10;";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// cart
	insertOne: function(account_val, planet_val, cb) {
		var queryString = "INSERT INTO " + tableForCart + " (" + colForCart + ") VALUES (" + account_val + ", " + planet_val + ");";

		connection.query(queryString, function(err, result) {
			if (err) {
				console.log("duplicate entry");
			}
			cb(result);			
		});
	},

	// cart
	deleteOne: function(condition, cb) {
		var queryString = "delete  from cart where + " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	},
	//insertion of new user data
	insertNewUser: function(vals, cb) {
		var queryString = "INSERT INTO user_table ('username', 'password', 'email') VALUES ('" + vals + "');";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	},

	// review, sold
	updateSold: function(objColVals, condition, cb) {
		var queryString = "UPDATE " + tableForPlanets + " SET sold = " + objColVals + " WHERE " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	}, 

	// review, sold
	undoSold: function(objColVals, condition, cb) {
		var queryString = "UPDATE " + tableForPlanets + " SET sold = " + objColVals + " WHERE " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	}
};

module.exports = orm;