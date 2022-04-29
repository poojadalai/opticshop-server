"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      address.belongsTo(models.user);
      address.hasMany(models.order)
    }
  }
  address.init(
    {
     
      company: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      zipcode: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
     
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};
