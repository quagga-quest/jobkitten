const userController = {};

userController.updateUser = async (req, res) => {
  // fill these in once we have a better sense of what we need
  const updatingUser = [];
  const updateUserQuery = '';

  // will need logic here to figure out which attribute is being updated
  // likely putting existing fields in req.params, with new values in req.body

  try {
    await db.query(updateUserQuery, updatingUser);
    // the below should likely be the new version of the job that's been updated
    res.locals.response = await db.query();
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};


userController.verifyUser = async (req, res) => {

  
}

module.exports = userController;