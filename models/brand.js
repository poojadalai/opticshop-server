"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      brand.hasMany(models.product);
    }
  }
  brand.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      desc: { type: DataTypes.TEXT, allowNull: false },
    },

    {
      sequelize,
      modelName: "brand",
    }
  );
  return brand;
};
