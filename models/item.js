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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER
    },
    picked_up: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});
return Item
}
// Syncs with DB
// Item.sync();

// // Makes the Item Model available for other files (will also create a table)
// module.exports = Item;