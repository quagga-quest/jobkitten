const express = require('express');
const achievementsController = require('../controllers/achievementsController');

const jobsController = require('../controllers/jobsController');
const userController = require('../controllers/userController');

const router = express.Router();

// route handler for viewing all jobs
router.get('/', jobsController.getJobs, (req, res) => {
  res.status(200).json({});
});

// route handler for adding a new job
router.post('/add', userController.updateUser, achievementsController.checkAchievements, achievementsController.addAchievement, (req, res) => {
  res.status(200).json({});
});

// route handler for updating an existing job
router.put('/update', userController.updateUser, achievementsController.checkAchievements, achievementsController.addAchievement, (req, res) => {
  res.status(200).json({});
});

// route handler for removing an existing job
router.delete('/remove', (req, res) => {
  res.status(200).json({});
});

module.exports = router;