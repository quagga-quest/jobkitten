const jobsController = {};
const db = require('../models/dbModel');

// middleware to retrieve all existing jobs from database and send back to client as JSON
jobsController.getAllJobs = async (req, res, next) => {
  const user_id = [ req.params.user_id ];
  const getJobsQuery = `SELECT * FROM Jobs WHERE user_id = $1`;
  try {
    const jobs = await db.query(getJobsQuery, user_id);
    res.locals.response = jobs.rows;
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to retrieve one job from database when it's clicked
jobsController.getOneJob = async (req, res, next) => {
  const job_id = [ req.params.job_id ];
  const getJobQuery = 'SELECT * FROM Jobs WHERE job_id = $1';

  try {
    const job = await db.query(getJobQuery, job_id);
    res.locals.response = job.rows[0];
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to create new job in database
jobsController.postJob = async (req, res, next) => {
  const { job_title, company, job_posting, status } = req.body;
  const { user_id } = req.params;
  const bodyProps = [ user_id, job_title, company, job_posting, status ];
  const postJobQuery = `INSERT INTO Jobs (user_id, job_title, company, job_posting, status) VALUES ($1, $2, $3, $4, $5) RETURNING job_id;`
  
  try {
    const newJob = await db.query(postJobQuery, bodyProps);
    res.locals.response = newJob.rows;
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to update an existing job in database
jobsController.updateJob = async (req, res, next) => {
  const job_id = req.params.job_id;
  const updateField = req.body.field;
  const newValue = req.body.value;

  const updateJobQuery = `UPDATE Jobs SET ${updateField}='${newValue}' WHERE job_id = ${job_id} RETURNING *`;
  try {
    const updatedJob = await db.query(updateJobQuery);
    res.locals.response = updatedJob.rows;
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// middleware to update job status, if necessary, after updating a job field
jobsController.updateJobStatus = async (req, res, next) => {
  let { job_id, status, reach_out, resume_link, cover_letter_link, follow_up, submit_application, phone_screen, technical_interview, on_site, take_home, interview_follow_up } = res.locals.response[0];
  console.log('updateJobStatus res', res.locals.response);
  let newStatus = status;
  console.log('Status before', status);
  console.log('newStatus before', newStatus);
  switch(status) {
    case 'interested':
      if (reach_out || resume_link || cover_letter_link || follow_up) newStatus = 'inProgress';
      break;
    case 'inProgress':
      if (submit_application) newStatus = 'completed';
      break;
    case 'completed':
      if (phone_screen || technical_interview || on_site || take_home) newStatus = 'interview';
      break;
    default:
      break;
  };
  console.log('Status after', status);
  console.log('newStatus after', newStatus);
  if (newStatus !== status) {
    const updateStatusQuery = `UPDATE Jobs SET status='${newStatus}' WHERE job_id = ${job_id} RETURNING *`;

    try {
      const updatedStatus = await db.query(updateStatusQuery);
      res.locals.response = updatedStatus.rows;
      console.log('res locals in updateJobStatus', res.locals.response);
      return next();
    } catch (error) {
      console.log(error.stack);
      return next(error);
    }
  } else return next();
};

// middleware to delete an existing job based on job_id
jobsController.deleteJob = async (req, res, next) => {
  const job_id = [ req.params.job_id ];
  const deleteJobQuery = `DELETE FROM Jobs WHERE Jobs.job_id = $1`;

  try {
    await db.query(deleteJobQuery, job_id);
    res.locals.response = `Deleted job ${req.params.job_id}`;
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

module.exports = jobsController;