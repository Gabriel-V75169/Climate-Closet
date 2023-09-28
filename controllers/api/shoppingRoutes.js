const router = require("express").Router();
const { Product, Customize } = require("../../models");
const axios = require("axios");

// Helper function to extract season information from weather data.
/*function determineSeasonFromTemperature(temperature) {
  if (temperature < 60) {
    return "winter";
  } else if (temperature >= 60 && temperature <= 78) {
    return "fall";
  } else {
    return "summer";
  }
}*/

function extractSeasonFromWeather(weatherData) {
  return weatherData.season || "unknown";
}

router.get("/shopping", async (req, res) => {
  try {
    // Ensure products are seeded before querying.
    await seedProducts();

    // Get the gender and suggested location from the user input.
    const gender = req.query.gender;
    const suggestedLocation = req.query.suggestedLocation; // Adjust the query parameter name as needed.

    // Fetch products based on gender.
    const suggestedProducts = await Product.findAll({
      where: {
        gender: gender.toLowerCase(), // Assuming gender is stored in lowercase in the database.
      },
    });

    // You can also consider fetching user customization data if available.
    const userId = req.query.userId; // Assuming userId is provided in the query parameters.

    if (userId) {
      const userCustomization = await Customize.findOne({
        where: {
          user_id: userId,
        },
      });

      // If user customization is available, fetch weather data and filter suggested products.
      if (userCustomization) {
        const { style } = userCustomization;

        // Use the suggested location from user customization.
        const location = suggestedLocation || "Sacramento"; // If no suggested location, use a default.

        // Fetch weather data from the API.
        const accessKey = process.env.WEATHER_ACCESS_KEY;
        const params = {
          access_key: accessKey,
          query: location,
        };
        const apiResponse = await axios.get(
          "http://api.weatherstack.com/current",
          { params }
        );

        // Extract relevant weather information (e.g., season) from the API response.
        const season = extractSeasonFromWeather(apiResponse.data);

        // Use the season information to filter suggested products.
        const filteredProducts = await Product.findAll({
          where: {
            gender: gender.toLowerCase(),
            season: season.toLowerCase(),
            [sequelize.literal('LOWER("style") LIKE LOWER(?)', [`%${style}%`])]:
              sequelize.literal('"style" IS NOT NULL'),
          },
        });

        res.json({
          suggestedProducts: filteredProducts,
          weather: apiResponse.data,
        });
      } else {
        // No customization, return the initially suggested products.
        res.json({ suggestedProducts, weather: null });
      }
    } else {
      // No userId provided, return the initially suggested products.
      res.json({ suggestedProducts, weather: null });
    }
  } catch (error) {
    console.error("Error fetching suggested products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
