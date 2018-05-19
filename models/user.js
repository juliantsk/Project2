// Dependencies
// =============================================================
<<<<<<< HEAD
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    // Creates a "User" model that matches up with DB
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    }, {
        instanceMethods: {
            // // generates a hash
            generateHash(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
            validPassword(password) {
                return bcrypt.compareSync(password, this.local.password);
            }
        }
    });
=======
module.exports = function(sequelize, DataTypes) {
//var bcrypt = require("bcrypt-nodejs");
// Sequelize (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Grocery" model that matches up with DB
var User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    User.associate = function(models) {
     
      
      User.hasMany(models.List, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return User;
  };


>>>>>>> master

    User.associate = function(models) {


        User.hasMany(models.List, {
            foreignKey: {
                allowNull: false
            }
        });
    };

<<<<<<< HEAD
    return User;
};
=======
// // Makes the Grocery Model available for other files (will also create a table)
// //module.exports = User;
>>>>>>> master
