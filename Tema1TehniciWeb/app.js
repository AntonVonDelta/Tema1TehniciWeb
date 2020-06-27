'use strict';
var debug = require("debug")("Homework");
var logger = require("morgan");
var express = require("express");
var session = require('express-session');
var app = express();
var tools = require("./tools");


// Pages loads
var page_index = require("./routes/index");
var page_login = require("./routes/login");
var control_panel = require("./routes/control_panel");
var info_frame_page = require("./routes/info_frame");
var announc_frame_page = require("./routes/announc_frame");
var users_frame_page = require("./routes/users_frame");
var chat_frame_page = require("./routes/mesaje");
var profile_frame_page = require("./routes/profile_frame");
var save_json = require("./routes/save_json");
var update_users = require("./routes/update_users");
var message_handler = require("./routes/message_handler");

try {


    app.use(logger('dev'));
    app.use(express.static("public"));

    // Init sessions
    app.use(session({
        secret: 'SursockBrunelleschi',
        resave: true,
        saveUninitialized: false
    }
    ));

    // Expose session to ejs templates foe easy-access
    app.use(function (req, res, next) {
        if (req.session.user === undefined) {
            req.session.user = {
                name: "guest", security: { admin: false, normal: false, guest: true }
            }
        }
        res.locals.user = req.session.user;
        next();
    });

    // Parse URL-encoded bodies (as sent by HTML forms)
    app.use(express.urlencoded({ extended: true }));

    // Parse JSON bodies (as sent by API clients)
    app.use(express.json());

    // Use page routers
    app.get("/logout", function (req, res) {
        debug("loggin out");
        req.session.user = {
            name: "guest", security: { admin: false, normal: false, guest: true }
        };
        res.redirect('/');
    });
    app.use("/", page_index);
    app.use("/login", page_login);
    app.use("/control_panel", control_panel);
    app.use("/info_frame", info_frame_page);
    app.use("/announc_frame", announc_frame_page);
    app.use("/users_frame", users_frame_page);
    app.use("/mesaje", chat_frame_page);
    app.use("/profile_frame", profile_frame_page);
    app.use("/save_json", save_json);
    app.use("/update_users", update_users);
    app.use("/message_handler", message_handler);

    // Not found!
    app.use(function (req, res, next) {
        res.redirect('/error.html');
    });

    // Error handling
    app.use(function (err, req, res, next) {
        res.redirect('/error.html');
    });

    app.listen(1337);

} catch (e) {
    console.log(e);
}