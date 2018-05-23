// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var passport = require("../config/passport");


// Routes
// =============================================================
module.exports = function(app, passport) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        res.render("index");
    });

    // show the login form
    // app.get("/login", function(req, res) {
    //     res.render("login", { message: req.flash("loginMessage") });
    // });



    // show the signup form
    // app.get("/signup", function(req, res) {
    //     res.render("signup", { message: req.flash("signupMessage") });
    // });

    // show the user's list and information
    //     app.get("/list", isLoggedIn, function(req, res) {
    //         res.render("list", {
    //             user: req.user
    //         });
    //     });
    // };


    // function isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated()) {
    //         return next();
    //     }
    //     res.redirect("/");
};