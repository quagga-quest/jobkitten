const express = require('express');

const jobsController = require('../controllers/jobsController');

const router = express.Router();

// route handler for viewing all jobs
router.get('/', jobsController.getJobs, (req, res) => {
  res.status(200).json({});
});

// route handler for adding a new job
router.post('/add', (req, res) => {
  res.status(200).json({});
});

// route handler for updating an existing job
router.put('/update', (req, res) => {
  res.status(200).json({});
});

// route handler for removing an existing job
router.delete('/remove', (req, res) => {
  res.status(200).json({});
});

module.exports = router;