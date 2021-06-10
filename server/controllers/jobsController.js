const jobsController = {};
const db = require('../models/dbModel');

// middleware to retrieve all existing jobs from database and send back to client as JSON
jobsController.getAllJobs = async (req, res, next) => {
  // adjust these as necessary
  // const user_id = [ req.body.user_id ];
  const user_id = req.params.user_id;
  const getJobsQuery = `SELECT * FROM Jobs WHERE user_id = ${user_id}`;
  try {
    // res.locals.response = await db.query(getJobsQuery);
    // values returned from db query get stored in the property 'rows' of response, therefore we need those rows in res.locals.response
    const jobs = await db.query(getJobsQuery);
    res.locals.response = jobs.rows;
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

jobsController.getOneJob = async (req, res, next) => {
  const job_id = [ req.params.job_id ];
  const getJobQuery = '';

  // return entire job requested
};

// middleware to create new job in database
jobsController.postJob = async (req, res, next) => {
  const { job_title, company, job_posting, status } = req.body;
  const bodyProps = [job_title, company, job_posting, status];

  const postJobQuery = `INSERT INTO Jobs (user_id, job_title, company, job_posting, status) VALUES (${req.params.user_id}, $1, $2, $3, $4) RETURNING job_id;`
  
  try {
    
    // return the new job as the response; fill in job_posting below
    // res.locals.response = await db.query('SELECT * FROM Jobs WHERE Jobs.job_posting = ');
    
    const newJob = await db.query(postJobQuery, bodyProps);
    res.locals.job = newJob.rows;

    // res.locals.numberOfJobs 
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to update an existing job in database
jobsController.updateJob = async (req, res, next) => {
  // fill these in once we have a better sense of what we need
  const updatingJob = [ req.params.job_id ];
  // do something w/ the task to be updated, from req.body, here -- will need both key (task column) AND value (actual value for updating)
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

jobsController.updateJobStatus = async (req, res, next) => {
  // check to see if job's status needs to be changed, based on task updates above
};

// middleware to delete an existing job based on job_id
jobsController.deleteJob = async (req, res, next) => {
  // adjust these as necessary
  // const job_id = [ req.params.job_id ];
  const deleteJobQuery = `DELETE FROM Jobs WHERE Jobs.job_id = ${req.params.job_id}`;

  try {
    await db.query(deleteJobQuery);
    res.locals.response = `Deleted job ${req.params.job_id}`;
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

module.exports = jobsController;