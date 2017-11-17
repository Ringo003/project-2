var orm = require("../config/orm.js");

var exoplanet = {

	selectCart: function(condition, cb) {
		orm.selectCart(condition, function(res) {
			cb(res);
		});
	},

	selectPlanet: function(condition, cb) {
		orm.selectPlanet(condition, function(res) {
			cb(res);
		});
	},

	orderBy: function(col, condition, cb) {
		orm.orderBy(col, condition, function(res) {
			cb(res);
		});
	},

	insertOne: function(account_val, planet_val, cb) {
		orm.insertOne(account_val, planet_val, function(res) {
			cb(res);
		});
	},

	deleteOne: function(condition, cb) {
		orm.deleteOne(condition, function(res) {
			cb(res);
		});
	},

	updateSold: function(objColVals, condition, cb) {
		orm.updateSold(objColVals, condition, function(res) {
			cb(res);
		});
	},

	undoSold: function(objColVals, condition, cb) {
		orm.undoSold(objColVals, condition, function(res) {
			cb(res);
		});
	},

	addUser: function(newUser, cb) {
		orm.addUser(newUser, function(res) {
			cb(res);
		});
	}
};

module.exports = exoplanet;