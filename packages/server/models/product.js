"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: models.Product_Category,
        foreignKey: "id_product",
      });

      Product.hasMany(models.Product_Img, {
        foreignKey: "id_product",
      });
      Product.hasMany(models.Product_Cart, { foreignKey: "id_cart" });
      Product.hasMany(models.Product_Order, { foreignKey: "id_order" });
      Product.hasOne(models.Product_Stock, { foreignKey: "id" });
      Product.hasOne(models.Product_Description, { foreignKey: "id" });
    }
  }
  Product.init(
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      img_product: DataTypes.STRING,
      price: DataTypes.INTEGER,
      id_product_description: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
