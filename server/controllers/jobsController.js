const jobsController = {};
const db = require('../models/JobsModel');

// middleware to retrieve all existing jobs from database and send back to client as JSON
jobsController.getJobs = async (req, res, next) => {
  // adjust these as necessary
  const user_id = [ req.body.user_id ];
  const getJobsQuery = 'SELECT * FROM Jobs WHERE Jobs._id = $1';

  try {
    res.locals.response = await db.query(getJobsQuery, user_id);
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to create new job in database
jobsController.postJob = async (req, res, next) => {
  // adjust these as necessary
  const newJob = [ ...req.body ];
  const postJobQuery = 'INSERT INTO Jobs () VALUES ()';

  try {
    await db.query(postJobQuery, newJob);
    // is the below necessary? what does the front end need me to return?
    res.locals.response = await db.query('SELECT * FROM Jobs');
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to update an existing job in database
jobsController.updateJob = async (req, res, next) => {
  // fill these in once we have a better sense of what we need
  const updatingJob = [];
  const updateJobQuery = '';

  // will need logic here to figure out which attribute is being updated
  // likely putting existing fields in req.params, with new values in req.body

  try {
    await db.query(updateJobQuery, updatingJob);
    // this should likely be the new version of the job that's been updated
    res.locals.response = await db.query();
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to delete an existing job based on job_id
jobsController.deleteJob = async (req, res, next) => {
  // adjust these as necessary
  const job_id = [ req.body.job_id ];
  const deleteJobQuery = 'DELETE FROM Jobs WHERE Jobs._id = $1';

  try {
    await db.query(deleteJobQuery, job_id);
    // is the below necessary? talk to front end
    res.locals.response = await db.query('SELECT * FROM Jobs');
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

module.exports = jobsController;