const achievementsController = {};
const db = require('../models/dbModel');

// middleware for retrieving all achievements from database
achievementsController.getAchievements = async (req, res, next) => {
  // adjust these as necessary
  const user_id = [ req.body.user_id ];
  const getAchievementsQuery = 'SELECT * FROM Achievements WHERE Achievements.user_id = $1';

  try {
    res.locals.response = await db.query(getAchievementsQuery, user_id);
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to check whether a user update has triggered a new achievement
achievementsController.checkAchievements = async (req, res, next) => {
  // check all relevant user metadata to see if any new achievements have been triggered
  // if they have...pass something along to addAchievement to create new achievement
};

// middleware to create new achievement if triggered
achievementsController.addAchievement = async (req, res, next) => {
  // check for flag from checkAchievements to see if any new achievements have been triggered
  // if they have...make INSERT query into Achievements table, passing in user id and appropriate achievement type
  // pass along new achievement in response
};

module.exports = achievementsController;