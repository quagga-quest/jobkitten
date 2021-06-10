const express = require('express');
const achievementsController = require('../controllers/achievementsController');

const jobsController = require('../controllers/jobsController');
const userController = require('../controllers/userController');

const router = express.Router();

// route handler for viewing all jobs
router.get('/:user_id', jobsController.getAllJobs, (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).json(res.locals.response);
});

// route handler for viewing a single job that's been clicked on
router.get('/:user_id/:job_id', jobsController.getOneJob, (req, res) => {
  res.status(200).json({});
});

// route handler for adding a new job
router.post('/add/:user_id', jobsController.postJob, 
// userController.updateUser, achievementsController.checkAchievements, achievementsController.addAchievement, 
(req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.status(200).json(res.locals.job);
});

// route handler for updating an existing job
router.put('/update/:job_id', jobsController.updateJob, jobsController.updateJobStatus, userController.updateUser, achievementsController.checkAchievements, achievementsController.addAchievement, (req, res) => {
  res.status(200).json({});
});

// route handler for removing an existing job
router.delete('/remove/:job_id', jobsController.deleteJob, (req, res) => {
  res.status(200).json(res.locals.response);
});

module.exports = router;