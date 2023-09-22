const router = require('express').Router();
const { Shopping, Weather, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    res.render('home');
  })