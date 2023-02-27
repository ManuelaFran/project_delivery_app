module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      sellerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(9.2),
      },
      deliveryAddress: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      deliveryNumber: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      saleDate: {
        allowNull: false, 
        type: DataTypes.DATE,
      },
      status: {
        allowNull: false, 
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });

    Sale.belongsTo(models.User, {
      as: "seller",
      foreignKey: "sellerId",
    });

    Sale.belongsToMany(models.Product, {
      through: "SaleProduct",
      as: "products",
      foreignKey: "saleId",
    });
  };

  return BlogPost;
};
