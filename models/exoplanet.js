var orm = require("../config/orm.js");

var exoplanet = {
	selectAll: function(cb) {
		orm.selectAll(function(res) {
			cb(res);
		});
	},

	select: function(condition, cb) {
		orm.select(condition, function(res) {
			cb(res);
		});
	},

	orderBy: function(col, condition, cb) {
		orm.orderBy(col, condition, function(res) {
			cb(res);
		});
	},

	insertOne: function(vals, cb) {
		orm.insertOne(vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne(objColVals, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = exoplanet;