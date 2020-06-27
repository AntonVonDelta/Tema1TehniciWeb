'use strict';
var express = require('express');
var session = require('express-session');
var tools = require("../tools");
var fs = require('fs');
var debug = require("debug")("Homework");

var router = express.Router();


router.get('/', function (req, res) {
	if (!req.session.user.security.admin) throw new Error('BROKEN');
	if (tools.isBlocked(req.session.user.name)) throw new Error('BROKEN');

	var data = tools.getDatabase();

	res.render('info_frame.ejs', {
		page: {
			data: data
		}
	});
});

module.exports = router;
