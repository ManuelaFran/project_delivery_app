module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'users',
      }
    );
  
    User.associate = (models) => {
      User.hasMany(models.Sale, {
        as: 'users',
        foreignKey: 'user_id',
      });

      User.hasMany(models.Sale, {
        as: 'sallers',
        foreignKey: 'seller_id',
      });
    };
    
    return User;
  };
  