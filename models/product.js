"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.brand);
      product.hasMany(models.image);
    }
  }
  product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      form: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      materialFrame: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      materialLens: {
        type: DataTypes.STRING,
      },
      lensColor: {
        type: DataTypes.STRING,
      },
      frameColor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
