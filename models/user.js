module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE
        }
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
        User.hasMany(models.list, {
            onDelete: "cascade"
        });
    };
    return User
};