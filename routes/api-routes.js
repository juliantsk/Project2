// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app, passport) {
    // Get all groceries, for all users
    app.get("/api/all", function(req, res) {
        db.List.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    // Get a specific list
    app.get("/api/:user/:list", function(req, res) {
        db.List.findAll({
            where: {
                name: req.params.list
            }
        }).then(function(results) {
            res.json(results);
        });
    });
      // PUT route for updating lists
  app.put("/api/posts", function(req, res) {
    db.List.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbList) {
      res.json(dbList);
    });
  });
     // PUT route for updating items
     app.put("/api/items", function(req, res) {
        db.Item.update(
          req.body.picked_up,
          {
            where: {
            id: req.body.id
            }
          }).then(function(dbItem) {
          res.json(dbItem);
      
        });
      });

      //post route for adding an item
      app.post("/api/items", function(req, res) {
        db.Item.create(req.body).then(function(dbItem) {
          //res.json(dbItem);
        //   console.log(dbItem)
        console.log(dbItem)
       
        res.render("list", {item:[ dbItem]}  )
      
        });
      
      });

    // Get all groceries of a specific category
    app.get("/api/category/:category", function(req, res) {
        db.List.findAll({
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
        db.List.create({
            name: req.body.name,
            user: req.body.user,
            category: req.body.category,
        });
    });

    // Delete an item
    app.post("/api/delete/item", function(req, res) {
        console.log("Item Data:");
        console.log(req.body);
        db.Item.destroy({
            where: {
                id: req.body.id
            }
        });
    });

    // Delete a list
    app.post("/api/delete/list", function(req, res) {
        console.log("list Data:");
        console.log(req.body);
        db.List.destroy({
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