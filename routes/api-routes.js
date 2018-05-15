// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var List = require("../models/list.js");

// Routes
// =============================================================
module.exports = function(app) {
    // Get all groceries, for all users
    app.get("/api/all", function(req, res) {
        List.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    // Get a specific list
    app.get("/api/:user/:book", function(req, res) {
        List.findAll({
            where: {
                name: req.params.list
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Get all groceries of a specific category
    app.get("/api/category/:category", function(req, res) {
        List.findAll({
            where: {
                genre: req.params.genre
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Add a list
    app.post("/api/new", function(req, res) {
        console.log("List Data:");
        console.log(req.body);
        List.create({
            name: req.body.name,
            user: req.body.user,
            category: req.body.category,
        });
    });

    // Delete a list
    app.post("/api/delete", function(req, res) {
        console.log("List Data:");
        console.log(req.body);
        List.destroy({
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