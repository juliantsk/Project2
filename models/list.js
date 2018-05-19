// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
    // Creates a "List" model that matches up with DB
    var List = sequelize.define("List", {
        name_of_list: {
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