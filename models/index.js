const User = require("./user");
const Customize = require("./customize");

const Product = require("./Product");
User.hasOne(Customize, {
  foreignKey: "user_id",
});

Customize.belongsTo(User, {
  foreignKey: "user_id",
});

Customize.hasMany(Product, {
  foreignKey: "customize_id",
});

// Example: Product belongs to Customize
Product.belongsTo(Customize, {
  foreignKey: "customize_id",
});

module.exports = { User, Customize, Product };
