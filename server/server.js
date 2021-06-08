const express = require('express');
const path = require('path');
const PORT = 3333;
const app = express();
const passport = require("passport");
const keys = require("./config/keys");
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/authRoutes.js');


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  }))

  //initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth' , authRoutes)

// require routers
const userRouter = require('./routes/userRouter.js');
const jobsRouter = require('./routes/jobsRouter.js');
const achievementsRouter = require('./routes/achievementsRouter.js');

// parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use('/build', express.static(path.join(__dirname, '../build')));

// serve main app
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

// route handler for all user requests
app.use('/user', userRouter);

// route handler for all jobs requests
app.use('/jobs', jobsRouter);

// route handler for all achievements requests
app.use('/achievements', achievementsRouter);

// endpoint not found
app.use((req, res) => {
    res.sendStatus(404);
  });

// global middleware error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    res.locals.message = errorObj.message;
    return res.status(errorObj.status).json(res.locals.message);
  });

app.listen(PORT, () => {console.log(`Server is up and listening on port ${PORT}.`)});

module.exports = app;