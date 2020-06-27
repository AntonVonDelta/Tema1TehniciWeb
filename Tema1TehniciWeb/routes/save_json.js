'use strict';
var express = require('express');
var tools = require("../tools");
var fs = require('fs');
var debug = require("debug")("Homework");

var router = express.Router();



router.post('/', function (req, res) {
	try {
		var data = req.body;
		if (!req.session.user.security.admin) throw new Error('Invalid credentials');
		if (tools.isBlocked(req.session.user.name)) throw new Error('BROKEN');

		var rawdata = tools.getDatabase();

		if (data.page === "announces") {
			// announces page
			rawdata.data_avizier = data.data===undefined?[]:data.data;
		} else {
			// info page
			

			if (data.data === undefined) {
				rawdata.data_ads = [];
			} else {
				// idiotic fix to automatic boolean conversion: true and false are converted to "true" and "false"
				for (el of data.data) {
					el.multiple = (el.multiple === "true");
				}
				rawdata.data_ads = data.data;
			}
		}

		tools.saveDatabase(rawdata);
	} catch (err) {
		res.send(err.message);
	}

	res.end();
});

module.exports = router;
