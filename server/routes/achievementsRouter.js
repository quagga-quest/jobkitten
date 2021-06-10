const express = require('express');

const achievementsController = require('../controllers/achievementsController');

const router = express.Router();

// route handler for viewing all achievements
router.get('/:user_id', achievementsController.getAchievements, (req, res) => {
  res.status(200).json(res.locals.response);
});

module.exports = router;