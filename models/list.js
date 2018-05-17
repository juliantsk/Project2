module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("List", {
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
        List.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
        List.hasMany(models.Item, {
            foreignKey: {
                allowNull: false
            },
        });
    };
    return List
};