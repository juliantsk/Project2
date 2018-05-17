// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
// Sequelize (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Item" model that matches up with DB

// type: DataTypes.STRING,
// allowNull: false,
var Item = sequelize.define("Item", {
    name: {
    type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    }
});
return Item
}
// Syncs with DB
// Item.sync();

// // Makes the Item Model available for other files (will also create a table)
// module.exports = Item;