const router = require('express').Router();
const { Customize, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    // Get all customize requests and JOIN with user data
    const customData = await Customize.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const customize = customData.map((customize) => customize.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', { 
      customize, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/customize/:id', async (req, res) => {
  try {
    const customData = await Customize.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Customize,
          attributes: ['location','gender','style']
        },
      ],
    });

    const search = customData.get({ plain: true });

    res.render('home', {
      ...search,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });

  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Customize }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/customize', withAuth, (req,res) =>{
  res.render('customize');
})

  module.exports = router;