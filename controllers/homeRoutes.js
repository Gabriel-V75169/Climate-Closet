const router = require("express").Router();
const { Customize, User, Product } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Customize, attributes: ["gender", "season"] }],
    });
    const user = userData.get({ plain: true });

    // const customData = await Customize.findAll();
    // const custom = customData.get({ plain: true });
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/outfits', withAuth, async (req, res) => {
//   try {
//      const customData = await Customize.findAll();
//      const custom = customData.get({ plain: true });
//      res.render('outfits', {
//       ...custom,
//       logged_in: true
//      });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/customize", withAuth, async (req, res) => {
  try {
    const customData = await Customize.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const custom = customData.get({ plain: true });
    res.render("customize", {
      ...custom,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/product-suggestions", async (req, res) => {
  try {
    const { gender, season } = req.query;
    const products = await Product.findAll({
      where: {
        gender,
        season,
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching product suggestions", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
