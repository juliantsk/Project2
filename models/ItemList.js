module.exports = function(sequelize, DataTypes) {
    ItemList = sequelize.define('ItemList', {
      UserList: {
        type: DataTypes.STRING,
          allowNull: false,
        }
      });
    
      ItemList.associate = function(models){
        models.Item.belongsToMany(models.List, { through: UserList });
        models.List.belongsToMany(models.Item, { through: UserList });
    
      }
     
    
    
      return ItemList
    }