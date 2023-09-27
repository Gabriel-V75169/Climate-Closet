// Define an array of category data
const { Category } = require("../models");
const categoriesData = [
  { category_name: "Male Summer", gender: "male" },
  { category_name: "Male Winter", gender: "male" },
  { category_name: "Male Fall", gender: "male" },
  { category_name: "Female Summer", gender: "female" },
  { category_name: "Female Winter", gender: "female" },
  { category_name: "Female Fall", gender: "female" },
];

const seedCategories = () => Category.bulkCreate(categoriesData);

module.exports = seedCategories;
