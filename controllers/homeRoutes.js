const router = require("express").Router();
const { Customize, User, Product } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all customize requests and JOIN with user data
    const customData = await Customize.findAll({
      include: [
        {
          model: User,

          attributes: ["name"],
        },
        // {
        //   model: Customize,
        //   attributes: ['location','gender','style']
        // },
      ],
    });

    // Serialize data so the template can read it
    const customize = customData.map((customize) =>
      customize.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("home", {
      customize,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/customize/:id", async (req, res) => {
  try {
    const customData = await Customize.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Customize,
          attributes: ["location", "gender", "style"],
        },
      ],
    });

    const search = customData.get({ plain: true });

    res.render("home", {
      ...search,
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
      include: [
        { model: Customize, attributes: ["location", "gender", "style"] },
      ],
    });
    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Ensure products are seeded before querying.
    await seedProducts();

    // Fetch user profile and product suggestions based on user preferences
    const userProfile = await profile.findOne({
      where: { userId },
      attributes: ["gender", "season"],
    });

    if (!userProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    const { gender, season } = userProfile;

    // Fetch product suggestions based on user preferences
    const suggestedProducts = await Product.findAll({
      where: {
        gender: gender.toLowerCase(),
        season: season.toLowerCase(),
      },
    });

    // Retrieve user name from local storage
    const userName = req.headers["name"]; // Replace with the actual header name containing user name

    // Render the profile page with the suggested products and user name
    res.render("profile", {
      name: userName || "User's Name", // Use retrieved user name or fallback to a default name
      suggestedProducts,
    });
  } catch (error) {
    console.error("Error rendering profile page:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
