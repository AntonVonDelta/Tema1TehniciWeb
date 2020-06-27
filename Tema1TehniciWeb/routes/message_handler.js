var express = require('express');
var session = require('express-session');
var tools = require("../tools");
var fs = require('fs');
var debug = require("debug")("ControlPanel");

var router = express.Router();


router.get('/', function (req, res) {
	if (!req.session.user.security.admin && !req.session.user.security.normal) throw new Error('BROKEN');
	if (tools.isBlocked(req.session.user.name)) throw new Error('BROKEN');
	if (tools.getUser(req.query.user) === null) {
		throw new Error('BROKEN');
	}


	// [ {id,title,text,img,date} ]
	var db_path = "./Users/" + req.query.user + "/database.json";
	var db_data = [];
	var next_id = 0;	// Always keeps the next id for a possible new message

	try {
		if (!fs.existsSync(db_path)) {
			fs.writeFileSync(db_path, JSON.stringify(db_data));
		} else {
			db_data = JSON.parse(fs.readFileSync(db_path));
			for (el of db_data) {
				next_id = Math.max(next_id, el.id);
			}
			next_id += 1;
        }

		if (req.query.operation === "get_all") {
			// Return list of all messages
			res.json({ error:false,data:db_data });
		}
		if (req.query.operation === "get_new") {
			// Return list of all new messages messages
			var temp = [];
			for (el of db_data) {
				if (el.id > parseInt(req.query.id)) {
					temp.push(el);
                }
			}
			res.json({ error: false, data: temp });
		}

		if (req.session.user.name === req.query.user) {
			// Operation requested by owner
			if (req.query.operation === "delete") {
				// Delete message
				for (var i = 0; i < db_data.length; i++) {
					var el = db_data[i];
					if (el.id === parseInt(req.query.id)) {
						db_data.splice(i, 1);
					}
				}
				res.json({ error: false });
			}

			if (req.query.operation === "insert") {
				// Return list of all messages
				var title = req.query.title;
				var text = req.query.text;
				var img = req.query.img;
				var entry = { id: next_id, title: title, text: text, img: img, date: (new Date()).toLocaleDateString('en-GB') };
				db_data.push(entry);
				res.json({ error: false, data: entry });
			}
		}

		// Save changes made
		fs.writeFileSync(db_path, JSON.stringify(db_data));
	} catch (e) {
		res.json({ error:true, message: e });
	}

	// In case something was wrong. 
	res.json({ error:true, message: "unknwon" });
});

module.exports = router;
