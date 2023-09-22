const router = require("express").Router();
const { weather } = require("../../models");
const axios = require("axios");
require('dotenv').config();

  router.get("/",async(req,res)=>{
    try{
        console.log('Testing')
        const accessKey = process.env.WEATHER_ACCESS_KEY;
        const params = {
            access_key: accessKey,
            query: "New York",
          };
        const apiResponse = await axios.get("http://api.weatherstack.com/current", { params })
        console.log(apiResponse.data)
        res.json(apiResponse.data)
    }  catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;

