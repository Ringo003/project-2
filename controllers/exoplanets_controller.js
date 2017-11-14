var express = require("express");

var router = express.Router();

var exoplanet = require("../models/exoplanet.js"); //////////////

// review
router.get("/", function(req, res) {
	exoplanet.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// planet
router.get("/:col/:condition", function(req, res) {
	exoplanet.orderBy(req.params.col, req.params.condition, function(data) {
		
	});
});

// planet
router.get("/exoplanet/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	exoplanet.select(condition, function(result) {

	});
});

// review
router.post("/api/exoplanets", function(req, res) {
	exoplanet.insertOne(req.body.name, function(result) {
		res.json({ id: result.insertId });
	});
});

// planet
router.put("/api/exoplanets/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	exoplanet.updateSold(true, condition, function(result) {
		if (result.changedRows == 0) {
	      // If no rows were changed, then the ID must not exist, so 404
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	});
});

module.exports = router;