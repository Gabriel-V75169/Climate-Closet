const router = require("express").Router();
const axios = require("axios");

const params = {
  access_key: "d9811cfed9b9febb1511db8f165bf5d2",
  query: "New York",
};

axios
  .get("https://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;
    console.log(
      `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
    );
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = router;
