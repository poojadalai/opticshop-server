"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderProduct.belongsTo(models.product);
      orderProduct.belongsTo(models.order);
    }
  }
  orderProduct.init(
    {
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "orderProduct",
    }
  );
  return orderProduct;
};
