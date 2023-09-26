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

router.get("/search" ,withAuth, async (req,res) => {
   try {
    //Retrieve  user id
    const userId = req.user.id; 
    // Retrieve the logged-in user's style preference from the database
    const customization = await Customize.findOne({
      where: { userId },
   });
    if (!customization) {
    return res.status(404).json({ message: "Customization not found" });
    } 
     // Use the user's style and gender preferences as keywords for eBay API search
    const keywords = `${customization.style} ${customization.gender}`;

    // Customize the eBay API request with the user's keywords
    const ebayResponse = await ebay.findItemsAdvanced({ keywords });
}
});

module.exports = router;
