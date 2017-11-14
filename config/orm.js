var connection = require("./connection.js");

var tableForPlanets = "exosale"; ///////////
var tableForReviews = "review"; /////////////
var col = "burger_name, devoured, date"; //////////////

var orm = {

	// review
	selectAll: function(cb) {
		var queryString = "SELECT * FROM " + tableForReviews + ";";
		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// planet
	select: function(condition, cb) {
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
		var queryString = "SELECT TOP 10 FROM " + tableForPlanets + " ORDER BY " + colName + " " + condition + ";";

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