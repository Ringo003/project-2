var connection = require("./connection.js");

var tableForPlanets = "exosale";
var tableForCart = "cart"; ///////////
var tableForReviews = "review"; /////////////
var tableForUserInfo = "user_table"
var col = "burger_name, devoured, date"; //////////////

var orm = {

	// review
	selectAllReviews: function(condition, cb) {
		var queryString = "SELECT * FROM " + tableForReviews + " WHERE " + condition + ";";
		
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

		connection.query(queryString, function(err, result) {
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

	// review
	insertOne: function(vals, cb) {
		var queryString = "INSERT INTO " + tableForReviews + " (" + col + ") VALUES ('" + vals + "', FALSE, CURRENT_TIMESTAMP);";

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
	}

};

module.exports = orm;