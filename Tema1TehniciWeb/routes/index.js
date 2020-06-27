'use strict';
var express = require('express');
var session = require('express-session');
var debug = require("debug")("Homework");
var router = express.Router();
var fs = require('fs'); 
var tools = require("../tools");

function getPageData() {
	var database = tools.getDatabase();

	return {
		page: {
			files_data: database._j_comp_attrb_,
			slide_images: database.slides_images,
			data_ads: database.data_ads,
			data_avizier: database.data_avizier
		},
		message:""
	};
}
router.get('/', function (req, res) {
	debug(req.session);

	var pageData = getPageData();
	if (req.query.message !== undefined && req.query.message !== null) {
		pageData.message = req.query.message;
    }
	res.render('index.ejs', pageData);
});

module.exports = router;
module.exports.getPageData = getPageData;