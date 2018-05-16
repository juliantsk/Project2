// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Item" model that matches up with DB
var Item = sequelize.define("item", {
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
Item.sync();

// Makes the Item Model available for other files (will also create a table)
module.exports = Item;