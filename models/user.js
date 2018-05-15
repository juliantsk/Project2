// Dependencies
// =============================================================

var bcrypt = require("bcrypt-nodejs");
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Grocery" model that matches up with DB
var User = sequelize.define("user", {
    local: {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    },
    facebook: {
        id: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
    },
    twitter: {
        id: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        },
        displayName: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
    },
    google: {
        id: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
    },
}, {
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword(password) {
            return bcrypt.compareSync(password, this.local.password);
        }
    }
   
});
User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.List, {
      onDelete: "cascade"
    });
    return User
  };



// generates a hash
// Syncs with DB
User.sync();

// Makes the Grocery Model available for other files (will also create a table)
module.exports = User;