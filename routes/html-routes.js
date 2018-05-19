// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        res.render("index");
    });

    // show the login form
    app.get("/index", function(req, res) {
        res.render("login", { message: req.flash("loginMessage") });
    });

    app.get("/list", function(req, res) {
        res.render("login", { message: req.flash("loginMessage") });
    });

    // process the login form
    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/profile",
        failureRedirect: "/login",
        failureFlash: true
    }));


    // show the signup form
    app.get("/signup", function(req, res) {
        res.render("signup", { message: req.flash("signupMessage") });
    });


    // process the signup form
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/profile",
        failureRedirect: "/signup",
        failureFlash: true
    }));

    // show the user's list and information
    app.get("/profile", isLoggedIn, function(req, res) {
        res.render("profile", {
            user: req.user
        });
    });
};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
};