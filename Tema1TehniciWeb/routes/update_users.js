var express = require('express');
var session = require('express-session');
var tools = require("../tools");
var login = require("./login");
var fs = require('fs');
var debug = require("debug")("UpdateUsers");

var router = express.Router();


router.get('/', function (req, res) {
    if (!req.session.user.security.admin && !req.session.user.security.normal) throw new Error('BROKEN');
    if (tools.isBlocked(req.session.user.name)) throw new Error('BROKEN');


    if (req.query.page === "users") {
        if (req.session.user.security.admin) {
            if (req.query.operation === "block") {
                if ((user = tools.getUser(req.query.user))) {
                    user.blocked = !user.blocked;
                    res.send(user.blocked ? "Unblock" : "Block");
                }
            }
            if (req.query.operation === "reset") {
                if ((user = tools.getUser(req.query.user))) {
                    user.pass = req.query.pass;
                    res.send("Password changed");
                }
            }
            if (req.query.operation === "delete") {
                for (var i = 0; i < tools.users.length; i++) {
                    var el = tools.users[i];
                    if (el.name === req.query.user) {
                        tools.users.splice(i, 1);
                    }
                }
                res.send("User deleted");
            }

            if (req.query.operation === "add") {
                if (tools.getUser(req.query.user) === null) {
                    // Create folder for this user
                    var dir = './Users/' + req.query.user;

                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir);
                    }

                    tools.users.push({ name: req.query.user, pass: "0000", status: "normal", blocked: false });//{ name: "test", pass: "test", status: "admin", blocked: false },
                    res.send("User added");

                } else {
                    res.send("User already exists with this name");
                }
            }
        } else {
            res.send("Not enough permissions");
            return;
        }
    } else {
        var username = req.session.user.name;

        if (req.query.operation === "reset") {
            if ((user = tools.getUser(username))) {
                user.pass = req.query.pass;
                res.send("Password changed");
            }
        }
        if (req.query.operation === "delete") {
            for (var i = 0; i < tools.users.length; i++) {
                var el = tools.users[i];
                if (el.name === username) {
                    tools.users.splice(i, 1);
                    res.ssend("User deleted");
                    break;
                }
            }
        }
        if (req.query.operation === "rename") {
            if ((user = tools.getUser(username))) {
                user.name = req.query.user;
                res.send("User renamed");
            }
        }
    }

    tools.syncDatabase();

});

module.exports = router;
