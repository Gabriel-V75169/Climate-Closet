const router = require('express').Router();
const { Customize, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) =>{
    res.render('home');
  })

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });

  router.get('/profile', withAuth, async (req, res) =>{
    res.render('profile');
  })

router.get('/customize', withAuth, (req,res) =>{
  res.render('customize');
})

  module.exports = router;