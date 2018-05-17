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