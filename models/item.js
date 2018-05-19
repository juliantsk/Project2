module.exports = function(sequelize, DataTypes) {
    // Creates a "Item" model that matches up with DB
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