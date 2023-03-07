"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: "seller_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: "total_price",
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "delivery_address",
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "delivery_number",
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "sale_date",
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
