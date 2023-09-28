const router = require("express").Router();
const userRoutes = require("./userRoutes");
const weatherRoutes = require("./weatherRoutes");
// const shoppingRoutes = require('./shoppingRoutes');
const customRoutes = require("./customRoutes");

router.use("/user", userRoutes);
router.use("/weather", weatherRoutes);
// router.use('/shopping', shoppingRoutes);
router.use("/customize", customRoutes);

module.exports = router;
