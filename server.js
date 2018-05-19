// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//var passport = require("passport");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
var exphbs = require("express-handlebars");
var env = require("dotenv").load();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// read cookies
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// required for passport
// =============================================================
// pass passport for configuration
require('./config/passport')(passport);
// session secret
app.use(session({ secret: 'placeholder', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
// pesistent login sessions
//app.use(passport.session());
app.use(flash());

// Static directory
// =============================================================
app.use(express.static("/public"));

// Routes
// =============================================================
//require("./routes/api-routes.js")(app, passport);
//require("./routes/html-routes.js")(app, passport);

// Read and set environment variables
// =============================================================
require("dotenv").config();

// Handlebars
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");
// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force:true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });