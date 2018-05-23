module.exports = function(sequelize, DataTypes) {
UserList = sequelize.define('UserList', {
  UserList: {
    type: DataTypes.STRING,
      allowNull: true,
    }
  });

  UserList.associate = function(models){
    models.User.belongsToMany(models.List, { through: UserList });
    models.List.belongsToMany(models.User, { through: UserList });

  }
 


  return UserList
}