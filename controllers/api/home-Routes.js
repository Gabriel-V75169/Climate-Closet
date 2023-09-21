const router = require('express').Router();

router.get('/homepage', async (req, res) =>{
    res.render('home');
  })