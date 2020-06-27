'use strict';
var express = require('express');
var tools = require("../tools");
var index_page = require("./index");
var session = require('express-session');
var router = express.Router();




router.post('/', function (req, res) {
	var user_name = req.body.usr_name;
	var user_pass = req.body.usr_pass;

	if (user_name === undefined || user_pass === undefined) throw new Error('BROKEN');
	if (!tools.isValid({name:user_name,pass:user_pass})) {
		throw new Error('BROKEN');
	}
	if (tools.getUser(user_name).blocked) {
		res.redirect('/?message=Account blocked');
	}

	var access_rights = {
		admin: false,
		normal: false,
		guest: false
	};

	if (tools.isAdmin(user_name)) access_rights.admin = true;
	else if (tools.isNormal(user_name)) access_rights.normal = true;

	req.session.user = { name: user_name, security: access_rights };
	res.redirect('/');

});

module.exports = router;