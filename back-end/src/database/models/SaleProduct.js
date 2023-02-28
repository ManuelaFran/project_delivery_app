module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    "SaleProduct",
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "sales_products",
    }
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: "saleId",
      otherKey: "productId",
      as: "products",
    });

    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: "productId",
      otherKey: "saleId",
      as: "sales",
    });
  };

  return SaleProduct;
};
