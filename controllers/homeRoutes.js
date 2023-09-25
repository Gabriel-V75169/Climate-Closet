const router = require('express').Router();
const { Customize, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) =>{
    res.render('home');
  })

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  router.get('/profile', async (req, res) =>{
    res.render('profile');
  })

router.get('/customize', (req,res) =>{
  res.render('customize');
})

  module.exports = router;