// Dependencies
// =============================================================

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
            len: [1]
        },
        last_name: {
            type: DataTypes.STRING,
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