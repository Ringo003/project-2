var connection = require("./connection.js");

var tableName = "exosale"; ///////////
var col = "burger_name, devoured, date"; 

var orm = {

	// review
	selectAll: function(cb) {
		var queryString = "SELECT * FROM " + tableName + ";";
		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// planet
	select: function(condition, cb) {
		var queryString = "SELECT * FROM " + tableName + " WHERE " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// planet
	orderBy: function(colName, condition, cb) {
		var queryString = "SELECT TOP 10 FROM " + tableName + " ORDER BY " + colName + " " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// review
	insertOne: function(vals, cb) {
		var queryString = "INSERT INTO " + tableName + " (" + col + ") VALUES ('" + vals + "', FALSE, CURRENT_TIMESTAMP);";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	},

	// review, sold
	updateOne: function(objColVals, condition, cb) {
		var queryString = "UPDATE " + tableName + " SET sold = " + objColVals + " WHERE " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	}

};

module.exports = orm;