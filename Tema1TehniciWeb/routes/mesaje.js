var express = require('express');
var session = require('express-session');
var tools = require("../tools");
var fs = require('fs');
var debug = require("debug")("ControlPanel");

var router = express.Router();


router.get('/', function (req, res) {

	if (!req.session.user.security.admin && !req.session.user.security.normal) throw new Error('BROKEN');
	if (tools.isBlocked(req.session.user.name)) throw new Error('BROKEN');

	// Make so that this page can work without username parameter
	var param_username = (req.query.user === undefined || req.query.user === null ? req.session.user.name : req.query.user);
	if (tools.getUser(param_username) === null) {
		throw new Error('BROKEN');
	}

	res.render('mesaje.ejs', {
		page: {
			username: param_username,
			can_edit: req.session.user.name === param_username,
			emoticons: tools.getDatabase().emoticons
		}
	});
});

module.exports = router;
