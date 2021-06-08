const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// route handler for creating an account
router.post('/signup', (req, res) => {
  res.status(200).json({});
});

// route handler for logging in
router.post('/login', (req, res) => {
  res.status(200).json({});
});

module.exports = router;