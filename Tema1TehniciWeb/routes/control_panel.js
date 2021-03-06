'use strict';
var express = require('express');
var session = require('express-session');
var tools = require("../tools");
var fs = require('fs');
var debug = require("debug")("ControlPanel");

var router = express.Router();


router.get('/', function (req, res) {

	if (!req.session.user.security.admin && !req.session.user.security.normal) throw new Error('BROKEN');
	if (tools.isBlocked(req.session.user.name)) throw new Error('BROKEN');

	res.render('control_panel.ejs', {
		page: {
			user_name: req.session.user.name
		}
	});
});

module.exports = router;
