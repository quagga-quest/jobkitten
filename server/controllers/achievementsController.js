const achievementsController = {};
const db = require('../models/JobsModel');

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

module.exports = achievementsController;