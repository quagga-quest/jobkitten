const express = require('express');
const achievementsController = require('../controllers/achievementsController');

const userController = require('../controllers/userController');

const router = express.Router();

// route handler for creating an account -- NOT CURRENTLY BEING USED
router.post('/signup', (req, res) => {
  res.status(200).json({});
});

// route handler for logging in -- NOT CURRENTLY BEING USED
router.post('/login', (req, res) => {
  res.status(200).json({});
});

router.put('/update', userController.updateUser, achievementsController.checkAchievements, achievementsController.addAchievement, (req, res) => {
  res.status(200).json({});
});

module.exports = router;