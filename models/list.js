// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Grocery" model that matches up with DB
var List = sequelize.define("List", {
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
List.associate = function(models) {
    // We're saying that a List should belong to an Author
    // A List can't be created without an List due to the foreign key constraint
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
    });
    List.hasMany(models.Item, {
        foreignKey: {
          allowNull: false
        },
      });
    return List
  };

// Syncs with DB
List.sync();

// Makes the Grocery Model available for other files (will also create a table)
module.exports = List;