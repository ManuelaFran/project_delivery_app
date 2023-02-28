module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "products",
    }
  );

  Product.associate = (models) => {
    Product.belongsToMany(models.Sale, {
      through: "SaleProduct",
      as: "sales",
      foreignKey: "productId",
    });
  };

  return Product;
};
