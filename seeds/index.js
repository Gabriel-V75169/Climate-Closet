const sequelize = require('../config/connection');
const Product = require('../models/Product');
const productData = require('./product-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

// const Category = require('../models/category');
// const categoryData = require('./category-seeds');

// const seedDatabase2 = async () => {
//   await sequelize.sync({ force: true });

//   await Dish.bulkCreate(dishData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase2();