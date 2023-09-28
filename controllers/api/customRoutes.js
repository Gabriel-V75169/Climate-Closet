const router = require('express').Router();
const { Customize } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    try {
      const newCustom = await Customize.update({
        ...req.body,
        user_id:req.session.user_id,
      },
      );
      res.status(200).json(newCustom);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;