const express = require('express');

const achievementsController = require('../controllers/achievementsController');

const router = express.Router();

// route handler for viewing all achievements
router.get('/', achievementsController.getAchievements, (req, res) => {
  res.status(200).json({});
});

module.exports = router;