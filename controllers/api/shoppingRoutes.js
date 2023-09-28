// const router = require("express").Router();
// const { Product, Customize } = require("../../models");
// const axios = require("axios");

// router.get("/shopping", async (req, res) => {
//   try {
//     // Ensure products are seeded before querying.
//     await seedProducts();

//     // Get the gender and suggested location from the user input.
//     const gender = req.query.gender;
//     const season = req.query.season;

//     // Fetch products based on gender.
//     const suggestedProducts = await Product.findAll({
//       where: {
//         gender: gender.toLowerCase(),
//         season: season.toLowerCase(), // Assuming gender is stored in lowercase in the database.
//       },
//     });
//     res.json({
//       suggestedProducts,
//     });
//   } catch (error) {
//     console.error("Error fetching suggested products:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;
