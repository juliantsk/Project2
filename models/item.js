// Creates a "Item" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("item", {
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
    Item.associate = function(models) {
        // We're saying that a Item should belong to an Author
        // A Item can't be created without an Item due to the foreign key constraint
        Item.hasMany(models.list, {
            foreignKey: {
                allowNull: false
            },
        });
    };
    return Item;
};