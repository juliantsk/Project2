<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("list", {
        name: {
            type: DataTypes.STRING
        },
        user: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        }
    });
    List.associate = function(models) {
        // We're saying that a List should belong to an Author
        // A List can't be created without an List due to the foreign key constraint
        List.hasMany(models.user, {
            foreignKey: {
                allowNull: false
            },
        });
        List.hasMany(models.item, {
            foreignKey: {
                allowNull: false
            },
        });
    };
    return List
};
=======
// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
// Sequelize (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Grocery" model that matches up with DB
var List = sequelize.define("List", {
    name_of_list: {
        type: DataTypes.STRING
    },
    user: {
        type:DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    }
});
List.associate = function(models) {
    // We're saying that a List should belong to an user
   
    List.hasMany(models.Item, {
      foreignKey: {
        allowNull: false
      },
    });
    // List.hasMany(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     },
    //   });
    
  };
  return List
}

// Syncs with DB
//List.sync();

// Makes the Grocery Model available for other files (will also create a table)
//module.exports = List;
>>>>>>> master
