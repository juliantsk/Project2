// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Grocery = require("../models/grocery.js");

// Routes
// =============================================================
module.exports = function(app) {
    // Get all groceries, for all users
    app.get("/api/all", function(req, res) {
        Grocery.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    // Get a specific grocery
    app.get("/api/:user/:book", function(req, res) {
        Grocery.findAll({
            where: {
                name: req.params.grocery
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Get all groceries of a specific category
    app.get("/api/category/:category", function(req, res) {
        Grocery.findAll({
            where: {
                genre: req.params.genre
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Add a grocery
    app.post("/api/new", function(req, res) {
        console.log("Grocery Data:");
        console.log(req.body);
        Grocery.create({
            name: req.body.name,
            user: req.body.user,
            category: req.body.category,
        });
    });

    // Delete a grocery
    app.post("/api/delete", function(req, res) {
        console.log("Grocery Data:");
        console.log(req.body);
        Grocery.destroy({
            where: {
                id: req.body.id
            }
        });
    });

    // Logout
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });
};