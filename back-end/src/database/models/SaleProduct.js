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
    SaleProduct.belongsTo(models.Sales, {
      as: "sale",
      foreignKey: "saleId",
    });

    SaleProduct.belongsTo(models.product, {
        as: "product",
        foreignKey: "productId",
    })
  };

  return SaleProduct;
};
