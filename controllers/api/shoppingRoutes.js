const router = require("express").Router();
const {User, Customize } = require("../../models");
require("dotenv").config(); // Load environment variables from .env file
const withAuth = require("")

const eBay = require("ebay-node-api");

const appId = process.env.EBAY_APP_ID;
const certId = process.env.EBAY_CERT_ID;
const devId = process.env.EBAY_DEV_ID;

const ebay = new eBay({
  appId,
  certId,
  devId,
});

router.get("/" ,withAuth, async (req,res) =>{
   try {
    //retrieve all user id
    const UserId = req.user.id; 
   }
})

module.exports = router;
