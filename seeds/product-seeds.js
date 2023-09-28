const Product = require("../models/Product");

const productsData = [
  // Male products
  {
    product_name: "Male Summer T-Shirt 1",
    price: 19.99,
    stock: 30,
    season: "summer",
    gender: "male",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695914745/summer_male_tshirt_a06iw2.jpg",
    //category_id: 1, // ID 1 for male summer items
  },
  {
    product_name: "Male Summer Shorts 1",
    price: 29.99,
    stock: 20,
    season: "summer",
    gender: "male",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695914609/male_summer_shorta_cujxpf.avif",
    //category_id: 1,
  },
  {
    product_name: "Male Winter Jacket 1",
    price: 79.99,
    stock: 15,
    season: "winter",
    gender: "male",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915263/male_winter_jacket_qqg9qe.jpg",
    //category_id: 2, // category with ID 2 for male winter items
  },
  {
    product_name: "Male Winter Pants 1",
    price: 39.99,
    stock: 25,
    season: "winter",
    gender: "male",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915268/winter_male_pants_blnt9p.webp",
    //category_id: 2,
  },
  {
    product_name: "Male Fall Sweater 1",
    price: 49.99,
    stock: 20,
    season: "fall",
    gender: "male",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695914924/male_fall_sweater_gwdv0d.webp",
    //category_id: 3, // category with ID 3 for male fall items
  },

  // Female products
  {
    product_name: "Female Summer Dress 1",
    price: 59.99,
    stock: 25,
    season: "summer",
    gender: "female",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915269/women_summer_dress_h0qh8o.webp",
    //category_id: 4, //category with ID 4 for female summer items
  },
  {
    product_name: "Female Summer Sandals 1",
    price: 49.99,
    stock: 20,
    season: "summer",
    gender: "female",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915265/summer_women_sandal_fjtskp.webp",
    //category_id: 4,
  },
  {
    product_name: "Female Winter Coat 1",
    price: 99.99,
    stock: 10,
    season: "winter",
    gender: "female",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915266/winter_boots_women_fywmse.webp",
    // category_id: 5, //  ID 5 for female winter items
  },
  {
    product_name: "Female Winter Boots 1",
    price: 69.99,
    stock: 15,
    season: "winter",
    gender: "female",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915266/winter_boots_women_fywmse.webp",
    //category_id: 5,
  },
  {
    product_name: "Female Fall Cardigan 1",
    price: 39.99,
    stock: 30,
    season: "fall",
    gender: "female",
    image_url:
      "https://res.cloudinary.com/dxedmyohg/image/upload/v1695915261/fall_cardigan_p22qva.webp",
    // category_id: 6, // category with ID 6 for female fall items
  },
];
const seedProducts = async () => {
  try {
    await Product.sync({ force: true }); // This will drop the table and recreate it
    await Product.bulkCreate(productsData);
    console.log("Products seeded successfully");
  } catch (error) {
    console.error("Error seeding products", error);
  }
};

module.exports = seedProducts;
