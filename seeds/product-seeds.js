const Product = require("./models/Product");

const productsData = [
  // Male products
  {
    product_name: "Male Summer T-Shirt 1",
    price: 19.99,
    stock: 30,
    season: "summer",
    gender: "male",
    image_url: "path/to/male_summer_tshirt_1_image.jpg",
    category_id: 1, // ID 1 for male summer items
  },
  {
    product_name: "Male Summer Shorts 1",
    price: 29.99,
    stock: 20,
    season: "summer",
    gender: "male",
    image_url: "path/to/male_summer_shorts_1_image.jpg",
    category_id: 1,
  },
  {
    product_name: "Male Winter Jacket 1",
    price: 79.99,
    stock: 15,
    season: "winter",
    gender: "male",
    image_url: "path/to/male_winter_jacket_1_image.jpg",
    category_id: 2, // category with ID 2 for male winter items
  },
  {
    product_name: "Male Winter Pants 1",
    price: 39.99,
    stock: 25,
    season: "winter",
    gender: "male",
    image_url: "path/to/male_winter_pants_1_image.jpg",
    category_id: 2,
  },
  {
    product_name: "Male Fall Sweater 1",
    price: 49.99,
    stock: 20,
    season: "fall",
    gender: "male",
    image_url: "path/to/male_fall_sweater_1_image.jpg",
    category_id: 3, // category with ID 3 for male fall items
  },

  // Female products
  {
    product_name: "Female Summer Dress 1",
    price: 59.99,
    stock: 25,
    season: "summer",
    gender: "female",
    image_url: "path/to/female_summer_dress_1_image.jpg",
    category_id: 4, //category with ID 4 for female summer items
  },
  {
    product_name: "Female Summer Sandals 1",
    price: 49.99,
    stock: 20,
    season: "summer",
    gender: "female",
    image_url: "path/to/female_summer_sandals_1_image.jpg",
    category_id: 4,
  },
  {
    product_name: "Female Winter Coat 1",
    price: 99.99,
    stock: 10,
    season: "winter",
    gender: "female",
    image_url: "path/to/female_winter_coat_1_image.jpg",
    category_id: 5, //  ID 5 for female winter items
  },
  {
    product_name: "Female Winter Boots 1",
    price: 69.99,
    stock: 15,
    season: "winter",
    gender: "female",
    image_url: "path/to/female_winter_boots_1_image.jpg",
    category_id: 5,
  },
  {
    product_name: "Female Fall Cardigan 1",
    price: 39.99,
    stock: 30,
    season: "fall",
    gender: "female",
    image_url: "path/to/female_fall_cardigan_1_image.jpg",
    category_id: 6, // category with ID 6 for female fall items
  },
];

const seedProducts = () => Product.bulkCreate(productsData);

module.exports = seedProducts;
