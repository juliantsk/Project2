// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Grocery" model that matches up with DB
var Grocery = sequelize.define("item", {
    name: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    }
});

// Syncs with DB
Grocery.sync();

// Makes the Grocery Model available for other files (will also create a table)
module.exports = Grocery;