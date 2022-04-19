"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      form: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      materialFrame: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      materialLens: {
        type: Sequelize.STRING,
      },
      lensColor: {
        type: Sequelize.STRING,
      },
      frameColor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: "brands",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
